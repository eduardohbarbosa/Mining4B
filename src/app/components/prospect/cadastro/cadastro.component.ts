import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  prospect: Prospect = {
    id: "",
    empresa: "",
    cnae: "",
    cnpj: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    cidade: "",
    estado: "",
    telefone: "",
    celular: "",
    responsavel: "",
    pontuacao: 0,
  }

  constructor(private prospectService: ProspectService) { }

  ngOnInit(): void {
  }

  save(){
    this.prospectService.createProspect(this.prospect).subscribe(res => {
      console.log("Cadastrado com sucesso")
    })
  }

}
