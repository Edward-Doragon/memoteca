import { ThoughtService } from './../thought-service.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listOfThoughts: Thought[] = [];

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listOfThoughts) => {
      this.listOfThoughts = listOfThoughts
    })
  }
}
