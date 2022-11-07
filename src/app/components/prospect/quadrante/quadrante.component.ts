import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-quadrante',
  templateUrl: './quadrante.component.html',
  styleUrls: ['./quadrante.component.css']
})
export class QuadranteComponent implements OnInit {
  prospects: Array<Prospect> = [];
/*   prospects = [{
    id: 1,
    empresa: "Teste",
    cnae: "Teste",
    cnpj: "Teste",
    cep: "Teste",
    endereco: "Teste",
    numero: "Teste",
    complemento: "Teste",
    cidade: "Teste",
    estado: "Teste",
    telefone: "Teste",
    celular: "Teste",
    responsavel: "Teste",
    pontuacao: 10,
  }] */

  constructor(private prospectService:ProspectService) { }

  ngOnInit(): void {
    this.getProspects();
  }

  getProspects(): void{
    this.prospectService.getProspects().subscribe(response => {
      this.prospects = response;
      console.log(response)
    })
  }


}
