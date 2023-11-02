const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51NkpqlFjgQmQhjqjfL0ZaRI3h1Ti3lxSxYoIBCmiCgTt0AfBCNXlq1aAsQ4zj0XKt4jp1JvDRzn4AGvfvB0dj83a00fJwliJJv"
console.log("KEY",KEY)
const stripe = require("stripe")(KEY);
// console.log(stripe)

router.post("/payment", (req, res) => {
  // console.log(req.body)
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      console.log("stripeErr",stripeErr)
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;