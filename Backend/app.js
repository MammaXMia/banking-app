const express = require("express")
const app = express()
const PORT = 3001
const db = require("./models")
const bcrypt = require("bcrypt")
const { selfClosing } = require("jade/lib")
const saltRounds = 10
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/new-user", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        db.users.create({
            email: req.body.email,
            hash: hash
        }).then(function (data) {
            if (data) {
                res.redirect('/home');
            }
        });
    });

})

app.post("/user-login", (req, res) => {
    db.users.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then((user) => {
            if (!user) {
                console.log("no user exists")
                res.redirect('/log-in')
            }
            else {
                bcrypt.compare(req.body.password, user.hash, function (err, result) {
                    if (result == true) {
                        res.redirect('/home');
                    } else {
                        console.log("wrong password")
                        res.redirect('/log-in');
                    }
                });
            }


        })
})





app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})