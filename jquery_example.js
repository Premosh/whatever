$(document).ready(function(){
    $("#subm").click(function(e){
        e.preventDefault();
        const json=$("#inputForm").serializeArray();
        console.log(json);

    })
    $.get("https://date.nager.at/api/v2/publicholidays/2020/US",function(response, status){
        if(status=="success"){
            let responseData= response;
            if(responseData.length>0){
                for(var i=0;i<responseData.length;i++){
                    $('#apiDataList').append("<tr>\
                    <td>"+responseData[i].date+"</td>\
                    <td>"+responseData[i].localName+"</td>\
                    <td>"+responseData[i].countryCode+"</td>\
                    <td>"+responseData[i].fixed+"</td>\
                    <td>"+responseData[i].global+"</td>\
                    <td>"+responseData[i].type+"</td>\
                    </tr>");
                }
            }
        }            
        else{
            console.log('Error loading Data............'+status)
        }
    });
})