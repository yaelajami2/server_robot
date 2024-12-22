const quions_router=require('../routes/robot')
module.exports=(app)=>{
    app.use("/quion",quions_router)
}