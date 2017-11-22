import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadMasListado':
        this.router.navigate(['/Juegos/AgilidadMasListado']);
        break;
      case 'PPTMasListado':
        this.router.navigate(['/Juegos/PPTMasListado']);
        break;
      case 'AnagramaMasListado':
        this.router.navigate(['/Juegos/AnagramaMasListado']);
        break;
      case 'DibujoMasListado':
        this.router.navigate(['/Juegos/DibujoMasListado']);
        break;
    }
  }
}
