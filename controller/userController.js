import Employee from "../model/user"

//get: localhost:3000/api/users

export async function getUsers(req,res) {
    try {
        const users = await Employee.find({});
        if(!users) return res.status(404).json({error: "Data not found"})
        res.status(200).json(users)
    } catch (error) {
        res.status(405).json({error: "Error while fetching data"})
    }
}

//get: localhost:3000/api/users

export async function getUser(req,res) {
    try {
        const { userid } = req.query;
        if(userid){
            const user = await Employee.findById(userid);
            return res.status(200).json(user);
          }
          
        res.status(404).json({ error: "User not found" });
    } catch (error) {
        res.status(405).json({error: "Error while fetching data"})
    }
}

//post: localhost:3000/api/users

export async function postUsers(req,res) {
    try {
        const formData = req.body;
        
        if(!formData) return res.status(404).json({error: "Data not found"})
        Employee.create(formData, function(err, data){
            return res.status(200).json(data)
        })
    } catch (error) {
        res.status(405).json({error: "Error while adding data"})
    }
}

//put: localhost:3000/api/users

export async function putUsers(req,res) {
    try {
        const formData = req.body;
        const {userid} = req.query
        if (userid && formData) {
            const user = await Employee.findByIdAndUpdate(userid, formData);
            return res.status(200).json(user);
          }
        
          res.status(404).json({ error: "Data not found" });
    } catch (error) {
        res.status(405).json({error: "Error while updating data"})
    }
}

//delete: localhost:3000/api/users

export async function deleteUsers(req,res) {
    try {
        const {userid} = req.query
        if (userid ) {
            const user = await Employee.findByIdAndDelete(userid);
            return res.status(200).json(user);
          }
        
          res.status(404).json({ error: "Data not found" });
    } catch (error) {
        res.status(405).json({error: "Error while deleting data"})
    }
}