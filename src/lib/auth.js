import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY; 

// Generate JWT token
export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET_KEY,
    { expiresIn: '1h' } // Token expires in 1 hour
  );
};

// Verify JWT token
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY); 
  } catch (error) {
    return null; // Invalid token
  }
};
