
/**Creando Clases */
export class Person {
    
    /**Property
    public name: string;
    private address: string;
    */
    
    /**Métodos */
    /**Se usa para DI */
    constructor( 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No Address'
    ) {}

};

/**Herencia */
// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number, 
//         public realName: string,
//     ) {
//         super( realName, 'New York' );
//     }

// }


/**Priorizar la composición sobre la herencia. Esto se hace para evitar los extends */
export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string,
        public person: Person,
    ) {
        
        // this.person = new Person(realName);

    }

}    

const tony = new Person('Tony','Stark','New York');
const ironman = new Hero('Ironman',45,'Tony',tony);

console.log(ironman)