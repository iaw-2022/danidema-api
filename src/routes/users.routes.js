const { Router } = require('express');
const router = Router();

const { getUsers, getUsersById} = require('../controllers/users.controller.js');
/**
 * @swagger
 * /users:
 *   get:
 *     description: Use to request all users.
 *     tags: 
 *       - Users
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/', getUsers);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     description: Use to request a user.
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found 
*/
router.get('/:id', getUsersById);
//router.post('/users', createUsers);
//router.delete('/users/:id', deleteUsers);
//router.put('/users/:id', updateUsers);

module.exports = router;