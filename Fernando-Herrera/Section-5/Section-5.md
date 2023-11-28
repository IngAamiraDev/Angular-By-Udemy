# Sección 5: Expandir Bases de Angular

## Temas de la sección
1. Profundizar un poco más en los módulos
2. FormsModule
3. ngModel
4. @Inputs
5. @outputs
6. Servicios
7. Métodos en servicios
8. Depuraciones

## Algunas notas importantes
- Componentes: Piezas pequeñas
- Interfaces: Para que los objetos tengan alguna apariencia
- Páginas = Componentes
- Los nombres de los componentes se recomienda que empiecen con la palabra "app-"

Ejemplo:
```TypeScript
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'name.component.html'
})
```
- Algunas opciones que se pueden usar con el *ngfor:
    - let i = index -> Para obtener el índice
    - let isEven = even -> Para saber si es par
    - let isOdd = odd -> Para saber si es impar

- ngClass: Añadir clases de manera condicional
- ( ) -> Son evetos.
- [ ] -> Son atributos.
- [( )] -> Two way data binding.
```html
  <input
    type="text"
    [(ngModel)]="character.name"
    name="name"
    class="form-control mb-2"
    placeholder="Nombre">
```
- Al asignar [ ] en algún componente de Html Angular se encarga de administrarlo

Ejemplo:

```TypeScript
[class]="list-group-item"
```

- @Input()  -> Para recibir comunicaciones entre componentes. (e. g. Recibir del padre)

Ejemplo:

```TypeScript
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  onDeleteCharacter( id?: string ):void {
    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
```

- @Output() -> Para emitir comunicaciuones entre componentes. (e. g. Emitir eventos  al padre)

Ejemplo: 

```TypeScript
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 0
  };
  emitCharacter():void {
    if ( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}
```
- Services: Singleton, se maneja bajo DI

Ejemplo:

```TypeScript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
  constructor () { }
};
```
- UUID: Para generar identificadores únicos
  - Ejecutar `npm i uuid` -> Para instalar UUID
  - Ejecutar `npm i --save-dev @types/uuid` -> Para agregar una nueva declaración o dependencia de desarrollo en JS
  - Si por alguna razón continua error de importación, Ejecutar desde el teclado Ctrl + Shift + P -> buscar: Reload Windows
- DT: En TypeScript significa declaraciones


## Comandos utilizados

- `ng g m <name-modulo>` -> Para generar módulos
- Ctrl + Space then, `a- ...` + Tab -> (e.g. a-component)

## Recuros Adicionales
- [Repo Referencia](https://github.com/Klerith/angular-bases/tree/fin-seccion-5)
- [Bootstrap Variants](https://getbootstrap.com/docs/5.3/components/list-group/#variants)
- [Services](https://angular.io/guide/singleton-services)
- [UUID](https://www.npmjs.com/package/uuid)