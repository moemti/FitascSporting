
<!--     fereastra modala note    -->

<div id="modaltasknota" class="modal  fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:70%;"  >
        <div class="modal-content">
            

            <div class="modal-body pre-scrollable" id='stocmodal' style="max-height: 70vh;  overflow-y: scroll;">

                                    
                    <div  >
                        {{ csrf_field() }} 
                        <div class="row">
                            <div class="col-lg-12">
                                
                                   
                                        <input hidden name='noteid' id="noteid" value="">
                                        <input hidden name='taskid' id="taskid" value="">

                                            <div class="form-group">
                                                <label>Title</label>
                                                <div>
                                                    <input class="form-control form-control-sm"  id="title" name="title" >{{isset($note)?$note->Title:''}}</input>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Note</label>
                                                <div>
                                                    <textarea required class="form-control form-control-sm" rows="5" id="text" name="text" >{{isset($note)?$note->Text:''}}</textarea>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Tags</label>
                                                <div>
                                                    <input type="text" class="form-control form-control-sm" id="tags" name= "tags" value="{{isset($note)?$note->Tags:''}}"/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Is Link</label>
                                                <div>
                                                    <input style="width:30px;" type="checkbox" class="form-control form-control-sm" id="islink" name= "islink" />
                                                </div>
                                            </div>

                                            <div class="form-group m-b-0" >
                                            <button id="savenotebtn" type="button" onclick="SaveNoteAjax()" class="btn btn-primary waves-effect waves-light" style="float: right;">Save</button>
                                            <button type="button" onclick="$('#modaltasknota').modal('toggle');;"class="btn waves-effect waves-light" data-dismiss="modaltasknota" aria-hidden="true"  style="float: right;">Close</button>
                                           
                                                    
                                            </div>
                                    

                                
                                       
                            </div> <!-- end col -->

                            
                        </div> <!-- end row -->
                    </div>

            </div>
            <div class="modal-footer">


            </div>

        </div>
    </div>
</div>

