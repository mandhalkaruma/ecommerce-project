import Contact from "../../models/admin/contact.model.js";


export const createMsg = async (req,res) => {
    const {name, email, subject, body} = req.body;

    if(!name || !email || !subject || !body) {
        return res.status(400).json({
            success:false,
            message:"Please fill all the fields"
        });
    }

    try {
        
        const contact = await Contact.create({
            name, email, subject, body
        });

        res.status(201).json({
            success:true,
            message:"Message sent successfully",
            contact
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

// get all contact 
export const getAllMsg = async (req,res) => {
    try {
        const contactMsg = await Contact.find().sort({createdAt:-1});

        if(!contactMsg) {
            return res.status(404).json({
                success:false,
                message:"Message not found"
            });
        }

        return res.status(200).json({
            success:true,
            contactMsg
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}