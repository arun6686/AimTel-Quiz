  $(document).ready(function() {
	  
	    /*
		   function type: Event Handler,
		   description  : 'Load Data' Click Event handler,
		   params       : None,
		   return       : None			
		*/		
		$('#loadData').click(function() {
		    $.ajax({
			    type: "GET",
				datatype: 'application/json',				
				headers: {
                      'Content-Type': 'application/x-www-form-urlencoded'
                },
				url: "https://aimtell.com/files/sites.json",				
				crossOrigin: true,
				success: function(data) { 
                    var tableData = "";
					var rows="";
					var count="";
					
					//Check validity of data
					if(data!=null) {
	                    rows= data.sites? data.sites : 0;
						count= data.count? data.count : 0;
					}
					
					// Generated table body from json data
					if(count!=0) {
                        for(var i=0; i<data.count; i++) { 
	                       tableData += "<tr><td>"+rows[i].id+"</td><td>"+rows[i].name+"</td><td>"+rows[i].url+"</td></tr>";		
	                    }
				    } else {
					    tableData = '<tr><td colspan="3">No Records Found</td></tr>'; 
                    }					
					
	                //Updates table body with result
	                $("#jsonData").html(tableData);
				},
				error: function(xhr, status, error) {
				    //Generates error string
				    var errData = '<tr><td colspan="3">Internal Error: Unable to get data. </td></tr>';
					errData+= '<tr><td colspan="3"> Error: '+xhr.responseText+'</td></tr>';
					
					//Updates table body with error
				    $("#jsonData").html(errData);
				}
			});	
		
		});
});