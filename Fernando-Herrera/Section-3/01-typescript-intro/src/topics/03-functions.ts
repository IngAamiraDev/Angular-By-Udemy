
/**Creando Funciones
 * Se debe poner el tipo de dato a los argumentos, esto obedece por la configuración estricta de TS
 */

function addNumbers( a: number, b:number ) {
    return a + b;
}

/**Creando Lamdas (Arrow functions) */

const addNumberArrow = ( a: number, b:number ):string => {
    return `${ a + b }`;
}

/**Creando una función con argumentos opcionales */

function multiplay ( firtsNumber: number, secondNumber?: number, base: number = 2 ) {
    return firtsNumber * base;
}

/**
const result: number = addNumbers(1, 2)
const result2: string = addNumberArrow(1, 2)
const multiplayResult: number = multiplay(5)
console.log({result, result2, multiplayResult})
 */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {
    
    character.hp += amount;

}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}

healCharacter( strider, 10 );
healCharacter( strider, 30 );

strider.showHp();

export{};