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
            "../../assets/dibujo/picapiedras.jpg",
            "../../assets/dibujo/dumbo.jpg",
            "../../assets/dibujo/gargolas.jpg",
            "../../assets/dibujo/garfield.jpg",
            "../../assets/dibujo/snoopy.jpg",
            "../../assets/dibujo/piolin.jpg",
            "../../assets/dibujo/donald.jpg",
            "../../assets/dibujo/hijitus.jpg",
            "../../assets/dibujo/sonic.jpg",
            "../../assets/dibujo/dexter.jpg",
            "../../assets/dibujo/coyote.jpg",
            "../../assets/dibujo/goku.jpg",
            "../../assets/dibujo/pluto.jpg"
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