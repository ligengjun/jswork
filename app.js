const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(express.static('.'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.post('/formBuilder',function(req,res){
    console.log(req.body)
    res.send(req.body)
})

app.listen(8080,()=>console.log('node express 服务已启动，监听端口：8080'))

const openDfaultBrower=function(url){
    var exec = require('child_process').exec;
    switch(process.platform){
        case "darwin":
            exec('open '+url);
            break;
        case "win32":
            exec('start '+url);
            break;
        default:
            exec('xdg-open',[url]);
    }
}
openDfaultBrower('http://localhost:8080')