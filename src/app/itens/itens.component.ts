import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent {
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
