@extends('partials.admin.masterdetail')

    @section('masterdetail')
   		 <script type="text/javascript" src={{asset("/assets/scripts/modules/documentdefs/doctypes.js")}}></script>
    @endsection
    
    @push('title')
		{{trans('doctype.title')}}
	@endpush
	

	@push('description')
		{{trans('doctype.description')}}
	@endpush
	

    @php
	    // taburi
        $subtabs = [
                (object)['caption'=>'Document type'],  
                (object)['caption'=>'Document serial numbers'],  
                
                ]
    @endphp

	@push('detail')

		<input id="DocumentTypeId" name= "DocumentTypeId" hidden>
		<div class="form-row">
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-2">
                <div class="position-relative form-group"><label for="code">Code</label><input name="Code" id="Code"  type="text" class="form-control" required></div>
            </div>
            <div class="col-md-2">
                <div class="position-relative form-group"><label for="category">category</label><input name="Category" id="Category" type="text" class="form-control" required></div>
            </div>
        </div>

	@endpush

    @push('afterdetail')

        <div class="row mol-tab noactive" id="detail-1">
            <div class="form-row col-sm-12 col-lg-12">

                <div id="serials">
                </div>

            </div>

        </div>
        
    @endpush						
