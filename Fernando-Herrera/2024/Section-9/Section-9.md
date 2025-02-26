# Sección 9: Country SPA

## Temas de la Sección
1. Rutas
2. RouterLink y RouterLinkActive
3. Componentes especializados
4. DebounceTime
5. Inputs
6. SwitchMaps
7. Consumo de APIs
8. Tipado de datos
9. Menú de aplicación

En esta sección daremos los fundamentos de una aplicación SPA (Single Page Application), y luego, las seguiremos haciendo pero mediante carga perezosa (lazyload), esta es otra aplicación real que nos enseñara mucho de cómo funciona Angular y como la información fluye en ella.

## Notas Adicionales
- "app.module.ts" -> Configuración de la aplicación
- Crear módulos. `ng g m "name-module"` -> (e.g. `ng g m shared`)
- forRoot( ) -> Ruta principal o raíz de la aplicación. (e.g /home, /about)
- forChild( ) -> Rutas hijas de la aplicación. (e.g. countries/by/...)
- En Angular es común ver más de un router
- Se recomienda tener un módulo de rounting para la configuracion de las rutas hijas
- "<router-outlet></router-outlet>" -> Renderizar la aplicación independientemente de la ruta en la que se encuentre
- "routerLink" -> Navegar entre las diferentes páginas de la aplicación
- "routerLinkActive" -> Inciar al usuario en cuál página está pisicionado
- "[routerLinkActiveOptions]="{ exact: true }"" -> Indicar el path exacto
- Lazyload -> Carga perezosa de módulos
- "loadChildren" -> Agregar los módulos requeridos


## Recursos Adicionales
- [Repo Countries](https://github.com/Klerith/angular-countries/tree/fin-seccion-9)
- [Restcountries](https://restcountries.com/)