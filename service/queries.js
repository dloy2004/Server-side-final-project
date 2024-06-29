export function deleteQuery(tableName, columnName) {
    const query = `DELETE FROM ${process.env.DB_NAME}.${tableName} WHERE ${columnName} = ?`;
    return query;
}

export function updateQuery(tableName, itemKeys, columnName) {
    let keys = "";
    itemKeys.forEach(element => {
        keys += `${element} = ?,`;
    })
    const query = `UPDATE ${process.env.DB_NAME}.${tableName} SET ${keys.slice(0, -1)} WHERE ` + columnName + ` = ? `;
    return query;
}

export function addQuery(tableName, itemKeys) {
    let keys = "", QuestionMark = "";
    itemKeys.forEach(element => {
        keys += element + ',';
        QuestionMark += "?,"
    })
    const query = `INSERT INTO ${process.env.DB_NAME}.${tableName} (${keys.slice(0, -1)}) VALUES (${QuestionMark.slice(0, -1)})`
    return query;
}


export function getDataWithParamsQuery(tableName, query) {
    let baseQuery = `SELECT * FROM ${process.env.DB_NAME}.${tableName}`;
    let queryConditions = [];

    Object.keys(query).forEach(key => {
        if (key !== '_limit' && key !== '_offset') {
            queryConditions.push(`${key} = ?`);
        }
    });

    if (queryConditions.length > 0) {
        baseQuery += ' WHERE ' + queryConditions.join(' AND ');
    }
    if (query._limit) {        
        baseQuery += ` LIMIT ${parseInt(query._limit)}`;       
    }
    if (query._offset) {
        baseQuery += ` OFFSET ${parseInt(query._offset)}`;       
    }
    return baseQuery;
}

export function verifyPasswordQuery() {
    const query = `SELECT true FROM ${process.env.DB_NAME}.users where userName=? and password=?;`;
    return query;
}


//----------------------------
//Queries not currently useful
//----------------------------
export function getQuery(tableName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}`;
    return query
}

export function getByValueQuery(tableName, columnName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}  where ${columnName} = ?`;
    return query
}
export function getSpecificColumnsQuery(tableName, columnNames) {
    const columns = columnNames.join(', ');
    const query = `SELECT ${columns} FROM ${process.env.DB_NAME}.${tableName}`;
    return query;
}

export function getSpecificColumnsByValueQuery(tableName, columnNames, conditionalColumnName) {
    const columns = columnNames.join(', ');
    const query = `SELECT ${columns} FROM ${process.env.DB_NAME}.${tableName} where ${conditionalColumnName} = ?`;
    return query;
}


export function getByContainedValueQuery(tableName, columnName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName} WHERE ${columnName} LIKE CONCAT('%', ?, '%');`;
    return query
}


export function addOrOperatorQuery(columnName) {
    return ` or ${columnName} = ?`;
}

/*
 const userId = req.params.user_id; // Accessing path parameter
    const queryParams = req.query; // Accessing all query parameters
    
    // Log all query parameters for demonstration
    console.log('Query Parameters:', queryParams);
    
    // You can iterate over all query parameters if needed
    for (const key in queryParams) {
        if (Object.hasOwnProperty.call(queryParams, key)) {
            const value = queryParams[key];
            console.log(`Query Parameter - ${key}: ${value}`);
        }
    }
*/


