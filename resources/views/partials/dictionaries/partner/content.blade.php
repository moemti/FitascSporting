@extends('partials.dictionaries.content')

@push('title')
    {{trans('dictionaries.partner_title')}}
@endpush


@push('description')
    {{trans('dictionaries.partner_description')}}
@endpush


@section('masterdetail')
    <script type="text/javascript" src={{asset("/assets/scripts/modules/dictionaries/partner.js")}}></script>
@endsection


@push('detail')
    <input id="OrganizationId" name= "OrganizationId" hidden>
    <div class="form-row">
        <div class="col-md-3">
            <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" placeholder="partner" type="text" class="form-control" required></div>
        </div>

    </div>
    <div class="form-row">
        <div class="col-md-2">
            <div class="position-relative form-group"><label for="code">Customer</label><input name="IsCustomer" id="IsCustomer"type="checkbox" class="form-control" ></div>
        </div>
        <div class="col-md-2">
            <div class="position-relative form-group"><label for="category">Supplier</label><input name="IsSupplier" id="IsSupplier"  type="checkbox" class="form-control" ></div>
        </div>

        
    </div>
    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="InvoiceDescription">Informatii documente</label>
                <textarea rows="10" name="InvoiceDescription" id="InvoiceDescription" placeholder="" type="text" class="form-control" ></textarea>
            </div>
        </div>

    </div>
@endpush
