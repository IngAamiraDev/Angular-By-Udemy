/**La desestruturación, se usa para extraer piezas de algún objeto
 * Se puede aplicar:
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

/** Estructura de la desestruturación*/
const { song:anotherSong, songDuration:duration, details } = audioPlayer;
const { author } = details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

export{}