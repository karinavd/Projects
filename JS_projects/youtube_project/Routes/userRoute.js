const require  = createRequire(import.meta.url)

const router = express().Router();
const UserController = require('../Controllers/userController')
router.post('/signUp',UserController.signUp)