export function getQuery(tableName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}`;
    return query
}

export function getByValueQuery(tableName, columnName) {
    const query = `SELECT * FROM ${process.env.DB_NAME}.${tableName}  where ${columnName} = ?`;
    return query
}

export function deleteByValueQuery(tableName, columnName) {
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





export function addAndOperatorQuery(itemKeys, query) {
    let addToQuery = ""
    itemKeys.forEach(element => {
        !(typeof query[element] === "undefined") ? addToQuery += (" and " + element + " = " + query[element]): ""    })
    // if (query._sort)
    //     addToQuery = addToQuery + "  ORDER BY " + query._sort
    // if (query._limit)
    //     addToQuery = addToQuery + "  LIMIT " + query._limit
    // else if (query._page)
    //     addToQuery = addToQuery + "  LIMIT " + query._page
    return addToQuery
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