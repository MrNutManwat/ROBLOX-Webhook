var express = require('express');

var app = express();
const Discord = require("discord.js");
const client = new Discord.Client();

{
const hook = new Discord.WebhookClient("417310761115975680","0DyeJiFtp_t6XmGeOh2PH5pmuBb0Ccx44e6l8Ybk7rsi5Cc-nObI0CYWSlQTAL_dCgoI")
client.on("ready", () >= {
console.log("the webhook is ready")
hook.send("test")
});

