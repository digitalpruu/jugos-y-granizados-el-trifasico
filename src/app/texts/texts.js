const title = "Jugos y Granizados El Trifásico";
const email = "armandorodriguez1103@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573208813675";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Jugos y Granizados El Trifásico es tu destino ideal para disfrutar de una amplia gama de jugos, granizados, tintos y confitería. Nos enorgullecemos de ofrecer productos frescos y deliciosos que satisfacen todos tus antojos y te brindan una experiencia refrescante y única.",
        description2: "Nos dedicamos a proporcionarte los mejores sabores en cada sorbo. Ya sea que busques un granizado revitalizante o un jugo natural, en El Trifásico tenemos lo que necesitas para deleitar tu paladar y acompañar tus momentos más especiales."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Refresca tu día",
            p2: "con los mejores jugos y granizados"
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100006603399788&mibextid=ZbWKwL",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
