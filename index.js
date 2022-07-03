// create a server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;
const { Webhook } = require('discord-webhook-node');
const hook = new Webhook({
    url: "https://discord.com/api/webhooks/993207734872850532/t-O82LJ_z879fXCdqF7Bhcagn61gOXlkYsulwbnYkPudvQ6dlC6F38CywIAY_e3DrtK1",
    //If throwErrors is set to false, no errors will be thrown if there is an error sending
    throwErrors: false,
    //retryOnLimit gives you the option to not attempt to send the message again if rate limited
    retryOnLimit: false
});
hook.setUsername('PM Purchase Notifs'); //Overrides the default webhook username
hook.setAvatar('https://cdn.discordapp.com/attachments/903375622800277544/993211171442278561/Group_28.png'); //Overrides the default webhook avatar

server.listen(port, function() {
    console.log('listening on port ' + port);
    }
);
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index.ejs");
  });
  



  app.use( express.static( "public" ) );

    app.get("*", (req, res) => {
    res.redirect("/");
  }
    );




    // ROUTES FOR THE CAR MODELS

    app.get("/cars/models/", (req, res) => {
        res.render("./views/cars/models/shit.ejs");
        
      });