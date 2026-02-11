import cookie from "cookie";

const handler = async (req, res) => {
    const { method } = req;
    if (req.method === "POST") {
        const { username, password } = req.body;
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            res.setHeader("Set-Cookie", cookie.serialize("token", process.env.ADMIN_TOKEN, {
                maxAge: 60 * 60 * 24 * 7,
                path: "/",
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
            }));
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    }
    if (req.method === "PUT") {
        res.setHeader("Set-Cookie", cookie.serialize("token", "", {
            maxAge: -1,
            path: "/",
        }));
        res.status(200).json({ message: "Logout successful" });
    }
};

export default handler;