import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;

    try {
        pool.query(queryText);
        console.log('User table foi criada, caso não exista.');
    } catch (error) {
        console.log('Error creating users table: ', error)
    }
}

export default createUserTable