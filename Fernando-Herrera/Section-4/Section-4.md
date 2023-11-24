# Sección 4: Angular
Angular es un framework de desarrollo de aplicaciones web desarrollado y mantenido por Google. Es un framework de código abierto y se utiliza para construir aplicaciones web de una sola página (SPA) y aplicaciones empresariales complejas. Angular proporciona un conjunto de herramientas y bibliotecas que facilitan el desarrollo, la prueba y el mantenimiento de aplicaciones web robustas y escalables.

## Framework
- Marco de trabajo estandarizado
- Viene con todo lo que se necesita
- Es modular

## Características clave de Angular

### Componentes
Es un elemento que compone a un todo y si lo llevamos a un punto de vista anatómico del ser humano, este puede ser un brazo, una pierna, etc.

Para este caso, un componente en Angular contiene:
- Un archivo que será nuestro Template (**app.component.html**), el cual es nuestro HTML, que es el que se va a visualizar en la interfaz de usuario, la vista o en términos más simples lo que vas a ver en la página. 

- Un archivo de lógica, la cual es la que pondremos en un archivo .ts (**app.component.ts**), ese archivo debe incluir una clase y esta es la que va a contener las propiedades que se van a usar en la vista (HTML) y los métodos que será las acciones que se ejecutarán en la vista. En este archivo de lógica también se incluye una metadata, que es definida con un decorador,  que identifica a Angular como un componente.

- Un archivo para el CSS (podemos usar un preprocesador como SASS o LESS, por ejemplo, **app.component.css**), donde incluiremos los estilos, lo que nos ayuda a hacer bonita nuestra aplicación.

### Servicios
Los servicios en Angular son objetos reutilizables que realizan funciones específicas y se pueden inyectar en componentes y otros servicios. Básicamente son lugares centrales de información.

### Directivas
Las directivas en Angular permiten extender el HTML con comportamientos personalizados. Angular incluye directivas integradas y permite la creación de directivas personalizadas. 

**Estas pueden ser:**
- **Directivas de Componentes:** Html con algunas funcionalidades
- **Directivas Estructurales:** Modifican el DOM del Html
- **Directivas de Atributos:** Cambian la apariencia

### Rutas
Angular proporciona un sistema de enrutamiento que permite la navegación entre vistas y la gestión de la aplicación de una sola página. Muestra diferentes componentes basadados en el URL del navegador web 

### Módulos
Las aplicaciones Angular están organizadas en módulos, que son bloques funcionales que contienen componentes, servicios y otros recursos relacionados.

**Estas pueden ser:**
- Productos
- Clientes
- Proveedores

## Actualización a partir de la V17
Por defecto los proyectos trabajan sin módulos (module-less), sin emabrgo, se puede configurar de la manera tradicional:
- Ejecutar `ng new <name-project> --standalone false`

## Recursos Adicionales
- [Repo referencia](https://github.com/Klerith/angular-bases)