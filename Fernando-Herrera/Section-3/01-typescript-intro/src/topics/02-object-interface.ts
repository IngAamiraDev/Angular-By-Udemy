
/**Arreglos de String */
//const skills: string[] = ['Bash','Counter','Healing']; 

/**Creando Interfaces:
 * Permite indicar a los obejetos cómo pueden lucir o qué caracteristicas pueden tener
 */
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; /**(?) Opcional */
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
};

strider.hometown = 'Rivendell';

console.table(strider);

export{};