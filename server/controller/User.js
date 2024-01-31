let pool = null;

const initialize = _pool => {
	pool = _pool;
};

/**
 * Queries the database for the user profile based on the email address of the token
 */
const get_profile = async (req, res) => {
	try {
		// Use parameterized query to prevent SQL injection
		const query = `
			  SELECT *
			  FROM user
			  WHERE email_address = ?;
		 `;

		// Get a connection from the pool
		const connection = await pool.getConnection();

		// Execute a MySQL query with parameterized values
		const [rows, fields] = await connection.execute(query, [req.user.email]);

		// Release the connection back to the pool
		connection.release();

		// Check if a user with the given email_address exists
		if (rows.length === 0) {
			return res.status(404).json({ success: false, error: 'User not found' });
		}

		// Send the data as JSON response
		res.json({ success: true, get_profile: rows[0] });
	} catch (error) {
		console.error('Error executing MySQL query:', error.message);
		res.status(500).json({ success: false, error: 'Internal Server Error' });
	}
};

/**
 * Updates the database for the user profile based on the email address of the token
 */
const put_profile = async (req, res) => {
	try {
		// Destructure values from request body
		const { user_name, self_role, self_info, phone_number, location } = req.body;

		// Use parameterized query to prevent SQL injection
		const query = `
		 UPDATE user
		 SET
			user_name = ?,
			self_role = ?,
			self_info = ?,
			phone_number = ?,
			location = ?
		 WHERE
			email_address = ?;
	  `;

		// Get a connection from the pool
		const connection = await pool.getConnection();

		// Execute a MySQL query with parameterized values
		const [rows, fields] = await connection.execute(query, [
			user_name,
			self_role,
			self_info,
			phone_number,
			location,
			req.user.email, // passed from Token middleware
		]);

		// Release the connection back to the pool
		connection.release();

		// Send a response
		res.status(200).json({
			success: true,
			message: 'User profile updated successfully.',
		});
	} catch (error) {
		console.error('Error:', error.message);
		res.status(500).json({
			success: false,
			message: 'Internal server error.',
		});
	}
};

const User = { initialize, get_profile, put_profile };

export default User;
