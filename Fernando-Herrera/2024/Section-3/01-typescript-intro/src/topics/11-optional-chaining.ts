
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Andres',
}

const passenger2: Passenger = {
    name: 'Leidy',
    children: ['Maria Clara','Miguel'],
}

/**Creando Optional Chaining */

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0; /**Si viene usa la propiedad, sino es undefined (Optional Chaining) */
    // const howManyChildren = passenger.children!.length; /**Not null acertion operation */

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );