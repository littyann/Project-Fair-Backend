const projects = require('../Models/projectSchema')

// addproject
exports.addProjects = async (req,res)=>{
    console.log("Inside add project function");
    const userId = req.payload
    const projectImage = req.file.filename
    const {title,language,overview,github,website} = req.body
    // console.log(`${title},${language},${overview},${github},${website},${projectImage} ${userId}`);
    // console.log(`${userId}`);
    try{
        const existingProject = await projects.findOne({github})
        if(existingProject){
            res.status(406).json("Projects already exist!!! Upload another")
 
        }else{
            const newProject = new projects({
                title,language,overview,github,website,projectImage,userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }

    }catch(err){

    }
    res.status(200).json("addProjects request received!!!")
}

// getuserprojects = token required
exports.allUserProjects = async(req,res)=>{
    const userId = req.payload
    try{
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
    }catch(err){
        res.status(401).json(err)
    }
}


// getuserprojects = token required
exports.getallProjects = async(req,res)=>{
    try{
        const allProjects = await projects.find()
        res.status(200).json(allProjects)

        
    }catch(err){
        res.status(401).json(err)
    }
}

// gethomeprojects
exports.getHomeProjects = async(req,res)=>{
    try{
        const homeprojects = await projects.find().limit(3)
        res.status(200).json(homeprojects)

    }catch(err){
        res.status(401).json(err)

    }
}