
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-very-secure-secret'; // In production, use env variable

const encrypt = (payload) => {
  // Sign the payload and return the JWT token
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  return token;
}

const decrypt = (token) => {
  // Verify and decode the JWT token
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    return null;
  }
}


module.exports = {
  encrypt,
  decrypt
}

// Test code for assignment verification
if (require.main === module) {
  const samplePayload = { user: 'kalvian', role: 'student' };
  const token = encrypt(samplePayload);
  const decoded = decrypt(token);
  if (decoded && decoded.user === samplePayload.user && decoded.role === samplePayload.role) {
    console.log('Success');
  } else {
    console.log('Failure');
  }
}
