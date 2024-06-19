import mysql from 'mysql2/promise';
import 'dotenv/config'


async function executeQuery(query, params){
    console.log(`running query: ${query} with params: ${params}`)
    let results;
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: process.env.DB_NAME,
        password: process.env.PASSWORD        
    });
    try {        
        [results] = await connection.execute(query, params);

    } catch (err) {
        console.error(err);
    }
    finally {
        connection.end();
    }
    return results;
}

export{
    executeQuery
}