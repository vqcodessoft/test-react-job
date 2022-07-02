const express = require("express");
const cors = require("cors")
require("./database/dbconn")
var Company = require("./models/company")
 var Person = require("./models/person")
const port =8000

const app = express()

app.use(express.json())

app.use(cors())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


////////////////////////////------ company -----/////////////////

app.get("/company", async (req, res) => {
    try {
        const getResult = await Company.find()
        res.send(getResult)
    }
    catch (e) {
        res.send(e)
    }
})


app.get("/company/:id", async (req, res) => {
 try{
 const getData =await Company.findById({_id:req.params.id}) 
 console.log("data",getData)
         //getData.save()
        res.send(getData)
    
 }
 catch(e) {
     res.send(e)
 }

})

////////////////////////////////////////////////

                //     const {name,email,address,person} = req.body

                // app.post ("/company",async(req,res)=>{
                //     const company = new Company({name,email,address,person})
                //      await company.save()
                //     res.status(200).json({message:"Company data successfully inserted"})
                // })





                //     const {name,mobile,address} = req.body
                //       const person = new Person({name,mobile,address})
                // app.post("/person", async(req,res)=>{                    
                //           await person.save()
                //           res.status(200).json({message:"Person data is inserted"})
      
                //                  })


///////////////////////////////////////////////////


app.post("/company",(req, res) => {
    const { name, email, address ,person} = req.body;
   // const {_id} = req.body.personId
   //const personId = person._id.toString();
    Company.findOne({ email: email }, (err, data) => {
        if (data) {
             res.send({ message: "Email Already Exist" })
        }
        else {
            const data = new Company({ name, email, address,person})
             
            console.log(data)
            data.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully data insert" })
                }
            })

        }
    })

})



app.delete("/company/:id",  (req, res) => {

    Company.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message:"Comapny data deleted",docs:docs})
        }
    });


})


app.put("/company/:id",(req,res,next)=>{
    Company.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
           
            

        }
    })
    .then(result=>{
        res.status(200).json({
            updated:result,
            message:"Company successfully Updated"
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err,
            message : "Company not Updated"
        })
    })
})
///////////////////////////////////////////////////////////////////////


app.get("/",(req,res)=>{
    res.send("Hello word")
})

/////////////////////----------Person-----------////////////////////


app.get("/person", async (req, res) => {
    try {
        const getResult = await  Person.find()
        res.send(getResult)
    }
    catch (e) {
        res.send(e)
    }
})


app.get("/person/:id", async (req, res) => {
 try{
 const getData =await  Person.findById({_id:req.params.id}) 
 console.log("data",getData)
         //getData.save()
        res.send(getData)
    
 }
 catch(e) {
     res.send(e)
 }

})





app.post("/person",(req, res) => {
    const { name, mobile, address} = req.body;
    Person.findOne({ mobile: mobile }, (err, data) => {
        if (data) {
             res.send({ message: "mobile Already Exist" })
        }
        else {
            const data = new Person({ name, mobile, address })
            data.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: " Person Data Successfully insert " })
                }
            })
        }
    })

})


app.delete("/person/:id",  (req, res) => {

    Person.findByIdAndDelete(req.params.id, function (err, docs) {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message:"person data deleted",docs:docs})
        }
    });


})


app.put("/person/:id",(req,res,next)=>{
    Person.findByIdAndUpdate({_id:req.params.id},{
        $set:{
            name:req.body.name,
            mobile:req.body.email,
            address:req.body.address,
           
            

        }
    })
    .then(result=>{
        res.status(200).json({
            updated:result,
            message:"Person successfully Updated"
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err,
            message : "Person not Updated"
        })
    })
})
//////////////////////////////////////

app.listen(port,()=>{
    console.log(`Server is listen at port : ${port}`)
})
