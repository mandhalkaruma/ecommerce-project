import Product from "../models/product.model.js";


// create product
export const createProduct = async (req,res) => {
   try {
    
    const {title, description, price, quantity, color, sizes, imageUrl, category} = req.body;

    if(!title || !imageUrl || !category || !price || !color) {
        return res.status(404).json({
            success:false,
            message:"All fields are required"
        });
    }

    const productExists = await Product.findOne({title});
    if(productExists) {
        return res.status(400).json({
            success:false,
            message:"Product already exists"
        });
    }

    const product = await Product.create({
        title,
        description,
        price,
        quantity,
        color,
        sizes,
        imageUrl,
        category
    });

    return res.status(201).json({
        success:true,
        message:"Product created successfully",
        product
    });

   } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message
        })
   }
}

// get all products
export const getAllProducts = async (req,res) => {
    try {
        
        const products = await Product.find().sort({createdAt:-1});

        if(!products) {
            return res.status(404).json({
                success:false,
                message:"Product not found"
            });
        }

        return res.status(200).json({
            success:true,
            products
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// get single products
export const getSingleProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(!product) {
            return res.status(500).json({
                success:false,
                message:"Product not found"
            });
        }

        return res.status(200).json({
            success:true,
            product
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// update product
export const updateProduct = async (req,res) => {
    try {
        
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});

        if(!product) {
            return res.status(404).json({
                success:false,
                message:"Product not found"
            });
        }

        return res.status(200).json({
            success:true,
            product
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// delete product
export const deleteProduct = async (req,res) => {
    try {
        
        const product = await Product.findByIdAndDelete(req.params.id);

        if(!product) {
            return res.json({
                success:false,
                message:"Product not found"
            });
        }

        return res.status(200).json({
            success:true,
            message:"Product deleted successfully"
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
