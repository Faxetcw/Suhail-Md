const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9012356743";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_51_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NixcbiAgICAgICAgMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicDRQcWp1cG9KYnlMMkpGS1laVTlUdUFDTUl1T0FNdzE1bnlPUWhkUWtZbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDEyMzU2NzQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjFCOUM1MjU1OEZCQkExQUI1MTFGMzMzNTVDQTNEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg0Nzc1MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN1VjUElmWTZRakMwODRwZVBJVTFsZ1wiLFxuICBcInBob25lSWRcIjogXCI1YTlmYTI4MS0yN2EyLTQzZjctOWM0OC1mZmFmMDJhOWQ0NGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMxLFxuICAgICAgMjQzLFxuICAgICAgMTQ3LFxuICAgICAgNDgsXG4gICAgICA0NSxcbiAgICAgIDIxNyxcbiAgICAgIDE3OSxcbiAgICAgIDg3LFxuICAgICAgMTI2LFxuICAgICAgNzYsXG4gICAgICA5MixcbiAgICAgIDMsXG4gICAgICAxMTUsXG4gICAgICAxNzQsXG4gICAgICAxMjUsXG4gICAgICAyMjIsXG4gICAgICAyNDUsXG4gICAgICAyMjAsXG4gICAgICAzNixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMDEsXG4gICAgICA2NSxcbiAgICAgIDI4LFxuICAgICAgNDQsXG4gICAgICAxMjIsXG4gICAgICA2NCxcbiAgICAgIDIwMSxcbiAgICAgIDIxMSxcbiAgICAgIDIzNixcbiAgICAgIDE4NyxcbiAgICAgIDU0LFxuICAgICAgMTksXG4gICAgICAxMDAsXG4gICAgICAxMTYsXG4gICAgICAxMDQsXG4gICAgICAzMixcbiAgICAgIDUwLFxuICAgICAgMTM0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpSVjlSSjhOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyMzU2NzQzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUEFJTiBKUlwiLFxuICAgIFwibGlkXCI6IFwiMTgxODc1MDcxMDE2OTcxOjQ3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09XRHA2NERFTGZGdDdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzRHa2xMMlRKVVlGVStzNXdpSUJ6WmttMFhJeS9aeGJtalhUT0pwTTNWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBZDBMMzZacnQrQlNpSGt3TFRjaTRvRlN3dDJvZEM3emQxYnp4YTcwb3Qrc3FQRUwwYnd5bnRvcXBlN0RQMWppMzZWQnQxaWtlY2cvelpLV3lMQ1hCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI4U2M2ck5SRC9nelVBWkVmNzRGeWNZaktrWVBCam50bS81d3ZwS3lYRGhpOVgzeHhZKzNqcVU2QXE3cXE0dWdBYWovU2I0MUZSR1g4YjcvRnhyd0dBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEyMzU2NzQzOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg0Nzc0OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJRElcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlESS5qc29uIjogIntcImtleURhdGFcIjpcIi9kMUIwRk5GK0VCS3FLQ1NvRUpudWJVL0hSckFuR090QkVXOCs1UE9VMEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTAyNDE0ODIwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NDc3MjA1NjMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "PainJr",
  packname: process.env.PACK_NAME || "Pain",
  botname : process.env.BOT_NAME  || "PainJr",
  ownername:process.env.OWNER_NAME|| "It'x PainJr",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
