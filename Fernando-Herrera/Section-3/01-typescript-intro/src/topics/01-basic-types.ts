
/**Para las variables */ 
let name: string = 'IngAamira';
name = 'Hello Word';

let num: number = 123;
num = 123;

let hpPoints: number | string | 'FULL' = 95;
hpPoints = 'Hello'
hpPoints = 'FULL'


/**Para constantes */
const isAlive: boolean = true;


console.log({
    name, num, hpPoints, isAlive
})


export{}; /*Warning: Cannot redeclare block-scoped variable 'name'*/