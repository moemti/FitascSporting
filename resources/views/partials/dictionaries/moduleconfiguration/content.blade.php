@extends('partials.admin.masterdetail')

@push('title')
    {{trans('dictionaries.module_title')}}
@endpush


@push('description')
    {{trans('dictionaries.module_description')}}
@endpush


@section('masterdetail')
    <script type="text/javascript" src={{asset("/assets/scripts/modules/dictionaries/moduleconfiguration.js")}}></script>
@endsection


@push('detail')
        <input name="ModuleConfigurationId" id="ModuleConfigurationId" hidden> 
        
    
        <div class="form-row">
            <div class="col-md-8">
                <div class="position-relative form-group"><label for="Name">Name</label><input name="Name" id="Name" placeholder="" type="text"  class="form-control" required></div>
            </div>
            <div class="col-md-4">
                <div class="position-relative form-group"><label for="Code">Code</label><input name="Code" id="Code" placeholder="" type="text"  class="form-control" required></div>
            </div>
        </div>
    
        
        <div class="form-row">
            <div class="col-md-12">
                <div class="position-relative form-group"><label for="Description">Description</label><input name="Description" id="Description" placeholder="" type="text"  class="form-control" ></div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-md-6">
                <div class="position-relative form-group"><label for="DataType">Data Type</label><input name="DataType" id="DataType" placeholder="" type="text" class="form-control" ></div>
            </div>
            <div class="col-md-6">
                <div class="position-relative form-group"><label for="DefaultValue">DefaultValue</label><input name="DefaultValue" id="DefaultValue" placeholder="" type="text"   class="form-control" ></div>
            </div>

        
            

        </div>
    
@endpush

