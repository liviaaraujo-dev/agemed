import { Response, Router, Request } from 'express'
import { SignUpController } from '../controllers/signup.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { SignInController } from '../controllers/signin.controller';
import { DoctorController } from '../controllers/doctor.controller';

export const router = Router();

const signUpController = new SignUpController();
const signInController = new SignInController();
const doctorController = new DoctorController();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello" });
});

router.post("/sign-up", signUpController.create);
router.post("/sign-in", signInController.signIn);
router.post("/doctor", AuthMiddleware, doctorController.create);
