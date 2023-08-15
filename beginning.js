function printHello(){
    document.getElementById("demo").innerHTML="Hello";
    window.alert('Fuck you');
    console.log('Hello');
}
function printHI(){
    const pi=3.14;
    let a=1;
    let b=2;
    let c=(15/100)*5000;
    document.getElementById("demo1").innerHTML=c;
}
function printPI(){
    var x=10;
    var x=20;
    const booking=['Booking1','Booking2','Booking3'];
    let bookingValue=booking[2];
    booking.push['Booking4'];
    const bookingObject={
        booking1 : 'Booking1',
        booking2 : 'Booking2',
        booking3 : 'Booking3'
    }
    let bookingObjectValue=bookingObject.booking2;
    bookingObject.booking5='Booking5';
    document.getElementById("demo2").innerHTML=booking;
    document.getElementById("demo3").innerHTML="Array element=<br>"+bookingValue;
    document.getElementById("demo4").innerHTML=bookingObject;
    document.getElementById("demo5").innerHTML="Object element=<br>"+bookingObjectValue;
}
