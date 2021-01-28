<?php

namespace App\Models\ClientDocs;

use Exception;
use Illuminate\Support\Facades\DB;

use App\Models\ClientDocs\PDF_Invoice;
use App\Models\Dictionaries\Partner;
use App\Models\Dictionaries\Dictionary;

class ClientInvoice {

    public static $TipDoc = 8;


    const MasterFields = 
        ['DocumentId', 'DocumentDate', 'DocumentNumber', 'DocumentStateId', 'PartnerId', 'Description',
		'TotalValue','BaseValue','VATValue', 'LocationId', 'CurrentDocumentVersionId',
		'ProcDiscInvoice', 'DiscValue', 'IsDiscInvoiceInPrice', 'IsDiscInPrice', 'HasDiscountDocuments', 
		'EUTypeId', 'PaymentTerm', 'CurrencyId', 'ExRate', 'Comment',
        'SerialNumberId', 'SalesRepId', 'DeliveryRepId', 'DeliveryDate', 'State'];
   

    const FilterSource=[
        ['label'=> 'Document date', 'value'=> 'd.DocumentDate', 'type'=> 'Date' ],
        ['label'=> 'Document number', 'value'=> 'd.DocumentNumber', 'type'=> 'integer' ],
        ['label'=> 'Partner', 'value'=> 'p.Name', 'type'=> 'string' ],
        ['label'=> 'State', 'value'=> 'ds.Name', 'type'=> 'string' ],
        ['label'=> 'Valoare', 'value'=> 'i.TotalValue', 'type'=> 'number' ],
    ];

    const CustomFilters=[
        ['Caption'=> 'Created', 'Filter'=> 'ds.name = "Created"', 'Label'=>'C', 'Warning' => '' ],
        ['Caption'=> 'All documents !!!',  'Filter'=> '1=1', 'Label'=>'All', 'Warning' => 'Doriti sa aduceti toate documentele !?!' ],
        ['Caption'=> 'Last 40 days',  'Filter'=> 'd.DocumentDate > CURDATE() - 40', 'Label'=>'< 40 d', 'Warning' => ''  ]
    ];

   const DefaultMasterValues = ['TotalValue'=>0,'BaseValue'=>0,'VATValue'=>0, 'ProcDiscInvoice'=>0, 'DiscValue'=>0, 'CurrencyId'=>1, 'ExRate'=>1, 'DocumentDate'=>"date()"];
   

   const DefaultDetailValues = ['ProcDisc'=>0, 'Qtty'=>1];


    public static function getList($PersonId, $OrganizationId, $filter){

        if ($filter != ''){

            $filter = str_replace('state=','ds.name = ', $filter);

            $filter = " and ".$filter;
        }


        $sql = "SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner
                FROM `document` d
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join organization p on p.OrganizationId = d.PartnerId
                inner join invoice i on i.DocumentId = d.DocumentId
                where d.DocumentTypeId = ".static::$TipDoc." and  d.OrganizationId = {$OrganizationId} {$filter} order by d.DocumentNumber" ;

        return  DB::select($sql);
    }

    public static function getdocument($DocumentId){
        $sql = "SELECT d.DocumentDate, d.DocumentId, d.DocumentNumber, ds.Name as State , dt.Name as Type, p.Name as Partner, d.PartnerId,
                d.Description, v.Version, d.DocumentStateId, d.DocumentTypeId,
                `ProcDiscInvoice`, `DiscValue`, `VATValue`, `BaseValue`, `TotalValue`, `IsDiscInvoiceInPrice`, `IsDiscInPrice`, `HasDiscountDocuments`, 
                `EUTypeId`, `PaymentTerm`, `CurrencyId`, `ExRate`,
                `SerialNumberId`, `SalesRepId`, `DeliveryRepId`, `DeliveryDate`

                FROM `document` d
                left join invoice i on i.DocumentId = d.DocumentId
                left join invoiceout io on io.DocumentId = d.DocumentId
                inner join documentstate ds on ds.DocumentStateId = d.documentstateid
                inner join documenttype dt on dt.DocumentTypeId = d.DocumentTypeId
                inner join documentversion v on v.documentversionid = d.CurrentDocumentVersionId
                inner join organization p on p.OrganizationId = d.PartnerId
                where d.DocumentId = {$DocumentId}";

        return  DB::select($sql);
    }

    public static function getdocumentCount($OrganizationId){
        $sql = "SELECT count(d.DocumentId) as Count, ds.Name as State
                FROM  documentstate ds
                inner join documenttype dt on ds.DocumentTypeId = dt.DocumentTypeId
                left join document d on ds.DocumentStateId = d.DocumentStateid
                where ds.DocumentTypeId = ".static::$TipDoc." and dt.OrganizationId = {$OrganizationId}
                group by ds.Name ";

        return  DB::select($sql);
    }


