function handleSubmit () {
    const firstname = document.getElementById('firstname').value;
    const surname = document.getElementById('surname').value;
    const phonenumber = document.getElementById('phone-number').value;

    sessionStorage.setItem("NAME", firstname);
    sessionStorage.setItem("SURNAME", surname);
    sessionStorage.setItem("PHONENUMBER", phonenumber);



    const country = document.getElementById('country').value;
    const postcode = document.getElementById('postcode').value;
    const stateterritory = document.getElementById('state-territory').value;
    const suburb = document.getElementById('suburb').value;
    const unitstreetaddress = document.getElementById('unit-streetAddress').value;
  
    sessionStorage.setItem("COUNTRY", country);
    sessionStorage.setItem("POSTCODE", postcode);
    sessionStorage.setItem("STATETERRITORY", stateterritory);
    sessionStorage.setItem("SUBURB", suburb);
    sessionStorage.setItem("UNITSTREETADDRESS", unitstreetaddress);


    return;
}