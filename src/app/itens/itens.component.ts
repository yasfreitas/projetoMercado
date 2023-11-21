import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit{

  ngOnInit(): void { this.listar() }

  produtos: Isessao[] = [];

  constructor(private service: SessaoService){}

  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }

  Comprar(){
    Swal.fire({
      title: "Você deseja adicionar ao carrinho esse produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Adicionar ao carrinho",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Erro ao adicionar ao carinho!", "", "info");
      }
    });
  }
}
