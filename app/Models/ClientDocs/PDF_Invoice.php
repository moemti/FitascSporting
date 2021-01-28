<?php
namespace App\Models\ClientDocs;


use App\Classes\FPDF\FPDF;



class PDF_Invoice extends FPDF
{
// private variables
var $colonnes;
var $format;
var $angle=0;
var $nrLastNotes = 0;
var $nrFooterNotes = 0;

// private functions
function AddHeader(){
    $this->Image(url('/assets/images/avatars/InvoiceHeader.png'),10,10,100);

    $x1 = $this->w/2 + 35;;
    $y1 = 20;
    $text = "Factura";
    //Positionnement en bas
    $this->SetXY( $x1, $y1 );
    $this->SetFont('Times','B',16);
    $length = $this->GetStringWidth($text);
    $this->Cell( $length, 2, $text);
}

function RoundedRect($x, $y, $w, $h, $r, $style = '')
{
    $k = $this->k;
    $hp = $this->h;
    if($style=='F')
        $op='f';
    elseif($style=='FD' || $style=='DF')
        $op='B';
    else
        $op='S';
    $MyArc = 4/3 * (sqrt(2) - 1);
    $this->_out(sprintf('%.2F %.2F m',($x+$r)*$k,($hp-$y)*$k ));
    $xc = $x+$w-$r ;
    $yc = $y+$r;
    $this->_out(sprintf('%.2F %.2F l', $xc*$k,($hp-$y)*$k ));

    $this->_Arc($xc + $r*$MyArc, $yc - $r, $xc + $r, $yc - $r*$MyArc, $xc + $r, $yc);
    $xc = $x+$w-$r ;
    $yc = $y+$h-$r;
    $this->_out(sprintf('%.2F %.2F l',($x+$w)*$k,($hp-$yc)*$k));
    $this->_Arc($xc + $r, $yc + $r*$MyArc, $xc + $r*$MyArc, $yc + $r, $xc, $yc + $r);
    $xc = $x+$r ;
    $yc = $y+$h-$r;
    $this->_out(sprintf('%.2F %.2F l',$xc*$k,($hp-($y+$h))*$k));
    $this->_Arc($xc - $r*$MyArc, $yc + $r, $xc - $r, $yc + $r*$MyArc, $xc - $r, $yc);
    $xc = $x+$r ;
    $yc = $y+$r;
    $this->_out(sprintf('%.2F %.2F l',($x)*$k,($hp-$yc)*$k ));
    $this->_Arc($xc - $r, $yc - $r*$MyArc, $xc - $r*$MyArc, $yc - $r, $xc, $yc - $r);
    $this->_out($op);
}

function _Arc($x1, $y1, $x2, $y2, $x3, $y3)
{
    $h = $this->h;
    $this->_out(sprintf('%.2F %.2F %.2F %.2F %.2F %.2F c ', $x1*$this->k, ($h-$y1)*$this->k,
                        $x2*$this->k, ($h-$y2)*$this->k, $x3*$this->k, ($h-$y3)*$this->k));
}

function Rotate($angle, $x=-1, $y=-1)
{
    if($x==-1)
        $x=$this->x;
    if($y==-1)
        $y=$this->y;
    if($this->angle!=0)
        $this->_out('Q');
    $this->angle=$angle;
    if($angle!=0)
    {
        $angle*=M_PI/180;
        $c=cos($angle);
        $s=sin($angle);
        $cx=$x*$this->k;
        $cy=($this->h-$y)*$this->k;
        $this->_out(sprintf('q %.5F %.5F %.5F %.5F %.2F %.2F cm 1 0 0 1 %.2F %.2F cm',$c,$s,-$s,$c,$cx,$cy,-$cx,-$cy));
    }
}

function _endpage()
{
    if($this->angle!=0)
    {
        $this->angle=0;
        $this->_out('Q');
    }
    parent::_endpage();
}

// public functions
function sizeOfText( $texte, $largeur )
{
    $index    = 0;
    $nb_lines = 0;
    $loop     = TRUE;
    while ( $loop )
    {
        $pos = strpos($texte, "\n");
        if (!$pos)
        {
            $loop  = FALSE;
            $ligne = $texte;
        }
        else
        {
            $ligne  = substr( $texte, $index, $pos);
            $texte = substr( $texte, $pos+1 );
        }
        $length = floor( $this->GetStringWidth( $ligne ) );
        $res = 1 + floor( $length / $largeur) ;
        $nb_lines += $res;
    }
    return $nb_lines;
}

// Company
function addSociete( $nom, $adresse )
{
    $x1 = 10;
    $y1 = 33;
    //Positionnement en bas
    $this->SetXY( $x1, $y1 );
    $this->SetFont('Times','B',12);
    $length = $this->GetStringWidth( $nom );
    $this->Cell( $length, 2, $nom);
    $this->SetXY($x1, $y1 + 3 );
    $this->SetFont('Times','',10);
    $length = $this->GetStringWidth( $adresse );
    $this->MultiCell($length, 4, $adresse);
}

function addCustomer( $nom, $adresse )
{

    $r1  = $this->w /2 + 5;
    $r2  = $r1 + $this->w /2 - 15;
    $y1  = 30;
    $y2  = $y1 + 3;
    $mid = ($r1 + $r2 ) / 2;
    
    $texte  = $nom;
    $szfont =9;

    $this->SetFont( "Times", "B", $szfont );
   
    $this->SetLineWidth(0.1);
    $this->SetFillColor(230);
   // $this->RoundedRect($r1, $y1, ($r2 - $r1), $y2 + 5, 2.5, 'DF');
    $this->SetXY( $r1+2, $y1+2);

    $length = $this->GetStringWidth( $nom );
    $this->Cell($length,5, $texte, 0, 0, "C" );
    
    $this->SetXY($r1+1, $y1 + 7 );
    
    $this->SetFont('Times','',10);
    $length = $this->GetStringWidth( $adresse );
    
    $this->MultiCell($length, 4, $adresse);
}



function addNumberDate($Nr, $Date, $DueDays )
{
    $this->Line( 12, 70, $this->w -12, 70);
    $r1  = 12;
    $r2  = $r1 + 20;
    $y1  = 71;
    $y2  = $y1+16;

    $r2  = $r1 + 23;
    
   // $this->RoundedRect($r1 - 1, $y1, (60 ), ($y2-$y1), 2.5, 'D');
    $this->SetXY( $r1  , $y1+1 );
    $this->SetFont( "Times", "", 10);
    $this->Cell(10,4, "Numar: ", 0, 0, "L");
    $this->SetXY($r2 , $y1+1 );
    $this->SetFont( "Times", "B", 10);
    $this->Cell(10,4, $Nr, 0, 0, "L");

    $this->SetXY( $r1  , $y1 + 5 );
    $this->SetFont( "Times", "", 10);
    $this->Cell(10,5,"Data: ", 0,0, "L");
    $this->SetXY($r2, $y1+5 );
    $this->SetFont( "Times", "B", 10);
    $this->Cell(10,5, $Date, 0, 0, "L");

    $this->SetXY( $r1  , $y1 + 10 );
    $this->SetFont( "Times", "", 10);
    $this->Cell(10,5,"Termen plata: ", 0,0, "L");
    $this->SetXY( $r2 , $y1+10 );
    $this->SetFont( "Times", "B", 10);
    $this->Cell(10,5, $DueDays, 0, 0, "L");
 
}


function addExchangeRate($Ex, $ExRate)
{
    $this->SetFont( "Times", "", 8);
    $r1  = $this->w - 60;
    $r2  = $r1 + 20;
    $y1  = 71;
    $y2  = $y1;

    $this->SetXY( $r1 , $y1 );
    $this->Cell(40, 4, "Curs valutar ".$Ex, '', '', "C");

    $this->SetFont( "Times", "B", 8);
    $this->SetXY( $r2 , $y2 );
    $this->Cell(40, 4, $ExRate, '', '', "C");
}


function addTVAInfo($TVA, $TVAComment)
{
    $this->SetFont( "Times", "b", 8);
    $text = "Cota TVA : " . $TVA. " ".$TVAComment;
    $length = $this->GetStringWidth( $text );
    $r1  = $this->w - 55;
    $y1  = 85;
    $this->SetXY( $r1 , $y1 );
    $this->Cell($length, 4,  $text);
}

function addFinalLine(){
    $this->Line( 12, $this->h - 49.5, $this->w -12, $this->h - 49.5);

}

function addFooterNote($remarque,  $style = "")
{
    
    $nr = $this->nrFooterNotes;

    $this->SetFont( "Times", $style, 8);
    $length = $this->GetStringWidth( $remarque );
    $r1  = 10;
    $y1  = $this->h - 47.5 + $nr;
    
    $this->nrFooterNotes += 4;
    $this->SetXY( $r1 , $y1 );
    $this->Cell($length,4,  $remarque);
}

function addLastNotes($remarque, $style = "")
{
    $nr =  $this->nrLastNotes;
    $this->SetFont( "Times", $style, 7);
    $length = $this->GetStringWidth($remarque );
    $r1  = 10;
    $y1  = $this->h - 30 - $nr;
    
    $this->nrLastNotes += 4;
    $this->SetXY( $r1 , $y1 );
    $this->Cell($length,4,  $remarque);
}

function addCols( $tab )
{
    global $colonnes;
    $this->SetFont( "Times", "b", 8);
    $r1  = 10;
    $r2  = $this->w - ($r1 * 2) ;
    $y1  = 95;
    $y2  = $this->h - 50 - $y1;
    $this->SetXY( $r1, $y1 );
 //   $this->Rect( $r1, $y1, $r2, $y2, "D");
    $this->Line( $r1, $y1+6, $r1+$r2, $y1+6);
    $colX = $r1;
    $colonnes = $tab;
    foreach($tab as $lib => $pos)
    {
        $this->SetXY( $colX, $y1+2 );
        $this->Cell( $pos, 1, $lib, 0, 0, "C");
        $colX += $pos;
     //   $this->Line( $colX, $y1, $colX, $y1+$y2);
    }
}

function addLineFormat( $tab )
{
    global $format, $colonnes;
    
    foreach($colonnes as $lib =>$pos)
    {
        if ( isset( $tab["$lib"] ) )
            $format[ $lib ] = $tab["$lib"];
    }
}

function lineVert( $tab )
{
    
    global $colonnes;

    reset( $colonnes );
    $maxSize=0;
    foreach($colonnes as $lib => $pos)
    {
        $texte = $tab[ $lib ];
        $longCell  = $pos -2;
        $size = $this->sizeOfText( $texte, $longCell );
        if ($size > $maxSize)
            $maxSize = $size;
    }
    return $maxSize;
}

// add a line to the invoice/estimate
/*    $ligne = array( "REFERENCE"    => $prod["ref"],
                      "DESIGNATION"  => $libelle,
                      "QUANTITE"     => sprintf( "%.2F", $prod["qte"]) ,
                      "P.U. HT"      => sprintf( "%.2F", $prod["px_unit"]),
                      "MONTANT H.T." => sprintf ( "%.2F", $prod["qte"] * $prod["px_unit"]) ,
                      "TVA"          => $prod["tva"] );
*/
function addLine( $ligne, $tab )
{
    global $colonnes, $format;
    $this->SetFont( "Times", "", 8);

    $ordonnee     = 10;
    $maxSize      = $ligne;

    reset( $colonnes );
    foreach($colonnes as $lib => $pos)
    
    {
        $longCell  = $pos -2;
        $texte     = $tab[ $lib ];
        $length    = $this->GetStringWidth( $texte );
        $tailleTexte = $this->sizeOfText( $texte, $length );
        $formText  = $format[ $lib ];
        
        $this->SetXY(($formText == "R")?$ordonnee + 2:$ordonnee, $ligne-1);
        $this->MultiCell( $longCell, 4 , $texte, 0, $formText);
        if ( $maxSize < ($this->GetY()  ) )
            $maxSize = $this->GetY() ;
        $ordonnee += $pos;
    }
    return ( $maxSize - $ligne );
}



function addTotaluri($Baza, $TVA, $Total)
{
    $r1  = $this->w - 85;
    $r2  = $r1 + 75;
    $y1  = $this->h - 48;
    $y2  = $y1+20;
    $this->RoundedRect($r1, $y1, ($r2 - $r1), ($y2-$y1), 2.5, 'D');
    $this->Line( $r1+20,  $y1, $r1+20, $y1 + 6); // avant EUROS
    $this->Line( $r1, $y1+6, $r2, $y1+6); // Sous Euros & Francs
    $this->Line( $r1+48,  $y1, $r1+48, $y1 + 6); // Entre Euros & Francs
  
    $this->SetFont("Times", "B", 10);
    $this->SetXY( $r1+3, $y1+ 1 );
    $this->Cell(15,4, "Total", 0, 0, "C");

    $this->SetFont("Times", "B", 10);
    $this->SetXY( $r1+32, $y1 + 1 );
    $this->Cell(15,4, "$Baza", 0, 0, "R");
    

    $this->SetFont("Times", "B", 10);
    $this->SetXY( $r1+58, $y1 + 1 );
    $this->Cell(15,4, "$TVA", 0, 0, "R");
    
    
    $this->SetFont( "Times", "B", 12);
    $this->SetXY( $r1+3, $y1+ 10);
    $this->Cell(20,4, "Total plata", 0, 0, "C");


    
    $this->SetFont( "Times", "B", 14);
    $length = $this->GetStringWidth($Total);

    $this->SetXY( $this->w -$length - 12, $y1+ 10);
    $this->Cell($length,4, $Total, 0, 0, "R");

}



// add a watermark (temporary estimate, DUPLICATA...)
// call this method first
function addOverLabel($text )
{
    $this->SetFont('Arial','B',50);
    $this->SetTextColor(203,203,203);
    $this->Rotate(45,55,190);
    $this->Text(30,200,$text);
    $this->Rotate(0);
    $this->SetTextColor(0,0,0);
}

}
?>