@extends('partials.admin.masterdetail')

@push('title')
    {{trans('dictionaries.module_title')}}
@endpush


@push('description')
    {{trans('dictionaries.module_description')}}
@endpush


@section('masterdetail')
    <script type="text/javascript" src={{asset("/assets/scripts/modules/dictionaries/moduleconfigurationvalues.js")}}></script>
@endsection


@push('detail')
    <input id="ModuleId" name= "ModuleId" hidden>
    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" type="text" class="form-control"  disabled required></div>
        </div>

    </div>
    <div class="form-row">
        <div class="col-md-6">
            <div class="position-relative form-group"><label for="code">Code</label><input name="Code" id="Code" class="form-control"  disabled  required></div>
        </div>
        
        
    </div>
    
@endpush

@push('dialogs')
    @include('partials.dictionaries.moduleconfigurationvalues.detail')
@endpush