import express from 'express';
import cors from 'cors';

// controller
import User from './controller/User.js';

// middlware
import Token from './middleware/Token.js';

// Use 'mysql2/promise' for async/await support
import mysql from 'mysql2/promise';

// ==================================================

/**
 *
 * A connection pool is a cache of database connections
 * that are reused, rather than being opened and closed
 * for each new request. The purpose of a connection
 * pool is to improve the efficiency and performance of
 *  database operations by reducing the overhead
 * associated with opening and closing database connections.
 *
 */

// MySQL pool configuration
const pool = mysql.createPool({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'db_lorad',
});

User.initialize(pool);

// ==================================================

// express app
const app = express();

/**
 * Add this line to enable JSON parsing
 */
app.use(express.json());

/**
 * This is a proxy option for the dev server.
 * It will proxy /api from the client to the routes.
 * Handles Cross-Origin Resource Sharing (CORS) errors.
 */
app.use(cors());

/**
 * Middleware to check if the provided token is valid
 */
app.use(Token.verify);

// ==================================================

app.get('/api/get_profile', User.get_profile);
app.put('/api/put_profile', User.put_profile);

// ==================================================

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
