const jwt = require('jsonwebtoken');
const { restore } = require('../user/user.model');

exports.createToken = (req, res, next) => {
    try {
        const  token = jwt.sign({email: req.body.email}, process.env.SECRET);
        req.token = token;
        next()
    } catch (error) {
        res.status(500).send(error)
    }
}