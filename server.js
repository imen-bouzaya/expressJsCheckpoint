const express = require('express')
const app = express()
const PORT =process.env.PORT || 5000;
app.use(date =(req,res,next)=>{
    let now=new Date()
    let h=now.getHours()
    let d=now.getDay()
    if((h<9|| h>17)&&((d==6 || d==0))){
        res.send('Sorry :( The web site is closed now. Please return betwen Monday and Friday from 9 am and 17 pm, Thank You ')
    }
    else{next()}
})
app.use(express.static('/public'))
app.listen(PORT,err=>err? console.error(err):console.log(`server is runing on ${PORT}`));