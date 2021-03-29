@extends('partials.admin.masterdetail')

    <script type="text/javascript" src={{asset("/assets/scripts/modules/trainings/training25finance.js")}}></script>
    
	@push('title')
		{{trans('pm.training25financetitle')}}
	@endpush
	

	@push('Description')
		{{trans('pm.training25financeDescription')}}
	@endpush
    
    


	@push('detail')
        <input id="ClubTransactionId" name= "ClubTransactionId" hidden class="tosave">

        <input id="UserId" name= "UserId" hidden class="tosave">

     
        <div class="form-row">
		    <div class="col-md-4">
                 <label for="ColectorId">Colector</label>
                 <select name="ColectorId" id="ColectorId" class="form-control" disabled  >
                    <option value=""></option>
                        @foreach($colectors as $r)
                            <option value="{{$r->PersonId}}">{{$r->Name}}</option>
                        @endforeach
                    </select>
            </div>

            <div class="col-md-1">
                <div class="position-relative form-group"><label for="IsClay">Clay</label>
                <input name="IsClay" id="IsClay"  type="checkbox" class="form-control" onclick="return false;" ></div>
            </div>
        </div>

		
				
		<div class="form-row">
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="Date">Date</label>
                <input name="Date" id="Date" type="date" class="form-control tosave" required ></div>
            </div>
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="Price">Value</label>
                <input name="Price" id="Price" type="number" class="form-control tosave" required ></div>
            </div>
  

 
            <div class="col-md-1">
                <div class="position-relative form-group"><label for="IsPaid">Paid</label>
                <input name="IsPaid" id="IsPaid"  type="checkbox" class="form-control tosave"  ></div>
            </div>

      

            

            <div class="col-md-4">
                 <label for="PersonId">Peceived from </label>
                 <select name="PersonId" id="PersonId" class="form-control"  >
                    <option value=""></option>
                        @foreach($persons as $r)
                            <option value="{{$r->PersonId}}">{{$r->Name}}</option>
                        @endforeach
                    </select>
            </div>
            
         </div>
         
        <div class="form-row">   
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Description">Description</label>
                <textarea name="Description" id="Description" placeholder="Name" type="text" class="form-control  tosave"  ></textarea></div>
            </div>
        </div>
        
        
        <div class="form-row">
 
            <div class="col-md-1">
                <div class="position-relative form-group"><label for="IsValidat">Validated</label>
                <input name="IsValidat" id="IsValidat"  type="checkbox" class="form-control tosave"  ></div>
            </div>
    
            
        </div>
	@endpush

