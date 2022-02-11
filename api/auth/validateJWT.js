const jwt = require('jsonwebtoken');
// const { User } = require('../../models');

const segredo = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    console.log(decoded);

    // if (!decoded) {
    //   return res.status(401).json({ message: 'Expired or invalid token.' });
    // }

    // const user = await User.findOne({ where: { email: decoded.data.email } });

    // if (!user) {
    //   return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    // }

    // req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};