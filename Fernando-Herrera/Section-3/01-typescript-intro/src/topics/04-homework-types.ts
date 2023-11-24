/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address; /**Se sugiere crear interface cuando hay objetos dentro de otros objetos */
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}

const address = superHeroe.showAddress();
console.log( address );


export {};


//https://gist.github.com/Klerith/0f7001ef92bbb4e8be16e07e1d710c48