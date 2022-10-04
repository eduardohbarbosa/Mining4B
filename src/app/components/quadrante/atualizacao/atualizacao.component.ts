import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { QuadranteService } from '../quadrante.service';

@Component({
  selector: 'app-atualizacao',
  templateUrl: './atualizacao.component.html',
  styleUrls: ['./atualizacao.component.css']
})
export class AtualizacaoComponent implements OnInit {

  id: any = '';
  cliente!: Cliente

  constructor(private quadranteService: QuadranteService, private router: Router,private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Pega o id da URL
    this.id = this.actRoute.snapshot.paramMap.get('id');

    this.quadranteService.getCliente(this.id).subscribe(res => {
      console.log(res)
      this.cliente = res[0];
      console.log(this.cliente)
    })
  }

  atualizar(){
    this.quadranteService.updateCliente(this.id, this.cliente).subscribe(res => {
      console.log(res);
      this.router.navigate(['/'])
    })
  }
}
