import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/products";

export const getAllProducts = async (category) => {
    const res = await axios.get(
        `http://localhost:5000/api/products?category=${category}`
    );
    return res.data.products;
}