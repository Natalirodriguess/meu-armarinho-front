import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'meu-armarinho';
  produto: any;

  constructor(private http: HttpClient) {}

  buscarProdutoPorId() {
    const endpoint = 'http://localhost:8080/api/produtos/1';
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
