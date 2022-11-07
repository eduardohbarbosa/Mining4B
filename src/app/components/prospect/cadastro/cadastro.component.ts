import { Component, OnChanges, OnInit, SimpleChanges,} from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  listProspect : Array<Prospect> = [];

  prospect: Prospect = {
    id: 0,
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

  pergunta1 = 'nao';
  pergunta2 = 'nao';
  pergunta3 = 'nao';

  constructor(private prospectService: ProspectService, private router: Router) { }

  ngOnInit(): void {
    this.getProspects();
  }

  getProspects(): void{
    this.prospectService.getProspects().subscribe(response => {
      this.listProspect = response;
      console.log(response)
      this.prospect.id = this.listProspect.length
      console.log(this.prospect.id)
    })
  }

  save(){
    this.calcPontuacao();
    console.log(this.prospect);

    this.prospectService.createProspect(this.prospect).subscribe(res => {
      console.log("Cadastrado com sucesso")
      this.router.navigate(['/home'])
    })
  }

  calcPontuacao(){
    let valores = Object.values(this.prospect)
    for(let i = 0; i < valores.length; i++){
      if(valores[i] !== ""){
        console.log(valores[i])
        this.prospect.pontuacao += 1
      }
    }

    if(this.pergunta1 == 'sim'){
      this.prospect.pontuacao += 10;
    }
    if(this.pergunta2 == 'sim'){
      this.prospect.pontuacao += 10;
    }
    if(this.pergunta3 == 'sim'){
      this.prospect.pontuacao += 6;
    }
  }
}
