import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoDibujo } from '../../clases/juego-dibujo';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-dibujo-mas-listado',
  templateUrl: './dibujo-mas-listado.component.html',
  styleUrls: ['./dibujo-mas-listado.component.css']
})
export class DibujoMasListadoComponent implements OnInit {

  public listadoParaCompartir: Array<any>;
  
    constructor(public servicioJuego: JuegoServiceService) 
    { 
      this.listadoParaCompartir = new Array<any>()
    }
  
    ngOnInit() {
  
      this.listadoParaCompartir=this.servicioJuego.inicializarLista();  
    }
  
    tomarJuegoTerminado(juego: Juego)
    {
      this.listadoParaCompartir.push(juego);
      this.servicioJuego.cargarLista(this.listadoParaCompartir); 
    }

}
