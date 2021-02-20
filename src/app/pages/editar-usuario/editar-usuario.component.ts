import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuariosModel } from '../../models/usuarios.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  correo: string;
  usuario: UsuariosModel;

  constructor(private _usuariosService: UsuariosService, private router: Router) { }

  ngOnInit(): void {
    this.correo = this._usuariosService.devolverCorreo();
    this.usuario = this._usuariosService.getUsuarioByCorreo(this.correo);
  }

  editar(){
    Toast.fire({
      icon: 'success',
      title: 'Usuario Editado'
    });
    this.router.navigateByUrl(`/lista-usuarios`);
  }



}
