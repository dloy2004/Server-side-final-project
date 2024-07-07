export const getUserByNameQuery = () => {
    return 'SELECT * FROM users WHERE userName = ?';
};
export function verifyPasswordQuery() {
    const query = `SELECT true FROM ${process.env.DB_NAME}.users where userName = ? and password = ?;`;
    return query;
}