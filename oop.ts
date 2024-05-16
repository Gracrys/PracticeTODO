interface ITodo {
  id?: number;
  description: string;
  title: string;
  completed?: boolean;
}

class Todo {
  private _arrTodo: ITodo[] = [];

  constructor(todo?: ITodo) {
    if (!!todo) this.addTodo(todo);
  }

  addTodo(val: ITodo) {
    this._arrTodo.push({ ...val, id: this._arrTodo.length, completed: false });
  }

  get arrTodo() {
    return this._arrTodo;
  }
}

const obj = {};

const newTodo = new Todo();
const newTodo2 = new Todo({
  title: "Nueva tarea",
  description: "Tarea bla bla bla",
});

console.log(newTodo.arrTodo);
console.log(newTodo2.arrTodo);
