@permissionreturn("customer_invoice.view")

@extends('layouts.admin')


@push('include_content')
@include('partials.clients.invoice.content')
@endpush('include_content')
