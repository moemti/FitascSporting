@extends('partials.admin.masterdetail')



@section('masterdetail')
	<script type="text/javascript" src={{asset("/assets/scripts/modules/dictionaries/dictionary.js")}}></script>
@endsection


@push('detail')
    <input id="elemdictionaryid" name= "elemdictionaryid" hidden>
    <input id="dictionaryid" name= "dictionaryid" value ="{{$dictionaryid}}" hidden>
        <div class="form-row">
        <div class="col-md-3">
            <div class="position-relative form-group"><label for="name">Name</label><input name="name" id="name" placeholder="name" type="text" class="form-control" required></div>
        </div>
		<div class="col-md-2">
            <div class="position-relative form-group"><label for="code">Code</label><input name="code" id="code" placeholder="code" type="text" class="form-control" required></div>
        </div>
        <div class="col-md-2">
            <div class="position-relative form-group"><label for="isactive">Active</label><input name="isactive" id="isactive"type="checkbox" class="form-control" required></div>
        </div>
    </div>
    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="name">Description</label><textarea name="description" id="description" placeholder="description" type="text" class="form-control" required></textarea></div>
        </div>
    </div>
    
    <div class="form-row">
    	<div class="col-md-3">
            <div class="position-relative form-group">
            	<label for="parent">Parent</label>
            	<input id="parentid" name= "parentid" hidden>
            	<div id="dropDownButton">
          			<div style="border: none;" id='jqxTree'>
            	
            		</div>
            	</div>
      		</div>
    	</div>
    </div>
   

@endpush


<script>
    var data = @JSON($list);
</script>

