const arrTodo: ITodo[] = []; //mutable

interface ITodo {
  id?: number;
  description: string;
  title: string;
  completed?: boolean;
}

type MaybeTodo = ITodo | null;

const isTodo = (todo: any) => {
  let justTodo = false;
  if (typeof todo == "object") {
    const arrValues = Object.keys(todo);
    justTodo =
      arrValues.includes("id") &&
      arrValues.includes("description") &&
      arrValues.includes("title") &&
      arrValues.includes("completed");
  }
  if (justTodo) {
    return todo;
  } else {
    return null;
  }
};

const todoExists = (todo: ITodo) =>
  arrTodo.filter((elem) => todo.id == elem.id)[0];

const addTodo = (todo: ITodo): ITodo[] => {
  arrTodo.push({ ...todo, id: arrTodo.length, completed: false });
  return arrTodo;
};

const todoLength = (): number => arrTodo.length;

const completeTodo = (i: number): ITodo | null => {
  arrTodo[i].completed = !arrTodo[i].completed;
  return arrTodo[i];
};

const checkTodoIndex = (todo: ITodo): number => todo.id || -1;

addTodo({
  title: "Nueva tarea",
  description: "Tarea bla bla bla",
});

addTodo({
  title: "Nueva tarea2",
  description: "Tarea dos que describe cosas",
});

console.log(
  addTodo({
    title: "Nueva tarea_3",
    description: "Tarea 3 que describe aun mas cosas",
  }),
);

console.log(todoLength());
console.log(
  todoExists({
    title: "Nueva tarea2",
    description: "Tarea dos que describe cosas",
    id: 1,
    completed: false,
  }),
);
