let pool = null;

const init = _pool => {
	pool = _pool;
};

/**
 * Queries the database for the user profile based on the email address of the token
 */
const get_profile = async (req, res) => {
	const token_email = req.user.email;

	try {
		// Get a connection from the pool
		const connection = await pool.getConnection();

		// Execute a MySQL query
		const [rows, fields] = await connection.execute(
			`SELECT * FROM user WHERE email_address = '${token_email}'`
		);

		// Release the connection back to the pool
		connection.release();

		// Send the data as JSON response
		res.json({ success: true, data: rows });
		return;
	} catch (error) {
		console.error('Error executing MySQL query:', error);
		res.status(500).json({ success: false, error: 'Internal Server Error' });
		return;
	}
};

const User = { init, get_profile };

export default User;
