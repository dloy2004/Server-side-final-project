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
        baseQuery += ` LIMIT ?`;       
    }
    if (query._offset) {
        baseQuery += ` OFFSET ?`;       
    }   
    return baseQuery;
}



export function NaturalJoinQuery(firstTable, secondTable, equalColumn, conditions) {
    let baseQuery = `
        SELECT DISTINCT a.*
        FROM ${firstTable} a
        JOIN ${secondTable} b ON a.${equalColumn} = b.${equalColumn}
    `;
    let queryConditions = [];
    let queryParams = [];
    Object.keys(conditions).forEach(key => {
        if (key === 'rangeColumn' && conditions['minRange'] && conditions['maxRange']) {
            queryConditions.push(`TIMESTAMPDIFF(YEAR, b.${conditions['rangeColumn']}, CURDATE()) BETWEEN ? AND ?`);
            queryParams.push(conditions['minRange'], conditions['maxRange']);
        } else if (key !== 'minRange' && key !== 'maxRange' && key !== 'rangeColumn' && key !== '_limit' && key !== '_offset') {
            queryConditions.push(`${key} = ?`);
            queryParams.push(conditions[key]);
        }
    });

    if (queryConditions.length > 0) {
        baseQuery += ' WHERE ' + queryConditions.join(' AND ');
    }
    if (conditions._limit) {
        baseQuery += ` LIMIT ${parseInt(conditions._limit)}`;
    }
    if (conditions._offset) {
        baseQuery += ` OFFSET ${parseInt(conditions._offset)}`;
    }

    return { query: baseQuery, params: queryParams };
}


export function verifyPasswordQuery() {
    const query = `SELECT true FROM ${process.env.DB_NAME}.users where userName = ? and password = ?;`;
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


