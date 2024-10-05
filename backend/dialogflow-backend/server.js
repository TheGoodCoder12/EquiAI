const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.json())
function isUserLoggedIn(req) {
    
}
function handleCheckCaseStatus(req,res) {
    if (isUserLoggedIn(req)) {
        const caseStatus = "Your case is scheduled for hearing on October 15th.";
        res.send({
            fulfillmentText: caseStatus
        });
    }
    else{
        res.send({
            fulfillmentText: "Please log in to check the status of your case."
        });
    }
}

app.post('/webhook',(req,res)=>{
    const intent=req.body.queryResult.intent.displayName;
    if (intent==='Case Status') {
        handleCheckCaseStatus(req,res);
    }
    else{
        req.body({
            fulfillmentText: 'Unknown intent, please try again.'
        })
    }
})
const PORT=1000
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})