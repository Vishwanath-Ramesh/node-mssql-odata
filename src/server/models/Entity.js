import { Edm } from "odata-v4-server";

class Entity {
  @Edm.Key
  @Edm.String
  Id;

  @Edm.String
  Name;

  @Edm.String
  DisplayName;

  @Edm.String
  DisplayNamePlural;

  @Edm.String
  Description;
}

export default Entity;
