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




