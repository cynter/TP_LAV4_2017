export class JuegoDibujo{

    dibujoAdivinar: Array<string> = new Array<string>();
    dibujoAdivinado: Array<string> = new Array<string>();
    dibujoAJugar: string;
    dibujoDeUsuario: string = '';
    gano: boolean;
    contador: number = 0;
    numeroRandom: number = 0;
    nombre: string = '';
    jugador: string = '';
    resultado: string = '';

    constructor(unNombre?: string, jugador?: string, gano?: boolean) {
        this.nombre = unNombre;
        this.jugador = jugador;
        this.gano = gano;
    }

    Comenzar() {
        this.dibujoAdivinado = [
            "PICAPIEDRAS",
            "DUMBO",
            "GARGOLAS",
            "GARFIELD",
            "SNOOPY",
            "PIOLIN",
            "DONALD",
            "HIJITUS",
            "SONIC",
            "DEXTER",
            "COYOTE",
            "GOKU",
            "PLUTO"];

        this.dibujoAdivinar = [
            "../TP_LAV4_2017/assets/dibujo/picapiedras.jpg",
            "../TP_LAV4_2017/assets/dibujo/dumbo.jpg",
            "../TP_LAV4_2017/assets/dibujo/gargolas.jpg",
            "../TP_LAV4_2017/assets/dibujo/garfield.jpg",
            "../TP_LAV4_2017/assets/dibujo/snoopy.jpg",
            "../TP_LAV4_2017/assets/dibujo/piolin.jpg",
            "../TP_LAV4_2017/assets/dibujo/donald.jpg",
            "../TP_LAV4_2017/assets/dibujo/hijitus.jpg",
            "../TP_LAV4_2017/assets/dibujo/sonic.jpg",
            "../TP_LAV4_2017/assets/dibujo/dexter.jpg",
            "../TP_LAV4_2017/assets/dibujo/coyote.jpg",
            "../TP_LAV4_2017/assets/dibujo/goku.jpg",
            "../TP_LAV4_2017/assets/dibujo/pluto.jpg"
        ];
        this.Next();
    }

    Next() {
        this.numeroRandom = Math.floor((Math.random() * 12) + 0);
        this.dibujoAJugar = this.dibujoAdivinar[this.numeroRandom];

    }

    Verificar(unaPalabra: string) {
        if (unaPalabra != '' && unaPalabra != null) {

            unaPalabra = unaPalabra.toUpperCase();
            console.log(unaPalabra);
            console.log(this.dibujoAdivinado[this.numeroRandom])

            if (unaPalabra === this.dibujoAdivinado[this.numeroRandom]) {
                this.gano = true;
                this.resultado = "GANO!"
                this.contador = 0;
                console.log(this);
            }
            else {
                this.contador++;
            }

            if (this.contador == 3) {
                this.gano = false;
                this.resultado = "PERDIO!"
                this.Next();
            }
        }
    }

    Rendirse() {
        this.gano = false;
        this.resultado = "PERDIO!"
        this.Next();
    }





}