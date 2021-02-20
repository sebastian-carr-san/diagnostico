import { Injectable } from '@angular/core';
import { UsuariosModel } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  correo: string;

  private usuarios = [
    {
      'nombre': 'Maria',
      'apellido': 'Mendez',
      'correo': 'maria.mendez@gmail.com',
      'status': 'Irregular',
    },
    {
      'nombre': 'Rosa',
      'apellido': 'Sanchez',
      'correo': 'rosa.sanchez@gmail.com',
      'status': 'Regular',
    },
    {
      'nombre': 'Juan',
      'apellido': 'Romo',
      'correo': 'juan.romo@gmail.com',
      'status': 'Regular',
    },
    {
      'nombre': 'Ignacio',
      'apellido': 'Villa',
      'correo': 'su.silla@gmail.com',
      'status': 'Irregular',
    },
  ]

  constructor() { }

  getUsuarios(){
   return this.usuarios;
  }

  getUsuarioByCorreo(correo: string){
    return this.usuarios.find(usuario => usuario.correo === correo);
  }

  recibirCorreo(correo: string){
    this.correo = correo;
  }

  devolverCorreo(){
    return this.correo;
  }

}
