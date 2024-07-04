import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinasService } from '../pages/disciplinas/adapter/DisciplinasService';
import { Disciplina } from '../pages/disciplinas/model/apostila.module';
import { Avaliacao, Questao, Resposta } from '../avaliacao/model/Avaliacao.module';
import { AvaliacaoService } from '../avaliacao/adapter/AvaliacaoService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exibir-avaliacao',
  templateUrl: './exibir-avaliacao.component.html',
  styleUrls: ['./exibir-avaliacao.component.css']
})
export class ExibirAvaliacaoComponent implements OnInit {

  protected avaliacao!: Avaliacao | null;
  protected questoes!: Questao[] | undefined;
  protected respostas!: Resposta[] | undefined;

  constructor(private route: ActivatedRoute, private avaliacaoService: AvaliacaoService, private router: Router) { }

  ngOnInit(): void {
    this.getAvaliacao();
  }

  private getAvaliacao(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.avaliacao = this.avaliacaoService.getAvaliacaoById(+id);
      this.questoes = this.avaliacao?.questoes;
      console.log(this.questoes?.forEach(v => v.respostas))
    }
  }

  back() {
    this.router.navigate(['/avaliacao']);
  }

  protected entregarAvaliacao(): void {
    this.avaliacaoService.concluirAvaliacao(this.avaliacao?.idAvaliacao);
    this.exibirMensagemDeSucesso();
  }

  protected exibirMensagemDeSucesso(): void {
    Swal.fire('Sucesso!', 'Atividade Entrgue com Sucesso.', 'success');
  }

  // Método para selecionar uma resposta
  selecionarResposta(resposta: Resposta, questao: Questao): void {
    // Percorre todas as respostas da questão
    for (let r of questao.respostas) {
      // Define a resposta selecionada como verdadeira e as outras como falsas
      if (r === resposta) {
        r.selecionada = true;
      } else {
        r.selecionada = false;
      }
    }
  }
}
