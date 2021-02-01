function homePage() {
    const description = document.createElement('description');
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 
    `Mjesto u gradu sa kojim nikada ne možete pogriješiti.
    Bilo da je u pitanju prva jutarnja kafa, pauza na poslu, ručak ili izlazak sa prijateljima.
    Vaša Gradska kafana.`
    description.appendChild(paragraph);
    description.classList.add('description');
    return description;
}

function loadhome() {
    const content = document.getElementById('tab-content');
    content.textContent = '';
    const about = homePage();
    content.appendChild(about);
}

export default loadhome;