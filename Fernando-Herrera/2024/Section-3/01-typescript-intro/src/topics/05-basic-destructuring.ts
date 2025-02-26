/**La desestructuración, se usa para extraer piezas de algún objeto/arreglo.
 * Se puede aplicar en:
     * Objetos
     * Importaciones y exportaciones en los Módulos
     * Argumentos de las funciones
     * Cualquier archivo, objeto, arreglo
 */

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: { /** Ctrl + "." Autocompleta */
        author: 'Ed Sheeran',
        year: 2015
    }
}

//const song = 'New Song';

/** Desestructuración de Objetos*/
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

/*
console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);
*/

/**Desestructuración de Arreglos */
//const [Goku, Vegeta, Trunks]: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , Trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3: ', Trunks);

export{}