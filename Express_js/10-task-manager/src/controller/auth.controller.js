export const Login = (req,res)=> {
    const {username} = req.body
    // res.send(username)
    if(!username){
      return  res.status(404).json({error : "Username is required"})
    }
     req.session.user = {username} 
       res.cookie("username", username, {httpOnly : true, maxAge : 1000*60*60*24})
     res.json({message : "Login Successfull" , username}) // Fixed: spelling typo 'josn' to 'json'
}

export const Logout = (req,res)=> {
    res.clearCookie("username")
    req.session.destroy((err)=>{ 
        if(err){
            return res.status(500).json({error:"Error loging out"})
        }   
        res.send({message : "Logout Successful"})
    })
}
