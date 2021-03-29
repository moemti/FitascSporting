@extends('partials.admin.masterdetail')



    
    <script>


    var dataroles =  @JSON($roles);
    var dataparams = @JSON($params);


    


    </script>
    
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/users/person.js")}}></script>
    <script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxcalendar.js")}}></script>
	<script type="text/javascript" src={{asset("/assets/plugins/jqwidgets/jqxdatetimeinput.js")}}></script>
    
	@push('title')
		{{trans('user.persontitle')}}
	@endpush
	

	@push('description')
		{{trans('user.persondescription')}}
	@endpush
    
    @php
	    // taburi
        $subtabs = [
                (object)['caption'=>'Definire'],  
                (object)['caption'=>'Parametri'],  
                
                ]
    @endphp

	@push('detail')
		<input id="PersonId" name= "PersonId" hidden>
		
		<div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" placeholder="" type="text" class="form-control" required></div>
            </div>
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="code">Email</label><input name="Email" id="Email" placeholder="" type="email" class="form-control" required></div>
            </div>
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="NickName">Nick Name</label><input name="NickName" id="NickName" placeholder="" type="text" class="form-control"></div>
            </div>

        
            
        </div>
      
	@endpush

    @push('afterdetail')

    <div class="row mol-tab noactive" id="detail-1">
        <div class="form-row col-sm-12 col-lg-12">

            <div id="params">
            </div>

        </div>

    </div>

    @endpush			    			

