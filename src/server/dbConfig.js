/* For connection based on tedious
var config = {  
        server: 'freedom-development.database.windows.net',  
        authentication: {
            type: 'default',
            options: {
                userName: 'freedom', 
                password: 'Logic@123'  
            }
        },
        options: {
            encrypt: true,
            database: 'FreedomDev'  
        }
    };  
    */

const dbConfig = {
  user: "freedom",
  password: "Logic@123",
  server: "freedom-development.database.windows.net",
  database: "FreedomDev",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

export default dbConfig;
