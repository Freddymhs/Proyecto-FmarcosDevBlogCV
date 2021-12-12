// gatsby new my-gatsby-project https://github.com/rolwin100/rolwinreevan_gatsby_blog
// https://emojipedia.org/people/

module.exports = {
  pathPrefix: "",
  // aversiloarregla
  siteUrl: "https://www.fmarcosdev.com/",
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
    facebook: "https://www.facebook.com/FmarcosDev/",
    instagram: "https://www.instagram.com/fmarcosdev/",
    twitter: "https://twitter.com/FmarcosDev/",
    codepen: "https://codepen.io/unfixed92",
    youtube: "https://www.youtube.com/channel/UCRfSEUjO6DGbJLyGJX_8g6w?",
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
        "Este tipo de contenido muestra proyectos o temas personales",
      color: "#5F82BA",
    },
    aws: {
      name: "Amazon Web Services",
      description:
        "Amazon Web Services es una colección de servicios de computación en la nube pública que en conjunto forman una plataforma de computación en la nube, ofrecidas a través de Internet por Amazon.com.",
      color: "#EE890F",
    },
    git: {
      name: "git",
      description: "Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.",
      color: "#48CEF7",
    },
    nextjs: {
      name: "Next JS",
      description:
        "Renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de rutas y más.",
      color: "#000000",
    },
    reactjs: {
      name: "React js",
      description:
        "React es una biblioteca de JavaScript de código abierto que se utiliza para diseñar interfaces de usuario.",
      color: "#48CEF7 ",
    },
    reactnative: {
      name: "React Native",
      description:
        "React Native es un marco de aplicación móvil de código abierto creado por Facebook, Inc. Se utiliza para desarrollar aplicaciones para Android, Android TV, iOS, macOS, tvOS, Web, Windows y UWP al permitir a los desarrolladores usar React junto con las capacidades de la plataforma nativa.",
      color: "#3DD1F7",
    },
    nodejs: {
      name: "Node Js",
      description:
        "Node.js es una herramienta para ejecutar JavaScript en una variedad de entornos.",
      color: "#90c53f",
    },
    apirest: {
      name: "API REST/WEB",
      description:
        "La transferencia de estado representacional o REST es un estilo de arquitectura software para sistemas hipermedia distribuidos como la World Wide Web",
      color: "#0F4C81",
    },
    mvc: {
      name: "Movil View Controller",
      description:
        "Modelo Vista Controlador (MVC) es un estilo de arquitectura de software que separa los datos de una aplicación, la interfaz de usuario, y la lógica de control en tres componentes distintos.",
      color: "#0F4C81",
    },
    freecloud: {
      name: "Cloud Computing",
      description:
        "Tanto empresas, profesionales como usuarios utilizan cada vez más servicios en la nube (Cloud Computing). Este modelo basado en diferentes capas, maneja nueva terminología como IaaS, PaaS, SaaS, etc. que se prestan a ser confundidas unas con otras.",
      color: "#87ceeb",
    },
    sql: {
      name: "SQL DB",
      description:
        "SQL (por sus siglas en inglés Structured Query Language; en español lenguaje de consulta estructurada) es un lenguaje de dominio específico utilizado en programación, diseñado para administrar, y recuperar información de sistemas de gestión de bases de datos relacionales.",
      color: "#185E86",
    },
    nosql: {
      name: "NOSQL DB",
      description:
        "NoSQL (a veces llamado 'no solo SQL') es una amplia clase de sistemas de gestión de bases de datos que difieren del modelo clásico de SGBDR (Sistema de Gestión de Bases de Datos Relacionales) en aspectos importantes, siendo el más destacado que no usan SQL como lenguaje principal de consultas.",
      color: "#185E86",
    },
    jamstack: {
      name: "Gatsby Js/ Next Js / Electron",
      description:
        "Un marco construido sobre ReactJS para generar una aplicación web de página estática.",
      color: "#6f309f",
    },
    firebase: {
      name: "Google Firebase",
      description:
        "firebase es una plataforma de un conjunto de servicios , la mayoria gratuitos",
      color: "#ED7E0B",
    },
    css: {
      name: "CSS",
      description:
        "CSS se utiliza para diseñar el elemento HTML y dar un aspecto muy elegante a la aplicación web.",
      color: "#43ace0",
    },
    angular: {
      name: "Angular",
      description:
        "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
      color: "#D61F2F",
    },
  },
}
