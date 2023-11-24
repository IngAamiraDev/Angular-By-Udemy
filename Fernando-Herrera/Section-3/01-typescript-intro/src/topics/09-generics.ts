
/**Creando Genericos
 * (<T>) Norma general
 */
export function whatsMyType<T>( argument: T ): T {

    return argument;
}

/**Explícito para darle prioridad a los retornos */
const amIString = whatsMyType<string>('Hola Mundo');
const amINumber = whatsMyType<number>(100);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );