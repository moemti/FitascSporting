@extends('partials.dictionaries.content')

@push('title')
    {{trans('dictionaries.article_title')}}
@endpush


@push('description')
    {{trans('dictionaries.article_description')}}
@endpush

<script>
    MasterPrimaryKey = @JSON($MasterPrimaryKey);
</script>

@section('masterdetail')
    <script type="text/javascript" src={{asset("/assets/scripts/modules/dictionaries/article.js")}}></script>
@endsection


@push('detail')
    <input id="ArticleId" name= "ArticleId" hidden>
    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="name">Name</label><input name="Name" id="Name" type="text" class="form-control" required></div>
        </div>

    </div>
    <div class="form-row">
        <div class="col-md-6">
            <div class="position-relative form-group"><label for="code">Code</label><input name="Code" id="Code" class="form-control" required></div>
        </div>
        <div class="col-md-4">
                <label for="ArticleCategoryId">Category</label>
                <select name="ArticleCategoryId" id="ArticleCategoryId"  type="text" class="form-control"  >
                <option value=""></option>
                    @foreach($categories as $r)
                        <option value="{{$r->ArticleCategoryId}}">{{$r->Name}}</option>
                    @endforeach
                </select>
        </div>
        <div class="col-md-2">
          
            <div class="position-relative form-group"><label for="IsActive">Active</label><input name="IsActive" id="IsActive"  type="checkbox" class="form-control" ></div>
        </div>

        
    </div>
    <div class="form-row">
        <div class="col-md-4">
                <label for="VATCodeId">VAT</label>
                <select name="VATCodeId" id="VATCodeId"  type="text" class="form-control"  required>
                <option value=""></option>
                    @foreach($vatcodes as $r)
                        <option value="{{$r->ElemDictionaryId}}">{{$r->Name}}</option>
                    @endforeach
                </select>
        </div>

    </div>
@endpush
