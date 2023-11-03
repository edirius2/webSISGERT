import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { IUserInfo } from '../user-info';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: IUserInfo[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getUsuarios().
      subscribe(usuariosDesdeWS => this.usuarios = usuariosDesdeWS,
        error => console.error(error));
      
  }

}
