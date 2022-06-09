
window.addEventListener('load', () => {

    const firstname = sessionStorage.getItem('NAME');
    const surname = sessionStorage.getItem('SURNAME');

    document.getElementById('result-fullname').innerHTML = firstname + " " + surname + ", thank you for your order!";


})