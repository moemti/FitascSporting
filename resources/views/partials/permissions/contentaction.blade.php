@extends('partials.admin.masterdetail')




@section('masterdetail')
	@parent
  	<script type="text/javascript" src={{asset("/assets/scripts/modules/permissions/actions.js")}}></script>
@endsection




    @push('detail')


    <input hidden name='ActionId' id="ActionId" value="">



    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="number">Permission name</label><input required  name="Name" id="Name" placeholder="" type="text" class="form-control" ></div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-6">
            <div class="position-relative form-group"><label for="Code">Code</label><input required name="Code" id="Code" placeholder="" type="text" class="form-control" ></div>
        </div>
    </div>


    @endpush

