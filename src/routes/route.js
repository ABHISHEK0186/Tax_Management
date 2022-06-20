const express = require('express');
const router = express.Router();

const user = require("../controllers/userController")
const tax = require("../controllers/taxController")

// register user
router.post("/registerUser", user.register)
// create tax details of user
router.post("/userTaxDetails/:taxPayerId", tax.taxOfUser)
// list down all the tax-payers
router.get("/listTaxPayers/:accountantId", user.listTaxPayers)
// update data of tax payer
router.put("/updateUser/:accountantId/:taxPayerId", user.updateTaxPayers)
// login user
router.post("/loginUser", user.loginUser)
// mark tax as paid
router.put("/markTaxAsPaid/:taxPayerId", tax.markTaxPaid)
// update tax status
router.put("/manageTaxDue/:accountantId/:taxPayerId", tax.manageTaxDue)
// view Tax Details
router.get("/viewTaxDetails/:userId", tax.viewTaxDetails)
// create a tax due
router.put("/createTaxView/:accountantId/:taxPayerId", tax.createTaxDue)




module.exports = router;