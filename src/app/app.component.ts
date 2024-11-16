import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'meu-armarinho';
  produto: any;
  idProduto: any;

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

  buscarProdutoPorId(id: number) {
    if (this.idProduto === null || this.idProduto <= 0) {
      console.error('ID inválido');
      return;
    }
    const endpoint = `http://localhost:8080/api/produtos/${this.idProduto}`;
    this.http.get(endpoint).subscribe(
      (response) => {
        this.produto = response;
        console.log(response);
      },
      (error) =>
        console.error('Erro ao buscar produto: ', error)
    )
  }
}
