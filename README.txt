## NayaSport Online Store - Descripción del Proyecto

**NayaSport Online Store** es un proyecto que busca crear una plataforma de comercio electrónico para la empresa de confección de ropa deportiva llamada Naya Sport. La tienda en línea está diseñada para brindar a los usuarios la posibilidad de explorar y comprar una variedad de productos relacionados con la ropa deportiva y accesorios.

### Tecnologías Utilizadas

La tienda en línea utiliza las siguientes tecnologías:

- **Frontend:** El frontend está desarrollado en React.js, un framework de JavaScript ampliamente utilizado para crear interfaces de usuario interactivas y modernas. Se siguen buenas prácticas de maquetación de código y se utiliza CSS para el estilado, junto con algunas librerías adicionales para optimizar los estilos y la experiencia del usuario.

- **Backend:** El backend se desarrolla en Node.js, y se implementa una arquitectura de microservicios para manejar diferentes aspectos del sistema. Se utilizan endpoints para realizar operaciones como agregar, actualizar, eliminar y consultar productos, así como para gestionar los comentarios de los usuarios.

### Características Principales

- **Listado de Productos:** La página de inicio presenta un listado de los últimos productos, incluyendo ropa deportiva y accesorios. Los productos están organizados por fecha de lanzamiento y se pueden filtrar por marca, precio y subcategorías.

- **Detalles del Producto:** Al hacer clic en un producto, los usuarios pueden ver los detalles completos del mismo, incluyendo descripción, imágenes y reseñas de otros usuarios.

- **Sistema de Comentarios:** Se implementa un sistema de comentarios que permite a los usuarios dar su opinión sobre un producto específico.

- **Sistema de Administración:** Existe un panel de administración que permite a los usuarios con el rol de administrador agregar, eliminar y actualizar productos. También pueden ver la lista completa de productos.

### Arquitectura y Base de Datos

La arquitectura basada en capas para un mejor manejo de las funcionalidades. Se implementa una arquitectura de capas para separar la lógica y los componentes. La base de datos está diseñada en base a un modelo entidad-relación y se utiliza SQL para gestionar los datos.

### Roles de Usuario

El sistema cuenta con dos roles de usuario:

- **Administrador:** Tiene acceso al panel de administración para gestionar productos. Puede agregar, eliminar y actualizar productos, así como ver la lista completa.

- **Cliente:** Puede explorar el catálogo de productos, ver detalles de productos y dejar comentarios.

### Configuración del Proyecto Localmente

Si deseas configurar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Asegúrate de tener Node.js y npm instalados en tu sistema.
3. En la carpeta raíz del proyecto, abre una terminal y ejecuta el comando `npm install` para instalar las dependencias necesarias.
4. Para ejecutar el frontend, utiliza el comando `npm start` en la terminal. Esto iniciará la aplicación en tu navegador web.
5. Si también estás trabajando en el backend, sigue las instrucciones proporcionadas en la documentación del backend para su configuración y ejecución.

Recuerda que este es un resumen general de cómo configurar el proyecto localmente. Para obtener detalles específicos sobre la configuración y las dependencias, consulta la documentación proporcionada en el repositorio del proyecto.

**Nota:** Se debe tener en cuenta que la presente descripción del proyecto es un texto plano que puede servir como base para el archivo README en el repositorio. Los detalles técnicos y las especificaciones pueden variar dependiendo de los cambios y avances en el desarrollo del proyecto.