@extends('partials.admin.masterdetail')





@section('masterdetail')
	@parent
  	<script type="text/javascript" src={{asset("/assets/scripts/modules/framework/documents.js")}}></script>
@endsection






	
	@push('detail')


		<input hidden name='DocumentId' id="DocumentId" value="">
		<input hidden name='CurrentDocumentVersionId' id="CurrentDocumentVersionId" value="">
        <input hidden name='DocumentStateId' id="DocumentStateId" value="">

		@stack('documentmaster')
        <div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Description">{{trans('general.description')}}</label><textarea name="Description" id="Description" placeholder="" class="form-control "></textarea></div>
            </div>
        </div>
	
	@endpush
   
