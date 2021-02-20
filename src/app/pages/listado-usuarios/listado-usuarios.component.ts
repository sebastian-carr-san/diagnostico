import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UsuariosModel } from '../../models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  arrUsuarios: UsuariosModel[];

  constructor(private _usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.arrUsuarios = this._usuariosService.getUsuarios();
  }

  editar(correo: string){
    this._usuariosService.recibirCorreo(correo);
    this.router.navigateByUrl(`/editar-usuario`);
  }

  eliminar(){
    Swal.fire({
      title: '¿Estás seguro que quieres eliminar a este usuario?',
      icon:'warning',
      showDenyButton: true,
      confirmButtonText: `Si, Eliminar`,
      denyButtonText: `No Eliminar`,
    });
  }

}
