<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;

use App\Models\Client\Client;
use App\Models\Document\Document;

use App\Models\ClientDocs\ClientOffer;



class ClientOfferController extends DocumentController
{

    public $ModelName = 'App\Models\ClientDocs\ClientOffer';

    public $views = ['documents'=>'clients/customeroffers'];



}
