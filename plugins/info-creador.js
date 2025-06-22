import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
   await m.react('🎱');

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let edtr = `@${m.sender.split`@`[0]}`;
    let username = conn.getName(m.sender);

    // VCARD
    let list = [{
        displayName: "𝙀𝙍𝙀𝙉𝙓𝙎-𝙈𝘿𝘽𝙒 🚀",
        vcard: `BEGIN:VCARD\nVERSION:3.0\nFN: ʜɪɢʜ sᴄʜᴏᴏʟ ᴄʟᴜʙ🍭\nitem1.TEL;waid=50557865603:50557865603\nitem1.X-ABLabel:Número\nitem2.EMAIL;type=INTERNET: erexs01@gmail.com\nitem2.X-ABLabel:Email\nitem3.\nitem3.X-ABLabel:Internet\nitem4.ADR:;; República Dominicana;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    }];

    await conn.sendMessage(m.chat, {
        contacts: {
            displayName: `${list.length} Contacto`,
            contacts: list
        },
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: '𝑯𝒐𝒍𝒂 𝑺𝒐𝒚 𝑬𝒓𝒆𝒏𝒙𝒔 𝑴𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒅𝒐𝒓 𝑫𝒆 𝑩𝒐𝒕𝒔 𝑷𝒂𝒓𝒂 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑',
                body: dev,
                thumbnailUrl: 'https://files.catbox.moe/dey7uk.jpg',
                sourceUrl: 'https://github.com/DanxiZx',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });

    let txt = `👋 *Hola \`${username}\` este es*\n*el contacto de mi creador*`;

    await conn.sendMessage(m.chat, { text: txt });
};

handler.help = ['owner', 'creator'];
handler.tags = ['main'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;