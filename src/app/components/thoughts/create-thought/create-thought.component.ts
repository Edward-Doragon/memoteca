import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateThoughtComponent implements OnInit {

  public thought = {
    id: '1',
    content: 'Aprendendo Angular',
    author: 'Carlos',
    template: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.thought.content = "Aprendendo Javascript"
  }

  makeThought() {
    alert("Pensamento criado");
  }

  cancel() {

  }

}
