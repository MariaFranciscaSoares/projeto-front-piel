import { Component, OnInit } from '@angular/core';
import { Atividade } from '../atividades/model/atividade.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AtividadeService } from '../atividades/adapter/AtividadeService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exibir-atividade',
  templateUrl: './exibir-atividade.component.html',
  styleUrls: ['./exibir-atividade.component.css']
})
export class ExibirAtividadeComponent implements OnInit {

  protected atividade!: Atividade | null;
 
  constructor(private route: ActivatedRoute, private atividadeService: AtividadeService, private router: Router) { }

  ngOnInit(): void {
    this.setAtividades();
  }

  private setAtividades(): void {
    const aulaId = this.route.snapshot.paramMap.get('id');
    if (aulaId !== null) {
      const id = parseInt(aulaId, 10);
      this.atividade = this.atividadeService.getAtividadeById(id);
    }
  }

  protected backAtividades(): void {
    this.router.navigate(['/atividades']);

  }

  protected entregarAtividade(): void {
    if(this.validarEntregaAtividade()){
      this.atividadeService.concluirAtividade(this.atividade?.idAtividade);
      this.exibirMensagemDeSucesso();
    }
    
  }

  protected validarEntregaAtividade(): boolean{
    if(this.atividade?.statusAtividade == "concluida"){
      Swal.fire('Ops!', 'Essa Atividade já foi entregue!', 'error');
      return false;
    }
    return true;
  }

  exibirMensagemDeSucesso() {
    Swal.fire('Sucesso!', 'Atividade Entrgue com Sucesso.', 'success');
  }

}
