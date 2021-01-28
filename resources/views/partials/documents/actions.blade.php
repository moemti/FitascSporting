@extends('partials.admin.actions')

@push('beforeactions')
    <li id="action_print" class="nav-item">
        <a class="nav-link" onclick="Print()">
            <i class="fa fa-angle-double-right"></i>&nbsp
            <span>
                    {{trans('general.print')}}
            </span>
        </a>
    </li> 
    <hr/>
@endpush

@push('afteractions')
<hr/>

        <li id="action_delete" class="nav-item">
        <a class="nav-link" onclick="DeleteDocument()">
            <i class="fa fa-angle-down"></i>&nbsp
            <span>
                    {{trans('general.deletedocument')}}
            </span>
        </a>
    </li>
@endpush