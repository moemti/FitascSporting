@permissionreturn("permissions")

@extends('layouts.admin')


@push('include_content')
    @include('partials.permissions.contentaction')
@endpush('include_content')
