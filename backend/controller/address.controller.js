import Address from "../models/address.model.js";


export const addaddress = async (req, res) => {
    try {
        const { firstName, lastName, address, city, state, zipCode, mobile } = req.body;

        if (!firstName || !lastName || !address || !city || !state || !zipCode || !mobile) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const newAddress = await Address.create({
            user: req.userId,
            firstName,
            lastName,
            address,
            city,
            state,
            zipCode,
            mobile
        });

        res.status(201).json({
            success: true,
            newAddress
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUserAddress = async (req,res) => {
    try {
        
        const addresses = await Address.find({user:userId});
        res.status(200).json({
            success:true,
            addresses
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}