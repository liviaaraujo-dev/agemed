import { Response, Router, Request } from 'express'

export const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ msg: "hello" });
});
