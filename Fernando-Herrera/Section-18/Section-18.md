# Sección 18: Validaciones
Validaciones de formularios

## Temas de la Sección
1. Validaciones manuales
2. Validaciones asíncronas
3. Validar contra expresiones regulares
4. Separar la lógica de validaciones
5. Estado del formulario
6. Mensajes de error personalizados

Más adelante tendremos una sección de directivas, la cual es un excelente complemento para el manejo de errores de formularios reactivos, pero luego llegarán a ella.

Por ahora me interesa que dominemos el flujo de información y validaciones de los formularios reactivos. Recuerden que todo lo que se haga en formularios Reactivos se puede hacer con los formularios por template, pero prefiero enfocar tiempo y esfuerzo en este tipo de formularios reactivos por la facilidad y control.

## Notas Adicionales
- Dar prioridad al sentido semático, es decir, que le código sea legible ante cualquier otra cosa.
- Las validaciones se aplica en funciones, clases y expresiones regulares.
- Se recomienda tener la validaciones en un archivo de TS centralizado ('./src/app/shared/validators/validators.ts').
- Crear funciones pequeñas con características espesíficas.
- Las validaciones de ER son asincronas.
- // import * as customValidators from '../../../shared/validators/validators'; (Para importar todo)

## Commands
- 

## Recursos Adicionales
- [Repo Sec 18](https://github.com/Klerith/angular-reactive-forms/tree/fin-seccion-18)