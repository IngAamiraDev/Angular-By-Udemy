# Sección 20: LifeCycle Hooks
Ciclo de vida de los componentes

## Temas de la Sección
Esta sección está enfocada en hablar y explicar todos los pasos del ciclo de vida de un componente (también se aplican a las directivas que veremos después).

No es una sección muy larga, pero mi objetivo es guiarlos en la documentación oficial y hacer un par de ejemplos con ellos. Luego de esta sección hay más aplicaciones que hacen uso de ciertos pasos del ciclo de vida de los componentes que comprenderemos gracias a esta sección.

También estos pasos, son conocidos como Hooks, que posiblemente haz escuchado en React, pero funcionan diferente, pero comparten la similitud de que son Métodos (o funciones) que se ejecutan cuando algo sucede en un componente.

## Notas Adicionales
- Métodos que se llaman de manera automática
- Normalmente no se utilizan todos
- Van en los implements
- A los observables se les agrega al final un "$" (e.g. interval$)

## LifeCycle Hooks
- ngOnChanges: Antes de cualquier cambio a una propiedad
- ngOnInit: Justo después del constructor
- ngDoCheck: Se llama cada vez que una propiedad del componente o directiva es revisada
    - ngAfterContentInit: Después de ngOnInit, cuando el componente es inicializado.
    - ngAfterContentChecked: Se llama después de cada revisión del componente o directiva.
- ngAfterViewInit: Después del ngAfterContentInit
    - ngAfterViewChecked: Llamado después de cada revisión de las vistas del componente o directiva.
- ngOnDestroy: Se llama justo antes de que el componente o directiva va a ser destruida.


## Commands
- 

## Recursos Adicionales
- [Repo Sec 20](https://github.com/Klerith/angular-lifecycle-hooks)
- [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)