const validateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
    
  if (typeof displayName !== 'string') {
    return res.status(400).json({ message: '"displayName" must be a string' });
  }
  
  if (displayName.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long', 
    });
  }
        
    next();
  };

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!(email.includes('@') && email.includes('.com'))) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  // A estratégia abaixo foi encontrada em: https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427

  const emailFirstPart = email.value.substring(0, email.value.indexOf('@'));
  
  console.log(emailFirstPart);

  if (emailFirstPart.length === 0) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
          
  next();
};

const validatePassword = async (req, res, next) => {
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
    validateEmail,
    validatePassword,
  };