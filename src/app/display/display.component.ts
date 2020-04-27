import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  status: boolean;
  title = 'Ajustar Tarefas';
  show: boolean = true;

  // decorator que espera os dados do array
  @Input() todos: Array<any>

  constructor() { }

  ngOnInit(): void {
  }

  removerItem(item) {
    let index: number = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    if (this.todos.length == 0) {
      this.show = false;
    }
  }

  editarItem(item) {
    let index: number = this.todos.indexOf(item);
    let newValor
    if (newValor = window.prompt("Digite o novo valor:")) {
      item.nome = newValor
    } else {
      item.nome = item.nome
    }
    //  console.log(item.nome)
    // let index: number = this.todos.indexOf(item);
    // this.todos.splice(index, 1);
    // if(this.todos.indexOf(item) != 0){
    //   let newValor = window.prompt("Digite o novo valor:");
    //   let status = false;
    //  this.todos.push(new Todo(index,newValor, status));
    //   console.log(newValor)
    // }else{ 
    //  console.log("Erro")
    // }
  }

  // markAsDone() {
  //   let lista = this.todos
  //   console.log("asa")
  //   for (let item=0; item < lista.length; item++) {
  //     lista[item].status =! lista[item].status
  //   }
  // }

  markAsDone(todo) {
    todo.status = true;
  }

  markAsUndone(todo) {
    todo.status = false;
  }
}
