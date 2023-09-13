$(document).ready(function(){
    $("button").click(function(){
        $.get("https://reqres.in/api/users?page=1", function(response,status){
            if (status=="success"){
                console.log(response);
                let responseData=response.data;
                if (responseData.length>0){
                    for (var i=0; i<responseData.length; i++){
                        $("#apiList").append("<li>"+ responseData[i].first_name+ "</li>")
                    }
                }
            }
            else{
                console.log('error loading data');
            }
        });

        //post request
        $.post("https://reqres.in/api/users",{
            "first_name": "Premosh",
            "last_name": "Bakey",
            "address": "Bhaktapur"
        }, function(response, status){
            if(status=="success"){
                console.log('post data'+ response['address']);
            }else{
                alert('Error posting'+ status);
            }
        });

    });
});