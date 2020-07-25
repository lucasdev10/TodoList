import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { R3TargetBinder } from '@angular/compiler';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {


  // @Input() valorAtualizado:any; 
  // novoObjeto = {}

  nomeTarefa: string;
  controle: number = 0

  constructor() { }

  ngOnInit(): void {

  }

  todos: Todo[] = []

  guardaTarefa(event) {
    this.nomeTarefa = event.target.value;
  }

  //adiciona o item como o primeiro do array
  adicionarItem(event) {
    if (this.nomeTarefa == undefined || this.nomeTarefa == "") {
      alert("Digite uma tarefa")
    } else {
      let nome = this.nomeTarefa;
      let status = false;
      let id: number = +1
      this.todos.push(new Todo(id, nome, status));
     

    }
  }
  // atualizarItem(){
  //   let status = false;
  //   this.novoObjeto = new Todo(this.valorAtualizado, status);
  //   console.log("estou mostrando pela função");
  // }
}
