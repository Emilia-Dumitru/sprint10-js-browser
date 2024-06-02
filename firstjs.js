const button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('Un email la adresa myemail@gmail.com a fost trimis. Va multumim!');
});
  
function getFormValue(e) {
    e.preventDefault();
    const firstName = document.getElementById("nume").value;
    const lastName = document.getElementById("prenume").value;
    const  email = document.getElementById("email").value;
    const tel = document.getElementById("telefon").value;
    const message =document.getElementById("mesaj").value;

    console.log("Nume: " + firstName + " " + lastName);
    console.log( "Email: " + email);
    console.log( "Telefon: "+ tel);
    console.log("Mesaj: " +message);
}