    public static function deleteInvoice($DocumentId){


        try {
            DB::beginTransaction();

            $sql = "delete from invoiceout where DocumentId = {$DocumentId}";
            DB::select($sql);

            $sql = "delete from invoice where DocumentId = {$DocumentId}";
            DB::select($sql);

            $sql = "delete from document where DocumentId = {$DocumentId}";
            DB::select($sql);

            DB::Commit();

        } catch (\Throwable $th) {
            DB::Rollback();
            throw $th;
        }

    }


    public static function getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $valfields, $isarray = false, $isinsert = false, $nullvalue = null ) {

        $val  = [];
        $val2 = [];
        $val3 = [];
        

        $val = explode(',', $valfields);

        foreach($val as $v){
            $v=  str_replace(array('`', ' ', "\n", "\t", "\r"), '', $v);
            array_push( $val2,$v);
        }

        foreach($val2 as $v){
        
            $pos = strpos ($v, ';d');
            if  ($pos !== false){
                $v = str_replace(';d', '', $v);
                if ($fields->$v != '')
                    $v =  date( 'ymd', strtotime($fields->$v));

            } else{
                $pos = strpos ($v, ';s');
                if  ($pos !== false){
                    $v = str_replace(';s', '', $v);
                    if ($fields->$v != '')
                        $v = "'".$fields->$v."'";
                    //    $v = $fields->$v;

                }else{
                    if ($fields->$v != '')
                        $v = $fields->$v;
                }
            }

            
            if ($v=='DocumentTypeId')
                $v = static::$TipDoc;
            if ($v=='PersonId')
                $v = $PersonId;
            if ($v=='OrganizationId')
                $v = $OrganizationId;
            if ($v=='LocationId')
                $v = $LocationId;

            if ($v == null)
                $v = $nullvalue;

            if (in_array ($v , static::MasterFields))
                $v =  $nullvalue;


            array_push( $val3, $v);    
            
        }

        if ($isarray)
            return $val3;
        else{
            

            if ($isinsert){
                return implode (" , ", $val3);
            }
            else{
                $sql = [];
                foreach($val as $key=>$v){
                    array_push($sql , str_replace(array('`', ' ', "\n", "\t", "\r", ';d', ';s'), '', $v) . " = " . $val3[$key]);
                };


                return implode (" , ", $sql);
            }
        }

    }


    public static function updateinsertdocument($fields , $PersonId, $OrganizationId, $LocationId){

        $DocumentId = $fields->DocumentId;
       
        if (!isset($DocumentId)){
              $valinsertdoc = "`DocumentDate`;d, `DocumentNumber`, `DocumentTypeId`, `Description`,  `OrganizationId`, `PartnerId`, PersonId, Comment, LocationId";
   
              $invoiceFields = "`ProcDiscInvoice`, `DiscValue`, `VATValue`, `BaseValue`, `TotalValue`, `IsDiscInvoiceInPrice`, 
                                    `IsDiscInPrice`, `HasDiscountDocuments`, `EUTypeId`, `PaymentTerm`, `CurrencyId`, `ExRate`";

               $invoicesql = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $invoiceFields, false, true,'null'); 
                

               $invoiceOutFields = " `SerialNumberId`, `SalesRepId`, `DeliveryRepId`, `DeliveryDate`;d";


               $invoiceoutsql = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $invoiceOutFields, false, true, 'null'); 


               try{

                    DB::beginTransaction();
                    
                    
                    $sql = "call insertDocument(?,?,?,?,?,?,?,?,?)";

                    $values = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $valinsertdoc, true);   

                    $DocumentId = DB::select($sql, $values)[0]->DocumentId;
                    

                    
                    $sql = "insert into invoice(`DocumentId`, `ProcDiscInvoice`, `DiscValue`, `VATValue`, `BaseValue`, `TotalValue`, `IsDiscInvoiceInPrice`, 
                                            `IsDiscInPrice`, `HasDiscountDocuments`, `EUTypeId`, `PaymentTerm`, `CurrencyId`, `ExRate`) 
                        VALUES ({$DocumentId}, {$invoicesql})";

                    DB::select($sql);

                    $sql = "insert into invoiceout(`DocumentId`, `SerialNumberId`, `SalesRepId`, `DeliveryRepId`, `DeliveryDate`) 
                                VALUES ({$DocumentId}, {$invoiceoutsql})";

                    DB::select($sql);

                    self::updateDetails($fields->delta, $DocumentId);

                    DB::commit();
                }
                catch(\Exception $e){
                    DB::rollBack();
                    throw $e;
                }


        }
        else{
            try{
                $sql = "call updateDocument(?,?,?,?,?,?,?,?,?,?,?)";

              
                $updateFields = "
                DocumentId			
                ,DocumentDate;d		
                ,DocumentNumber
                ,DocumentStateId			
                ,DocumentTypeId			
                ,Description		
                ,OrganizationId			
                ,PartnerId			
                ,PersonId";

                $updatevalues = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $updateFields, true, 'null');   

                $invoiceFields = "`DocumentId`, `ProcDiscInvoice`, `DiscValue`, `VATValue`, `BaseValue`, `TotalValue`, `IsDiscInvoiceInPrice`, 
                        `IsDiscInPrice`, `HasDiscountDocuments`, `EUTypeId`, `PaymentTerm`, `CurrencyId`, `ExRate`";

                $invoicesql = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $invoiceFields, false, false,'null'); 
                

                $invoiceOutFields = "`DocumentId`, `SerialNumberId`, `SalesRepId`, `DeliveryRepId`, `DeliveryDate`;d";


                $invoiceoutsql = self::getFieldValues($fields , $PersonId, $OrganizationId, $LocationId, $invoiceOutFields, false, false,'null'); 

                DB::beginTransaction();



                DB::select($sql,  array_merge($updatevalues,[ null, 0 ]));

                DB::select("update invoice set {$invoicesql} where DocumentId = {$DocumentId}");

                DB::select("update invoiceout set {$invoiceoutsql} where DocumentId = {$DocumentId}");

               
                self::updateDetails($fields->delta, $DocumentId);


                DB::commit();
            }
            catch(\Exception $e){
                DB::rollBack();
                throw $e;
            }
        }
      

        return self::getdocument($DocumentId);

    }


    public static function DevalidateInvoice($DocumentId, $OrganizationId){
        $StateCode = 'Created';
        $DocumentTypeId = static::$TipDoc;

        $DocumentStateId = Dictionary::getDocumentState($OrganizationId, $DocumentTypeId, $StateCode);

        try{

            
            DB::beginTransaction();

            $sql = "update document set DocumentStateId = {$DocumentStateId}
                    where DocumentId = {$DocumentId}";

            DB::select($sql);       

            DB::commit();
        }
        catch(\Exception $e){
            DB::rollBack();
            throw $e;
        }
        return self::getdocument($DocumentId);    
    }
    
    public static function ValidateInvoice($DocumentId, $OrganizationId, $SerialId, $Serial){

        $StateCode = 'Validated';
        $DocumentTypeId = static::$TipDoc;

        $DocumentStateId = Dictionary::getDocumentState($OrganizationId, $DocumentTypeId, $StateCode);

        try{

  
            DB::beginTransaction();

            $NrFormat = DB::select("select DocumentNumber from document where DocumentId = {$DocumentId}")[0]->DocumentNumber;
            
            if (empty($NrFormat)){

                $sql = "select LastNumber + 1 as Nr, Format from serials where SerialId = {$SerialId} for update";

                $Numar = DB::select($sql)[0];
                $Nr = $Numar->Nr;
                $Format = $Numar->Format;

                DB::select("update serials set LastNumber = {$Nr} where SerialId = {$SerialId}");
                
                if ($Serial != "")
                    $Serial = $Serial.' ';

                $NrFormat = sprintf($Serial.$Format, $Nr);
            }

            $sql = "update document set DocumentStateId = {$DocumentStateId}, DocumentNumber = '{$NrFormat}'
                    where DocumentId = {$DocumentId}";

            DB::select($sql);       

            DB::commit();
        }
        catch(\Exception $e){
            DB::rollBack();
            throw $e;
        }
        return self::getdocument($DocumentId);
    }

    public static function deleteDetail($DocumentDetailId){
        $sql = "delete from invoicedetail where DocumentDetailId = {$DocumentDetailId}";
        DB::select($sql);

        $sql = "delete from documentdetail where DocumentDetailId = {$DocumentDetailId}";
        DB::select($sql);
    }

    public static function updateDetail($detail ){

        $DocumentDetailId = $detail->DocumentDetailId;

        $detailFields = "`DocumentId`, `ArticleId`, `Qtty`, `Description`;s, `Price`";
        $fieldvalues =  self::getFieldValues($detail, null, null, null, $detailFields, false, false, 'null'); 
        $updatesql = "update documentdetail set {$fieldvalues} where DocumentDetailId = {$DocumentDetailId}";

        DB::select($updatesql);
        
        $detailFields = "`VATCodeId`, `ProcDisc`, `CurrencyId`, `ContractPrice`, `ContractExRate`, `BaseValue`, `VATValue`, `TotalValue`";
        $fieldvalues =  self::getFieldValues($detail, null, null, null, $detailFields, false, false, 'null'); 
        $updatesql = "update invoicedetail set {$fieldvalues} where DocumentDetailId = {$DocumentDetailId}";
        
        DB::select($updatesql);
    }

    public static function insertDetail($detail, $DocumentId){
        $detailFields = " `ArticleId`, `Qtty`, `Description`;s, `Price`";
        $fieldvalues =  self::getFieldValues($detail, null, null, null, $detailFields, false, true, 'null'); 
        $insertsql = "INSERT INTO `documentdetail`(`DocumentId`, `ArticleId`, `Qtty`, `Description`, `Price`) values ({$DocumentId}, {$fieldvalues})";

        DB::select($insertsql);
        

        $DocumentDetailId = DB::select("select LAST_INSERT_ID() as DocumentDetailId")[0]->DocumentDetailId;
            

        $detailFields = "`VATCodeId`, `ProcDisc`, `CurrencyId`, `ContractPrice`, `ContractExRate`, `BaseValue`, `VATValue`, `TotalValue`";
        $fieldvalues =  self::getFieldValues($detail, null, null, null, $detailFields, false, true, 'null'); 
        $insertsql = "INSERT INTO `invoicedetail`(`DocumentDetailId`, `VATCodeId`, `ProcDisc`, `CurrencyId`, `ContractPrice`, `ContractExRate`, `BaseValue`, `VATValue`, `TotalValue`)  
                            values ({$DocumentDetailId}, {$fieldvalues})";
        
        DB::select($insertsql);
    }

     public static function updateDetails($delta, $DocumentId){

        if ($delta == [])
            return;

        foreach($delta as $s){
                
            $d = (object) ($s);
            switch ($d->Operation){
                case "D": self::deleteDetail($d->DocumentDetailId);
                    break;
                case "U": self::updateDetail($d);
                    break;
                case "I": self::insertDetail($d, $DocumentId);
                    break;    

            }
        }

    }


    public static function getInvoiceDetails($DocumentId){
        $sql = "select  d.DocumentDetailId, d.DocumentId, d.ArticleId, d.Qtty, d.Description, Price,
                i.VATCodeId, ProcDisc, ContractPrice, ContractExRate, BaseValue, VATValue, TotalValue, 
                a.name as Article, ed.Name as VATCode, ed.Value as VATProc, i.CurrencyId, c.Symbol
                from documentdetail d 
                inner join invoicedetail i on d.DocumentDetailId = i.DocumentDetailId
                inner join article a on a.ArticleId = d.ArticleId
                inner join elemdictionary ed on ed.ElemDictionaryId = i.VATCodeId
                left join currency c on c.CurrencyId = i.CurrencyId
                where d.DocumentId = {$DocumentId}";
        return  DB::select($sql);
    }     
    
    
    public static function printinvoice($DocumentId, $OrganizationId){


        $doc = self::getdocument($DocumentId)[0];
        $elemdoc = self::getInvoiceDetails($DocumentId);

        $P = Partner::getpartner($OrganizationId)[0];
        $FurnName = $P->Name;
        $FurnDescription = $P->InvoiceDescription;


        $pdf = new PDF_Invoice( 'P', 'mm', 'A4' );
        $pdf->AddPage();
        $pdf->AddHeader();
        $pdf->addSociete("Furnizor: {$FurnName}", $FurnDescription);

        $P = Partner::getpartner($doc->PartnerId)[0];
        $FurnName = $P->Name;
        $FurnDescription = $P->InvoiceDescription;

        $pdf->addCustomer("Cumparator:  {$FurnName}", $FurnDescription);

        if ($doc->State == 'Canceled')                        
            $pdf->addOverLabel( "Factura Anulata" );

        if ($doc->State == 'Created')                        
            $pdf->addOverLabel( "Factura draft" );
        
        $pdf->addNumberDate($doc->DocumentNumber,  $doc->DocumentDate,  $doc->PaymentTerm." zile");
        
        $curr = '';

        foreach($elemdoc as $e){
            if ($e->Symbol != 'RON'){
                $curr = $e->Symbol;
                $fx = $e->ContractExRate;
                break;
            }
        };


        if ($curr != ''){
            $pdf->addExchangeRate($curr , $fx);
        }

        $TVAIn = Dictionary::getConfiguration($OrganizationId, 'TipTVA', $doc->DocumentDate)->Value2;

        $VatProc = "";
        $Disc = $doc->ProcDiscInvoice;
        $DiffVat = false;


        foreach($elemdoc as $key=>$e){
            if ($key == 0){
                $VatProc = $e->VATProc;
                $Disc = $e->ProcDisc;
            }
            else{
                $Disc = $Disc + $e->ProcDisc;
                $DiffVat = $DiffVat || ($VatProc != $e->VATProc);

                
            }
        };

        $VatProc = "";
        if (! $DiffVat )
            $VatProc = $elemdoc[0]->VATProc.'%';

        if ($VatProc.$TVAIn != "")    
            $pdf->addTVAInfo($VatProc , $TVAIn);


        $header = array( "Nr."    => 6,
                        "Articol"      => 70,
                        "U.M."         => 10,
                        "Cant"    => 12,
                        "Pret"  => 18);

        if ($Disc > 0) {
            $header += ["Disc(%)" => 12 ];
        }
        

        $header += [ "Valoare" => 25 ];

        if ($DiffVat)
            $header += ["TVA(%)" => 12];

        $header += [ "Val TVA"      => 25 ];


        if (!($Disc > 0)) {
            $header["Pret"]  = $header["Pret"] + 4;
            $header["Valoare"]  = $header["Valoare"] + 4;
            $header["Val TVA"]  = $header["Val TVA"] + 4;
        }

        if (!$DiffVat){
            $header["Pret"]  = $header["Pret"] + 4;
            $header["Valoare"]  = $header["Valoare"] + 4;
            $header["Val TVA"]  = $header["Val TVA"] + 4;
        };


        $pdf->addCols( $header);

        $cols=array(   "Nr."  => "C",
                        "Articol"   => "L", 
                        "U.M."    => "C",   
                        "Cant" => "R",
                        "Pret"=> "R");
        if ($Disc > 0) 
            $cols += ["Disc(%)" => "C" ];

        $cols += [ "Valoare" => "R" ];

        if ($DiffVat)
            $cols += ["TVA(%)" => "C"];

        $cols += [ "Val TVA" => "R" ];
              
        $pdf->addLineFormat( $cols);
        
        
        $y    = 103;

        $elem = self::getInvoiceDetails($DocumentId);

        $c = 0;
        foreach($elem as $e){
                $c++;
                $line = array("Nr."  => $c,
                    "Articol"  => $e->Article . " ".$e->Description,
                    "U.M."    => "BUC",   
                    "Cant" => number_format ($e->Qtty , 0 ,  "." , $thousands_sep = " " ),
                    "Pret"=> number_format ($e->Price , 2 ,  "." , $thousands_sep = " " ));


                if ($Disc > 0) {
                    $pdisctotal = $e->ProcDisc + (100 - $e->ProcDisc) * $doc->ProcDiscInvoice/100.0;
                    $line += ["Disc(%)"  => number_format ($pdisctotal , 0 ,  "" , $thousands_sep = "" )];
                }
                    
                $line += ["Valoare"    =>number_format ( $e->BaseValue , 2 ,  "." , $thousands_sep = " " )];

                if ($DiffVat)
                    $line += ["TVA(%)"  => number_format ($e->VATProc , 0 ,  "" , $thousands_sep = "" )];


                $line += ["Val TVA"   => number_format ( $e->VATValue , 2 ,  "." , $thousands_sep = " " )];

                $size = $pdf->addLine( $y, $line );
                $y   += $size + 2;
        }
           
        $pdf->addFinalLine();
        $pdf->addFooterNote("Factura emisa de: Emil Tiberius Moldovan, CNP: 1720903264426, CI: RK 381299");
        $pdf->addFooterNote("Va multumim!", "B");
 
        $pdf->addLastNotes("Factura circula fara semnatura si stampila conform legii 227/2015 privind Codul Fiscal, Art.319(29)");


        $Baza =number_format ($doc->BaseValue , 2 ,  "." , $thousands_sep = " " );
        $TVA = number_format ($doc->VATValue , 2 ,  "." , $thousands_sep = " " );
        $Total = number_format ($doc->TotalValue , 2 ,  "." , $thousands_sep = " " );
      //  $pdf->addTVAs( $params, $tab_tva, $tot_prods);
        $pdf->addTotaluri($Baza, $TVA, $Total);
        


      //  return $fpdf->Output();

    
        $response = response($pdf->Output('S'));
        $response->header('Content-Type', 'application/pdf');
        $response->header('Content-Disposition', 'inline; filename="output.pdf"');
        $response->header('Cache-Control:', 'private, max-age=0, must-revalidate');

        return $response;
    }
    
}
