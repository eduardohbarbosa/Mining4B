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

  constructor(private prospectService:ProspectService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void{
    this.prospectService.getProspects().subscribe(response => {
      this.prospects = response;
      console.log(response)
    })
  }

  remover(id:string) : void{
    this.prospectService.deleteProspect(id).subscribe(res => {
      console.log('Cliente Excluido com sucesso');
      this.getClientes();
    })
  }

}
