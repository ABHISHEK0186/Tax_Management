#NOTE :  Here we assume that state and central gov. takes 6-6% tax for corporation users  



API 1 : router.post("/registerUser", user.register)  : This API create a new entry in DATABASE for tha user 

    endpoints : localhost:3000/registerUser

    take input as : {
        "name": "abc",
        "email": "abc@gmail.com",
        "phone": "9999999999",
        "income": "1000000",
        "password": "abc123",
        "role " : "admin"             // optional 
        "taxType": "individual",      // can be individual or corporation
        "address": {
            "state": "Uttar Pradesh",
            "city": "Mathura",
            "pincode": "203001"
        }
}



API 2 : router.post("/userTaxDetails/:taxPayerId", tax.taxOfUser)  : This API calculates the tax for the user
    take taxPayerId in path params

    endpoints : localhost:3000/userTaxDetails/:taxPayerId



API 3 : router.get("/listTaxPayers/:accountantId", user.listTaxPayers)  : This API list down all the user, whos role is tax-payer
    take accountantId in path params , only accountant or admin can use thi API

    endpoints : localhost:3000/listTaxPayers/:accountantId



API 4 : router.put("/updateUser/:accountantId/:taxPayerId", user.updateTaxPayers)  : This API updates the data of the user like name , income etc
    takes accountantId and taxPayerId in path params  , only accountant or admin can use thi API
    and take some data to update tax-payer in req.body
    endpoints : localhost:3000/updateUser/:accountantId/:taxPayerId
    input : {
                "name" : "Shivam"
            }



API 5 : router.post("/loginUser", user.loginUser)  : This API log-in user in application and generate token for the user 
    this API takes email and password in req.body

    endpoints : localhost:3000/loginUser

    take input as : {
    "email": "abc@gmail.com",
    "password": "abc123"
}



API 6 : router.put("/markTaxAsPaid/:taxPayerId", tax.markTaxPaid)  : this API marks tax as paid, this can only be done by tax-payer
    take taxPayerId in path params 

    endpoints : localhost:3000/markTaxAsPaid/:taxPayerId



API 7 : router.put("/manageTaxDue/:accountantId/:taxPayerId", tax.manageTaxDue) : this API updates tax stuas, this can only be done by tax-accountant
    take accountantId and taxPayerId in path params

    endpoints : localhost:3000/manageTaxDue/:accountantId/:taxPayerId

    input as : {
                    "status" : "New"   // cant'be Paid
                }



API 8 : router.get("/viewTaxDetails/:userId", tax.viewTaxDetails)  :  To view Tax-payers , if logined user is a tax-payer then it will show only his/her 
                                                                     data otherwise will show all tax-payers data
    
    endpoints : localhost:3000/viewTaxDetails/:userId



API 9 : router.put("/createTaxView/:accountantId/:taxPayerId", tax.createTaxDue)  :  to create tax due

    endpoints : localhost:3000/createTaxView/:accountantId/:taxPayerId