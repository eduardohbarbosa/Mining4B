import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  listProspect : Array<Prospect> = [];
  prospect: Prospect = {
    id: this.listProspect.length + 1,
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

  constructor(private prospectService: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.getProspects();
  }

  getProspects(): void{
    this.prospectService.getProspects().subscribe(response => {
      this.listProspect = response;
      console.log(response)
    })
  }

  save(){
    this.calcPontuacao();

    this.prospectService.createProspect(this.prospect).subscribe(res => {
      console.log("Cadastrado com sucesso")
      this.router.navigate(['/home'])
    })
  }

  calcPontuacao(){
    for(let i in this.prospect){
      if(i != "" || i != undefined){
        this.prospect.pontuacao += 1
      }
    }
  }
}
