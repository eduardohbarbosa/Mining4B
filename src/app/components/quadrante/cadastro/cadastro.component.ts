import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { QuadranteService } from '../quadrante.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: Cliente = {
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
    pontuacao: "",
  }

  constructor(private quadranteService: QuadranteService) { }

  ngOnInit(): void {
  }

  save(){
    this.quadranteService.createCliente(this.cliente).subscribe(res => {
      console.log("Cadastrado com sucesso")
    })
  }

}
