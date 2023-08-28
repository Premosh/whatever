function onSubmit(event){
    //This is to prevent page from refreshing on sublit button click 
    event.preventDefault();
    console.log('Submit button pressed');
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var acceptLicenseYes = document.getElementById('acceptLicenseYes');
    var acceptLicenseNo = document.getElementById('acceptLicenseNo');
    var acceptLicense;
    if (acceptLicenseYes.checked==true && acceptLicenseNo.checked==true) {
        acceptLicense = "cannot select two checkboxes";
    } else if (acceptLicenseYes.checked=true) {
        acceptLicense = document.getElementById('acceptLicenseYes').value;
    } else if (acceptLicenseNo.checked=true) {
        acceptLicense = document.getElementById('acceptLicenseNo').value;
    }
    document.getElementById('formData').innerHTML = "Name:" + name + "<br>Email:" + email + "<br>Gender:" + gender + "<br>Accept license:" + acceptLicense;
}
window.onload=function(){
    window.alert('This page is not secure');
    document.getElementById('contactForm').addEventListener('submit',onSubmit);
}
