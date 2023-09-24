import express from "express"

const router = express.Router();

router.get('/api/auth', (req, res) => {
    res.send("router")
})

export default router;