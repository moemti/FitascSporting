<!-- client invoice -->
@extends('partials.documents.document')

@section('masterdetail')
	@parent
  	<script type="text/javascript" src={{asset("/assets/scripts/modules/clients/clientinvoice.js")}}></script>
@endsection




@push('title')
	{{trans('clientinvoice.title')}}
@endpush


@push('description')
	{{trans('clientinvoice.description')}}
@endpush


@php
	// taburi
	$subtabs = [
			(object)['caption'=>'Main'],  
			(object)['caption'=>'External'],  
			(object)['caption'=>'Delivery'], 
		//	(object)['caption'=>'Other settings'], 
			(object)['caption'=>'Attachments'],
			]
@endphp

	<script>
		var articlesdata = @JSON($articles)
	</script>


@push('documentmaster')

<div class="form-row">
				

	<div class="col-md-3">
		<div class="position-relative form-group"><label for="Date">Date</label><input name="DocumentDate" id="DocumentDate" placeholder="" type="date" class="form-control" required></div>
	</div>
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="SerialNumberId">Serial</label><select name="SerialNumberId" id="SerialNumberId" placeholder="" type="number"  class="form-control" required>
			<option value=""></option>
							@foreach($Serials as $c)
									<option value="{{$c->SerialId}}" >{{$c->Serial}}</option>
							@endforeach

		</select></div>
	</div>
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="number">Number</label><input disabled name="DocumentNumber" id="DocumentNumber" placeholder="" type="text" class="form-control" ></div>
	</div>
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="state">State</label><input disabled name="State" id="State" placeholder="" type="text" class="form-control" ></div>
	</div>
</div>
<div class="form-row">
	<div class="col-md-12">
		<label for="PartnerId">Customer</label>
		<div class="input-group">
			<select name="PartnerId" id="PartnerId" placeholder="" type="text" class="form-control"  required>
			<option value=""></option>
				@foreach($clients as $c)
						<option value="{{$c->OrganizationId}}"   >{{$c->Partner}}</option>
				@endforeach
			</select>
			<div class="input-group-append">
				<button class="btn btn-secondary addDictionary" title="Add">
				<i class=" fa fa-plus"></i></button>
			</div>
		</div>
	</div>
</div>

<div class="form-row">
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="CurrencyId">Currency</label>
			<select name="CurrencyId" id="CurrencyId" placeholder="" type="number"  class="form-control" required>
			<option value=""></option>
						@foreach($Currencies as $c)
								<option value="{{$c->CurrencyId}}" >{{$c->Symbol}}</option>
						@endforeach
			</select>
		</div>
	</div>

	<div class="col-md-2">
		<div class="position-relative form-group"><label for="TotalValue">Total value</label><input disabled name="TotalValue" id="TotalValue" placeholder="" type="number"  step="0.01" class="form-control" required></div>
	</div>
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="BaseValue">Base value</label><input disabled name="BaseValue" id="BaseValue" placeholder="" type="number"  step="0.01" class="form-control" required></div>
	</div>
	<div class="col-md-2">
		<div class="position-relative form-group"><label for="VATValue">VAT value</label><input disabled  name="VATValue" id="VATValue" placeholder="" type="number"  step="0.01" class="form-control" required ></div>
	</div>


</div>

<div class="form-row">
		<div class="col-md-3">
			<div class="position-relative form-group"><label for="ProcDiscInvoice">Discount(%)</label><input name="ProcDiscInvoice" id="ProcDiscInvoice" placeholder="" type="number"  step="0.01" 
			min="0" max="100" class="form-control" ></div>
		</div>
		<!-- <div class="col-md-3">
			<div class="position-relative form-group"><label for="DiscValue">Discount value</label><input disabled name="DiscValue" id="DiscValue" placeholder="" type="number"  step="0.01" class="form-control" ></div>
		</div> -->

		<div class="col-md-2">
			<div class="position-relative form-group"><label for="PaymentTerm">Payment term</label><input required name="PaymentTerm" id="PaymentTerm" placeholder="" type="number"  step="1" class="form-control" ></div>
		</div>
	</div>

