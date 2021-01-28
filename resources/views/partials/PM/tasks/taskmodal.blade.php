
<!--     fereastra modala task    -->

<div id="modaltask" class="modal bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog" style="width:90%; max-width=90%"  >
        <div class="modal-content" >
            

            <div class="modal-body pre-scrollable" id='taskmodalajax' style="max-height: 90%;  overflow-y: scroll;">
                    
            </div>
            <div class="modal-footer">

            </div>

        </div>
    </div>
</div>



    @include('tasks.tasknote')
    @include('tasks.taskcomment')