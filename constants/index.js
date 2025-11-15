// --- NAVEGACIÓN ---
const navLinks = [
    {
        id: "carta",
        title: "Nuestra Carta",
    },
    {
        id: "nosotros",
        title: "Nosotros",
    },
    {
        id: "historia",
        title: "Tradición",
    },
    {
        id: "contacto",
        title: "Contacto",
    },
];

// --- BEBIDAS (CAFÉS, JUGOS, ETC.) ---
const beverageLists = [
    {
        name: "Espresso Peruano",
        country: "Origen: Villa Rica",
        detail: "Shot concentrado de nuestro mejor grano.",
        price: "S/ 7.00",
    },
    {
        name: "Café Pasado",
        country: "Clásico Limeño",
        detail: "Método tradicional, sabor balanceado.",
        price: "S/ 8.00",
    },
    {
        name: "Cappuccino",
        country: "Espumoso",
        detail: "Espresso, leche y espuma de leche.",
        price: "S/ 10.00",
    },
    {
        name: "Jugo de Naranja",
        country: "Fresco",
        detail: "Jugo de naranjas Huando recién exprimido.",
        price: "S/ 12.00",
    },
    {
        name: "Chocolate Caliente",
        country: "Cusqueño",
        detail: "Con auténtico chocolate de taza.",
        price: "S/ 12.00",
    },
];

// --- COMIDA (SÁNDWICHES Y POSTRES) ---
const foodLists = [
    {
        name: "Pan con Chicharrón",
        country: "El Clásico",
        detail: "Con camote frito y sarza criolla en pan francés.",
        price: "S/ 16.00",
    },
    {
        name: "Butifarra",
        country: "Tradicional",
        detail: "Jamón del país, lechuga y sarza criolla.",
        price: "S/ 15.00",
    },
    {
        name: "Torta de Chocolate",
        country: "Receta de Casa",
        detail: "Bizcocho húmedo con fudge casero.",
        price: "S/ 14.00",
    },
    {
        name: "Alfajor de Manjarblanco",
        country: "Dulce Limeño",
        detail: "Dos galletas finas con manjarblanco y azúcar impalpable.",
        price: "S/ 8.00",
    },
    {
        name: "Cheesecake de Maracuyá",
        country: "Frutal",
        detail: "Base crocante con una salsa de maracuyá fresca.",
        price: "S/ 14.00",
    },
];

// --- IMÁGENES DE CLIENTES (SIN CAMBIOS) ---
const profileLists = [
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

// --- CARACTERÍSTICAS DE LA CAFETERÍA ---
const featureLists = [
    "Café de Chanchamayo",
    "Sándwiches Criollos",
    "Postres Tradicionales",
    "Ambiente Acogedor",
];

// --- MÁS DETALLES / BENEFICIOS ---
const goodLists = [
    "Ingredientes Frescos del Día",
    "Tostado Local Semanal",
    "Jugos de Pura Fruta",
    "Recetas de Familia",
];

// --- INFORMACIÓN DE LA TIENDA ---
const storeInfo = {
    heading: "Nuestro Local",
    address: "Calle Schell 321, Miraflores, Lima 15074, Perú",
    contact: {
        phone: "(01) 447-1234",
        email: "hola@elcafecitodelima.com",
    },
};

// --- HORARIOS DE ATENCIÓN ---
const openingHours = [
    { day: "Lun–Vie", time: "7:00am – 9:00pm" },
    { day: "Sáb", time: "8:00am – 10:00pm" },
    { day: "Dom", time: "8:00am – 8:00pm" },
];

// --- REDES SOCIALES (SIN CAMBIOS) ---
const socials = [
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

// --- CARRUSEL DE IMÁGENES / PRODUCTOS DESTACADOS ---
const sliderLists = [
    {
        id: 1,
        name: "El Pan con Chicharrón",
        image: "/images/slider-chicharron.png", // (Imagen sugerida)
        title: "El desayuno limeño perfecto",
        description:
            "Nuestro chicharrón crujiente se sirve en pan francés fresco, con camote frito y sarza criolla recién preparada. Pídelo a cualquier hora.",
    },
    {
        id: 2,
        name: "Café de Origen",
        image: "/images/slider-cafe.png", // (Imagen sugerida)
        title: "Directo de Chanchamayo",
        description:
            "Seleccionamos y tostamos localmente los mejores granos de la selva central peruana, garantizando un sabor y aroma incomparables.",
    },
    {
        id: 3,
        name: "Postres Limeños",
        image: "/images/slider-postres.png", // (Imagen sugerida)
        title: "El dulce sabor de la tradición",
        description:
            "No te vayas sin probar nuestra torta de chocolate húmeda, nuestros alfajores o el clásico cheesecake de maracuyá.",
    },
    {
        id: 4,
        name: "Tu Punto de Encuentro",
        image: "/images/slider-ambiente.png", // (Imagen sugerida)
        title: "El ambiente ideal en Miraflores",
        description:
            "Un espacio tranquilo y acogedor, perfecto para una reunión de trabajo, una tarde de estudio o una buena conversación con amigos.",
    },
];

// --- EXPORTACIONES ---
export {
    navLinks,
    beverageLists, // Renombrado de cocktailLists
    foodLists,     // Renombrado de mockTailLists
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
};