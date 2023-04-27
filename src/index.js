const express= require('express')
const app= express();
const PORT=3001||process.env.PORT
const route = require("./routes/route");

app.use(express.json());

//////Routes////
app.use("/", route);

app.listen(PORT,()=>{
    console.log('server is started'+` http://localhost:${PORT}`);
})