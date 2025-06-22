/* Código Hecho Por WillZek para CrowBot
- Tienen Que Definir El welcomeMessage también en el _welcome.js o no funcionará 
- también tienen que agregar ${welcomeMessage} en el mensaje de bienvenida, eso sí, las comillas son `
- Espero Les Funcione uwu 
*/

let handler = async (m, { conn, text, isRowner }) => {
  if (!text) {
    return m.reply('《🌸》Debes proporcionar el mensaje de bienvenida después del comando. Ejemplo: `.setwelcome ¡Bienvenido al grupo!`');
  }

  const welcomeMessage = text.trim();

  try {
    global.db.data.chats[m.chat].welcomeMessage = welcomeMessage;

    m.reply(`《💋》El mensaje de bienvenida del grupo ha sido actualizado correctamente a: ${welcomeMessage}`);
  } catch (error) {
    console.error(error);
    m.reply('《⚠️》Hubo un error al intentar cambiar el mensaje de bienvenida.');
  }
};

handler.help = ['setwelcome *<mensaje>*'];
handler.tags = ['grupo'];
handler.command = ['setwelcome', 'setwel'];
handler.admin = true;
handler.group = true;

export default handler;