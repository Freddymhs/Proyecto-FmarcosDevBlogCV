// gatsby new my-gatsby-project https://github.com/rolwin100/rolwinreevan_gatsby_blog
// https://emojipedia.org/people/

module.exports = {
  pathPrefix: "",
  siteUrl: "https://www.fmarcosdev.com",
  siteTitle: "Freddy Huaylla",
  siteDescription: "Sitio web de un programador desconocido",
  author: "Freddy Huaylla",
  postsForArchivePage: 3,
  defaultLanguage: "es",
  disqusScript: process.env.DISQUS_SCRIPT || "",

  pages: {
    home: "/",
    portfolio: "portfolio",
    blog: "blog",
    contact: "contact",
    resume: "resume",
    tag: "tags",
  },

  social: {
    github: "https://github.com/uNFixeD92/",
    facebook: "https://www.facebook.com/ProyectosFmarcosDev/",
    instagram: "https://www.instagram.com/fmarcosdev/",
    twitter: "https://twitter.com/FmarcosDev/",
    rss: "/rss.xml",
  },

  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/8568d3e5-956b-406f-9158-8e493da99efa",

  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "G-9FL5R42WJ0",

  tags: {
    fmarcosdev: {
      name: "fmarcosdev",
      description:
        "Este tipo de contenido muestra proyectos o temas personales 🧑‍💼",
      color: "#5F82BA",
    },
    reactnative: {
      name: "reactnative",
      description:
        "React Native es un marco de aplicación móvil de código abierto creado por Facebook, Inc. Se utiliza para desarrollar aplicaciones para Android, Android TV, iOS, macOS, tvOS, Web, Windows y UWP al permitir a los desarrolladores usar React junto con las capacidades de la plataforma nativa.",
      color: "#5F82BA",
    },
    apirest: {
      name: "apirest",
      description:
        "La transferencia de estado representacional o REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web",
      color: "#5F82BA",
    },
    bootstrap: {
      name: "bootstrap",
      description:
        "Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.",
      color: "#5F82BA",
    },
    mysql: {
      name: "mysql",
      description:
        "MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos.",
      color: "#5F82BA",
    },
    php: {
      name: "php",
      description:
        "PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.​",
      color: "#5F82BA",
    },
    firebase: {
      name: "firebase",
      description:
        "firebase es una plataforma de un conjunto de servicios , la mayoria gratuitos",
      color: "#2870271",
    },
    javascript: {
      name: "javascript",
      description:
        "JavaScript es un lenguaje de programación orientado a objetos que se utiliza junto con HTML y CSS para brindar funcionalidad a las páginas web.",
      color: "#f0da50",
    },
    nodejs: {
      name: "Node.js",
      description:
        "Node.js es una herramienta para ejecutar JavaScript en una variedad de entornos.",
      color: "#90c53f",
    },
    reactjs: {
      name: "reactjs",
      description:
        "React es una biblioteca de JavaScript de código abierto que se utiliza para diseñar interfaces de usuario.",
      color: "#61dbfa",
    },
    gatsby: {
      name: "Gatsby.js",
      description:
        "Un marco construido sobre ReactJS para generar una aplicación web de página estática.",
      color: "#6f309f",
    },
    html: {
      name: "HTML",
      description:
        "Un lenguaje de marcado que impulsa la web. Todos los sitios web utilizan HTML para estructurar el contenido.",
      color: "#dd3431",
    },
    css: {
      name: "css",
      description:
        "CSS se utiliza para diseñar el elemento HTML y dar un aspecto muy elegante a la aplicación web.",
      color: "#43ace0",
    },
    python: {
      name: "python",
      description:
        "Un lenguaje de programación de propósito general que se usa ampliamente para desarrollar varias aplicaciones.",
      color: "#f9c646",
    },
  },
}
