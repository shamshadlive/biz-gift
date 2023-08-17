

// data table js
$(document).ready(function(){
    if ($("#homepage-datatable"))
    { 
        $('#homepage-datatable').DataTable({
            "scrollX": true
          });
        
        $("#homepage-datatable_filter").addClass( "d-flex justify-content-md-end my-2  px-2" );
        $("#homepage-datatable_length").addClass( "d-none" );
        $("#homepage-datatable_info").addClass( "small my-2 px-2" );
        $('#homepage-datatable_paginate').find('ul.pagination').addClass('justify-content-md-end');
       
    }

    
    if ($("#your-earned-gifts-datatable"))
    { 
        $('#your-earned-gifts-datatable').DataTable({
            "scrollX": true
          });
        $("#your-earned-gifts-datatable_filter").addClass( "d-flex justify-content-md-end my-2 px-2" );
        $("#your-earned-gifts-datatable_length").addClass( "d-none" );
        $("#your-earned-gifts-datatable_info").addClass( "small my-2 px-2" );
        $('#your-earned-gifts-datatable_paginate').find('ul.pagination').addClass('justify-content-md-end');
    }

    if ($("#friends-joined-link-datatable"))
    { 
        $('#friends-joined-link-datatable').DataTable({
            "scrollX": true
          });
        $("#friends-joined-link-datatable_filter").addClass( "d-flex justify-content-md-end my-2 px-2" );
        $("#friends-joined-link-datatable_length").addClass( "d-none" );
        $("#friends-joined-link-datatable_info").addClass( "small my-2 px-2" );
        $('#friends-joined-link-datatable_paginate').find('ul.pagination').addClass('justify-content-md-end');
    }



    });
    