const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}= require('../controllers/users')

// const User = require('../models/User')
const router = express.Router();

router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)