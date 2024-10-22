import {Router} from 'express'
import {
    store,
    index,
    update,
    destroy,
} from "../controllers/manutencaoController.js"

const router= Router()

router.post ('/', store)
router.get ('/', index)
router.put('/', update)
router.delete ('/', destroy)

export default router