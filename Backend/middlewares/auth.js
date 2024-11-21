const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        let decodeddata
        console.log(token)
        if (token) {
            decodeddata = jwt.verify(token, '')
            //  '' --içini doldurun
            res.json({ id: decodeddata.id })
            next()
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = auth
