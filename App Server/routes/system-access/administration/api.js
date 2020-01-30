const express =  require('express')
const queries = require('../../../model/system-access/administration/queries')
const jwt = require('jsonwebtoken')

const router = express.Router()

// GETs
router.get('/user-group-features', verifyToken, queries.getUserGroupFeatures)
router.get('/user-main', verifyToken, queries.getUser)
router.get('/user-groups', verifyToken, queries.getGroupsForUsersAdd)
router.get('/user-entities', verifyToken, queries.getUserEntities)

// POSTs
router.post('/group-add', verifyToken, queries.createGroup)
router.post('/user-add', verifyToken, queries.createUser)


function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    
    req.userId = payload.subject
    next()
}

module.exports = router