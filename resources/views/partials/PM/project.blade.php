@extends('partials.admin.masterdetail')


    
    <script>

    //  variabile pentru jqxGriduri
    var data =  @JSON($masterlist);
    

    </script>
    
    
    <script type="text/javascript" src={{asset("/assets/scripts/modules/PM/project.js")}}></script>
    
	@push('title')
		{{trans('pm.projecttitle')}}
	@endpush
	

	@push('Description')
		{{trans('pm.projectDescription')}}
	@endpush
	
	@push('detail')
		<input id="ProjectId" name= "ProjectId" hidden class="tosave">
		
		
				
		<div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Name">Name</label>
                <input name="Name" id="Name" placeholder="" type="text" class="form-control tosave" required ></div>
            </div>
        </div>
         
        <div class="form-row">    
             <div class="col-md-12">
                <div class="position-relative form-group"><label for="ParentId">Parent</label>
                
                <input id="ParentId" name= "ParentId" hidden class="tosave">
                <div id="dropDownParent">
              			<div style="border: none;" id='jqxTreeParent'>
                	
                		</div>
                	</div>
            	</div>
			</div>   
		</div>
		<div class="form-row">
            <div class="col-md-6">
                <div class="position-relative form-group">
                	<label for="ProjectCategoryId">Category</label>
                    <input id="ProjectCategoryId" name= "ProjectCategoryId" hidden class="tosave" required>
                 
                	<div id="dropDownCategory">
              			<div style="border: none;" id='jqxTreeCategory'>
                	
                		</div>
                	</div>
                    
                </div>
            </div>
            
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="ProjectStateId">State</label>
                
                    <input name="ProjectStateId" id="ProjectStateId" hidden class="tosave" required>
                 
                	<div id="dropDownState">
              			<div style="border: none;" id='jqxTreeState'>
                	
                		</div>
                	</div>
                    
                </div>
            
            </div>
            
         </div>
         
        <div class="form-row">   
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Description">Description</label>
                <textarea name="Description" id="Description" placeholder="Name" type="text" class="form-control  tosave" required ></textarea></div>
            </div>
        </div>
        
        <div class="form-row">
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="DateStart">Start Date</label>
                <input name="DateStart" id="DateStart" placeholder="" type="date" class="form-control  tosave" required ></div>
            </div>
            <div class="col-md-3">
                <div class="position-relative form-group"><label for="DateEnd">End Date</label>
                <input name="DateEnd" id="DateEnd" placeholder="" type="date" class="form-control  tosave"></div>
            </div>
            <div class="col-md-2">
                <div class="position-relative form-group"><label for="Priority">Priority</label>
                <input name="Priority" id="Priority" placeholder="" type="number" class="form-control  tosave"></div>
            </div>
            
            
        </div>
        
        
        <div class="form-row">
            
            
        </div>
	@endpush

