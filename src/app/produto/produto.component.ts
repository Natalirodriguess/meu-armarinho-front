import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-produto',
  standalone: true,
  templateUrl: './produto.component.html',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  produtoForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      codigoDeBarras: ['', Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: [null, [Validators.required, Validators.min(1)]],
      observacao: [''],
    });
  }

  cadastrarProduto() {
    const endpoint = 'http://localhost:8080/api/produtos';
    const produto = this.produtoForm.value;

    this.http.post(endpoint, produto).subscribe(
      (response) => {
        console.log('Produto cadastrado com sucesso: ',response);
        alert('Produto cadastrado com sucesso!');
        this.produtoForm.reset() ;//resetar o formulario apos o envio
      },
      error => {
        console.error('Erro ao cadastrar produto: ', error)
      }
    )
  }
}
