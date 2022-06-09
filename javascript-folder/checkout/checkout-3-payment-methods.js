window.addEventListener('load', () => {

    const firstname = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');
    const phonenumber = sessionStorage.getItem('PHONENUMBER');

    document.getElementById('result-fullname').innerHTML = firstname + " " + surname;
    document.getElementById('result-phone-number').innerHTML = phonenumber;


    const country = sessionStorage.getItem('COUNTRY');
    const postcode = sessionStorage.getItem('POSTCODE');
    const stateterritory = sessionStorage.getItem('STATETERRITORY');
    const suburb = sessionStorage.getItem('SUBURB');
    const unitstreetaddress = sessionStorage.getItem('UNITSTREETADDRESS');
  
  
    document.getElementById('result-fullname').innerHTML = firstname + " " + surname;
    document.getElementById('result-phone-number').innerHTML = phonenumber;
    document.getElementById('result-address').innerHTML = unitstreetaddress + ", " + suburb + " " + stateterritory + " " + postcode + ", " + country;

    

})


function handleSubmit () {

    const cardnumber = document.getElementById('card-number').value;
    const nameoncard = document.getElementById('name-on-card').value;
    const MM = document.getElementById('MM').value;
    const YYYY = document.getElementById('YYYY').value;
    const CVV = document.getElementById('CVV').value;
  
    sessionStorage.setItem("CARDNUMBER", cardnumber);
    sessionStorage.setItem("NAMEONCARD", nameoncard);
    sessionStorage.setItem("MM", MM);
    sessionStorage.setItem("YYYY", YYYY);
    sessionStorage.setItem("CVV", CVV);



    return;
}