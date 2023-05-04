import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) { }

  listar(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  criar(thought: Thought) {
    return this.http.post<Thought>(this.API, thought);
  }

  excluir(id: number) {
    const URL = `${this.API}/${id}`;
    return this.http.delete(URL);
  }

  buscaPorId(id: number): Observable<Thought> {
    const URL = `${this.API}/${id}`;
    return this.http.get<Thought>(URL);
  }
}
