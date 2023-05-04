import { Router } from '@angular/router';
import { Thought } from '../thought';
import { ThoughtService } from './../thought-service.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateThoughtComponent implements OnInit {

  public thought: Thought = {
    content: '',
    author: '',
    template: 'modelo1'
  }

  options = ['option 1', 'option 2', 'option 3']

  constructor
  (
    private service: ThoughtService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  makeThought() {
    this.service.criar(this.thought).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancel() {
    this.router.navigate(['/listarPensamento']);
  }

}
