
const name: string = 'Strider'; // "const" No cambia la variable
let hpPoints: number | 'FULL' = 95; // "let" la variable puede cambiar. "|" se puede cammbiar por diferentes tipos de datos
const isAlive: boolean = true

hpPoints = 'FULL';

console.log({
    name, hpPoints, isAlive
})

export {};