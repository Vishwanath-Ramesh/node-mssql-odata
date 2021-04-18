const { odata, ODataServer } = require("odata-v4-server");

import TodosController from "./controller/TodosController";
// import "@babel/polyfill";

@odata.namespace("My")
@odata.controller(TodosController, true)
class MyODataServer extends ODataServer {}

export default MyODataServer;
