import { Component, Input, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() public thought: Thought = {
    id: 1,
    content: 'Aprendendo Angular',
    author: 'Carlos',
    template: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtWidth() {
    if(this.thought.content.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}
