import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
        case 'AnagramaMasListado':
        this.router.navigate(['/Juegos/AnagramaMasListado']);
      break;
    case 'DibujoMasListado':
        this.router.navigate(['/Juegos/DibujoMasListado']);
      break;
    case 'PPTMasListado':
      this.router.navigate(['/Juegos/PPTMasListado']);
    break;
    }
  }

}
