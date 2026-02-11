import dbConnect from "@/util/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
    try {
        await dbConnect();
    } catch (err) {
        console.error("Database connection error:", err);
        return res.status(500).json({ error: "External API route error" });
    }
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (user) {
        return res.status(400).json({ error: "User already exists" });
    }
    if (body.password !== body.confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }
    try {
        const newUser = await new User(body);
        //generate password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(body.password, salt);
        newUser.confirmPassword = await bcrypt.hash(body.password, salt);
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create user" });
    }

};

export default handler;
