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
global.nameqr = '𝗞օ𝗎𝓼𝖊𝘵𝓼𝗎-𝗕օ𝘵'
global.namebot = '𝙺𝚘𝚞𝚜𝚎𝚝𝚜𝚞-𝙱𝚘𝚝'
global.sessions = 'CrowSession'
global.jadi = 'CrowJadiBot' 
global.yukiJadibts = true // Activado
global.ch = {
ch1: '120363387375075395@newsletter',
ch2: '120363368073378190@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【★】𝙻𝚘𝚕𝚒-𝐂𝐥𝐮𝐛 ❖'
global.botname = '(✦◠‿◠)𝙺𝚘𝚞𝚜𝚎𝚝𝚜𝚞-𝙱𝚘𝚝'
global.wm = '⏤͟͟͞͞⋆⬪࣪ꥈ🍨★ ׄ ꒱ 𝙺𝚘𝚞𝚜𝚎𝚝𝚜𝚞 - 𝙱𝚘𝚝 ୭'
global.author = '(⁎˃ᴗ˂⁎)𝐌𝐚𝐝𝐞 𝐁𝐲 𝙻𝚘𝚕𝚒-𝐂𝐥𝐮𝐛𓆪'
global.dev = '© 𝙼𝚊𝚍𝚎 𝚆𝚒𝚝𝚑 𝙱𝚢 𝙻𝚘𝚕𝚒 𝙲𝚕𝚞𝚋'
global.espera = '✰ 𝐄𝐬𝐩𝐞𝐫𝐚 𝐔𝐧 𝐌𝐨𝐦𝐞𝐧𝐭𝐨, 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐒𝐮 𝐏𝐞𝐝𝐢𝐝𝐨 (✿◠‿◠)'
global.namebot = '𝙺𝚘𝚞𝚜𝚎𝚝𝚜𝚞-𝙱𝚘𝚝'
global.textbot = `「 🔱 𝙺𝚘𝚞𝚜𝚎𝚝𝚜𝚞 - 𝙱𝚘𝚝 🔱 」`
global.vs = '2.2.0'
global.publi = '✰𝐒𝐢𝐠𝐮𝐞 𝐄𝐥 𝐂𝐚𝐧𝐚𝐥👇'

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

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '👑【✫𝙻𝚘𝚕𝚒  乂 𝙲𝚕𝚞𝚋✫】🎩', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

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
