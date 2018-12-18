import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private _usuarios: User[] = [
    new User(1, 'Pepe', 'p@p.es', 31),
    new User(2, 'Angelica', 'a@p.es', 31),
    new User(3, 'Alexangra', 'a@a.es', 30),
    new User(4, 'Nikole', 'n@n.es', 26)];

  constructor() { }

  getUsuarios():User[]{
    return this._usuarios;
  }
}
