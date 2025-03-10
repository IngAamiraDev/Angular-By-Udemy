# Clean Architecture

Es un arquitectura de software diseñada por Robert C. Martin, que consiste en conjunto de capas bien definidas, las cuales están centradas en el dominio (el negocio y sus reglas).

## 1. Domain (Dominio)
Esta capa representa la lógica de negocio pura, es independiente de cualquier tecnología externa. Aquí se definen los modelos y casos de uso.

### Models/: 
Contiene las clases o interfaces que representan las entidades del negocio.
Ejemplo: User.ts, Product.ts.

### Use Case/: 
Contiene la lógica de negocio en forma de servicios o clases que manipulan los modelos. No dependen de Angular ni de ninguna tecnología externa.
Ejemplo: GetUserByIdUseCase.ts, CalculateOrderTotalUseCase.ts.

## 2. Infrastructure (Infraestructura)
Aquí se definen las implementaciones concretas de la lógica que interactúa con tecnologías externas.

#### Driven Adapters/:
Adaptadores que conectan la capa de dominio con tecnologías externas como APIs, bases de datos, almacenamiento local, etc.
Ejemplo: UserApiAdapter.ts, LocalStorageAdapter.ts.

### Helpers/: 
Contiene utilidades y funciones auxiliares reutilizables en la aplicación.
Ejemplo: DateHelper.ts, ValidationHelper.ts.

## 3. Presentation (Presentación o UI)
Esta es la capa que maneja la interfaz de usuario y la interacción con los casos de uso.

## Main/:
Contiene los componentes principales de la aplicación, como el layout o estructura base.
Ejemplo: NavbarComponent.ts, SidebarComponent.ts.

### Pages/:
Contiene las páginas específicas que componen la aplicación, como "Inicio", "Perfil", "Productos", etc.
Ejemplo: HomePageComponent.ts, UserProfilePageComponent.ts.

## Beneficios de esta Arquitectura
- Separación de responsabilidades: Facilita el mantenimiento y la escalabilidad.
- Modularidad: Cada parte del código tiene una función clara y puede evolucionar de forma independiente.
- Facilidad de prueba: Permite pruebas unitarias más simples porque el código de negocio no está acoplado a la infraestructura o la UI.
- Independencia tecnológica: La lógica de negocio no depende de Angular, lo que facilita su reutilización en otros entornos.

## Ejemplo de la estructura básica

```bash
│── src
│── app
    │── Domain/
        │── Models/
        │── Use Case/
    │── Infraestructure/
        │── Driven Adapters/
        │── Helpers/
    │── Presentation(UI)/
        │── Main/
        │── Pages/
```

## Recursos Adicionales

- [Clean Architecture](https://medium.com/bancolombia-tech/arquitectura-limpia-en-angular-17-25c129ed2f7a)
- [Repo Clean Architecture](http://github.com/weincoder/clean_arch_angular_17)