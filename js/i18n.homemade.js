let language = 'es';
let arrayKeys = ['personal-information', 'name', 'name-2', 'job', 'job-2', 'beginning', 'who-i-am', 'resume', 'contact', 'download-cv', 'title-email', 'email', 'title-phone', 'number-phone', 'copyrights', 'job-3', 'who', 'i', 'what', 'i-do'];
let i18nHomemade = {
    "personal-information": {
        "es": "Me considero una persona seria, responsable y creativa, con muchas ganas de trabajar y nunca dejo de formarme de manera autodidacta, dispuesto a trabajar en equipo y en comprometerme con la empresa. Actualmente, estoy enfocando mi carrera al mundo Front End con tecnologías como Angular y Vue, pero también trabajo la parte BackEnd utilizando PHP. Además, también trabajo como freelance, y uno de mis mayores hobbies es crear aplicaciones para móviles utilizando ionic. También ofrezco servicios de marketing digital, ya que tengo conocimientos altos en SEO y SEM. Dispongo de carnet y coche propio. Soy deportista de alto nivel con la Universidad de Oviedo.",
        "en": "Baggage"
    },
    "name": {
        "es": "Iyán Arcega",
        "en": "Iyán Arcega"
    },
    "job": {
        "es": "Frontend-developer",
        "en": "Frontend-developer"
    }, "name-2": {
        "es": "Iyán Arcega",
        "en": "Iyán Arcega"
    },
    "job-2": {
        "es": "Frontend-developer",
        "en": "Frontend-developer"
    },
    "beginning": {
        "es": "Inicio",
        "en": "Inicio"
    },"who-i-am": {
        "es": "Quién soy",
        "en": "who i am"
    },"resume": {
        "es": "Resume",
        "en": "Resume"
    },"contact": {
        "es": "Contact",
        "en": "Contacto"
    },"download-cv": {
        "es": "Descargar CV",
        "en": "Download CV"
    },"title-email": {
        "es": "E-mail",
        "en": "E-mail"
    },"email": {
        "es": "info@stringiyan.es",
        "en": "info@stringiyan.es"
    },"title-phone": {
        "es": "Teléfono",
        "en": "Phone"
    },"number-phone": {
        "es": "+34 633 83 24 13",
        "en": "+34 633 83 24 13"
    },"copyrights": {
        "es": "© 2021 Todos los derechos reservados.",
        "en": "© 2021 Todos los derechos reservados."
    },"job-3": {
        "es": "Web Designer",
        "en": "Web Designer"
    },"who": {
        "es": "Quien ",
        "en": "Who "
    },"i": {
        "es": "Soy",
        "en": "I am"
    },"what": {
        "es": "Qué ",
        "en": "What "
    },"i-do": {
        "es": "hago",
        "en": "i do"
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },"": {
        "es": "",
        "en": ""
    },
};


function changeLanguage(language) {
    this.language = language;
}

function setContentMessage(id) {
    let element = document.getElementById(id);

    if (!element) {
        setTimeout(()=>{
            element = document.getElementById(id);
        }, 500);
    }

    setTimeout(()=> {
        element.appendChild(document.createTextNode(i18nHomemade[id][language]));
    }, !element ? 500 : 0);
}



// load all messages
window.onload = function () {
    arrayKeys.forEach((key)=> {
        setContentMessage(key);
    });
};
