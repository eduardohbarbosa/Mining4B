import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prospect } from 'src/app/models/prospect';
import { ProspectService } from 'src/app/services/prospect.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  id: any = '';
  prospect!: Prospect
/*   prospect: Prospect = {
    id: "1",
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
  } */

  constructor(private prospectService: ProspectService, private router: Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Pega o id da URL
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.prospectService.getProspect(this.id).subscribe(res => {
      console.log(res)
      this.prospect = res[0];
      console.log(this.prospect)
    })
  }

  atualizar(){
    this.prospectService.updateProspect(this.id, this.prospect).subscribe(res => {
      console.log(res);
      this.router.navigate(['/'])
    })
  }
}
