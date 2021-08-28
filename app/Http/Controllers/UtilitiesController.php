<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use App\Models\Common\Utilities;
use App\Models\Common\Settings;




class UtilitiesController extends Controller
{

    public function exchangerates(Request $request){
        $this->downloadBNR($request);
        $Currencies = app(CommonDictionariesController::class)->getCurrencies();
        return view('utilities/exchangerates', ['currencies'=>$Currencies ]);
    }



    public function downloadBNR(Request $request){
        

            function getit($an){
                $url = "https://www.bnr.ro/files/xml/years/nbrfxrates".$an.".xml";
        
                $xmls = file_get_contents($url);
                try{
                    
                    if (@simplexml_load_string($xmls)) {
                        $xml = new \SimpleXMLElement($xmls);
                    }
                    else
                        return $an;
                }
                catch(Exception $e){
                    return $an;
                }
            
                
                foreach($xml->Body->Cube as $cube)
                {
                    foreach($cube->Rate as $line)
                    {
                        
                            Utilities::insertExchange($cube["date"], $line["currency"], $line, $line["multiplier"]);
                    }
                }

                return $an;
            }

        $time = time();

        $last = '';
        $imported = "";

        try {
            Utilities::BeginTran();
            $date = Settings::getAppSetting('LAST_FX_DATE')['value'];
            if (isset($date)){
                $date = \DateTime::createFromFormat('d/m/Y H:i:s', $date);
                $last = \DateTime::createFromFormat('Y-m-d', Utilities::getLastExchangeDate());
            }

            if (!isset($date)){
                //luam ultimii 4 ani
                $to =  \DateTime::createFromFormat("U", $time)->format('Y');
                $from = $to - 3;

                for( $i = $from; $i <= $to; $i++){
                    $imported .=' ;'. getit($i);
                }

            }
            else{
                
                if (($time -  $date->format('U') > 3600) && ($date->format('d/m/Y') != $last->format('d/m/Y') )){

                    $to =  \DateTime::createFromFormat("U", $time)->format('Y');
                    $from = $date->format('Y');;
        
                    for( $i = $from; $i <= $to; $i++){
                        $imported .=' ;'. getit($i);
                    }
                }

            }
            
            Settings::updateAppSetting('LAST_FX_DATE', \DateTime::createFromFormat("U", $time)->format('d/m/Y H:i:s'));
            Utilities::Commit();

        } catch (\Throwable $th) {
            Utilities::Rollback();
            throw $th;
        }    
        if ($imported == "")
            return 'Nu a fost necesar importul';
        else
                return 'S-au importat anii: '.$imported;
        
    }

    
    public function getExchangeRateAjax(Request $request){
        
        $CurrencyId = $request->CurrencyId;
        $StartDate = $request->StartDate;
        $EndDate = $request->EndDate;
        
        $fx = Utilities::getLastExchanges($CurrencyId, $StartDate, $EndDate);
        return view('partials/utilities/exchangeresultajax', ['fx'=>$fx]);
    }
    


}