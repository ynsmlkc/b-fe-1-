import dbConnect from "@/util/dbConnect";
import Product from "@/models/Product";

const handler = async (req, res) => {
    try {
        await dbConnect();
    } catch (err) {
        console.error("Database connection error:", err);
        return res.status(500).json({ error: "External API route error" });
    }

    const { method } = req;

    if (method === "GET") {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to fetch products" });
        }
    }
    if (method === "POST") {
        try {
            const newProduct = await Product.create(req.body);
            res.status(200).json(newProduct);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to create product" });
        }
    }
};

export default handler;
