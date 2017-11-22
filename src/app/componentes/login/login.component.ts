import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { JuegoServiceService } from '../../servicios/juego-service.service';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  @Output()
  enviarUsuario:EventEmitter<any>= new EventEmitter<any>();

  usuario:string = '';
  clave= '';
  logeando=true;

  constructor(private route: ActivatedRoute, private router: Router, public miServicio?: JuegoServiceService)
  {

  }

  ngOnInit() {
    
  }

  Entrar() {

    if (this.usuario != '' && this.clave != '') 
    { 
      this.miServicio.cargarUsuario(this.usuario);
      this.router.navigate(['/Principal']);
    }
    
  }

}
