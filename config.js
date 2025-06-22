import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
// Staff De CrowBot
global.owner = [
   ['18493907272', 'Creador Danixz', true],
   ['51901930696', 'ᴬⁿᵍᵉˡⁱᵗʰᵒ ᵒᶠⁱᶜⁱᵃˡ', true]
]

global.creadorbot = [
   ['18493907272', 'Danixz', true],
]
  

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = ['']

global.prems = ['']


//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = '𝙧𝙞𝙖𝙨𝙚𝙢𝙥𝙖𝙞-𝙗𝙤𝙩'
global.namebot = '𝙍𝙄𝘼𝙎𝙀𝙈𝙋𝘼𝙄-𝙈𝘿'
global.sessions = 'CrowSession'
global.jadi = 'CrowJadiBot' 
global.yukiJadibts = true // Activado
global.ch = {
ch1: '120363387375075395@newsletter',
ch2: '120363368073378190@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𝙃𝙄𝙂𝙃 𝙎𝘾𝙃𝙊𝙊𝙇 𝘾𝙇𝙐𝘽 ❀'
global.botname = '✿︎ ʀɪᴀsᴇᴍᴘᴀɪ-ᴍᴅ ✿︎'
global.wm = '𝐇𝐢𝐠𝐡 𝐒𝐜𝐡𝐨𝐨𝐥 𝐂𝐥𝐮𝐛 𝐏𝐫𝐨𝐲𝐞𝐜𝐭 '
global.author = '𝐌𝐚𝐝𝐞 𝐁𝐲 𝐇𝐢𝐠𝐡 𝐒𝐜𝐡𝐨𝐨𝐥 𝐂𝐥𝐮𝐛'
global.dev = '© 𝚖𝚊𝚍𝚎 𝚋𝚢 𝚑𝚒𝚐𝚑 𝚜𝚌𝚑𝚘𝚘𝚕 𝚌𝚕𝚞𝚋𝚜'
global.espera = '𝗡𝘆𝗮 𝗘𝘀𝗽𝗲𝗿𝗮 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 𝗲𝘀𝘁𝗼𝘆 𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗦𝘂 𝗣𝗲𝗱𝗶𝗱𝗼 ☺️'
global.namebot = '𝗥𝗲𝗶𝗦𝗲𝗺𝗽𝗮𝗶-𝗠𝗗'
global.textbot = `「 🔱🌸 𝙍𝙄𝘼𝙎𝙀𝙈𝙋𝘼𝙄-𝘽𝙊𝙏 🌸 」`
global.vs = '2.2.0'
global.publi = '𝙨𝙞𝙜𝙪𝙚 𝙈𝙞 𝘾𝙖𝙣𝙖𝙡 𝘼𝙧𝙞𝙜𝙖𝙩𝙤 𝙉𝙮𝙖 ☺️💋'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./media/menus/Menu.jpg')
global.imagen2 = fs.readFileSync('./media/menus/Menu2.jpg')
global.imagen3 = fs.readFileSync('./media/menus/Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./media/catalogo.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.repobo𝚝 = 'https://github.com/DanxiZx/Kousetsu-Bot'
global.grupo = 'https://chat.whatsapp.com/B7POPrlJiZf7UWHJKvzVkx'
global.gteam = 'https://chat.whatsapp.com/EpkR7XS0hrMDYk89yw57HZ'
global.gsupport = 'https://chat.whatsapp.com/K5GLB5CXp3iAl4XsDzav1W'
global.comu = 'https://chat.whatsapp.com/Bgfb6Ag13BDCvwzOtldlCm'
global.channel = 'https://whatsapp.com/channel/0029Vb1AFK6HbFV9kaB3b13W'
global.insta = 'https://www.instagram.com/crowbot-wa'
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '❤️【𝙃𝙞𝙜𝙝 𝙎𝙘𝙝𝙤𝙤𝙡 𝘾𝙡𝙪𝙗❤️', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
