const route = require('express').Router()

const { createDirection, getDirectionsByUser, updateDirectionById, deleteDirectionById} = require('../../controllers/directionControllers')

route.post('/', createDirection)
route.get('/:userId', getDirectionsByUser)
route.patch('/:directionId', updateDirectionById)
route.delete('/:directionId', deleteDirectionById)

module.exports = route
