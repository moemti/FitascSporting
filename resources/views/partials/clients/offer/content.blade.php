@extends('partials.clients.content')


     
@push('title')    
	{{trans('clientoffer.title')}}
@endpush

     
@push('description')    
	{{trans('clientoffer.description')}}
@endpush		


 @push('documentscript') 
  	<script type="text/javascript" src={{asset("/assets/scripts/modules/clients/clientoffer.js")}}></script>
 @endpush		
 