export const pathRoutes = {
  home: "/",
  accesories: "/accesorios",
  uniforms: "/uniformes",
  uniform: "/uniforme/:id",
  customers: "/clientes",
  contact: "/contactanos",
  privacy: "/privacidad",
  custom: "/personalizados",
  login: "/login",
  admin: "/admin"
};

export const pages = [
    ["Inicio", pathRoutes.home], 
    ["Uniformes", pathRoutes.uniforms],
    ["Accesorios", pathRoutes.accesories],
    ["Clientes", pathRoutes.customers],
    ["Contáctanos", pathRoutes.contact]
];

export const apiWhatsApp = {
    text: "https://api.whatsapp.com/send?phone=573174703402&text=¡Hola!%20Estoy%20interesado/a%20en%20personalizar%20uniformes%20y%20me%20gustaría%20obtener%20más%20información%20al%20respecto.",
};

