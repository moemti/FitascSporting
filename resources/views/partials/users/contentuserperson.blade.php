@extends('partials.admin.master')

    
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/users/userperson.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcalendar.js")}}></script>
	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdatetimeinput.js")}}></script>



    
	@push('title')
		{{trans('My profile')}}
	@endpush
	



	@push('detail')
		<input id="PersonId" name= "PersonId" hidden>
		
		<div class="form-row">

            <div class="col-md-4">
                <div class="position-relative form-group"><label for="Name">Name</label><input name="Name" id="Name" placeholder="" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="UserName">User name</label><input name="UserName" id="UserName" placeholder="" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="NickName">Nick Name</label><input name="NickName" id="NickName" placeholder="" type="text" class="form-control"></div>
            </div>
            <div class="col-md-8">
                <div class="position-relative form-group"><label for="Email">Email</label><input name="Email" id="Email" placeholder="" type="email" class="form-control" required></div>
            </div>
        </div>   


        <!-- <div class="form-row">
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="Password">Password</label><input name="Password" id="Password" placeholder="" type="password" class="form-control" required></div>
            </div>
        </div>
        <div class="form-row">   
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="Password2">Repeat password</label><input name="Password2" id="Password2" placeholder="" type="password" class="form-control"></div>
            </div>
         </div> -->
      
	@endpush

    @push('afterdetail')

    <div class="row mol-tab noactive" id="detail-1">
        <div class="form-row col-sm-12 col-lg-12">

            <div id="params">
            </div>

        </div>

    </div>

    @endpush			    			

