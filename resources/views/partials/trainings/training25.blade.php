@extends('partials.admin.masterdetail')

    <script type="text/javascript" src={{asset("/assets/scripts/modules/trainings/training25.js")}}></script>
    
	@push('title')
		{{trans('pm.training25title')}}
	@endpush
	

	@push('Description')
		{{trans('pm.training25Description')}}
	@endpush
	
	@push('detail')
        <input id="ClubTransactionId" name= "ClubTransactionId" hidden class="tosave">

        <input id="UserId" name= "UserId" hidden class="tosave">

     
        <div class="form-row">
		    <div class="col-md-4">
                 <label for="PersonId">Person</label>
                 <select name="PersonId" id="PersonId" class="form-control" disabled  >
                    <option value=""></option>
                        @foreach($persons as $r)
                            <option value="{{$r->PersonId}}">{{$r->Name}}</option>
                        @endforeach
                    </select>
            </div>
        </div>
		
				
		<div class="form-row">
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="Date">Date</label>
                <input name="Date" id="Date" type="date" class="form-control tosave" required ></div>
            </div>
            <div class="col-md-1">
                <div class="position-relative form-group"><label for="Price">Price</label>
                <input name="Price" id="Price" type="number" class="form-control tosave" required disabled></div>
            </div>
            <div class="col-md-2">
                <div class="position-relative form-group"><label for="Qty">Quantity</label>
                <input name="Qty" id="Qty" type="datnumbere" class="form-control tosave" required ></div>
            </div>

 
            <div class="col-md-1">
                <div class="position-relative form-group"><label for="IsPaid">Paid</label>
                <input name="IsPaid" id="IsPaid"  type="checkbox" class="form-control tosave"  ></div>
            </div>

            <div class="col-md-1">
                <div class="position-relative form-group"><label for="IsPaid">Clay</label>
                <input name="IsClay" id="IsClay"  type="checkbox" class="form-control tosave"  ></div>
            </div>

            <div class="col-md-4">
                 <label for="ColectorId">Paid to</label>
                 <select name="ColectorId" id="ColectorId" class="form-control"  >
                    <option value=""></option>
                        @foreach($colectors as $r)
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

