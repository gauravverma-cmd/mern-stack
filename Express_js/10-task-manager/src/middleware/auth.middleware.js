export const auhtMiddleware = (req,res,next)=> {
 if(req.session && req.session.user){
     return next()
 }
 res.status(400).json({message : "Unothorized : Please Login "})
}