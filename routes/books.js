const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/auth');


const {
    getAllUserBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    uploadBookPhoto
} = require('../controllers/books')

router.
    route('/')
    .get(protect, getAllUserBooks)
    .post(protect, createBook)

router
    .route('/:id')
    .get(protect, getBook)
    .put(protect, updateBook)
    .delete(protect, deleteBook)

router.route('/:id/photo').put(uploadBookPhoto)



module.exports = router;








// router
//     .route('/:id/photo')
//     .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);

// router
//     .route('/')
//     .get(advancedResults(Bootcamp, 'courses'), getBootcamps)
//     .post(protect, authorize('publisher', 'admin'), createBootcamp);

// router
//     .route('/:id')
//     .get(getBootcamp)
//     .put(protect, authorize('publisher', 'admin'), updateBootcamp)
//     .delete(protect, authorize('publisher', 'admin'), deleteBootcamp);

// module.exports = router;