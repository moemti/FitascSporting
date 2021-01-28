@extends('partials.admin.masterdetail')




      
@section('masterdetail')   
    @parent
    <script>

        var permissions = @JSON($permissions);
        
    </script>
        
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/users/roles.js")}}></script>
    @endsection    
	
	
	@push('title')
		{{trans('user.roletitle')}}
	@endpush
	

	@push('description')
		{{trans('user.roledescription')}}
	@endpush
	
	@push('detail')
		<input id="RoleId" name= "RoleId" hidden>
		<div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" placeholder="" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="code">Code</label><input name="Code" id="Code" placeholder="" type="text" class="form-control" required></div>
            </div>
        </div>
	@endpush

