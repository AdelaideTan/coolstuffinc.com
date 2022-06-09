
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