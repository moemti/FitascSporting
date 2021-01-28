<div id="DetailModal" class="modal fade " tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLongTitle">Detail</h5>
               
                </button>
            </div>
            <div class="modal-body">
            	<form id="detailformmodal" class="form-horizontal" method="post" name="detailformmodal" enctype="multipart/form-data">

                    <input name="DocumentDetailId" id="DocumentDetailId" hidden> 
                    <input name="IsNewDetail" id="IsNewDetail" hidden> 
                    <input name="ArticleId" id="ArticleId" hidden> 
                    <input name="VATCode" id="VATCode" hidden> 
                    <input name="VATProc" id="VATProc" hidden> 
                    
                    
                
                    <label for="Article">Article</label>
                    <div class="input-group">
                        <input required readonly name="Article" id="Article" placeholder="" type="text"  class="form-control" >
                        <div class="input-group-append">
                            <button class="btn btn-secondary addDictionary editable" type="button" title="Add" onclick="ChooseArticle()">
                            <i class=" fa fa-plus"></i></button>
                        </div>
                    </div>
              
                    
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="position-relative form-group"><label for="Description">Description</label><input name="Description" id="Description" placeholder="" type="text"  class="form-control" ></div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="Qtty">Quantity</label><input name="Qtty" id="Qtty" placeholder="" type="number"  step="0.01" class="form-control" required></div>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="Price">Price</label><input name="Price" id="Price" placeholder="" type="number"  step="0.01" min="0" class="form-control" required></div>
                        </div>
                        
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="VATCodeId">VAT Code</label>
                                <select name="VATCodeId" id="VATCodeId" placeholder="" type="number"  class="form-control" required>
                                <option value=""></option>
                                            @foreach($vatcodes as $c)
                                                    <option value="{{$c->ElemDictionaryId}}"  procVAT = "{{$c->Value}}">{{$c->Name}}</option>
                                            @endforeach
                                </select>
                            </div>
                        </div>
                        

                    </div>

                    <div class="form-row">
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="ProcDisc">Discount(%)</label><input name="ProcDisc" id="ProcDisc" placeholder="" type="number" min="0" max="100" step="0.01" class="form-control" ></div>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="BaseValue">Base value</label><input disabled name="BaseValue" id="BaseValue" placeholder="" type="number"  step="0.01" class="form-control" required ></div>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="VATValue">VAT value</label><input disabled name="VATValue" id="VATValue" placeholder="" type="number"  step="0.01" class="form-control" required ></div>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="TotalValue">Total value</label><input disabled name="TotalValue" id="TotalValue" placeholder="" type="number"  step="0.01" class="form-control" required ></div>
                        </div>
                       
                    </div>

                    <div class="form-row">
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="ContractPrice">Contract price</label><input name="ContractPrice" id="ContractPrice" placeholder="" type="number" min="0" step="0.01" class="form-control" ></div>
                        </div>
                        <div class="col-md-3">
                            <label for="CurrencyId">Contract currency</label>
                            <select name="CurrencyId" id="CurrencyId" placeholder="" type="number"  class="form-control">
                            <option value=""></option>
                                        @foreach($Currencies as $c)
                                                <option value="{{$c->CurrencyId}}" >{{$c->Symbol}}</option>
                                        @endforeach
                            </select>
                        </div>
                        <div class="col-md-3">
                            <div class="position-relative form-group"><label for="ContractExRate">Contract ExRate</label><input  name="ContractExRate" id="ContractExRate" placeholder="" type="number" min="0" step="0.0001" class="form-control" ></div>
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

<div id="ArticleModal" class="modal fade " tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style="display: none;" aria-hidden="false">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title" id="exampleModalLongTitle">Articles</h5>
            </div>
            
            <div class="modal-body">
                <div id = "ArticleGrid">
                
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" onclick="CloseArticleModal()">Close</button>
                <button id="buttonOK" type ="submit" class="btn btn-primary" onclick="ChooseArticleModal()" >Change</button>
            </div>
        </div>
    </div>
</div>            


