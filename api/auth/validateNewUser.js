const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
  
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
        
    next();
  };

const validateEmailForNewUser = async (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (email.includes('@') === false || email.includes('.com') === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const firstPartOfEmail = email.substring(0, email.indexOf('@'));
  
  if (firstPartOfEmail.length === 0) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  console.log(firstPartOfEmail);

  next();
};

const validatePassForNewUser = async (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
    
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  
  next();
};

  module.exports = {
    validateDisplayName,
    validateEmailForNewUser,
    validatePassForNewUser,
  };