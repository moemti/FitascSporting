@extends('partials.admin.masterdetail')



    
    <script>


    var dataroles =  @JSON($roles);

    


    </script>
    
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/users/person.js")}}></script>
    
	@push('title')
		{{trans('user.persontitle')}}
	@endpush
	

	@push('description')
		{{trans('user.persondescription')}}
	@endpush
	
	@push('detail')
		<input id="PersonId" name= "PersonId" hidden>
		
		<div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" placeholder="Name" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="code">Email</label><input name="Email" id="Email" placeholder="email" type="email" class="form-control" required></div>
            </div>
        
            
        </div>
	@endpush

