import { odata, ODataController } from 'odata-v4-server';
// const database = require("../database");

// import { deleteTodo, findOneTodo, findTodos, insertTodo, updateTodo } from '../todos';
import Todo from '../models/Todo';

@odata.type(Todo)
class TodosController extends ODataController {
  @odata.GET
  async find() {
    const todos = await findTodos();

    return todos;
  }

  @odata.GET
  @odata.parameter("id", odata.key)
  async findOne(id) {
    const todo = await findOneTodo(id);
    return todo;
  }

//   @odata.POST
//   @odata.parameter("body", odata.body)
//   async insert( body) {
//     // BUG: CANNOT BE EMPTY OBJECT
//     const todo = await insertTodo(body);
//     return todo;
//   }

//   @odata.PATCH
//   @odata.parameter("id", odata.key)
//   @odata.parameter("body", odata.body)
//   async update(id, body) {
//     // BUG: CANNOT BE EMPTY OBJECT
//     await updateTodo(id, body);
//   }

//   @odata.DELETE
//   @odata.parameter("id", odata.key)
//   async remove(id) {
//     await deleteTodo(id);
//   }
}

export default TodosController