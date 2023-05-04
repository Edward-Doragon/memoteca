import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-thought-exclusion',
  templateUrl: './thought-exclusion.component.html',
  styleUrls: ['./thought-exclusion.component.css']
})
export class ThoughtExclusionComponent implements OnInit {

  public thought: Thought = {
    id: 0,
    content: '',
    author: '',
    template: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private routeActivate: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.routeActivate.snapshot.paramMap.get('id');
    this.service.buscaPorId(parseInt(id!)).subscribe(() => {
      this.thought = this.thought
    })
  }

  deleteThought() {
    this.service.excluir(this.thought.id!).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancell() {
    this.router.navigate(['/listarPensamento']);
  }

}
