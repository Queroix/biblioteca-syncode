import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Livro } from './livros/livro/livro';
import { LivroService } from './livros/livro/livro-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblioteca';

}
