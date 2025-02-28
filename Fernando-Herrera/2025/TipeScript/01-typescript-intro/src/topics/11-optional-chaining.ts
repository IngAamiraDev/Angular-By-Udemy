
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

const returnChildrenNumber = ( passenger: Passenger ): number => {

    const howManyChildren = passenger.children?.length || 0; //Optional Chaining (?)
    // const howManyChildren = passenger.children!.length; //Non-null assertion operator (!)

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );