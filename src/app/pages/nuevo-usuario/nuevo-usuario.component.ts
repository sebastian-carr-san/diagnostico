import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  crear(){
    Toast.fire({
      icon: 'success',
      title: 'Usuario Creado'
    });
    this.router.navigateByUrl(`/lista-usuarios`);
  }

}
