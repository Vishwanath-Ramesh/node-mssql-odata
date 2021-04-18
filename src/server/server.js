const { odata, ODataServer, Edm, ODataController } = require('odata-v4-server');

import {findTodos , findOneTodo } from "./todos";
import '@babel/polyfill'
// const TodosController = require("./controller/TodosController");

class Todo {
  @Edm.Key
  @Edm.Int32
  _id;

  @Edm.String
  name;

  @Edm.Boolean
  isComplete;
}

@odata.type(Todo)
class TodosController extends ODataController {
 @odata.GET
  async find() {
    const todos = await findTodos();
console.log(todos)
    return todos;
  }

    @odata.GET
  @odata.parameter("id", odata.key)
  async findOne(id) {
    const todo = await findOneTodo(id);
    return todo;
  }
}


@odata.namespace('My')
@odata.controller(TodosController, true)
class MyODataServer extends ODataServer {}

export default MyODataServer;