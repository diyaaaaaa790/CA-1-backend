const express = require('express');
const app = express();
const PORT = 3000;

app.get('/signup', (req, res) => {
    res.send("Hey! Signup page in html file");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
if(username){
  console.log("username")
}else{
    console.log("username can't be empty")
}
if(email){
    console.log("email")
}else{
    console.log("email can't be empty")
}