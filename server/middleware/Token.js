import { OAuth2Client } from 'google-auth-library';

// Google OAuth2 client ID
const CLIENT_ID = '974635431441-cd85begc9v1f1udu3gkn8dkbhqice87v.apps.googleusercontent.com';

const verify = async (req, res, next) => {
	const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

	if (!token) {
		return res.status(400).json({ error: 'Token not provided' });
	}

	const client = new OAuth2Client(CLIENT_ID);

	try {
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: CLIENT_ID,
		});

		const payload = ticket.getPayload();
		// Here, you can access user information from the decoded token payload
		// For example, you can use payload.sub to get the user ID

		req.user = payload; // Attach the user information to the request object
		next(); // Call the next middleware or route handler
	} catch (error) {
		console.error('Error verifying token:', error.message);
		res.status(401).json({ error: 'Invalid token' });
	}
};

const Token = { verify };

export default Token;
