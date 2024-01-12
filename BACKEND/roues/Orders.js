const router = require("express").Router();
// let order = require("../models/order");

router.route("/add").post((req,res)=>{

    const Sname = req.body.Sname;
    const Description = req.body.Description;
    const  Status = req.body. Status;
    const date = req.body.date;
    // const price = req.body.price;

    const neworder = new order({

        Sname,
        Description,
        Status,
        date,
        // deliverydate,
        // price
    })

    newfeedback.save().then(()=>{
        res.json("Feedback Placed")
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/").get((req,res)=>{

    feedback.find().then((feedback)=>{
        res.json(feedback)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async (req,res) => {
     let userId = req.params.id;
     const { Sname, Description,  Status} = req.body;

     const updatefeedback = {

        Sname,
        Description,
        Status,
        date,
        // price
     }

     const update = await feedback.findByIdAndUpdate(userId,updatefeedback)
     .then(() => {
        res.status(200).send({status: "Feedback details updated"})
     }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
     }) 
})

router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;

    await feedback.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "Feedback details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Ërror with deleting details", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    const user = await feedback.findById(userId)
    .then((feedback) => {
        res.status(200).send({status: "Feedback fetched", feedback})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Ërror with getting details",error: err.message});
    })
})
//search
router.get('/search/:searchInput', async (req, res) => {
    try {
      const { searchInput } = req.params;
      const users = await feedback.find({
        $or: [
          { Sname: { $regex: searchInput, $options: 'i' } },
          { Description: { $regex: searchInput, $options: 'i' } },
          { Status: { $regex: searchInput, $options: 'i' } },
        ],
      });
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;