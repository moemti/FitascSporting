<script>
         function mymodalclosemultiple(){
            if ( $("#theformmultiple").isChanged() )
                confirm("Nu ati salvat modificarile! Doriti sa inchideti?", closemodalmultiple)
            else
                closemodalmultiple();
           
        }

        function closemodalmultiple(){
             $('#modaltaskmultiple').modal('toggle');
        }

        function taksubmitmultiple(){

            $("#theformmultiple").data("changed", false);
            $("#theformmultiple").submit();   

        };


</script>


<div id="modaltaskmultiple" class="modal bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <form action="savenewtasksmultiple" method="POST" id="theformmultiple">
        {{ csrf_field() }} 
    <div class="modal-dialog" style="width:70%; max-width=70%"  >
        <div class="modal-content" >
            

            <div class="modal-body pre-scrollable" id='taskmodalmultipleajax' style="max-height: 90%;  overflow-y: scroll;">
                <div class="form-group">
                    <label>Tasks name (one task for each row)</label>
                    <div>
                        <textarea class="form-control form-control-sm" required id="multipletaskname" name= "multipletaskname" rows=10></textarea>
                    </div>
                </div>

                <input hidden id="multipletaskid" name = "multipletaskid" value=""/>
                <input hidden id="multipleprojectid" name = "multipleprojectid" value=""/>
                
             
                    <div class= "right_align">
                       
                        <button onclick="mymodalclosemultiple();" type="button" class="btn btn-secondary waves-effect m-l-5">
                            Close
                        </button>
                        <button onclick="taksubmitmultiple()" type="button" class="btn btn-primary waves-effect waves-light">
                            Save
                        </button>
                    </div>
             

            </div>
            
        </div>
    </div>
    </form>
</div>