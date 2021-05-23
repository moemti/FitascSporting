

@extends('partials.admin.masterdetail')

<script>
    var tName = "{{trans('general.Name')}}";
    var tStartDate= "{{trans('general.StartDate')}}";
    var tEndDate= "{{trans('general.EndDate')}}";
    var tRange = "{{trans('clay.Range')}}";
    var tSport = "{{trans('clay.Sport')}}";
</script>

<script type="text/javascript" src={{asset("/assets/scripts/modules/competitions/competition.js")}}></script>

@push('title')
    {{trans('menu.competitions')}}
@endpush


@push('Description')
    {{trans('oficialcometitions')}}
@endpush




@push('detail')
    <input id="CompetitionId" name= "CompetitionId" hidden>
    <div class="form-row">
        <div class="col-md-12">
            <div class="position-relative form-group"><label for="name">{{__('general.Name')}}</label><input name="Name" id="Name" type="text" class="form-control" required></div>
        </div>

    </div>
    <div class="form-row">
        <div class="col-md-3">
            <div class="position-relative form-group"><label for="StartDate">{{__('general.StartDate')}}</label><input name="StartDate" id="StartDate" class="form-control" type="date" required></div>
        </div>

        <div class="col-md-3">
            <div class="position-relative form-group"><label for="EndDate">{{__('general.EndDate')}}</label><input name="EndDate" id="EndDate" class="form-control" type="date" required></div>
        </div>
        <div class="col-md-3">
            <div class="position-relative form-group"><label for="Targets">{{__('clay.TargetsNr')}}</label><input name="Targets" id="Targets" class="form-control" type="number" required></div>
        </div>

        
    </div>
    <div class="form-row">

        <div class="col-md-4">
                <label for="SportId">{{__('clay.Sport')}}</label>
                <select name="SportId" id="SportId"  type="text" class="form-control" required >
                <option value=""></option>
                    @foreach($sports as $r)
                        <option value="{{$r->SportId}}">{{$r->Name}}</option>
                    @endforeach
                </select>
        </div>

        <div class="col-md-4">
                <label for="RangeId">{{__('clay.Range')}}</label>
                <select name="RangeId" id="RangeId"  type="text" class="form-control"  required>
                <option value=""></option>
                    @foreach($ranges as $r)
                        <option value="{{$r->RangeId}}">{{$r->Name}}</option>
                    @endforeach
                </select>
        </div>

    </div>
@endpush
