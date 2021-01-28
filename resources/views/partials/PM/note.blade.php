@extends('partials.admin.masterdetail')


    <script>

    //  variabile pentru jqxGriduri
    var data =  @JSON($masterlist);
    

    </script>
    
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/PM/note.js")}}></script>
    
	@push('title')
		{{trans('pm.notetitle')}}
	@endpush
	

	@push('description')
		{{trans('pm.notedescription')}}
	@endpush
	
    @push('detail')
		<input id="NoteId" name= "NoteId" hidden class="tosave">
		
		
				
		<div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Title">Title</label>
                <input name="Title" id="Title" placeholder="" type="text" class="form-control tosave" ></div>
            </div>
        </div>

        <div class="form-row">
            <div class="col-md-10">
                <div class="position-relative form-group"><label for="Tags">Tags</label>
                <input name="Tags" id="Tags" placeholder="" type="text" class="form-control tosave" ></div>
            </div>

        <div class="col-md-2">
            <div class="position-relative form-group"><label for="IsLink">Is link</label><input name="IsLink" id="IsLink"type="checkbox" class="form-control" ></div>
        </div>


        </div>
        <div class="form-row">   
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Text">Text</label>
                <textarea name="Text" id="Text" rows=10" type="text" class="form-control  tosave" required ></textarea></div>
            </div>
        </div>


@endpush