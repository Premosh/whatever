function onSubmit(event){
    //This is to prevent page from refreshing on sublit button click 
    event.preventDefault();
    console.log('Submit button pressed');
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    document.getElementById('formData').innerHTML="Name: "+name+"<br>Email: "+email+"<br>Gender:"+gender;
}
window.onload=function(){
    window.alert('This page is not secure');
    document.getElementById('contactForm').addEventListener('submit',onSubmit);
}