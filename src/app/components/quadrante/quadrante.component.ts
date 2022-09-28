import { Component, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { QuadranteService } from './quadrante.service';

@Component({
  selector: 'app-quadrante',
  templateUrl: './quadrante.component.html',
  styleUrls: ['./quadrante.component.css']
})
export class QuadranteComponent implements OnInit {
  clientes: Array<Cliente> = [];

  quadrante1 = [];
  quadrante2 = [];
  quadrante3 = [];
  quadrante4 = [];

  constructor(private quadranteService:QuadranteService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void{
    this.quadranteService.getClientes().subscribe(response => {
      this.clientes = response;
      console.log(response)
    })
  }

}
