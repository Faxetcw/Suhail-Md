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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_11_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMzEsXG4gICAgICAgIDUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVVZ3lNSEpzZDJuYXh6M2R6MXdhM3l5VWY5SXFURll4VXlTM1JpYzBseXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdxN3hnRXdCUWMySkhoYkoxckk5NVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTA2NThkNGMtY2E4Yi00NjhlLWIyOWMtZTVlMTczNjRjYjYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDQ3LFxuICAgICAgMjI0LFxuICAgICAgMyxcbiAgICAgIDE4MCxcbiAgICAgIDI1LFxuICAgICAgNyxcbiAgICAgIDMzLFxuICAgICAgNzgsXG4gICAgICA2MyxcbiAgICAgIDkwLFxuICAgICAgMTIzLFxuICAgICAgMTY4LFxuICAgICAgMTA5LFxuICAgICAgNzksXG4gICAgICAyMTksXG4gICAgICA1MyxcbiAgICAgIDE1NCxcbiAgICAgIDc0LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMzUsXG4gICAgICAxMDksXG4gICAgICAxNDgsXG4gICAgICAxMDEsXG4gICAgICAxMDMsXG4gICAgICAxNjQsXG4gICAgICAxNjcsXG4gICAgICAyMDgsXG4gICAgICAxMDMsXG4gICAgICAxMjEsXG4gICAgICAyMDMsXG4gICAgICAxODUsXG4gICAgICAyMjAsXG4gICAgICAxMyxcbiAgICAgIDYxLFxuICAgICAgMTc1LFxuICAgICAgMTgzLFxuICAgICAgMTY2LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJaUUdGRkFEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDEyMzU2NzQzOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUEFJTiBKUlwiLFxuICAgIFwibGlkXCI6IFwiMTgxODc1MDcxMDE2OTcxOjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09HRHA2NERFTEdJa0xNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiLzRHa2xMMlRKVVlGVStzNXdpSUJ6WmttMFhJeS9aeGJtalhUT0pwTTNWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4QUdVUTY2WHBsNDhQVndIL2xaaFcyZXFvOHVSMW5SNVlnNWk3YStpU3gveU84dVZ4b1hXRStLM3hOOTZJbHFWM3BTZHErSnR5WlA1UDBUR3REeU9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQaVdhUnB1KzdIdmZDbFVPYXliMHNDbk1qTXBza3dHc1lQNEFRckpKdzRmQ2hERVNNUTQwbWVzdi9JMlpuUzNCZk5tQ09nQldpY016OHdDQTB6eFdqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDEyMzU2NzQzOjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4MzA3MDlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
