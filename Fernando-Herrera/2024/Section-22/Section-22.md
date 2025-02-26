# Sección 22: Standalone Components

## Temas de la Sección
1. ¿Qué son?
2. ¿Para qué sirven?
3. ¿Cómo usarlos?
4. ¿Cómo cargarlos de forma perezosa?
5. ¿Cómo conectarlos entre sí?
6. ¿Cómo integrarlos en módulos y componentes tradicionales?

### Requisito:
- Angular 14 > (Beta)
- Angular 15+

## Notas Adicionales
- Componente con todo lo necesario para funcionar
- Componente/Modulo
- Puedan sobrevivir por si mismo
- "CommonModule" -> Permite hacer uso de las directivas de Angular (ngIf, ngFor)
- Si se va a importar un Standalone Component en componentes tradicionales se debe de llamar desde el módulo principal en los imports.
- Si se va a importar un módulo tradicional en uno Standalone Component, se debe agregar el Standalone en true y los imports requeridos

## Commands
- `npm i dotenv --save-dev` -> Dotenv para las variables de entorno
- `npm i --save-dev @types/mapbox-gl` -> Install Mapbox GL

## Recursos Adicionales
- [Repo Sec 22](https://github.com/Klerith/angular-mapbox/tree/fin-seccion-22)
**Nota:** Revisar el README.md