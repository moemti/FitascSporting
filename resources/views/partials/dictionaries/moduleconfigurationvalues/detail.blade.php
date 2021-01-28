<div id="DetailModal" class="modal fade " tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLongTitle">Detail</h5>
               
                </button>
            </div>
            <div class="modal-body">
            	<form id="detailformmodal" class="form-horizontal" method="post" name="detailformmodal" enctype="multipart/form-data">

                    <input name="ModuleConfigurationId" id="ModuleConfigurationId" hidden> 
                    <input name="ModuleId" id="ModuleId" hidden> 
                    <input name="IsNewDetail" id="IsNewDetail" hidden> 
                    
                    
                    
                
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="position-relative form-group"><label for="Name">Name</label><input disabled name="Name" id="Name" placeholder="" type="text"  class="form-control" required></div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group"><label for="Code">Code</label><input disabled name="Code" id="Code" placeholder="" type="text"  class="form-control" required></div>
                        </div>
                    </div>
              
                    
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="position-relative form-group"><label for="Description">Description</label><input  disabled name="Description" id="Description" placeholder="" type="text"  class="form-control" ></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="position-relative form-group"><label for="DataType">Data Type</label><input  disabled name="DataType" id="DataType" placeholder="" type="text" class="form-control" ></div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group"><label for="DefaultValue">DefaultValue</label><input  disabled name="DefaultValue" id="DefaultValue" placeholder="" type="text"   class="form-control" ></div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group"><label for="Value">Value</label><input name="Value" id="Value" placeholder="" type="text"   class="form-control" required></div>
                        </div>
                    
                        

                    </div>

                    
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" onclick="CloseDetailModal()">Close</button>
                        <button id="buttonOK" type ="submit" class="btn btn-primary editable" >Change</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</div>



