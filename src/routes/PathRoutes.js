export const pathRoutes = {
  home: "/",
  accesories: "/accesorios",
  uniforms: "/uniformes",
  uniform: "/uniforme/:id",
  offers: "/ofertas",
  sizes: "/tallas",
};

export const pages = [
    ["Inicio", pathRoutes.home], 
    ["Uniformes", pathRoutes.uniforms],
    ["Accesorios", pathRoutes.accesories],
    ["Ofertas", pathRoutes.offers],
    ["Guía de tallas", pathRoutes.sizes]
];

export const apiWhatsApp = {
    text: "",
  };