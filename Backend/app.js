const express = require("express")
const app = express()
const PORT = 3001
const db = require("./models")
const bcrypt = require("bcrypt")
const expressSession = require("express-session")
const Sequelize = require("sequelize")
var SequelizeStore = require("connect-session-sequelize")(expressSession.Store);
const saltRounds = 10
const cors = require("cors")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


var sequelize = new Sequelize("banking-database", "postgres", null, {
    dialect: "postgres",
    host: "127.0.0.1",
})

// Define a model for your session table
const sessionData = sequelize.define("sessionData", {
    sid: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    data: Sequelize.TEXT,
    expires: Sequelize.DATE,
});



const sessionStore = new SequelizeStore({
    db: sequelize,
    table: "sessionData"
})

app.use (cors())



app.use(expressSession({
    secret: 'keyboard kitty',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 14, },
    store: sessionStore
}))

sessionStore.sync()

app.post("/sign-up", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        db.users.create({
            email: req.body.email,
            hash: hash
        }).then(function (data) {
            if (data) {
                res.redirect('/log-in');
            }
        });
    });

})

app.post("/log-in", (req, res) => {
    db.users.findOne({
        where: {
            email: req.body.email,
        }
    })
        .then((user) => {
            if (!user) {
                console.log("no user exists")
                res.json('no user exists')
            }
            else {
                bcrypt.compare(req.body.password, user.hash, function (err, result) {
                    if (result == true) {
                        req.session.userId = user.id
                        res.json('login sucessful');
                    } else {
                        console.log("wrong password")
                        res.json('wrong password');
                    }
                });
            }


        })
})

app.get("/logout", (req,res) =>{
    req.session.destroy(function(err) {
        if (err){
            res.json (err)
        }
        else {
            res.json ("your logged out")
        }
      })
}

)
// route to get likes
app.get("/likes", async (req, res) => {

    let userId = req.session.userId
    let user = await db.users.findOne({
        where: {
                 id: userId,
        }
    })
    res.json(user.likes)

})


app.post("/likes", async (req, res) => {

    let likes = req.body.likes
    let userId = req.session.userId
    console.log(likes, userId)
    db.users.update({
        likes: likes
    }, {
        where: {
            id: userId
        }
    })

}
)


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})