import { Response, Router, Request } from 'express'
import { SignUpController } from '../controllers/signup.controller';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { SignInController } from '../controllers/signin.controller';
import { DoctorController } from '../controllers/doctor.controller';
import { PatientController } from '../controllers/patient.controller';

export const router = Router();

const signUpController = new SignUpController();
const signInController = new SignInController();
const doctorController = new DoctorController();
const patientController = new PatientController();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello" });
});

router.post("/sign-up", signUpController.create);
router.post("/sign-in", signInController.signIn);

router.get("/doctors", AuthMiddleware, doctorController.getDoctors);
router.post("/doctor", AuthMiddleware, doctorController.create);
router.put("/doctor/:id", AuthMiddleware, doctorController.update);
router.delete("/doctor/:id", AuthMiddleware, doctorController.delete);

router.post("/patient", AuthMiddleware, patientController.create);
router.get("/patients", AuthMiddleware, patientController.getPatients);
router.put("/patient/:id", AuthMiddleware, patientController.update);
router.delete("/patient/:id", AuthMiddleware, patientController.delete);
