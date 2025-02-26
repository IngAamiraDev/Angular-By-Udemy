# Sección 11: PipesApp - PrimeNG
Angular pipes

## Temas de la Sección

¿Qué veremos en esta sección?

Esta sección es de mis favoritas del curso, veremos temas sobre Pipes y transformación visual de la data, pero también decidí mezclarlo con otro tema muy solicitado que es PrimeNG (Más adelante hay también una sección con muchos componentes de Angular Material), pero esta sección pretende enseñarles muchas cosas interesantes, aparte de los Pipes de Angular

Este es un breve listado de los temas fundamentales:

1. Todos los Pipes de Angular a la fecha
    - **a.** Uppercase
    - **b.** Lowercase
    - **c.** TitleCase
    - **d.** Date
    - **e.** Decimal
    - **f.** Currency
    - **g.** Percent
    - **h.** i18nSelect
    - **i.** i18Plural
    - **j.** KeyValue
    - **k.** Json
    - **l.** Async
2. PrimeNG
3. Módulo especializado para módulos de PrimeNG

PrimeNG es un paquete de componentes estilizados que contienen funcionalidades basadas en Angular para crear aplicaciones elegantes, hermosas y funcionales rápidamente.

Recuerden que PrimeNG no es el único, hay muchos pero la mayoría funcionan de formas similares, importando módulos, por eso mi objetivo de entrenarlos bastante bien con el manejo de módulos en todo momento para que nos familiaricemos con esta métodología.

## Notas Adicionales
- Pipe, es un objeto que permite transformar de manera visual la información que se muestra en pantalla sin mutar la data real.
- Se recomienda crear módulos personalizados toda vez que se vayan a usar en la aplicación y hacer el export para su uso.

```typescript
//typescript
import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
  ]
})
export class PrimeNgModule { }
```

- Si algún componente tiene la palabra Module, va en los imports de módulo principal
- i18n. Sistemas de internacionalización



## Recursos Adicionales
- [Repo Countries Sec 11](https://github.com/Klerith/angular-pipe-app/tree/fin-seccion-11)
- [Pipes in Angular](https://angular.io/api?query=pipe)
- [PrimeNG](https://primeng.org/)
- [PrimeFlex](https://primeflex.org/)