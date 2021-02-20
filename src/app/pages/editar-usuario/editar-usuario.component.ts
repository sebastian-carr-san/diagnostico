import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { UsuariosModel } from '../../models/usuarios.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  correo: string;
  usuario: UsuariosModel;

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.correo = this._usuariosService.devolverCorreo();
    this.usuario = this._usuariosService.getUsuarioByCorreo(this.correo);
  }



}