@endpush						

@push('afterdetail')

<div class="row mol-tab noactive" id="detail-1">
	<div class="form-row col-sm-12 col-lg-12">

		<div class="col-md-2">
			<div class="position-relative form-group">
				<label for="EUTypeId">EU Type</label>
				<select name="EUTypeId" id="EUTypeId" placeholder="" type="number" class="form-control">
				<option value=""></option>
							@foreach($EUType as $c)
									<option value="{{$c->ElemDictionaryId}}" >{{$c->Name}}</option>
							@endforeach
				
				</select>
			</div>
		</div>
		
		<div class="col-md-4">
			<div class="position-relative form-group"><label for="ExRate">Exchange rate</label><input name="ExRate" id="ExRate" placeholder="" type="number"  step="0.0001" class="form-control" ></div>
		</div>

	</div>

</div>

<div class="row mol-tab noactive" id="detail-2">
	<div class="form-row col-sm-12 col-lg-12">

		<div class="col-md-2">
			<div class="position-relative form-group"><label for="DeliveryDate">Delivery date</label><input name="DeliveryDate" id="DeliveryDate" placeholder="" type="date" class="form-control" ></div>
		</div>
		<div class="col-md-6">
			<div class="position-relative form-group"><label for="DeliveryRepId">Delivery Rep</label><select name="DeliveryRepId" id="DeliveryRepId" placeholder="" type="number"  class="form-control" >
			<option value=""></option>
							@foreach($DeliveryRep as $c)
									<option value="{{$c->PersonId}}" >{{$c->Name}}</option>
							@endforeach


			</select></div>
		</div>
		<div class="col-md-6">
			<div class="position-relative form-group"><label for="SalesRepId">Sales Rep</label><select name="SalesRepId" id="SalesRepId" placeholder="" type="number"  class="form-control" >

			<option value=""></option>
							@foreach($SalesRep as $c)
									<option value="{{$c->PersonId}}" >{{$c->Name}}</option>
							@endforeach
			</select></div>
		</div>

	</div>

</div>


<!-- <div class="row mol-tab noactive" id="detail-3">
	<div class="form-row col-sm-12 col-lg-12">

		<div class="col-md-2">
			<div class="position-relative form-group"><label for="IsDiscInvoiceInPrice">Invoice disc in price</label><input name="IsDiscInvoiceInPrice" id="IsDiscInvoiceInPrice" placeholder="" type="checkbox" class="form-control" ></div>
		</div>
		<div class="col-md-2">
			<div class="position-relative form-group"><label for="IsDiscInPrice">Detail disc in price</label><input name="IsDiscInPrice" id="IsDiscInPrice" placeholder="" type="checkbox"  class="form-control" ></div>
		</div>
		<div class="col-md-4">
			<div class="position-relative form-group"><label for="HasDiscountDocuments">Has discounts invoices</label><input name="HasDiscountDocuments" id="HasDiscountDocuments" placeholder="" type="checkbox"  class="form-control" ></div>
		</div>

	</div>

</div> -->


<div class="row mol-tab noactive" id="detail-3">
	<div class="col-sm-12 col-lg-6">
		<div class="mb-3 card">
			<div class="card-body">
				<div class="card-header text-right"><h5 class="card-title">Attachments</h5>
					<div class="w-100  text-right">
						<button data-toggle="modal" data-target="#AttachModal" class="btn-wide btn btn-success">Attach</button>
					</div>
				</div>
				<div class="scroll-area-sm">
					<div id="attachdiv" class="scrollbar-container">

					</div>
				</div>
			</div>
		</div>
	</div>


	<div class ="col-sm-12 col-lg-6">
		<div class="mb-3 card">
			<div class="card-body">
				<div class="card-header text-right"><h5 class="card-title">Related documents</h5>

				</div>
				<div class="scroll-area-sm">
					<div  id="relateddocuments"  class="scrollbar-container">

					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endpush						

@push('dialogs')

@include('partials.clients.invoice.detail')

@endpush

<!-- end client invoice -->

