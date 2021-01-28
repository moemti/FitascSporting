@extends('partials.admin.masterdetail')


    
@section('masterdetail')   
    @parent
    <script>

        var data =  @JSON($docflows);
        var types = @JSON($doctypes);
        var states = @JSON($docstates);
        
        
        

    </script>

    <script type="text/javascript" src={{asset("/assets/scripts/modules/documentdefs/docflow.js")}}></script>
@endsection    
	
	@push('title')
		{{trans('docflow.title')}}
	@endpush
	

	@push('description')
		{{trans('docflow.description')}}
	@endpush
	
	@push('detail')
		 <input id="DocumentFlowId" name= "DocumentFlowId" hidden>
		<div class="form-row">
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="name">Name</label><input name="name" id="Name" placeholder="Name" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-2">
                <div class="position-relative form-group"><label for="code">Code</label><input name="code" id="Code" placeholder="Code" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-7">
    			<label for="ActionId">Permission action</label>
                <select name="actionid" id="ActionId" placeholder="actionid" type="text" class="form-control"  >
             	 	<option value=""></option>
                     @foreach($actions as $t) 
                            <option value="{{$t->ActionId}}">{{$t->Name}}</option>
                     @endforeach  
                 </select>
            </div>


        </div>
		<div class="form-row form-group">
			
            <div class="col-md-12">
    			<label for="documenttype">Document type</label>
                <select name="documenttype" id="DocumentTypeId" placeholder="" type="text" class="form-control"  required>
             	 	<option value=""></option>
                     @foreach($doctypes as $t) 
                            <option value="{{$t->DocumentTypeId}}">{{$t->Name}}</option>
                     @endforeach  
                 </select>
            </div>
        </div>
        <div class="form-row form-group">    
            <div class="col-md-12">
             	<label for="initialdocumentstate">Initial document state</label>
                <select name="initialdocumentstate" id="InitialDocumentStateId" placeholder="" type="text" class="form-control"  required>
             	 	<option value=""></option>
                      
                 </select>
            </div>
        </div>
        <div class="form-row form-group">    
            
            <div class="col-md-12">
             	<label for="finaldocumentstate">Final document state</label>
                <select name="finaldocumentstate" id="FinalDocumentStateId" placeholder="" type="text" class="form-control"  required>
             	 	<option value=""></option>
                    
                 </select>
            </div>
        </div>
        <div class="form-row form-group">    
            <div class="col-md-12">
             	<label for="nextdocumenttype">Next document type</label>
                <select name="nextdocumenttype" id="NextDocumentTypeId" placeholder="" type="text" class="form-control"  >
             	 	<option value=""></option>
                     @foreach($doctypes as $t) 
                            <option value="{{$t->DocumentTypeId}}"   >{{$t->Name}}</option>
                     @endforeach  
                 </select>
            </div>
        </div>
            

        
	
	@endpush

