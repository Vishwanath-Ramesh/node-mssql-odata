import {Connection, Request, TYPES} from 'tedious';

import dbConfig from "./dbConfig";

var connection = new Connection(dbConfig);    

export default connection