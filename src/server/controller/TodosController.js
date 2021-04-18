import { ODataController, Edm, odata, ODataQuery } from "odata-v4-server";

import Entity from "../models/Entity";
// import "@babel/polyfill";

@odata.type(Entity)
class EntityController extends ODataController {
  @odata.GET
  async find() {
    let result = await global.connection
      .request()
      .query("SELECT * FROM [dbo].[Entity]");

    return result.recordset;
  }

  @odata.GET
  @odata.parameter("key", odata.key)
  async findOne(id) {
    console.log(id);
    let result = await global.connection
      .request()
      .query(`SELECT * FROM [dbo].[Entity] WHERE Id = '${id}'`);

    return result.recordset;
  }

  @odata.POST
  @odata.parameter("body", odata.body)
  async insert(body) {
    // ToDo: Need to implement
  }

  @odata.PATCH
  @odata.parameter("id", odata.key)
  @odata.parameter("body", odata.body)
  async update(id, body) {
    // ToDo: Need to implement
  }

  @odata.DELETE
  @odata.parameter("id", odata.key)
  async remove(id) {
    // ToDo: Need to implement
  }
}

export default EntityController;
