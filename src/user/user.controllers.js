const User = require('./user.model');

exports.addUser = async (req, res) => {
    try {
        await User.sync();
        const newUser = await User.create(req.body);
        res.status(200).send({newUser, token: req.token});
    } catch (error) {
        res.status(500).send(error);
    }
}