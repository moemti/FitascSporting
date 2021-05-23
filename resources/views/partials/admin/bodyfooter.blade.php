
		<!-- Body footer -->
    	<div id="message">
                    @include('partials.admin.errors')
                    @include('partials.admin.success')
            
        </div>
        
        @include('partials.admin.message')
        @include('partials.admin.confirm')

        @if (!isset($DeniedPermissions) || !in_array("Delete", $DeniedPermissions))
                   
        @include('partials.admin.confirmsave')

        @endif