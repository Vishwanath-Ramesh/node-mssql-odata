import { Edm } from 'odata-v4-server';

class Todo {
  @Edm.Key
  @Edm.Int32
  _id;

  @Edm.String
  name;

  @Edm.Boolean
  isComplete;
}

export default Todo