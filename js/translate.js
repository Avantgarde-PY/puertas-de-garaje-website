// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Function to get a cookie value by name
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }  

var translations = {
    en: {
        welcome: "Together we protect what you love.",
        "welcome-text": "Welcome to Puertas de Garaje - Your partner for high-quality garage doors and more!",
        "navbar.brand": "Puertas de Garaje",
        "navbar.home": "Home",
        "navbar.store": "Products",
        "navbar.about": "About Us",
        "navbar.disabled": "     ",
        "navbar.language": "Language",
        "navbar.lang.de": "German",
        "navbar.lang.es": "Spanish",
        "navbar.lang.en": "English",
        "about.title": "About Us",
        "about.content": "Welcome to Puertas de Garaje in Paraguay! We understand that your garage is more than just a place to park your vehicle. It is a shelter from the elements and theft. That's why we offer a wide range of high-quality garage doors to meet your needs.",
        "about.more": "Our sectional doors are not only convenient and space-saving, but also aesthetically pleasing. From elegant white doors to stylish gray designs - we have something for every taste. And the best part? Our doors are not only beautiful, but also durable and rust-resistant. Discover today how we can make your garage the centerpiece of your home! <br><br> <b>Tel: <b><u>+595 983 396509<u>",
        "about.contact": "Contact",
        "card1.title": "Discover Our Story",
        "card1.content": "At Puertas de Garaje, it's about more than just garage solutions. We want to share our story with you. Starting with a simple mission: to offer high-quality garage doors that seamlessly fit into your lifestyle. Today, we're still on that mission, offering a variety of products designed to exceed your expectations. Dive into our story, learn what drives us, and why homeowners everywhere trust us.",
        "card2.title": "What We Do",
        "card2.content": "At Puertas de Garaje, it's about making your home safer and more stylish. From sleek sectional doors to sturdy roller shutters - our products are designed to improve the appearance and function of your property. But it's not just about looks - our doors are built tough to withstand the elements and keep unwanted visitors out, so you can rest easy. With a focus on quality, innovation, and customer satisfaction, we're here to transform your garage into a space you'll love.",
        "card3.title": "Contact Us",
        "card3.content": "Ready to upgrade your garage? Have questions about our products or services? We're here to help. Contact us today to discuss your needs and see how we can assist you. Whether you're seeking advice, a quote, or just a friendly chat - we're committed to providing the support you need. Reach out by phone, email, or visit our showroom - we look forward to hearing from you!",
        "footer": "© 2024 Avantgarde. All rights reserved."
    },
    de: {
        welcome: "Gemeinsam schützen wir, was Ihnen lieb ist.",
        "welcome-text": "Willkommen bei Puertas de Garaje - Ihr Partner für hochwertige Garagentore und mehr!",
        "navbar.brand": "Puertas de Garaje",
        "navbar.home": "Startseite",
        "navbar.store": "Produkte",
        "navbar.about": "Über uns",
        "navbar.disabled": "     ",
        "navbar.language": "Sprache",
        "navbar.lang.de": "Deutsch",
        "navbar.lang.es": "Spanisch",
        "navbar.lang.en": "Englisch",
        "about.title": "Über Uns",
        "about.content": "Willkommen bei Puertas de Garaje in Paraguay! Wir verstehen, dass Ihre Garage mehr ist als nur ein Ort, um Ihr Fahrzeug zu parken. Sie ist ein Schutzraum vor widrigen Elementen und Diebstahl. Deshalb bieten wir eine breite Palette hochwertiger Garagentore an, die Ihren Bedürfnissen gerecht werden.",
        "about.more": "Unsere Sektionaltore sind nicht nur komfortabel und platzsparend, sondern auch ästhetisch ansprechend. Von eleganten weißen Toren bis hin zu stilvollen grauen Designs - wir haben für jeden Geschmack etwas dabei. Und das Beste daran? Unsere Tore sind nicht nur schön anzusehen, sondern auch langlebig und rostbeständig. Entdecken Sie noch heute, wie wir Ihre Garage zum Schmuckstück Ihres Hauses machen können! <br><br> <b>Tel: <b><u>+595 983 396509<u>",
        "about.contact": "Kontakt",
        "card1.title": "Entdecken Sie unsere Geschichte",
        "card1.content": "Bei Puertas de Garaje geht es um mehr als nur um Garagenlösungen. Wir möchten unsere Geschichte mit Ihnen teilen. Angefangen mit einer einfachen Mission: hochwertige Garagentore anzubieten, die nahtlos in Ihren Lebensstil passen. Heute sind wir immer noch auf dieser Mission unterwegs und bieten eine Vielzahl von Produkten an, die Ihre Erwartungen übertreffen sollen. Tauchen Sie ein in unsere Geschichte, erfahren Sie, was uns antreibt, und warum Hausbesitzer überall uns vertrauen.",
        "card2.title": "Was machen wir?",
        "card2.content": "Bei Puertas de Garaje geht es darum, Ihr Zuhause sicherer und stilvoller zu machen. Von schlanken Sektionaltoren bis hin zu robusten Rolltoren – unsere Produkte sind darauf ausgerichtet, das Aussehen und die Funktion Ihrer Immobilie zu verbessern. Aber es geht nicht nur um das Aussehen – unsere Tore sind robust gebaut, um den Elementen standzuhalten und unerwünschte Besucher fernzuhalten, damit Sie beruhigt sein können. Mit einem Fokus auf Qualität, Innovation und Kundenzufriedenheit sind wir hier, um Ihre Garage in einen Raum zu verwandeln, den Sie lieben werden.",
        "card3.title": "Kontaktieren Sie uns",
        "card3.content": "Bereit, Ihre Garage aufzurüsten? Haben Sie Fragen zu unseren Produkten oder Dienstleistungen? Wir sind hier, um zu helfen. Nehmen Sie noch heute Kontakt mit uns auf, um Ihre Bedürfnisse zu besprechen und zu sehen, wie wir Ihnen helfen können. Egal, ob Sie Beratung, ein Angebot oder einfach nur einen freundlichen Plausch suchen – wir sind entschlossen, die Unterstützung zu bieten, die Sie benötigen. Kontaktieren Sie uns telefonisch, per E-Mail oder besuchen Sie unseren Ausstellungsraum – wir freuen uns darauf, von Ihnen zu hören.",
        "footer": "© 2024 Avantgarde. Alle Rechte vorbehalten."
    },
    es: {
        welcome: "Juntos protegemos lo que amas.",
        "welcome-text": "¡Bienvenido a Puertas de Garaje - Su socio para puertas de garaje de alta calidad y más!",
        "navbar.brand": "Puertas de Garaje",
        "navbar.home": "Inicio",
        "navbar.store": "Productos",
        "navbar.about": "Sobre nosotros",
        "navbar.disabled": "     ",
        "navbar.language": "Idioma",
        "navbar.lang.de": "Alemán",
        "navbar.lang.es": "Español",
        "navbar.lang.en": "Inglés",
        "about.title": "Sobre Nosotros",
        "about.content": "¡Bienvenido a Puertas de Garaje en Paraguay! Entendemos que tu garaje es más que solo un lugar para estacionar tu vehículo. Es un refugio contra los elementos y el robo. Por eso ofrecemos una amplia gama de puertas de garaje de alta calidad para satisfacer sus necesidades.",
        "about.more": "Nuestras puertas seccionales no solo son convenientes y que ahorran espacio, sino que también son estéticamente atractivas. Desde elegantes puertas blancas hasta elegantes diseños grises, tenemos algo para todos los gustos. ¿Y lo mejor? Nuestras puertas no solo son hermosas, sino también duraderas y resistentes al óxido. ¡Descubre hoy cómo podemos hacer que tu garaje sea el centro de tu hogar! <br><br> <b>Tel: <b><u>+595 983 396509<u>",
        "about.contact": "Contacto",
        "card1.title": "Descubre nuestra historia",
        "card1.content": "En Puertas de Garaje se trata de más que solo soluciones para garajes. Queremos compartir nuestra historia contigo. Comenzando con una misión simple: ofrecer puertas de garaje de alta calidad que se integren perfectamente en tu estilo de vida. Hoy, seguimos en esa misión, ofreciendo una variedad de productos diseñados para superar tus expectativas. Sumérgete en nuestra historia, descubre qué nos impulsa y por qué los propietarios de viviendas en todas partes confían en nosotros.",
        "card2.title": "¿Qué hacemos?",
        "card2.content": "En Puertas de Garaje se trata de hacer que tu hogar sea más seguro y elegante. Desde elegantes puertas seccionales hasta robustos persianas enrollables, nuestros productos están diseñados para mejorar la apariencia y la función de tu propiedad. Pero no se trata solo de apariencia, nuestras puertas están construidas para resistir los elementos y mantener alejados a los visitantes no deseados, para que puedas descansar tranquilo. Con un enfoque en la calidad, la innovación y la satisfacción del cliente, estamos aquí para transformar tu garaje en un espacio que amarás.",
        "card3.title": "Contáctenos",
        "card3.content": "¿Listo para mejorar tu garaje? ¿Tienes preguntas sobre nuestros productos o servicios? Estamos aquí para ayudar. Contáctanos hoy para discutir tus necesidades y ver cómo podemos ayudarte. Ya sea que estés buscando asesoramiento, un presupuesto o simplemente una charla amistosa, estamos comprometidos a brindar el apoyo que necesitas. Comunícate por teléfono, correo electrónico o visita nuestro showroom, ¡esperamos saber de ti!",
        "footer": "© 2024 Avantgarde. Todos los derechos reservados."
    }
};

// Function to set the language based on user selection
function setLanguage(lang) {
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      element.innerHTML = translations[lang][key];
    });
    // Set the language in the cookie
    setCookie('language', lang, 30); // Remember language selection for 30 days
  }
  
  // Function to initialize language from cookie or default to English
  function initializeLanguage() {
    var lang = getCookie('language') || 'es';
    setLanguage(lang);
  }
  
  // Initially set language based on cookie or default to English
  initializeLanguage();
  
  // Add event listener to language dropdown parent element
  document.querySelector(".dropdown-menu").addEventListener("click", function(event) {
    var lang = event.target.getAttribute("data-lang");
    if (lang) {
      setLanguage(lang);
      location.reload();
    }
  });
