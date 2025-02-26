# Sección 10: Mejoras y funcionalidades Extra para Country SPA (Optimizaciones RxJs)

## Temas de la Sección
Aquí continuaremos la aplicación de países, pero enfocados en la parte de las sugerencias, debounce y mantener el estado de las consultas, este es un breve listado de los temas fundamentales:

1. ngClass y diferentes formas de manipular clases
2. CSS condicionales
3. Optimizaciones a peticiones HTTP
4. Debounce manual mediante RxJs
5. LocalStorage
6. Ideas de Store
7. Re-utilización de componentes
8. Varios operadores de RxJS aplicados

## Notas Adicionales
- **Debounce** -> Se usa cuando el usuario deja de escribir para lanzar la aplicación, por ejemplo en las barras de búsquedas
```html
//html
<input
  type="text"
  class="form-control"
  [value]="initialValue"
  [placeholder]="placeholder"
  (keyup)="onKeyPress( txtInput.value )"
  #txtInput
```
```typescript
//typescript
private debouncer: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    });
  }
```

- ngOnDestroy -> Un método cuando la instancia del componente es destruido
- Siempre se requiere utilizar el ngOnDestroy toda vez que se usa un subscribe


## Recursos Adicionales
- [Repo Countries Sec 10](https://github.com/Klerith/angular-countries/tree/fin-secicon-10)
