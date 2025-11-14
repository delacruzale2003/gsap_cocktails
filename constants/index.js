const navLinks = [
    {
        id: "coffee", // Cambiado de 'cocktails' a 'coffee'
        title: "Nuestro Café", // Cambiado de 'Cocktails' a 'Nuestro Café'
    },
    {
        id: "about",
        title: "Nosotros", // Cambiado de 'About Us' a 'Nosotros'
    },
    {
        id: "work",
        title: "Nuestra Historia", // Cambiado de 'The Art' a 'Nuestra Historia'
    },
    {
        id: "contact",
        title: "Contacto", // Cambiado de 'Contact' a 'Contacto'
    },
];

const cocktailLists = [ // Ahora será la lista de Cafés
    {
        name: "Espresso",
        country: "Clásico", // Origen o característica
        detail: "Shot de café puro",
        price: "S/ 6.00",
    },
    {
        name: "Americano",
        country: "Suave",
        detail: "Espresso con agua caliente",
        price: "S/ 7.00",
    },
    {
        name: "Latte",
        country: "Cremoso",
        detail: "Espresso y leche vaporizada",
        price: "S/ 9.00",
    },
    {
        name: "Cappuccino",
        country: "Espumoso",
        detail: "Espresso, leche y espuma",
        price: "S/ 9.00",
    },
    {
        name: "Mocha",
        country: "Dulce",
        detail: "Espresso, chocolate y leche",
        price: "S/ 11.00",
    },
];

const mockTailLists = [ // Ahora será la lista de Postres y Dulces
    {
        name: "Galleta de Pistacho",
        country: "Artesanal",
        detail: "Con trozos de pistacho",
        price: "S/ 8.00",
    },
    {
        name: "Croissant de Almendras",
        country: "Francés",
        detail: "Relleno de crema de almendras",
        price: "S/ 10.00",
    },
    {
        name: "Cheesecake de Arándanos",
        country: "Frutal",
        detail: "Con salsa de arándanos",
        price: "S/ 12.00",
    },
    {
        name: "Torta de Chocolate",
        country: "Intenso",
        detail: "Bizcocho húmedo con fudge",
        price: "S/ 12.00",
    },
];

const profileLists = [ // Se mantienen los paths, pero ahora podrían ser imágenes de personas disfrutando café
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [ // Características de la cafetería/café
    "Granos de Origen",
    "Baristas Expertos",
    "Ambiente Acogedor",
    "Postres Frescos Diarios",
];

const goodLists = [ // Más detalles/beneficios
    "Ingredientes Seleccionados",
    "Tostado Artesanal",
    "Preparación al Momento",
    "Variedad de Métodos",
];

const storeInfo = { // Información de la cafetería
    heading: "Dónde Encontrarnos", // Cambiado
    address: "789, Calle del Café. #101, Lima, Perú 15001", // Cambiado
    contact: {
        phone: "(01) 234-5678", // Cambiado
        email: "hola@tucafeteria.com", // Cambiado
    },
};

const openingHours = [ // Horarios
    { day: "Lun–Jue", time: "7:00am – 9pm" }, // Cambiado
    { day: "Vie", time: "7:00am – 10pm" }, // Cambiado
    { day: "Sáb", time: "8:00am – 10pm" }, // Cambiado
    { day: "Dom", time: "8:00am – 8pm" }, // Cambiado
];

const socials = [ // Redes sociales (se mantienen los iconos, pero la URL podría ser la de la cafetería)
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const sliderLists = [ // Items para un carrusel de imágenes/productos de café
    {
        id: 1,
        name: "Latte Art Maestro", // Cambiado
        image: "/images/drink1.png", // Podrías cambiar estas imágenes a fotos de café
        title: "El arte en cada taza", // Cambiado
        description:
            "Nuestros baristas crean diseños únicos en cada latte, combinando sabor y belleza. Disfruta de una experiencia visual y gustativa inigualable.", // Cambiado
    },
    {
        id: 2,
        name: "Café de Origen Peruano", // Cambiado
        image: "/images/drink2.png",
        title: "Sabores auténticos de la tierra", // Cambiado
        description:
            "Seleccionamos los mejores granos de las regiones cafetaleras de Perú, ofreciendo un perfil de sabor rico y distintivo en cada sorbo.", // Cambiado
    },
    {
        id: 3,
        name: "Postres Caseros", // Cambiado
        image: "/images/drink3.png",
        title: "El acompañamiento perfecto", // Cambiado
        description:
            "Cada día horneamos una variedad de postres frescos, desde galletas crujientes hasta tartas cremosas, ideales para tu café.", // Cambiado
    },
    {
        id: 4,
        name: "Ambiente para Trabajar", // Cambiado
        image: "/images/drink4.png",
        title: "Tu espacio ideal", // Cambiado
        description:
            "Ofrecemos un ambiente tranquilo y con Wi-Fi, perfecto para estudiar, trabajar o simplemente relajarte con una buena taza de café.", // Cambiado
    },
];

export {
    navLinks,
    cocktailLists, // Ahora lista de cafés
    mockTailLists, // Ahora lista de postres
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
};