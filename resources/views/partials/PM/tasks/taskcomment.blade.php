
<!--     fereastra modala note    -->

<div id="modaltaskcomment" class="modal  fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:70%;"  >
        <div class="modal-content">
            

            <div class="modal-body pre-scrollable" id='commentmodal' style="max-height: 70vh;  overflow-y: scroll;">

                                    
                    <div  >
                        {{ csrf_field() }} 
                        <div class="row">
                            <div class="col-lg-12">
                                
                                   
                                        <input hidden name='commentid' id="commentid" value="">
                                     

                                         
                                            <div class="form-group">
                                                <label>Comment</label>
                                                <div>
                                                    <textarea required class="form-control form-control-sm" rows="5" id="text" name="text" >{{isset($note)?$note->Text:''}}</textarea>
                                                </div>
                                            </div>


                                            <div class="form-group m-b-0" >
                                            <button id="savecommentbtn" type="button" onclick="SaveCommentAjax()" class="btn btn-primary waves-effect waves-light" style="float: right;">Save</button>
                                            <button type="button" onclick="$('#modaltaskcomment').modal('toggle');;"class="btn waves-effect waves-light" data-dismiss="modaltaskcomment" aria-hidden="true"  style="float: right;">Close</button>
                                           
                                                    
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

