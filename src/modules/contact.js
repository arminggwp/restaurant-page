function contact(number, address, email) {
    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact');
    //
    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = 'Kontaktirajte nas';
    //
    const phone = document.createElement('p');
    phone.classList.add('contactDetails');
    phone.textContent = number;
    //
    const location = document.createElement('p');
    location.classList.add('contactDetails');
    location.textContent = address;
    //
    const mail = document.createElement('p');
    mail.classList.add('contactDetails');
    mail.textContent = email;
    //
    contactInfo.appendChild(info);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(mail);
    contactInfo.appendChild(location);
    return contactInfo;
}

function loadContact() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const contactUs = contact('+387 123 456', 'Zenica, 72000', 'kafana@zenica.com');
    content.appendChild(contactUs);
}

export default loadContact;
