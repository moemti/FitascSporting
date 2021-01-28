@extends('partials.admin.masterdetail')



@section('masterdetail')   
    @parent

    <script type="text/javascript" src={{asset("/assets/scripts/modules/users/user.js")}}></script>

@endsection

	@push('title')
		{{trans('user.usertitle')}}
	@endpush


	@push('description')
		{{trans('user.userdescription')}}
	@endpush

	@push('detail')

		<div class="form-row">
			<div class="col-md-12">
                <div class="position-relative form-group"><label for="personid">Person</label>
                    <select name="PersonId" id="PersonId" class="form-control"  >
                    <option value=""></option>
                        @foreach($persons as $r)
                            <option value="{{$r->PersonId}}">{{$r->Name}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="UserName">User Name</label>
                <input name="UserName" id="UserName" type="text" class=" form-control" required></div>
            </div> 
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Password">Password</label>
                    <input name="Password" id="Password"  type="password" class="form-control" required>
                </div>
            </div>
            <div class="col-md-2">
          
                <div class="position-relative form-group"><label for="IsSuperUser">Super user</label>
                    <input name="IsSuperUser" id="IsSuperUser"  type="checkbox" class="form-control" ></div>
            </div>
        </div>
       



	@endpush

