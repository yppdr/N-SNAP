import express from 'express';
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.static('views'));

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
})


app.listen(port, () => {
  console.log(`🚀 http://localhost:${port} 🚀`);
});