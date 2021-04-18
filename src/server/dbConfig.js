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

    export default config;