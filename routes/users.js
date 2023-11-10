const express = require('express')
const router = express.Router()

const {
   createUser,
    updateUser,
    deleteUser,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,

  updatePassword,
  confirmEmail,
}= require('../controllers/users')



router.route('/')
// .get(getUsers)
// .post(createUser)


router.route('/:id')
// .get(getUser)
.put(updateUser)
.delete(deleteUser)


router.route('/register').post(createUser);
router.route('/login').post(login);
router.route('/logout',).get(logout);
router.route('/me').get(getMe);
router.route('/confirmemail').get(confirmEmail);
// router.route('/updatedetails').put(updateDetails);
router.route('/updatepassword').put(updatePassword);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resettoken').put(resetPassword);

module.exports = router;