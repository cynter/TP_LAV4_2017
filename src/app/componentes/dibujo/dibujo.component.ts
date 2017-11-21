import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegoDibujo } from '../../clases/juego-dibujo';
import { JuegoServiceService } from '../../servicios/juego-service.service';


@Component({
  selector: 'app-dibujo',
  templateUrl: './dibujo.component.html',
  styleUrls: ['./dibujo.component.css']
})
export class DibujoComponent implements OnInit {

  miJuego: JuegoDibujo;
  
    @Output()
    enviarJuego:EventEmitter<any>= new EventEmitter<any>();
  
    constructor(private miServicio?: JuegoServiceService) 
    { 
      this.miJuego = new JuegoDibujo("Dibujo","Cyn",false);
    }
  
  
    ngOnInit() {
      
      this.comienzo();
    }
  
    rendirse()
    {
      this.miJuego.Rendirse();
      this.miJuego.jugador= this.miServicio.retornarUsuario();
      this.enviarJuego.emit(this.miJuego);
    }
  
    verificar(laPalabra: string)
    {
      this.miJuego.Verificar(laPalabra);
  
      if(this.miJuego.contador==3 || this.miJuego.gano==true)
      {
      this.miJuego.jugador= this.miServicio.retornarUsuario();
      console.log(this.miJuego);
      this.enviarJuego.emit(this.miJuego);
      this.miJuego.Next();
      this.miJuego = new JuegoDibujo("Dibujo","Cyn",false);
      }
      
    }
  
    jugar()
    {
      this.comienzo();
    }
  
    comienzo()
    {
      this.miJuego.Comenzar();
      this.miJuego.contador=0;
    }

}
