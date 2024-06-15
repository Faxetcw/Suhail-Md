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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgODUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcxLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDk3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYTZlVUFkOC9Wbm9QZDNrTnpmT1dqaFgvM0hUWUVhVG5QUTl1V3JuSXh4TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0NMMm5pWEhUa21QaG92TGZfYTBfQVwiLFxuICBcInBob25lSWRcIjogXCI0Mjk3MzhiYS0xZTE3LTQ4YTUtYTJhZS1kNmY2MTE2Mjg0YTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgNzQsXG4gICAgICAxODEsXG4gICAgICAyNyxcbiAgICAgIDEyMCxcbiAgICAgIDI4LFxuICAgICAgMTMsXG4gICAgICAyMTIsXG4gICAgICAyMzIsXG4gICAgICAxNzUsXG4gICAgICA0OCxcbiAgICAgIDE3MSxcbiAgICAgIDYxLFxuICAgICAgODIsXG4gICAgICA5LFxuICAgICAgMjQzLFxuICAgICAgNjgsXG4gICAgICAxMjIsXG4gICAgICA3MSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDE5MSxcbiAgICAgIDEsXG4gICAgICA5NCxcbiAgICAgIDIsXG4gICAgICAxMzMsXG4gICAgICA3NSxcbiAgICAgIDE2OCxcbiAgICAgIDE4OSxcbiAgICAgIDMyLFxuICAgICAgMTk1LFxuICAgICAgMTc0LFxuICAgICAgMzYsXG4gICAgICA4OCxcbiAgICAgIDM0LFxuICAgICAgOTQsXG4gICAgICA0LFxuICAgICAgNTgsXG4gICAgICAxMjgsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFM0pIVks1NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMjM1Njc0Mzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBBSU4gSlJcIixcbiAgICBcImxpZFwiOiBcIjE4MTg3NTA3MTAxNjk3MTo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU0RwNjRERUplL3Q3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi80R2tsTDJUSlVZRlUrczV3aUlCelprbTBYSXkvWnhibWpYVE9KcE0zVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUdlL2NSTll5WTdjREJiQVFxRUFnQis3TC8rRW00cFJaV2pJbVV1cGdtK3V1akhYYWdMcG14NnpVTlZoRmlRdXhuM3pYaEV6T1Nhdis3RG1ERkViRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibTFsdVZ6UHZIdmNvNklYV2ZOem9hR3J2dDVGcEdFNWlSOVhsUG82QXN3Q3JrS3RWRWVUV1VrMWNSeXhuSUVpcDNpRjBJMzBuMDFRNnBXWnJwWFg1Qmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjM1Njc0Mzo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDc2Njk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSURFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJREUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpdDVIZTZRaExFQnJtMCtpekxjbmZ1V0NaQkdCRi9PSWRCTmk2akRlclVNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkwMjQxNDgxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODQ3NDAxMTQxN1wifSIKfQ=="  // PUT your SESSION_ID 


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
