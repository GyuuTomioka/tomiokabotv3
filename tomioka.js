const {
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	DisconectReason,
	MessageTypeProto,
  WAConnection,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	ProxyAgent,
	waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage,
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL,                                                                                                                                                         ///verdadeiro dono: Tio Tomioka wa.me/5544998220867
  WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
	relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { cmdadd } = require('./lib/totalcmd.js')
const { imunes } = require('./src/imunes')
const { membrocm } = require('./src/membrocm')
const { utils } = require('./src/utils')
const { isFiltered, addFilter } = require('./lib/antispam.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
const { help } = require('./src/help')
const { dono } = require('./src/dono')
const { menuvoz } = require('./src/menuvoz')
const { custom } = require('./src/custom')
const { novid } = require('./src/novid')
const { imagens } = require('./src/imagens')
const { logos } = require('./src/logos')
const { ajudantes } = require('./src/ajudantes')
const { interact } = require('./src/interact')
const { infodono } = require('./src/infodono')
const { efeitoaudio } = require('./src/efeitoaudio')
const { especifico} = require('./src/especifico')
const { grupo } = require('./src/grupo')
const { premiuns } = require('./src/premiuns')
const { outros } = require('./src/outros')
const { rank } = require('./src/rank')
const { m18 } = require('./src/m18')
const { modapk } = require('./src/modapk')  
const { destrava } = require('./src/destrava')
const { destrava2 } = require('./src/destrava')
const { destrava3 } = require('./src/destrava')
const { gbin } = require('./src/gbin')
const { gpessoa } = require('./src/gpessoa')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addVote, delVote } = require('./lib/vote')
const { listsay } = require('./src/listsay')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const antidoc = JSON.parse(fs.readFileSync('./database/antidoc.json'))
const antiloc = JSON.parse(fs.readFileSync('./database/antiloc.json'))
const anticontato = JSON.parse(fs.readFileSync('./database/anticontato.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./database/json/anticatalogo.json'));
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const anticall = JSON.parse(fs.readFileSync('./database/json/anticall.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const antifake = JSON.parse(fs.readFileSync('./database/group/antifake.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const premium = JSON.parse(fs.readFileSync('./database/vip.json'))
const atsticker = JSON.parse(fs.readFileSync('./database/data/atsticker.json'));
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const autofigu = JSON.parse(fs.readFileSync('./database/autofigu.json'))
const chatban = JSON.parse(fs.readFileSync('./database/json/ban.json'));
const welcom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
img = fs.readFileSync('./me.jpg')
const yts = require( 'yt-search')
const os = require('os')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api");
const ggs = require('google-it')
const axios = require('axios')
const util = require("util");
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { downloadig, igstory } = require('./lib/instadl.js')
const { cekvip } = require('./src/cekvip')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const { removeBackgroundFromImageFile } = require('remove.bg')
const encodeUrl = require('encodeurl')
const imgbb = require('imgbb-uploader')
const googleImage = require('g-i-s')
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Tio Tomioka\n' 
            + 'ORG:criador do tomioka bot;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=554498220867:+55 4498220867\n' 
            + 'END:VCARD'



prefix = "/"
blocked = []
limitawal = '999999999'
cr = '*TOMIOKA*'
modobot = true
modobot = false
public = true
/**MAIS FUNÇÕES**/
const totalcmd = JSON.parse(fs.readFileSync('./data/totalcmd.json'))[0].totalcmd

/*********** LOAD FILE ***********/
const comandost = totalcmd
const { metodos } = require('./src/metodos')
const { pack18 } = require('./src/pack18')
const { compras } = require('./src/compras')
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const { ptbr } = require('./tomioka/ptbr.js')
const { webp2gifFile } = require("./tomioka/gif.js")
//_TIC-TAC-TOE By: Resen
const { crtt } = "Jogo da velha"
const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js')//JOGO DA VELHA,AGRADECIMENTOS: IRIS(kill), Resen
const tictactoe = JSON.parse(fs.readFileSync('./jdv/ttt/tictactoe.json'));
const { ttthelp } = require('./jdv/ttt/TTTconfig/ttthelp');
const { tttme } = require('./jdv/ttt/TTTconfig/tttme');
var tttset = require('./jdv/ttt/TTTconfig/tttset.json');
var esp = require('./jdv/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "??" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "??" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "??" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="??"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

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

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' escaneie o qr code para conectar..'))
	})

	fs.existsSync('./tomioka.json') && client.loadAuthInfo('./tomioka.json')
	client.on('connecting', () => {
		start('2', 'Conectando qr code quase la...')
	})
	client.on('open', () => {
		success('2', 'Prontinho ^-^')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./tomioka.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        
		 client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by Tio Tomioka yt`)

client.on('group-participants-update', async (anu) => {
	const mdata = await client.groupMetadata(anu.jid)
	if(antifake.includes(anu.jid)) {
		if (anu.action == 'add'){
			num = anu.participants[0]
			if(!num.split('@')[0].startsWith(55)) {
				client.sendMessage(mdata.id, 'Tchau numero fake leia as regras antes de entrar!', MessageType.text)
				setTimeout(async function () {
					client.groupRemove(mdata.id, [num])
				}, 1000)
}
}
}
if (!welcom.includes(anu.jid)) return
      try {
         const mdata = await client.groupMetadata(anu.jid)
         num = anu.participants[0]
         
         ini_user = client.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await client.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
           
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Oi @${num.replace('@s.whatsapp.net', '')}\n◪ Bem-vindo(a):\n├─ *Grupo:* ${mdata.subject}\n└─ *Número:* ${num.replace('@s.whatsapp.net', '')}\nSeja bem-vindo(a)~~\n${namaewa}`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `◪ Tchau 😞 ${namaewa}\n◪ Saiu de:\n${mdata.subject}\n\n└─ ❏ Número: ${num.replace('@s.whatsapp.net', '')}\nAté mais ... espero que não se arrependa!`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabés por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ Mensagem: @${num.split('@')[0]} se tornou um administrador do grupo, parabéns`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://dappa-result.herokuapp.com/bgverify.jpeg`)
            teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não é mais um administrador do grupo`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid && mek.key.fromMe == 'status@broadcast') return
			if (!mek.key.fromMe && modobot === true) return
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')

            
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            function _0xda6a(){var _0x41c62b=['ctMes','essag','11505670zKZera','singl','tedRo','messa','nsRes','ionMe','932499VQmgRe','espon','conta',')+)+)','toStr','1090377zOzrbk','584165kCWEGQ','fileN','displ','reque','sage','rsati','tedBu','order','tile','xtMes','title','seMes','dedTe','HcMLA','wId','exten','1794380HkIgad','image','ssage','locat','Messa','butto','ponse','conve','ructo','des','entMe','ttonI','docum','ayNam','eSele','16ONxwsx','capti','88sNjBqe','6JWWacx','selec','listR','stPay','const','name','produ','(((.+','searc','mentM','video','ing','apply','inclu','ctRep','980399SbqLgz','text','ame','noteM','1270576IQhQhn'];_0xda6a=function(){return _0x41c62b;};return _0xda6a();}(function(_0x3e6ac5,_0x4a3575){function _0x5bed06(_0x190f8c,_0xbf775e,_0x4f3d26,_0x224624,_0xcf0f67){return _0x33f3(_0x190f8c-0x2a3,_0xcf0f67);}function _0x18535a(_0x3f823e,_0x193d07,_0x3b12d8,_0x503f44,_0x1ea530){return _0x33f3(_0x3f823e- -0x3cc,_0x193d07);}var _0x33bc12=_0x3e6ac5();function _0x27d816(_0x210633,_0x401908,_0x16fec0,_0x21286f,_0x491aca){return _0x33f3(_0x21286f-0x30f,_0x16fec0);}function _0x503a01(_0x5ecee0,_0x38586b,_0x1ef786,_0x14b7d6,_0x3cf20f){return _0x33f3(_0x3cf20f-0xfc,_0x5ecee0);}function _0x2a0dcd(_0x484e07,_0x1f43b5,_0x22cbb6,_0x181810,_0x3f19d2){return _0x33f3(_0x484e07- -0x23b,_0x3f19d2);}while(!![]){try{var _0x366a6a=parseInt(_0x27d816(0x3c6,0x3fe,0x404,0x3e7,0x3f7))/(0x641*0x5+0x406*-0x7+-0x31a)+-parseInt(_0x27d816(0x3e3,0x3c9,0x3c6,0x3d8,0x3ba))/(-0x1fb7+-0x675*0x5+0x4002)+-parseInt(_0x27d816(0x3f0,0x3dc,0x3d9,0x3e1,0x3cf))/(-0x1616+-0x1b84+0x1*0x319d)*(-parseInt(_0x503a01(0x1a9,0x1a6,0x1ad,0x199,0x1af))/(0x5*0x143+-0x24d2+0x1e87))+-parseInt(_0x27d816(0x3e8,0x3d7,0x3de,0x3f7,0x403))/(0x9e*-0x35+0x1*0x151+0x1f6a)+-parseInt(_0x27d816(0x3dd,0x3c4,0x3e6,0x3c5,0x3d8))/(0x58*0x4+-0x42*0x18+0x4d6)*(-parseInt(_0x5bed06(0x368,0x34b,0x36d,0x361,0x346))/(0x97*0x2+0x2*0x11fd+-0x2521))+-parseInt(_0x18535a(-0x317,-0x31c,-0x306,-0x32a,-0x31b))/(0x1937+-0xc*0x2ae+0x33*0x23)*(parseInt(_0x503a01(0x1d2,0x1de,0x1bb,0x1d1,0x1d3))/(0x16d+-0xe7a+0x2*0x68b))+parseInt(_0x27d816(0x3ec,0x3db,0x3f6,0x3db,0x3d9))/(-0x1*0x1d56+-0x1*-0x24b7+-0x757);if(_0x366a6a===_0x4a3575)break;else _0x33bc12['push'](_0x33bc12['shift']());}catch(_0x4fe337){_0x33bc12['push'](_0x33bc12['shift']());}}}(_0xda6a,-0x1ef27*0xc+0x290a*0x8e+0xc8532));function _0x1ca888(_0x4a4250,_0x387f93,_0x45a456,_0x48b4d0,_0x11fab9){return _0x33f3(_0x387f93- -0x4c,_0x45a456);}function _0xea7cb1(_0x54f564,_0x4a6243,_0x33cd75,_0x219fc7,_0x1eaf5c){return _0x33f3(_0x4a6243-0x117,_0x33cd75);}function _0x33f3(_0x33f373,_0x566154){var _0x4746bd=_0xda6a();return _0x33f3=function(_0x181d95,_0x5195b7){_0x181d95=_0x181d95-(-0xcc*-0x7+-0x2013+0x1b2b);var _0x11c5ba=_0x4746bd[_0x181d95];return _0x11c5ba;},_0x33f3(_0x33f373,_0x566154);}var _0x20463e=(function(){var _0x4562ab=!![];return function(_0x284795,_0x2cd7f6){var _0x5c12d6=_0x4562ab?function(){function _0x13c006(_0x1f4234,_0xf74999,_0x14f4c3,_0x1e8bd3,_0x29a375){return _0x33f3(_0x14f4c3-0x204,_0xf74999);}if(_0x2cd7f6){var _0x6d3004=_0x2cd7f6[_0x13c006(0x2e3,0x2a5,0x2c6,0x2c3,0x2bb)](_0x284795,arguments);return _0x2cd7f6=null,_0x6d3004;}}:function(){};return _0x4562ab=![],_0x5c12d6;};}());function _0x435a8c(_0x3f9e51,_0x31f464,_0xabb6bb,_0x1fab9d,_0x51bbb7){return _0x33f3(_0x1fab9d- -0x5e,_0xabb6bb);}function _0x169ded(_0x1c37ae,_0x26de9d,_0x4e23ca,_0x5b5be6,_0x3d522c){return _0x33f3(_0x5b5be6-0x69,_0x4e23ca);}var _0xb47e6d=_0x20463e(this,function(){function _0x48d33b(_0x22173a,_0x5e4097,_0x3ac074,_0x49635f,_0x5671d9){return _0x33f3(_0x3ac074-0xcb,_0x5671d9);}var _0x1073b5={};function _0x37268d(_0x12d737,_0x2254a2,_0xac4ed4,_0x39b3f1,_0x229f12){return _0x33f3(_0x39b3f1- -0x13b,_0xac4ed4);}_0x1073b5[_0x12e809(0x5b,0x75,0x7f,0x6c,0x73)]=_0x48d33b(0x19b,0x187,0x188,0x1aa,0x17d)+_0x48d33b(0x1b3,0x1af,0x1a0,0x1a1,0x195)+'+$';function _0x1e7481(_0x1a7ca2,_0x6c1561,_0xc76406,_0x367759,_0x34dc5a){return _0x33f3(_0x34dc5a- -0x2a6,_0xc76406);}function _0x12e809(_0x1c6722,_0xf19cdc,_0x44f9aa,_0x2fe947,_0x5d9c34){return _0x33f3(_0x5d9c34- -0x72,_0xf19cdc);}function _0x1737af(_0xd9a1c6,_0x103b33,_0x5430e3,_0x4c9c27,_0x5150d8){return _0x33f3(_0xd9a1c6- -0x368,_0x5430e3);}var _0xfd4d92=_0x1073b5;return _0xb47e6d[_0x12e809(0x52,0x85,0x66,0x6f,0x64)+_0x12e809(0x35,0x6c,0x6a,0x62,0x4f)]()[_0x37268d(-0x5b,-0x73,-0x96,-0x7d,-0x96)+'h'](_0xfd4d92[_0x1737af(-0x283,-0x289,-0x263,-0x268,-0x282)])[_0x1737af(-0x292,-0x28f,-0x299,-0x270,-0x2a7)+_0x48d33b(0x176,0x176,0x18c,0x1a8,0x19d)]()[_0x48d33b(0x169,0x17e,0x185,0x19b,0x181)+_0x12e809(0x51,0x5a,0x34,0x4d,0x3a)+'r'](_0xb47e6d)[_0x48d33b(0x1a6,0x1a8,0x189,0x180,0x168)+'h'](_0xfd4d92[_0x37268d(-0x42,-0x3b,-0x56,-0x56,-0x53)]);});function _0x544b5a(_0x2f119d,_0x56935b,_0x423ef7,_0x3ed150,_0xd3f7af){return _0x33f3(_0x56935b-0x2f7,_0x423ef7);}_0xb47e6d();var body=type==_0x1ca888(0x9a,0xa3,0xbf,0xc5,0x9a)+_0x1ca888(0x84,0x91,0x89,0x73,0x8d)+'on'&&prefix[_0x169ded(0x14e,0x13e,0x12c,0x12c,0x11b)+_0x544b5a(0x39a,0x3a4,0x385,0x388,0x3ad)](mek[_0x169ded(0x157,0x117,0x146,0x138,0x11c)+'ge'][_0xea7cb1(0x1ff,0x206,0x201,0x215,0x21e)+_0x169ded(0x124,0x127,0x159,0x146,0x125)+'on'][0x15da+0x2*-0x18d+-0x12c0])?mek[_0x435a8c(0x55,0x87,0x6d,0x71,0x7a)+'ge'][_0xea7cb1(0x221,0x206,0x213,0x1eb,0x225)+_0x169ded(0x127,0x13c,0x15e,0x146,0x15c)+'on']:type==_0x1ca888(0x88,0x9b,0x99,0x84,0x8b)+_0xea7cb1(0x1f4,0x1fb,0x20b,0x1e3,0x1d9)+_0x1ca888(0x93,0x95,0x9e,0xb6,0x79)+_0x544b5a(0x3f0,0x3d3,0x3f0,0x3bb,0x3dd)&&prefix[_0x1ca888(0x97,0x77,0x83,0x7a,0x7f)+_0x169ded(0x12a,0x129,0x12d,0x116,0x115)](mek[_0x1ca888(0x6d,0x83,0x6b,0x9f,0xa1)+'ge'][_0x169ded(0x170,0x141,0x138,0x150,0x165)+_0x169ded(0x167,0x16f,0x15e,0x14d,0x141)+_0x169ded(0x156,0x153,0x14a,0x14a,0x12b)+_0x169ded(0x155,0x14c,0x15d,0x145,0x15c)][_0x544b5a(0x3dc,0x3bd,0x39e,0x3b9,0x3d4)][0x2369+-0x339*0x9+-0x668*0x1])?mek[_0x544b5a(0x3a6,0x3c6,0x3db,0x3e4,0x3e3)+'ge'][_0xea7cb1(0x1ff,0x1fe,0x21f,0x218,0x214)+_0x1ca888(0xad,0x98,0x78,0xa1,0xa1)+_0x544b5a(0x3ee,0x3d8,0x3d2,0x3dc,0x3ec)+_0x169ded(0x167,0x14c,0x161,0x145,0x14f)][_0x169ded(0x13c,0x128,0x124,0x12f,0x13b)]:type==_0x169ded(0x159,0x16a,0x15e,0x152,0x143)+_0xea7cb1(0x1f9,0x203,0x20b,0x20b,0x1f9)+'ge'&&prefix[_0x435a8c(0x58,0x7e,0x85,0x65,0x46)+_0x1ca888(0x7c,0x61,0x70,0x4c,0x5d)](mek[_0x169ded(0x12c,0x134,0x14f,0x138,0x120)+'ge'][_0x1ca888(0xa1,0x9d,0xb3,0x9a,0xad)+_0x169ded(0x146,0x177,0x15f,0x155,0x13b)+'ge'][_0x169ded(0x12f,0x125,0x138,0x11d,0x11d)+'on'][0x4*0x92+-0x23*-0x61+-0x1*0xf8b])?mek[_0x169ded(0x124,0x138,0x121,0x138,0x118)+'ge'][_0x169ded(0x13d,0x154,0x16b,0x152,0x132)+_0x1ca888(0x85,0xa0,0xb6,0x89,0x94)+'ge'][_0x169ded(0x11e,0x123,0x107,0x11d,0x11d)+'on']:type==_0x1ca888(0x80,0x74,0x66,0x91,0x8e)+_0xea7cb1(0x20f,0x203,0x1e3,0x1f1,0x21d)+'ge'&&prefix[_0xea7cb1(0x1d2,0x1da,0x1e5,0x1cb,0x1d1)+_0xea7cb1(0x1df,0x1c4,0x1e1,0x1db,0x1be)](mek[_0x544b5a(0x3b7,0x3c6,0x3e5,0x3bb,0x3e0)+'ge'][_0x1ca888(0x59,0x74,0x86,0x89,0x55)+_0x435a8c(0x88,0x8c,0x93,0x8e,0x77)+'ge'][_0x544b5a(0x3ca,0x3ab,0x391,0x3c6,0x39a)+'on'][-0x1470+-0x14b3+0x2923])?mek[_0x435a8c(0x73,0x92,0x93,0x71,0x80)+'ge'][_0xea7cb1(0x1bb,0x1d7,0x1b8,0x1e9,0x1f1)+_0x169ded(0x13b,0x14a,0x15e,0x155,0x13c)+'ge'][_0x169ded(0xfb,0x10b,0x12c,0x11d,0x126)+'on']:type==_0xea7cb1(0x1d7,0x1c7,0x1b6,0x1df,0x1dd)+_0x435a8c(0x36,0x58,0x2f,0x50,0x3b)+_0x169ded(0x161,0x171,0x161,0x153,0x156)&&prefix[_0xea7cb1(0x1d7,0x1da,0x1ce,0x1e6,0x1ca)+_0x435a8c(0x32,0x42,0x4a,0x4f,0x3c)](mek[_0x544b5a(0x3b5,0x3c6,0x3da,0x3b2,0x3d9)+'ge'][_0x544b5a(0x39b,0x3a7,0x3bd,0x3b1,0x3b1)+_0x544b5a(0x39e,0x3a5,0x3a7,0x387,0x395)+_0x544b5a(0x3f6,0x3e1,0x3dd,0x3f9,0x3fb)][_0x544b5a(0x3b1,0x3d0,0x3cd,0x3b9,0x3b9)+_0x544b5a(0x3bb,0x3be,0x3b8,0x39f,0x3a1)][0xd*0xf1+-0xf3c+0x2ff*0x1])?mek[_0x435a8c(0x75,0x85,0x50,0x71,0x73)+'ge'][_0xea7cb1(0x1ab,0x1c7,0x1b9,0x1a8,0x1c0)+_0x435a8c(0x54,0x58,0x45,0x50,0x5e)+_0x544b5a(0x3e7,0x3e1,0x3d8,0x3e6,0x3d4)][_0x544b5a(0x3b2,0x3d0,0x3d3,0x3bb,0x3ec)+_0xea7cb1(0x1da,0x1de,0x1f7,0x1da,0x1d7)]:type==_0x435a8c(0x74,0x67,0x51,0x5a,0x78)+_0x544b5a(0x3c8,0x3ca,0x3ea,0x3c3,0x3c6)+_0x1ca888(0x8d,0x97,0x9e,0xb8,0x8d)+_0x169ded(0x167,0x129,0x164,0x145,0x148)&&prefix[_0x435a8c(0x49,0x76,0x76,0x65,0x84)+_0x169ded(0x105,0x109,0xf9,0x116,0x105)](mek[_0x169ded(0x13d,0x12f,0x13b,0x138,0x123)+'ge'][_0x544b5a(0x3a5,0x3af,0x3a5,0x3a8,0x3d1)+_0xea7cb1(0x1f0,0x1ea,0x207,0x1ed,0x209)+_0xea7cb1(0x21a,0x1fa,0x1e1,0x219,0x1e3)+_0xea7cb1(0x20f,0x1f3,0x1ea,0x1ff,0x1d8)][_0x435a8c(0x8f,0x5f,0x61,0x6f,0x6c)+_0x1ca888(0x75,0x66,0x6a,0x63,0x5d)+_0x435a8c(0x85,0x4f,0x77,0x66,0x78)+'ly'][_0x1ca888(0x81,0x6b,0x72,0x7e,0x8d)+_0xea7cb1(0x1c3,0x1e5,0x1e1,0x1e7,0x1ce)+_0xea7cb1(0x1fd,0x1fd,0x21d,0x1f1,0x1fc)][-0x2183*-0x1+0x16b*-0x1+-0x2018])?mek[_0x1ca888(0x8c,0x83,0x91,0x6e,0x8e)+'ge'][_0x1ca888(0x4e,0x6c,0x67,0x72,0x7d)+_0x435a8c(0x95,0x7e,0x74,0x75,0x6a)+_0x1ca888(0x92,0x97,0xa2,0x92,0x89)+_0x1ca888(0x9e,0x90,0x7b,0x8a,0x95)][_0x435a8c(0x4e,0x62,0x4f,0x6f,0x6d)+_0x169ded(0x106,0x13b,0x11a,0x11b,0xfc)+_0x169ded(0x117,0x12c,0x124,0x12d,0x14a)+'ly'][_0x435a8c(0x53,0x58,0x5a,0x59,0x3f)+_0xea7cb1(0x1d5,0x1e5,0x1f4,0x1ea,0x1f3)+_0x1ca888(0xb2,0x9a,0x7e,0xb4,0x9a)]:type==_0x544b5a(0x3c7,0x3e4,0x3e9,0x3c5,0x3cb)+_0xea7cb1(0x1e5,0x1e7,0x203,0x1ea,0x1d0)+_0x544b5a(0x3d9,0x3e5,0x3fc,0x3e0,0x3da)+_0x1ca888(0x9d,0xa0,0xa3,0x9e,0x8b)+'ge'&&prefix[_0x435a8c(0x5f,0x4a,0x55,0x65,0x4a)+_0x169ded(0x10b,0xf9,0x10b,0x116,0xfe)](mek[_0x435a8c(0x6b,0x8a,0x6c,0x71,0x57)+'ge'][_0x1ca888(0x85,0xa1,0xa1,0xad,0x92)+_0x169ded(0x152,0x133,0x127,0x139,0x117)+_0x544b5a(0x3e0,0x3e5,0x404,0x3dd,0x3db)+_0xea7cb1(0x1f3,0x203,0x21e,0x201,0x212)+'ge'][_0x1ca888(0x4b,0x6b,0x4b,0x4c,0x49)+_0x544b5a(0x3cd,0x3d5,0x3ec,0x3f4,0x3b5)+_0x1ca888(0x5c,0x63,0x5c,0x4b,0x50)+'d'][-0x420+0xc6b*0x3+0x21*-0x101])?mek[_0x169ded(0x135,0x11c,0x13d,0x138,0x11a)+'ge'][_0x1ca888(0xc0,0xa1,0xa9,0xc1,0xc2)+_0x169ded(0x142,0x137,0x12a,0x139,0x158)+_0x169ded(0x152,0x16c,0x146,0x157,0x164)+_0x544b5a(0x3cf,0x3e3,0x3d0,0x3e5,0x3d6)+'ge'][_0x169ded(0x120,0x106,0x11b,0x120,0x10c)+_0x544b5a(0x3e7,0x3d5,0x3e9,0x3f3,0x3dd)+_0x169ded(0xf8,0x10c,0x128,0x118,0x125)+'d']:type==_0xea7cb1(0x1ff,0x1eb,0x1d0,0x207,0x1d8)+_0x544b5a(0x3ab,0x3c1,0x3d7,0x3de,0x3d6)+_0x1ca888(0x72,0x90,0xad,0x70,0x71)&&prefix[_0x544b5a(0x39f,0x3ba,0x3c9,0x3a8,0x3b2)+_0x169ded(0xfc,0xfd,0x12e,0x116,0x112)](mek[_0xea7cb1(0x1e2,0x1e6,0x1fa,0x1d3,0x1fa)+'ge'][_0xea7cb1(0x1d8,0x1eb,0x1d5,0x1f6,0x1d8)+_0x169ded(0x141,0x13f,0x132,0x133,0x121)+_0x435a8c(0x65,0x96,0x9d,0x7e,0x7c)][_0x1ca888(0xa6,0x8e,0x8e,0x82,0x75)+_0x169ded(0x109,0x114,0x108,0x11a,0x110)+'e'][0x10d1+0x1*0x1dcc+-0x2e9d])?mek[_0x435a8c(0x86,0x5e,0x92,0x71,0x7e)+'ge'][_0x544b5a(0x3e8,0x3cb,0x3c5,0x3b0,0x3e0)+_0x1ca888(0x83,0x7e,0x6d,0x96,0x84)+_0x435a8c(0x96,0x5d,0x9e,0x7e,0x93)][_0x1ca888(0x93,0x8e,0x85,0x91,0x71)+_0x435a8c(0x4a,0x64,0x46,0x53,0x44)+'e']:type==_0x169ded(0x122,0x161,0x15e,0x144,0x15a)+_0x1ca888(0x6a,0x6d,0x60,0x8a,0x74)+_0x1ca888(0x5f,0x73,0x71,0x81,0x6b)+_0xea7cb1(0x1d9,0x1e2,0x1d5,0x1d5,0x1e0)+'e'&&prefix[_0x435a8c(0x66,0x5f,0x76,0x65,0x86)+_0x544b5a(0x3b0,0x3a4,0x3ba,0x3b3,0x382)](mek[_0x169ded(0x14e,0x11b,0x146,0x138,0x156)+'ge'][_0x544b5a(0x3c6,0x3d2,0x3b4,0x3b5,0x3d3)+_0x1ca888(0x85,0x6d,0x5c,0x66,0x56)+_0x1ca888(0x92,0x73,0x6b,0x95,0x59)+_0x435a8c(0x80,0x72,0x5f,0x6d,0x5a)+'e'][_0x1ca888(0x61,0x7c,0x6e,0x96,0x72)+_0x1ca888(0x79,0x7f,0x97,0x76,0x88)+'e'][_0x435a8c(0x87,0x72,0x69,0x89,0x95)+_0x435a8c(0x7a,0xa3,0x7a,0x86,0x70)+_0x435a8c(0x7c,0x6e,0x68,0x83,0x8d)+_0x1ca888(0xa3,0x90,0xa7,0xa0,0x8e)][_0x435a8c(0x6d,0x51,0x6b,0x68,0x78)][0x1e2+-0x856+-0xe*-0x76])?mek[_0xea7cb1(0x1d8,0x1e6,0x1e4,0x203,0x1ee)+'ge'][_0x1ca888(0x8c,0x8f,0x97,0x82,0xab)+_0xea7cb1(0x1b6,0x1d0,0x1dc,0x1b3,0x1d8)+_0x169ded(0x129,0x10b,0x10e,0x128,0x131)+_0x435a8c(0x85,0x4c,0x6a,0x6d,0x6b)+'e'][_0x1ca888(0x88,0x7c,0x9d,0x5d,0x74)+_0x544b5a(0x3a2,0x3c2,0x3b5,0x3a4,0x3b8)+'e'][_0x544b5a(0x3ea,0x3de,0x3ff,0x3d9,0x3ed)+_0xea7cb1(0x1d9,0x1fb,0x201,0x1e0,0x1eb)+_0xea7cb1(0x203,0x1f8,0x1f2,0x215,0x1f7)+_0x435a8c(0x84,0x67,0x6d,0x7e,0x5e)][_0xea7cb1(0x1c8,0x1dd,0x1f3,0x1f5,0x1e0)]:type==_0x1ca888(0xb2,0x9f,0x7e,0xbb,0x86)+_0xea7cb1(0x1d2,0x1e8,0x1e7,0x1dd,0x1da)+_0xea7cb1(0x1e5,0x201,0x1e0,0x1f6,0x1e0)&&prefix[_0x169ded(0x12f,0x112,0x147,0x12c,0x142)+_0x435a8c(0x39,0x68,0x56,0x4f,0x52)](mek[_0x544b5a(0x3c5,0x3c6,0x3cc,0x3a9,0x3d4)+'ge'][_0x1ca888(0x98,0x9f,0x84,0x7d,0x8d)+_0x435a8c(0x8d,0x87,0x8a,0x73,0x78)+_0x544b5a(0x3cf,0x3e1,0x3fc,0x3ce,0x3cc)][_0x544b5a(0x39f,0x3b2,0x3ca,0x39e,0x3a9)][-0x1acc+0x69f*0x2+0xd8e])?mek[_0xea7cb1(0x200,0x1e6,0x1d7,0x202,0x1ce)+'ge'][_0x544b5a(0x3dd,0x3e2,0x3f3,0x3f7,0x404)+_0x169ded(0x11c,0x145,0x151,0x13a,0x151)+_0x544b5a(0x3bf,0x3e1,0x3c6,0x3c2,0x3ed)][_0x1ca888(0x8a,0x6f,0x55,0x4f,0x7a)]:type==_0x544b5a(0x3ea,0x3d6,0x3cd,0x3e7,0x3da)+_0x544b5a(0x3d7,0x3e3,0x3fe,0x3db,0x3c8)+'ge'&&prefix[_0x544b5a(0x3cc,0x3ba,0x3b0,0x39f,0x3b8)+_0x544b5a(0x3b7,0x3a4,0x3a0,0x3a6,0x3b9)](mek[_0x435a8c(0x53,0x93,0x52,0x71,0x75)+'ge'][_0x169ded(0x135,0x142,0x136,0x148,0x14b)+_0x544b5a(0x3e9,0x3e3,0x3c2,0x3f8,0x3c7)+'ge'][_0xea7cb1(0x205,0x1e6,0x1f4,0x1e3,0x1d2)+'ge'][-0x1257+0xcba*0x3+0x1*-0x13d7])?mek[_0x169ded(0x155,0x149,0x119,0x138,0x117)+'ge'][_0xea7cb1(0x20e,0x1f6,0x1e0,0x1fc,0x20b)+_0x544b5a(0x3c5,0x3e3,0x3d5,0x3d2,0x3f4)+'ge'][_0x435a8c(0x67,0x79,0x7d,0x71,0x7d)+'ge']:type==_0x435a8c(0x50,0x76,0x4d,0x5e,0x7f)+_0x169ded(0x129,0x150,0x14e,0x133,0x153)+_0xea7cb1(0x1e0,0x1f3,0x20c,0x1f0,0x1d6)&&prefix[_0xea7cb1(0x1f2,0x1da,0x1d9,0x1d8,0x1e2)+_0x544b5a(0x383,0x3a4,0x3b3,0x3aa,0x3c1)](mek[_0x435a8c(0x88,0x7f,0x8a,0x71,0x79)+'ge'][_0x435a8c(0x68,0x51,0x46,0x5e,0x60)+_0x1ca888(0x87,0x7e,0x89,0x8c,0x63)+_0x435a8c(0x88,0x84,0x79,0x7e,0x75)][_0xea7cb1(0x1b3,0x1d3,0x1df,0x1dc,0x1d6)+'ct'][_0x169ded(0x167,0x15e,0x149,0x14b,0x13e)][-0xb9b*-0x1+-0x1*0x2bb+-0x11c*0x8])?mek[_0x544b5a(0x3d0,0x3c6,0x3d5,0x3a7,0x3bb)+'ge'][_0x169ded(0x13e,0x128,0x12a,0x125,0x140)+_0x544b5a(0x3c6,0x3c1,0x3b5,0x3b7,0x3b2)+_0x544b5a(0x3d0,0x3d3,0x3dc,0x3c1,0x3f3)][_0x1ca888(0x8a,0x70,0x62,0x84,0x69)+'ct'][_0x1ca888(0xa5,0x94,0x78,0x95,0x9b)]:'';
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
            responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
            botao = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
            symmantec = (type === 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
            const cmdstk = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isBanChat = chatban.includes(from)
			

			mess = {
			    
					wait: '❬❗❭ ESPERE',
					success: '️❬ ✔ ❭ Sucesso 🖤',
					levelnol: '*error* 0 °-°',
					error: {
				stick: '*falhou , tente novamente😞*',
				Iv: 'link inválido☹️'
				},
				only: {
					group: '[❗] Este comando só pode ser usado em grupos! ❌',
					premium: `[❗] ESTE PEDIDO É SÓ PARA *USUÁRIOS PREMIUMS*\nse quizer ter acesso premium converse com o dono do bot: wa.me/5544998220867`,
            		grupo: `[❗] *VC SÓ PODE USAR OS COMANDOS DO BOT EM UM GRUPO QUE ELE ESTEJA (PREMIUM OU NO GRUPO OFC)*\nGP OFC:\nhttps://chat.whatsapp.com/EVtJliGrMzmEq2gwNBgOxd`,
				}
			}
			////FINALIZAR TTT AUTOMATICAMENTE By: Resen
if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isCmd) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
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

} 
const math = (teks) => {
				return Math.floor(teks)
		}
			const botNumber = client.user.jid
			const totalchat = await client.chats.all()
			const ownerNumber = ["554498220867@s.whatsapp.net","554499019776@s.whatsapp.net"] // replace this with your number
			const mod = [ownerNumber,"554498220867@s.whatsapp.net","554499019776@s.whatsapp.net"]//ubah nomor lo
			const adminbotnumber = ["554498220867@s.whatsapp.net","554499019776@s.whatsapp.net"]//ubah nomor lo
			const frendsowner = ["554498220867@s.whatsapp.net","554499019776@s.whatsapp.net"]//ubah nomor l
			const isGroup = from.endsWith('@g.us')
			const senderfix = mek.key.fromMe ? client.user.jid : isGroup ? mek.participant : mek.key.remoteJid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isUser = user.includes(sender)
            const AntiVirtex = isGroup ? antivirtex.includes(from) : false
            const Antidoc = isGroup ? antidoc.includes(from) : false	
            const isAntiLoc = isGroup ? antiloc.includes(from) : false	
            const Anticontato = isGroup ? anticontato.includes(from) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isLevelingOn = isGroup ? leveling.includes(from) : true
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAutofigu = isGroup ? autofigu.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiCatalogo = isGroup ? anticatalogo.includes(from) : false
            const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false	
            const isvoting = isGroup ? voting.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
            const argss = body.split(/ +/g)
            const arg = budy.slice(command.length + 1, budy.length)
            const msgReceived = pes.toLowerCase();
            const Received = pes.toLowerCase();
            const isVote = isGroup ? voting.includes(from) : false
			const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
            const isBanned = ban.includes(sender)
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
            fake = `Olá ${pushname}💫`
            const q = args.join(' ')
            uptime = process.uptime();
         const temp = (`${runtime(process.uptime())}`)
            const request = require('request')
            const { validmove, setGame } = require('./src/tictactoe');
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)

			
			
			
			
			
			
			
			async function sendFileFromUrl(link, type, options) {

        hasil = await getBuffer(link)

        client.sendMessage(from, hasil, type, options).catch(e => {

            fetch(link).then((hasil) => {

                client.sendMessage(from, hasil, type, options).catch(e => {

                    client.sendMessage(from, { url: link }, type, options).catch(e => {



                        console.log(e)

                    })

                })

            })

        })

    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const listmsg = (from, title, desc, list) => { 
            let po = client.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "Não se esqueça de colocar os créditos seu fdp","listType": "SINGLE_SELECT","sections": list}}, {})

            return client.relayWAMessage(po, {waitForAck: true})

            }
            //___________SISTEMA LEVELING AUTO____________//
            const sended = isGroup ? mek.participant : mek.key.remoteJid
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
            
            if (pushname === undefined) {
             pushname = 'bot'
            }
            
            
        
            //_XP COM LEVELING ATIVO
               if (!mek.key.fromMe) {
                if (isGroup && isLevelingOn && !isBanned) {
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
                        client.sendMessage(from, lvup, text, {contextInfo: tomis})
                        }
                    } catch (err) {
                        console.error(err)
                    }
                }
            }
			baterai = 'não detectado'
charging = 'não detectado'
			const fs = require('fs');
			const addATM = (sender) => {

        	const obj = {id: sender, uang : 0}

            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }
                const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
			const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:mek, contextInfo:tomio})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            let palavrasANA = [
					{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'GENERO'
},
{
original: 'CIMENTO',
embaralhada: 'OMCNITE',
dica: 'CONSTRUÇÕES'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'HRROAOCC',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'ALEATORY',
embaralhada: 'YRTALOEA',
dica: 'NOME'
},
{  
original: 'CAFIN',
embaralhada: 'NFCIA',
dica: 'TIPO DE GAY'
},
{    
original: 'KONEKO',
embaralhada: 'NOEKKO',
dica: 'NOME'
},
{
original: 'RAPOSA',
embaralhada: 'APRSAO',
dica: 'ANIMAL'
},
{
original: 'INFERNO',
embaralhada: 'RNOFNIE',
dica: 'LUGAR'
},
{   
original: 'RINOCERONTE',
embaralhada: 'NTERRECNIOO',
dica: 'ANIMAL'
},
{ 
original: 'PASTOR',
embaralhada: 'STRPAO',
dica: 'BATIZADO'
},
{
original: 'BONITO',
embaralhada: 'NTBIOO',
dica: 'COMENTÁRIO'
},
{       
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
},
{
					original: 'PLAYSTORE',
					embaralhada: 'ERSTOLAYP',
					dica: 'APLICATIVO'
				},
                {
					original: 'JOGO',
					embaralhada: 'GJOO',
					dica: 'DIVERSAO'
				},
				{
					original: 'CADERNO',
					embaralhada: 'ADNCORE',
					dica: 'USADO PARA ESCREVER'
				},
                {
					original: 'ARVORE',
					embaralhada: 'AORVER',
					dica: 'DÁ FRUTOS'
				},
				{
					original: 'LAPISEIRA',
					embaralhada: 'AAEISIRLP',
					dica: 'OBJETO'
				},
                {
					original: 'BARRIGA',
					embaralhada: 'RGABARI',
					dica: 'PARTE DO CORPO'
				},
				{
					original: 'BOLSA',
					embaralhada: 'OSLAB',
					dica: 'OBJETO'
				},
                {
					original: 'JANELA',
					embaralhada: 'EALAJN',
					dica: 'OBJETO'
				},
				{
					original: 'CORTINA',
					embaralhada: 'OTNACRI',
					dica: 'OBJETO'
				},
				{
					original: 'JANELA',
					embaralhada: 'EALAJN',
					dica: 'OBJETO'
				},
				{
					original: 'CAMA',
					embaralhada: 'AAMC',
					dica: 'OBJETO'
				},
				{
					original: 'GELADEIRA',
					embaralhada: 'ADGERLIA',
					dica: 'ELETRODOMÉSTICO'
				},
				{
					original: 'NOTEBOOK',
					embaralhada: 'OTNOKEBO',
					dica: 'ELETRODOMÉSTICO'
				},
				{
					original: 'CALÇA',
					embaralhada: 'CLÇAA',
					dica: 'VESTIR'
				},
				{
					original: 'CARRO',
					embaralhada: 'RACRO',
					dica: 'VEICULO'
				},
				{
					original: 'AMOR',
					embaralhada: 'RAOM',
					dica: 'SENTIMENTO'
				},
				{
					original: 'TRISTEZA',
					embaralhada: 'TTZRISAE',
					dica: 'SENTIMENTO'
				},
				{
					original: 'SOLIDÃO',
					embaralhada: 'SÃLOIDO',
					dica: 'SENTIMENTO'
		         }
]
            if(isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
			console.log(budy)
				let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
			 if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
		 xp = Math.floor(Math.random() * 14) + 100000
		 dinhero = Math.floor(Math.random() * 10) + 500
		if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./src/anagrama-${from}.json`)		 
		setTimeout(async() => {
		fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
			let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
			client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰──────────────────
		`, MessageType.text) 
		}, 5000)
			}}
            /*--------------------[ Tictactoe jogo Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./lib/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("why");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "sim" ||
               budy.toLowerCase() == "ok"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou antes!`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./lib/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}

`;
                    client.sendMessage(from, chatAccept, MessageType.text, {
                         contextInfo: tomis,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    })}
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "não" ||
               budy.toLowerCase() == "no"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`O jogo já começou!`);
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    client.sendMessage(
                         from,
                         `@${boardnow.X} *_Infelizmente seu oponente não aceito o desafio ❌😕_*`,
                         MessageType.text, {
                         contextInfo: tomis,
                         contextInfo: {
                              mentionedJid: [boardnow.X + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    client.sendMessage(
                         from,
                         MessageType.text, {
                         contextInfo: tomis,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
          const boardnow = setGame(`${from}`);
          if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
          if (
               (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
               sender.replace("@s.whatsapp.net", "")
          )
               return;
          const moving = validmove(Number(budy), `${from}`);
          const matrix = moving._matrix;
          if (moving.isWin) {
               if (moving.winner == "SERI") {
                    const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`
                    client.sendMessage(from, chatEqual, MessageType.text, );
                    fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
                    return;
               }
               const dinherowin = Math.ceil(Math.random() * 5000)
               const winnerJID = moving.winner == "O" ? moving.O : moving.X;
               const looseJID = moving.winner == "O" ? moving.X : moving.O;
               const limWin = Math.floor(Math.random() * 20) + 10;
               const limLoose = Math.floor(Math.random() * 10) + 5;
               const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
            addKoinUser(winnerJID + "@s.whatsapp.net", dinherowin)           
               client.sendMessage(from, chatWon, MessageType.text, {
                    contextInfo: tomis,
                    contextInfo: {
                         mentionedJid: [
                              moving.winner == "O" ?
                                   moving.O + "@s.whatsapp.net" :
                                   moving.X + "@s.whatsapp.net",
                         ],
                    },
               });
setTimeout( () => {
if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
 const chatFqual = `*🕹️JOGO DA VELHA RESETADO...🕹️*`
                   client.sendMessage(from, chatFqual, MessageType.text, )
    
               
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
}, 50000) //5 minutos
                reply(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinherowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)      
               fs.unlinkSync(`./lib/tictactoe/db/${from}.json`);
          } else {
               const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


`;
               client.sendMessage(from, chatMove, MessageType.text, {
                    contextInfo: tomis,
                    contextInfo: {
                         mentionedJid: [
                              moving.X + "@s.whatsapp.net",
                              moving.O + "@s.whatsapp.net",
                         ],
                    },
               });
          }
     }

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
            var ucapanFakereply = '' + waktoonyabro;
            (function(_0x426645,_0x81636a){function _0x3e07f3(_0x136496,_0xf376b3,_0x5606c8,_0x11f8ad,_0x997551){return _0x3211(_0xf376b3- -0x3d1,_0x5606c8);}const _0x5455d7=_0x426645();function _0x56224f(_0x51fea0,_0x51f627,_0x49cf1e,_0x94a143,_0x29ab0e){return _0x3211(_0x51f627- -0x12a,_0x29ab0e);}function _0x28197a(_0x37dd92,_0x481dbe,_0xeb7c76,_0x2e482e,_0x4c85ab){return _0x3211(_0x37dd92- -0x3f,_0x4c85ab);}function _0x249a0e(_0x4f1639,_0x583014,_0x536a01,_0x2682c2,_0x37558b){return _0x3211(_0x2682c2-0x317,_0x4f1639);}function _0x6331e1(_0x304624,_0x68e2e8,_0x1656e6,_0x5d05d0,_0x111313){return _0x3211(_0x111313- -0x3ca,_0x304624);}while(!![]){try{const _0x2f7905=-parseInt(_0x3e07f3(-0x230,-0x24e,-0x274,-0x23b,-0x23b))/(0x1c*-0x1+-0x17f*0xf+0x168e)*(parseInt(_0x3e07f3(-0x234,-0x205,-0x1fd,-0x1ea,-0x226))/(-0xd4+-0xd9a*0x1+0xe70))+parseInt(_0x28197a(0x176,0x154,0x15e,0x192,0x1a0))/(0x1*-0x1eb5+0x69c+-0x607*-0x4)+-parseInt(_0x28197a(0x19e,0x16a,0x16a,0x1a8,0x1c7))/(-0x1007+0xf*0x19b+0x405*-0x2)*(-parseInt(_0x249a0e(0x4d3,0x4d2,0x4ce,0x4a6,0x4d2))/(-0x26b1+-0x1288*-0x2+0x1a6))+-parseInt(_0x3e07f3(-0x1f9,-0x1e9,-0x1df,-0x1e8,-0x1ec))/(0x963+-0x1b3b*-0x1+0x4*-0x926)+-parseInt(_0x249a0e(0x4bf,0x4d1,0x515,0x4ea,0x4cf))/(-0x22a4+0x4c3*0x1+0x1de8)*(parseInt(_0x249a0e(0x4b0,0x4d5,0x4e6,0x4c0,0x4c3))/(0x8a+0x2*-0x96e+0x125a))+parseInt(_0x28197a(0x180,0x17b,0x14c,0x196,0x199))/(0x1*0x7fb+-0x978+0x186*0x1)+-parseInt(_0x6331e1(-0x230,-0x24a,-0x21f,-0x233,-0x244))/(0x1c94+-0xb3d*0x1+-0x114d)*(-parseInt(_0x249a0e(0x508,0x508,0x4d4,0x4ef,0x4fb))/(0xe75*-0x1+0x3d*0x3d+-0x9));if(_0x2f7905===_0x81636a)break;else _0x5455d7['push'](_0x5455d7['shift']());}catch(_0x443a75){_0x5455d7['push'](_0x5455d7['shift']());}}}(_0x4d3e,0xd*-0xdb17+-0x53209+0x5eaaa*0x4));const _0x385c9a=(function(){let _0x3d377d=!![];return function(_0x426e96,_0x38b311){const _0x71a356=_0x3d377d?function(){function _0x307205(_0x270cf0,_0x30c9ef,_0x2124ee,_0x114a14,_0x299950){return _0x3211(_0x299950-0x1cb,_0x270cf0);}if(_0x38b311){const _0x759903=_0x38b311[_0x307205(0x395,0x380,0x372,0x35e,0x37c)](_0x426e96,arguments);return _0x38b311=null,_0x759903;}}:function(){};return _0x3d377d=![],_0x71a356;};}()),_0x5c344b=_0x385c9a(this,function(){const _0x3a5f6e={};function _0x255167(_0x397def,_0x3f59d4,_0x28b66a,_0x303042,_0x452532){return _0x3211(_0x452532- -0x18f,_0x3f59d4);}_0x3a5f6e[_0x255167(0xc,0x45,0x5e,0xa,0x40)]=_0x255167(0x22,0x22,-0x20,-0xe,0x7)+_0x255167(0x3e,0x14,0x17,0x14,0x38)+'+$';function _0x10b70(_0x118c1c,_0x2eea2d,_0x47f50b,_0x50ecda,_0x478d97){return _0x3211(_0x118c1c- -0xa,_0x47f50b);}function _0x329e49(_0x56943c,_0x517673,_0x119dda,_0x1b4526,_0x18de34){return _0x3211(_0x517673- -0x176,_0x119dda);}const _0x2f58b2=_0x3a5f6e;function _0x2a549c(_0x500b35,_0x5db03e,_0x2af720,_0x2ea1d9,_0x3b9519){return _0x3211(_0x500b35- -0x62,_0x5db03e);}function _0x1e6ae6(_0x4faec1,_0x56480a,_0x12cb3c,_0x45dbcb,_0x568228){return _0x3211(_0x45dbcb-0x1cf,_0x12cb3c);}return _0x5c344b[_0x255167(0x21,0x48,0x5c,0x20,0x25)+_0x10b70(0x18b,0x15f,0x15a,0x1ac,0x15a)]()[_0x255167(0x22,-0x2b,-0x24,-0x5,-0xa)+'h'](_0x2f58b2[_0x2a549c(0x16d,0x147,0x16b,0x174,0x186)])[_0x10b70(0x1aa,0x1c8,0x1dc,0x19a,0x187)+_0x329e49(0xd,0x1f,0x51,0x2e,0x1c)]()[_0x10b70(0x1da,0x1a8,0x1a9,0x1ed,0x1ec)+_0x2a549c(0x15a,0x151,0x13e,0x131,0x134)+'r'](_0x5c344b)[_0x1e6ae6(0x341,0x35f,0x357,0x354,0x331)+'h'](_0x2f58b2[_0x10b70(0x1c5,0x1be,0x1a3,0x190,0x1d2)]);});_0x5c344b();const _0x388a10={};_0x388a10[_0x464d6f(-0x2d,-0x3d,-0x63,0x8,-0x3d)+'e']=![],_0x388a10[_0x464d6f(0x28,0x14,-0x5,0x58,0x44)+_0x5b9071(-0x133,-0x173,-0x132,-0x15b,-0x192)+'t']=_0x532209(-0xf7,-0xce,-0xed,-0xc2,-0xa9)+_0x403dce(-0x16f,-0x16c,-0x150,-0x195,-0x150)+_0x403dce(-0x1a5,-0x1c0,-0x1d9,-0x1a9,-0x1da)+'t',_0x388a10[_0x532209(-0x9e,-0x6b,-0x86,-0x77,-0x7a)+_0x1fc37e(0x28,0x3d,0x2a,0x26,-0x9)]=_0x464d6f(0xb,-0x7,0xd,-0x4,0x12)+_0x1fc37e(0x25,0x1a,0x24,0x39,0xc)+_0x403dce(-0x199,-0x174,-0x18d,-0x162,-0x144)+'t';const _0x13680e={};_0x13680e[_0x1fc37e(0x20,0x1d,0x33,0x5a,0xd)+_0x5b9071(-0x126,-0x13e,-0x184,-0x14d,-0x131)+_0x5b9071(-0x15b,-0x179,-0x180,-0x149,-0x15c)]=0x3e7,_0x13680e[_0x1fc37e(0x4c,0x19,0x3d,0x20,0xe)+_0x5b9071(-0x153,-0x148,-0x173,-0x17f,-0x17a)+'d']=!![];const tomioka={'key':_0x388a10,'message':{'orderMessage':{'itemCount':0xaa289,'status':0xc8,'thumbnail':fs[_0x403dce(-0x1ae,-0x1a9,-0x1b9,-0x1ab,-0x197)+_0x532209(-0x68,-0xa6,-0x6f,-0x7d,-0x97)+'nc'](_0x5b9071(-0x1ab,-0x14a,-0x19a,-0x174,-0x172)+_0x532209(-0x8a,-0xa5,-0xd1,-0xa6,-0xcb)+_0x532209(-0x84,-0xac,-0x80,-0x7b,-0x65)+_0x5b9071(-0x176,-0x1a0,-0x179,-0x18c,-0x1c0)),'message':waktoonyabro+(_0x403dce(-0x15c,-0x16d,-0x139,-0x1a3,-0x17c)+_0x403dce(-0x1c2,-0x1b9,-0x1d7,-0x1b3,-0x1df))+command,'orderTitle':_0x5b9071(-0x12c,-0x179,-0x172,-0x162,-0x15a)+'KA','sellerJid':_0x532209(-0xa3,-0xf5,-0xb1,-0xc2,-0xda)+_0x5b9071(-0x167,-0x132,-0x15b,-0x144,-0x12f)+_0x403dce(-0x1ea,-0x1c0,-0x1bb,-0x1e6,-0x1ac)+'t'}},'contextInfo':_0x13680e,'sendEphemeral':!![]},_0xbed2b2={};_0xbed2b2[_0x403dce(-0x1c3,-0x1c8,-0x195,-0x1b9,-0x1c0)+'e']=![],_0xbed2b2[_0x403dce(-0x172,-0x173,-0x14c,-0x18d,-0x163)+_0x403dce(-0x19d,-0x183,-0x150,-0x198,-0x182)+'t']=_0x464d6f(-0x13,0x19,-0x1f,-0x1b,-0x5)+_0x5b9071(-0x158,-0x136,-0x124,-0x144,-0x137)+_0x403dce(-0x1bb,-0x1c0,-0x1b4,-0x1da,-0x1f3)+'t',_0xbed2b2[_0x464d6f(0x38,0x49,0x9,0x53,0xf)+_0x5b9071(-0x18b,-0x1a6,-0x191,-0x17e,-0x193)]=_0x5b9071(-0x16b,-0x198,-0x171,-0x168,-0x196)+_0x464d6f(-0x11,-0x31,-0x39,0xc,0x10)+_0x1fc37e(0x7f,0x88,0x5c,0x39,0x6c)+'t';const _0x340aac={};_0x340aac[_0x403dce(-0x166,-0x19d,-0x1d2,-0x171,-0x1ba)+_0x403dce(-0x16a,-0x175,-0x194,-0x1aa,-0x1a9)+_0x403dce(-0x153,-0x171,-0x19e,-0x158,-0x19b)]=0x3e7,_0x340aac[_0x1fc37e(0x4a,0x6b,0x3d,0x2a,0x23)+_0x5b9071(-0x1ad,-0x1a5,-0x194,-0x17f,-0x163)+'d']=!![];function _0x3211(_0x445ea5,_0x6fb9f6){const _0x10b733=_0x4d3e();return _0x3211=function(_0x1dbe82,_0x9ee17e){_0x1dbe82=_0x1dbe82-(0x313*0x1+-0x59d+0x1*0x40d);let _0x31abe9=_0x10b733[_0x1dbe82];return _0x31abe9;},_0x3211(_0x445ea5,_0x6fb9f6);}const tomioka2={'key':_0xbed2b2,'message':{'orderMessage':{'itemCount':0xaa289,'status':0xc8,'thumbnail':fs[_0x1fc37e(0x50,0x3f,0x27,0x13,0x53)+_0x1fc37e(0x75,0x82,0x67,0x96,0x36)+'nc'](_0x403dce(-0x192,-0x19c,-0x1c4,-0x182,-0x1b8)+_0x532209(-0xd4,-0xc9,-0x85,-0xa6,-0xb1)+_0x5b9071(-0x10a,-0x11c,-0x119,-0x13f,-0x166)+_0x1fc37e(0x6,-0x5,0x1c,0xf,0x3)),'surface':0xc8,'message':waktoonyabro+'💫','orderTitle':_0x1fc37e(0x61,0x2e,0x46,0x12,0x6b)+'KA','sellerJid':_0x403dce(-0x1e5,-0x1ae,-0x1c0,-0x1af,-0x1a9)+_0x1fc37e(0x2e,0x45,0x64,0x5f,0x54)+_0x403dce(-0x19e,-0x1c0,-0x1a4,-0x1e7,-0x1b8)+'t'}},'contextInfo':_0x340aac,'sendEphemeral':!![]},_0x3f65eb={};function _0x1fc37e(_0x4c84a1,_0x4def73,_0x543a1b,_0x23cec4,_0x38d77f){return _0x3211(_0x543a1b- -0x183,_0x23cec4);}_0x3f65eb[_0x1fc37e(0x74,0xa1,0x6d,0x5d,0x7a)+_0x5b9071(-0x1ae,-0x153,-0x17f,-0x17e,-0x158)]=_0x5b9071(-0x189,-0x145,-0x15b,-0x159,-0x150)+_0x1fc37e(0x69,0x4a,0x3b,0x53,0x52)+_0x532209(-0xa2,-0xc9,-0xef,-0xbf,-0xf1)+_0x464d6f(0xa,0xc,0xe,-0x1c,0x20)+_0x403dce(-0x15a,-0x17c,-0x150,-0x19a,-0x166)+_0x532209(-0xd0,-0xba,-0x101,-0xda,-0xc7);const _0x2f723e={'fromMe':![],'participant':_0x5b9071(-0x19f,-0x181,-0x165,-0x186,-0x1b5)+_0x5b9071(-0x11e,-0x13a,-0x11b,-0x144,-0x10e)+_0x1fc37e(-0x7,0x2c,0x10,0x15,0x32)+'t',...from?_0x3f65eb:{}},tomioka3={'key':_0x2f723e,'message':{'contactMessage':{'displayName':pushname+_0x403dce(-0x18a,-0x166,-0x15c,-0x168,-0x140)+command,'vcard':_0x532209(-0xc4,-0xea,-0xef,-0xcc,-0xbd)+_0x532209(-0x85,-0x99,-0x9d,-0xac,-0xd9)+_0x532209(-0xf0,-0x10f,-0xd4,-0xe0,-0xaa)+_0x532209(-0x7f,-0xa8,-0x98,-0x9d,-0xc7)+_0x1fc37e(0xf,0x35,0x1b,0x1d,0x40)+_0x403dce(-0x181,-0x172,-0x157,-0x14f,-0x13b)+_0x5b9071(-0x12e,-0x14c,-0x15f,-0x15e,-0x174)+_0x5b9071(-0x14b,-0x156,-0x17c,-0x180,-0x18b)+_0x5b9071(-0x1bb,-0x15f,-0x16d,-0x185,-0x1a4)+_0x5b9071(-0x17d,-0x172,-0x159,-0x15e,-0x178)+_0x1fc37e(0x98,0x43,0x66,0x68,0x3c)+_0x464d6f(0x1d,0x3e,0x42,0x53,0x10)+_0x532209(-0x74,-0x68,-0x82,-0x99,-0xcf)+_0x5b9071(-0x19d,-0x150,-0x175,-0x17c,-0x16d)+sender[_0x532209(-0xaf,-0x6c,-0x65,-0x84,-0xa8)]('@')[0x1*0x139f+-0x11b3*0x1+-0x52*0x6]+':'+sender[_0x1fc37e(0x4f,0x78,0x60,0x36,0x57)]('@')[-0x84a+0x18a4+0x17*-0xb6]+(_0x403dce(-0x1be,-0x1c9,-0x1c3,-0x1f3,-0x1e7)+_0x1fc37e(0x3a,0x33,0x11,-0x7,0x7)+_0x1fc37e(0x8,0x62,0x2d,-0x2,0x4e)+_0x464d6f(-0x1f,-0x4b,-0x15,-0x2a,0xf)+_0x403dce(-0x173,-0x1a1,-0x17d,-0x1d2,-0x1be)+_0x403dce(-0x1b9,-0x196,-0x194,-0x170,-0x1cc)+_0x532209(-0xb0,-0xb2,-0xc6,-0xae,-0xc7)),'jpegThumbnail':fs[_0x5b9071(-0x1b2,-0x169,-0x181,-0x181,-0x18c)+_0x532209(-0x68,-0x84,-0x9c,-0x7d,-0x56)+'nc'](_0x464d6f(-0x27,-0x50,-0x13,0x8,0x2)+_0x532209(-0x9f,-0x8e,-0xea,-0xc4,-0xf8)+_0x532209(-0x111,-0xe0,-0xf1,-0xdf,-0xdc)+_0x403dce(-0x194,-0x177,-0x16a,-0x198,-0x196)+'p'),'thumbnail':fs[_0x464d6f(-0xe,0x18,-0x29,-0x3a,-0x4)+_0x532209(-0x58,-0x93,-0x68,-0x7d,-0x50)+'nc'](_0x1fc37e(-0x1a,0x2c,0xe,0x3f,0x10)+_0x403dce(-0x1c0,-0x1b0,-0x18e,-0x182,-0x1e4)+_0x1fc37e(0x25,0x29,0x5,0x25,-0x32)+_0x532209(-0x90,-0x6b,-0x77,-0x8b,-0xc2)+'p'),'sendEphemeral':!![]}}},_0x409d68={};_0x409d68[_0x532209(-0xca,-0xc9,-0xea,-0xdc,-0x100)+'e']=![],_0x409d68[_0x403dce(-0x13e,-0x173,-0x194,-0x1aa,-0x1a1)+_0x532209(-0x6f,-0xa2,-0x90,-0x97,-0xc8)+'t']=_0x5b9071(-0x17e,-0x1b6,-0x1b1,-0x186,-0x154)+_0x532209(-0xaa,-0x95,-0x52,-0x80,-0x50)+_0x403dce(-0x1be,-0x1c0,-0x1d3,-0x199,-0x1b3)+'t';function _0x4d3e(){const _0x36f1e2=['\x0aFN:t','s@bro','591-1','224pBneix','readF','a,;;;','warde','eJid','rJid','id=','BLabe','apply','sel\x0aE','order','toStr','1731561YQHdcJ','forwa','asset','conve','ARD','TIO\x20T',':VCAR','ructo','ND:VC','36505','3071844cdaGCM','isFor','s/bot','61495','statu','./eu.','ral','Tio\x20T',')+)+)','api.w','TOMIO','SION:','OMIOK','4XJfkQA','omiok','EL;wa','YyKii','cipan','pp.co','62831','171927RgNbdm','t=olá','em1.T','sendE','3337@','597553SstNqC','Title','m/sen','jpg','o.web','28OtjpVx','rding','adcas','parti',':XL;t','Score','split','const','22086','\x0a𝐜𝐨𝐦𝐚','hatsa','2319204jlCTld','a,\x0ait','ileSy','44998','logo.','\x0a➢\x20\x20','7&tex','ne=55','remot','377737UBJJkL','io\x20To','searc','120Pxsycm','D\x0aVER','otlog','conte','\x0aitem','fromM','ps://','g.us','d?pho','529095RhPhXF','%20*T','./ass','selle','pp.ne','1.X-A','ing','(((.+','mioka','key','l:Pon','𝐧𝐝𝐨:\x20','BEGIN','messa','rsati','3.0\x0aN','webp','pheme','PHOTO','a\x0ahtt','ets/b','xtInf','0@s.w'];_0x4d3e=function(){return _0x36f1e2;};return _0x4d3e();}function _0x403dce(_0x461fc3,_0x271acf,_0x4a5121,_0x290e3b,_0x15185c){return _0x3211(_0x271acf- -0x353,_0x15185c);}_0x409d68[_0x403dce(-0x175,-0x163,-0x15a,-0x13f,-0x184)+_0x1fc37e(0x22,0x42,0x2a,0xf,0x5a)]=_0x464d6f(0xb,-0x26,-0x1b,-0x1e,0x30)+_0x1fc37e(0x21,0x0,0x24,0x5b,0x1a)+_0x1fc37e(0x76,0x63,0x5c,0x88,0x50)+'t';const _0x4f5902={};_0x4f5902[_0x403dce(-0x1a5,-0x19b,-0x1a1,-0x1a2,-0x178)+_0x1fc37e(0x2f,0x37,0x1a,0x23,0x15)+'on']=fake,_0x4f5902[_0x532209(-0x9e,-0xa2,-0x93,-0xb4,-0x95)+_0x532209(-0x9a,-0xc5,-0xa5,-0x8e,-0xc5)]=_0x464d6f(0x11,0x2b,0x3e,0x14,0x5)+'KA',_0x4f5902[_0x5b9071(-0x1b3,-0x16a,-0x170,-0x199,-0x177)+_0x532209(-0xe2,-0xa2,-0xa7,-0xb9,-0x90)]=_0x532209(-0xee,-0xf6,-0xad,-0xc2,-0x94)+_0x464d6f(0x2f,0x24,0x11,0x4a,0xf)+_0x532209(-0xcc,-0xa3,-0xbd,-0xd4,-0xf2)+'t';const _0x2aa757={};_0x2aa757[_0x403dce(-0x1bf,-0x19d,-0x187,-0x1ac,-0x1aa)+_0x464d6f(0x26,-0x11,0x25,-0x4,-0x9)+_0x5b9071(-0x126,-0x127,-0x160,-0x149,-0x153)]=0x3e7,_0x2aa757[_0x532209(-0xa8,-0x7f,-0xca,-0xa7,-0xac)+_0x464d6f(-0xc,-0x12,-0x1,-0x13,0x2a)+'d']=!![];const _0x40b10e={};_0x40b10e[_0x1fc37e(0x17,-0x9,0x15,0x20,-0x1e)]=_0x409d68,_0x40b10e[_0x5b9071(-0x179,-0x192,-0x19c,-0x18f,-0x15d)+'ge']=_0x4f5902;function _0x464d6f(_0x8f33d6,_0x48393b,_0x4d53cd,_0x225cc1,_0x8b8048){return _0x3211(_0x8f33d6- -0x1b8,_0x8b8048);}_0x40b10e[_0x1fc37e(-0x2c,-0x25,0x6,0xf,-0x3)+_0x1fc37e(0x43,-0x9,0x21,-0x7,0x6)+'o']=_0x2aa757;function _0x532209(_0x2429cc,_0x32fd45,_0x2b6a34,_0x4b9ad8,_0x2e8ee3){return _0x3211(_0x4b9ad8- -0x267,_0x2b6a34);}_0x40b10e[_0x5b9071(-0x17c,-0x16f,-0x184,-0x155,-0x152)+_0x5b9071(-0x1ad,-0x195,-0x198,-0x18b,-0x174)+_0x403dce(-0x1ab,-0x18e,-0x188,-0x1bb,-0x15f)]=!![];const tomio=_0x40b10e;function _0x5b9071(_0x3bf9b9,_0x33be4f,_0xe9de80,_0x1e8598,_0x43f1f8){return _0x3211(_0x1e8598- -0x32b,_0x43f1f8);}const tomis={'text':'oi','forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':_0x5b9071(-0x13b,-0x141,-0x162,-0x171,-0x142)+_0x532209(-0xc8,-0x7a,-0x76,-0x9c,-0xac)+'A','body':'','previewType':_0x5b9071(-0x19e,-0x19b,-0x16c,-0x18a,-0x15a),'thumbnailUrl':'','thumbnail':fs[_0x532209(-0xea,-0xda,-0x98,-0xbd,-0x9c)+_0x403dce(-0x160,-0x169,-0x152,-0x174,-0x165)+'nc'](_0x1fc37e(0xa,0x2e,0x41,0x2c,0x43)+_0x1fc37e(0x2e,0x5b,0x58,0x56,0x4c)),'sourceUrl':_0x403dce(-0x184,-0x18d,-0x1a0,-0x1b5,-0x18a)+_0x1fc37e(0x68,0x24,0x4a,0x6d,0x5f)+_0x1fc37e(0x13,0x17,0x1f,-0xc,0x34)+_0x5b9071(-0x19f,-0x1b8,-0x17b,-0x19f,-0x179)+_0x5b9071(-0x183,-0x14e,-0x14d,-0x163,-0x18c)+_0x464d6f(0x2f,0x55,0x1f,0x25,0xc)+_0x403dce(-0x16a,-0x182,-0x188,-0x16c,-0x179)+_0x1fc37e(0x57,0x29,0x57,0x4d,0x22)+_0x464d6f(-0x2a,-0x15,-0x21,-0x57,-0x3)+_0x532209(-0x4a,-0x44,-0x9a,-0x78,-0x46)+_0x5b9071(-0x156,-0x114,-0x150,-0x140,-0x151)+_0x403dce(-0x15f,-0x16e,-0x168,-0x189,-0x1a5)+_0x464d6f(0x36,0x57,0x62,0x50,0x54)+_0x403dce(-0x16a,-0x17f,-0x163,-0x1a5,-0x1a1)+_0x5b9071(-0x182,-0x1cc,-0x1b3,-0x19b,-0x1a3)+_0x532209(-0xd8,-0xc4,-0xff,-0xe3,-0x10e)+_0x532209(-0x9b,-0xf6,-0xe7,-0xd0,-0xe8)+'!*'},'mentionedJid':[sender]};
     //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./eu.jpg`)},"title": `${waktoonyabro}`,"description": `ɪ ᴀᴍ 𝑡𝑜𝑚𝑖𝑜𝑘𝑎 𝑏𝑜𝑡\n𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${command}`, "currencyCode":`𝐜𝐨𝐦𝐚𝐧𝐝𝐨: ${command}`,"retailerId": "ɪ ᴀᴍ 𝑡𝑜𝑚𝑖𝑜𝑘𝑎 𝑏𝑜𝑡","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
     //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./eu.jpg`)}}}
                  
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync(`./eu.jpg`)}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6285878313791-60139571124@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync(`./eu.jpg`), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6285878313791-60139571124@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync(`./eu.jpg`)}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6285878313791-60139571124@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`./eu.jpg`)}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6285878313791-60139571124@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync(`./eu.jpg`)}}} 
            
            
           
const fakegroup = (teks) => {
			client.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}
		// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}


const getCmd = (id) => {

    let position = null

    Object.keys(_scommand).forEach((i) => {

        if (_scommand[i].id === id) {

            position = i

        }

    })

    if (position !== null) {

        return _scommand[position].chats

    }

}





const checkSCommand = (id) => {

    let status = false

    Object.keys(_scommand).forEach((i) => {

        if (_scommand[i].id === id) {

            status = true

        }

    })

    return status

}
		if (!mek.message) return
            if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            const typei = Object.keys(mek.message)[0]
            budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            if(mek.key.fromMe){
            //if (isOwner) {
                if (budo === `->public`) {
                    if (public == `true`) return reply('Modo público já ativo')
                    public = true
                    client.sendMessage(from, 'ALTERNANDO PARA O MODO: PÚBLICO', text, {
                        contextInfo: tomis
                    })
                }
                if (budo === `->self`) {
                    if (public == `false`) return reply('Modo privado já ativo')
                    public = false
                    client.sendMessage(from, 'ALTERNANDO PARA O MODO: PRIVADO', text, {
                        contextInfo: tomis
                    })
                }
            }
            if (!public) {
                if (!mek.key.fromMe && !isOwner) return
            }
            if (!public) {
                if (!mek.key.fromMe && !isPremium) return
            }
		//BALANCEAMENTO DA MOEDA/DINHERO DO BOT

        	           if (isUser ) {

 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
			const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {contextInfo:tomis})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {contextInfo: tomis, contextInfo: {"mentionedJid": memberr}})
			}
			if (selectedButton == ("cassino")){
				if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
			}
///===============CARRINHO================///// by sayo
     res = await client.prepareMessageFromContent(from, {
                    "orderMessage": {
                        "orderId": "TOMIOKA BOT",
                        "thumbnail": fs.readFileSync('./me.jpg') ,
                        "itemCount": 1,
                        "status": "OPENED",
                        "surface": "CATALOG",
                        "message": 'TOMIOKA KIKI',
                        "orderTitle": 'test2',
                         },
    "contextInfo": {
    	
      "forwardingScore": 1,
      "isForwarded": true
    }
  }, tomioka)
//client.relayWAMessage(res)
//================FILTRO===================//
function _0x359d(){const _0x3ff5ef=['tão,\x20','Oi\x20@','141RAKmkw','BAJre','SPAM:','cada\x20','kcpLv','NDO','forma','pqUhw','ing','apply','white','LefBJ','2728422HGHWXQ','\x1b[1;3','QgGmn','\x20COMA','FONls','log','de\x205\x20','...\x0aM','wKnuv','elhor','NO\x20GR','2474285qZokUM','atZfC','ca/Sa','red','29332rcTatO','iNxGg','471882aIQkWK','21lEbKUW','vzGBz','1;31m','GFZoi','toStr','ructo','searc','TYxmr',')+)+)','lvdGT','271526mUJMCe','7m[\x1b[','segun','flood','do\x20bl','dos\x20e','aguar','MAYQW','(((.+','476958LtISIO','o_Pau','\x20não\x20','mzMQA','ZxwaY','➻\x1b[1;','coman','37m]','qBloc','ntre\x20','mando','2006480CzPLWd','const','s,\x20en','Ameri','ar\x20co','UPO','mOHyl','FoVAm','HH:mm','ThDjL',':ss','split'];_0x359d=function(){return _0x3ff5ef;};return _0x359d();}function _0x2173e9(_0x46a9d6,_0x1c4444,_0x155561,_0x12f505,_0x21cf7e){return _0x27c8(_0x46a9d6-0x222,_0x12f505);}(function(_0x3cb3a2,_0x102e37){const _0x30de68=_0x3cb3a2();function _0x4cae0b(_0x51361e,_0x3e1321,_0x514098,_0x33acfb,_0x13f609){return _0x27c8(_0x33acfb-0x28a,_0x514098);}function _0xd845e2(_0x523fe8,_0x574b92,_0x1bd24e,_0x34b55f,_0xd4e71f){return _0x27c8(_0x34b55f- -0x342,_0x1bd24e);}function _0x5946e8(_0x2f548c,_0x3d46ab,_0x1e1e48,_0x2cfe9f,_0x161470){return _0x27c8(_0x2f548c-0x17b,_0x161470);}function _0x54cefa(_0xb958d2,_0x5c8398,_0x35365d,_0x13a1ad,_0x123896){return _0x27c8(_0xb958d2-0x30e,_0x123896);}function _0x24b9b5(_0x384577,_0x301297,_0x515387,_0x74f8a6,_0x61291a){return _0x27c8(_0x301297-0x259,_0x61291a);}while(!![]){try{const _0xc2b185=parseInt(_0x5946e8(0x288,0x29b,0x27e,0x281,0x2a5))/(-0x272*-0x1+0x1237+-0x14a8)+parseInt(_0x5946e8(0x293,0x28e,0x28e,0x27a,0x271))/(0x9d+-0x9ea+0x94f)+-parseInt(_0x4cae0b(0x3d6,0x3be,0x3dd,0x3c4,0x3e9))/(0x1*0x6fe+0x179d+-0x1e98)*(parseInt(_0x54cefa(0x419,0x3f6,0x410,0x428,0x426))/(0x1bf2+0xa81*-0x1+0x116d*-0x1))+-parseInt(_0xd845e2(-0x23a,-0x21a,-0x254,-0x23b,-0x227))/(-0x6e6+0x22*0x84+-0xd*0xd1)+parseInt(_0xd845e2(-0x223,-0x1fc,-0x21a,-0x221,-0x20f))/(0x2512+0x21c*-0x1+-0x4*0x8bc)*(parseInt(_0x24b9b5(0x35a,0x367,0x343,0x355,0x381))/(-0xb18+-0xc85*-0x1+-0xb3*0x2))+parseInt(_0x54cefa(0x43a,0x43e,0x445,0x44a,0x440))/(0x1e2*-0x11+0x1d37+-0xf1*-0x3)+parseInt(_0x5946e8(0x277,0x273,0x298,0x25f,0x263))/(0x3*-0x28f+-0x60a+0x6e0*0x2);if(_0xc2b185===_0x102e37)break;else _0x30de68['push'](_0x30de68['shift']());}catch(_0x43d10e){_0x30de68['push'](_0x30de68['shift']());}}}(_0x359d,0x26f0+-0x44*-0x1519+0xada*0x42));function _0x4d2c75(_0x5e8d54,_0x577922,_0x313a47,_0x4bedcb,_0x274411){return _0x27c8(_0x4bedcb-0x82,_0x313a47);}function _0x382f7e(_0x3630bf,_0x55d7bd,_0x40911d,_0x476dc4,_0x4f0321){return _0x27c8(_0x476dc4- -0x19a,_0x3630bf);}const _0x553bb8=(function(){const _0x2319e8={};_0x2319e8[_0x5b8214(0x304,0x2f3,0x2eb,0x2d9,0x2d4)]=function(_0x510465,_0x3f6996){return _0x510465!==_0x3f6996;};function _0x5b8214(_0x5d7bea,_0x2d19e9,_0x3cb747,_0x4c0be8,_0x6004a3){return _0x27c8(_0x3cb747-0x1f0,_0x5d7bea);}_0x2319e8[_0x2e06ba(0x49e,0x4bb,0x4a7,0x4b9,0x4e0)]=_0x2e06ba(0x4d7,0x4bd,0x4a1,0x4bd,0x4d0);function _0x2e06ba(_0x54a945,_0x123ca3,_0x52c6e0,_0x4021b9,_0x2b73f9){return _0x27c8(_0x123ca3-0x3a6,_0x2b73f9);}_0x2319e8[_0x2e06ba(0x4f4,0x4cf,0x4dd,0x4c6,0x4bb)]=_0x37e3dd(-0xd7,-0xba,-0xc4,-0x9c,-0xbb),_0x2319e8[_0x2e06ba(0x4f6,0x4e1,0x4e3,0x502,0x4d6)]=_0x37e3dd(-0xcf,-0xf0,-0x100,-0xd7,-0xe2),_0x2319e8[_0x2e06ba(0x502,0x4e4,0x4e9,0x4dc,0x4ce)]=_0x2da71c(-0xd3,-0xe4,-0xd0,-0xf8,-0xc8);function _0x37e3dd(_0x411a8e,_0x3e478b,_0x25e1c4,_0x6d7c8e,_0x50ae48){return _0x27c8(_0x50ae48- -0x1e0,_0x25e1c4);}function _0x2da71c(_0x590092,_0x473a08,_0xd5953f,_0x55f0e5,_0xd28e4c){return _0x27c8(_0x473a08- -0x1f5,_0xd5953f);}_0x2319e8[_0x2e06ba(0x4cd,0x4e7,0x504,0x4e2,0x4e0)]=function(_0x27467f,_0x3fd8e9){return _0x27467f===_0x3fd8e9;},_0x2319e8[_0x37e3dd(-0xd7,-0xbb,-0xea,-0xfd,-0xe0)]=_0x2e06ba(0x49b,0x4ae,0x4d0,0x4c2,0x4be),_0x2319e8[_0x5b2bf8(-0x1c,-0x38,0x0,-0x25,-0x37)]=_0x5b2bf8(-0x2a,-0x9,-0x10,-0x10,-0x4d);function _0x5b2bf8(_0x164c4a,_0x1975af,_0x149dbf,_0x12f3cd,_0x1aaa2a){return _0x27c8(_0x164c4a- -0x14e,_0x12f3cd);}const _0x316e6e=_0x2319e8;let _0x561b79=!![];return function(_0x2201ce,_0x462e79){function _0x233d55(_0x3ffcfc,_0x21f1d7,_0x37002d,_0xa8a960,_0x33217a){return _0x37e3dd(_0x3ffcfc-0x5e,_0x21f1d7-0x12e,_0x3ffcfc,_0xa8a960-0x84,_0xa8a960-0x507);}function _0x3f52b6(_0x4aaa8d,_0x3c6f63,_0x1c2a7f,_0x59e52f,_0x47dbae){return _0x2e06ba(_0x4aaa8d-0x1d3,_0x59e52f- -0x675,_0x1c2a7f-0xb5,_0x59e52f-0x108,_0x4aaa8d);}function _0x3d72fb(_0x5d45f7,_0x32898b,_0x1e4c0c,_0x320f74,_0x37ad5e){return _0x2e06ba(_0x5d45f7-0x1e9,_0x320f74- -0x5e1,_0x1e4c0c-0x89,_0x320f74-0xfc,_0x32898b);}function _0x19e6c2(_0x58a47b,_0x26e939,_0x59a24e,_0x3fd5be,_0x5661fe){return _0x5b2bf8(_0x59a24e-0x314,_0x26e939-0x43,_0x59a24e-0x117,_0x3fd5be,_0x5661fe-0x63);}const _0x55d755={'wKnuv':function(_0xb4b1f0,_0x2d639c){function _0x1fa291(_0x3320c1,_0x3b51e8,_0x412d48,_0x1843c1,_0x5d6b37){return _0x27c8(_0x3320c1- -0x7,_0x5d6b37);}return _0x316e6e[_0x1fa291(0xf4,0xea,0x10d,0xd7,0xe4)](_0xb4b1f0,_0x2d639c);},'ThDjL':_0x316e6e[_0x3f52b6(-0x1a5,-0x1ce,-0x1a1,-0x1ba,-0x1cc)],'MAYQW':_0x316e6e[_0x2665a8(0x43,0x48,0x1f,0x34,0x23)],'iNxGg':_0x316e6e[_0x3f52b6(-0x1a3,-0x184,-0x191,-0x194,-0x195)],'FoVAm':_0x316e6e[_0x19e6c2(0x309,0x2fe,0x304,0x30e,0x327)]};function _0x2665a8(_0x49bb83,_0x4c4cfb,_0x4c40fb,_0x405028,_0x420170){return _0x5b2bf8(_0x420170-0x48,_0x4c4cfb-0x1a1,_0x4c40fb-0x11f,_0x405028,_0x420170-0x11f);}if(_0x316e6e[_0x19e6c2(0x321,0x318,0x307,0x326,0x2fa)](_0x316e6e[_0x233d55(0x411,0x435,0x427,0x427,0x43e)],_0x316e6e[_0x233d55(0x457,0x44d,0x474,0x459,0x45e)])){if(_0x247d0b){const _0x4568c5=_0x5f0d14[_0x3f52b6(-0x193,-0x1a7,-0x1a3,-0x18c,-0x1af)](_0x32f6d3,arguments);return _0x451df6=null,_0x4568c5;}}else{const _0x5bdae2=_0x561b79?function(){function _0x37a36e(_0x454671,_0x5086d0,_0x53778d,_0x423156,_0x4bc64d){return _0x3d72fb(_0x454671-0xd3,_0x5086d0,_0x53778d-0x6a,_0x454671- -0xa5,_0x4bc64d-0xdc);}function _0xe50a7c(_0x2352bb,_0x36d752,_0x5d6ec6,_0xadd087,_0x32da18){return _0x2665a8(_0x2352bb-0xdc,_0x36d752-0xb3,_0x5d6ec6-0x96,_0x5d6ec6,_0xadd087- -0x227);}function _0x5cf738(_0xf328f2,_0x2ff80a,_0xd90069,_0x338b52,_0x398684){return _0x3d72fb(_0xf328f2-0x67,_0x338b52,_0xd90069-0x145,_0xf328f2-0x128,_0x398684-0x13a);}function _0x48b1a6(_0x4b8c82,_0x45a471,_0x234b86,_0x38fe06,_0x1634c8){return _0x3d72fb(_0x4b8c82-0xb7,_0x234b86,_0x234b86-0x8a,_0x45a471-0x552,_0x1634c8-0x83);}function _0x52fab7(_0x13af82,_0x9ab9e3,_0xce933b,_0x19a905,_0x3248a9){return _0x233d55(_0x19a905,_0x9ab9e3-0xa5,_0xce933b-0x190,_0x9ab9e3- -0x326,_0x3248a9-0x91);}if(_0x55d755[_0x5cf738(-0xf,-0x2a,-0x19,-0xe,0xe)](_0x55d755[_0xe50a7c(-0x21a,-0x1fa,-0x1dc,-0x1f8,-0x1e9)],_0x55d755[_0x52fab7(0x126,0x120,0x128,0x132,0xff)])){if(_0x462e79){if(_0x55d755[_0x5cf738(-0xf,0x7,-0x8,-0x2a,0x16)](_0x55d755[_0xe50a7c(-0x23c,-0x227,-0x210,-0x221,-0x200)],_0x55d755[_0xe50a7c(-0x1f1,-0x1ee,-0x212,-0x1fa,-0x1f6)])){const _0x2db1aa=_0x462e79[_0x48b1a6(0x453,0x45a,0x475,0x458,0x44e)](_0x2201ce,arguments);return _0x462e79=null,_0x2db1aa;}else{const _0x486872=_0x26e1aa?function(){function _0x6ae2a(_0x2cd4a6,_0x28cc18,_0x4f4606,_0x593123,_0x4a94b4){return _0x48b1a6(_0x2cd4a6-0xf3,_0x593123- -0x3ec,_0x4f4606,_0x593123-0x75,_0x4a94b4-0x4b);}if(_0x5e15a5){const _0x31e356=_0x65e611[_0x6ae2a(0x8c,0x4b,0x4f,0x6e,0x5a)](_0x1a73e7,arguments);return _0x4cc61b=null,_0x31e356;}}:function(){};return _0x50a35f=![],_0x486872;}}}else{const _0x74fc23=_0x1f06d7[_0x37a36e(-0x19d,-0x1b2,-0x18d,-0x1bf,-0x197)](_0x528603,arguments);return _0x36f36a=null,_0x74fc23;}}:function(){};return _0x561b79=![],_0x5bdae2;}};}()),_0x29cce9=_0x553bb8(this,function(){function _0x3e993c(_0x2d031a,_0x36d850,_0x189c46,_0x3a1a81,_0x47bd66){return _0x27c8(_0x3a1a81- -0x29,_0x189c46);}const _0x369ffd={};function _0x40e259(_0x12e7c0,_0x4c3cd1,_0x1da3a1,_0x39b5bf,_0xb2c19){return _0x27c8(_0x12e7c0- -0x370,_0xb2c19);}function _0x48ae59(_0x5dead5,_0x4a24ab,_0x2eb9a2,_0x348626,_0xfa702e){return _0x27c8(_0xfa702e-0x126,_0x2eb9a2);}_0x369ffd[_0x40e259(-0x261,-0x268,-0x24a,-0x258,-0x277)]=_0x48ae59(0x255,0x243,0x23d,0x263,0x246)+_0x3e993c(0xf4,0xe3,0xeb,0xed,0xef)+'+$';const _0x4ea39f=_0x369ffd;function _0x4c50cb(_0x18c5c5,_0x43e30c,_0x759b72,_0x4440d0,_0x4329a5){return _0x27c8(_0x43e30c- -0x15c,_0x4329a5);}function _0x19ed4a(_0x1466e5,_0x43fc91,_0x28af9e,_0xd85421,_0x293608){return _0x27c8(_0x43fc91-0x1ef,_0xd85421);}return _0x29cce9[_0x40e259(-0x25e,-0x279,-0x265,-0x24d,-0x281)+_0x40e259(-0x22e,-0x247,-0x216,-0x24f,-0x24c)]()[_0x19ed4a(0x31c,0x303,0x2e9,0x318,0x2eb)+'h'](_0x4ea39f[_0x48ae59(0x231,0x253,0x221,0x23d,0x235)])[_0x4c50cb(-0x2e,-0x4a,-0x48,-0x26,-0x33)+_0x4c50cb(-0x3c,-0x1a,-0x3a,-0x16,-0x1e)]()[_0x40e259(-0x243,-0x262,-0x247,-0x252,-0x239)+_0x4c50cb(-0x6c,-0x49,-0x26,-0x26,-0x41)+'r'](_0x29cce9)[_0x19ed4a(0x307,0x303,0x2fc,0x2ed,0x31f)+'h'](_0x4ea39f[_0x48ae59(0x211,0x229,0x218,0x243,0x235)]);});_0x29cce9();function _0x328e2a(_0x40ee3c,_0x2c23c8,_0x18c12b,_0x808640,_0x29b89c){return _0x27c8(_0x29b89c- -0x301,_0x2c23c8);}function _0x27c8(_0x27c884,_0x89d1e1){const _0x23b15c=_0x359d();return _0x27c8=function(_0x3c8d4b,_0x2a4646){_0x3c8d4b=_0x3c8d4b-(-0xcc3+-0x195d+0x7*0x596);let _0x50c228=_0x23b15c[_0x3c8d4b];return _0x50c228;},_0x27c8(_0x27c884,_0x89d1e1);}const hora=moment['tz'](_0x4d2c75(0x1b5,0x1a0,0x1cd,0x1b1,0x1d3)+_0x4d2c75(0x192,0x1a9,0x170,0x18b,0x18a)+_0x4d2c75(0x19f,0x183,0x1bb,0x1a4,0x1af)+'lo')[_0x328e2a(-0x1b0,-0x1c3,-0x1c7,-0x1a4,-0x1c1)+'t'](_0x328e2a(-0x1e6,-0x1c6,-0x1ca,-0x1b7,-0x1cd)+_0x328e2a(-0x1ee,-0x1d2,-0x1cb,-0x1c5,-0x1cb));if(isCmd&&isFiltered(from)&&!isGroup){console[_0x34340e(-0xd7,-0xfa,-0xfa,-0xb8,-0xda)](_0x4d2c75(0x16e,0x19d,0x181,0x17f,0x1a3)+'1m'+hora,_0x4d2c75(0x177,0x160,0x173,0x17f,0x189)+_0x328e2a(-0x1e7,-0x1ca,-0x1d2,-0x1fa,-0x1e8)+_0x4d2c75(0x1af,0x1ae,0x1b2,0x192,0x17f)+_0x4d2c75(0x1c5,0x185,0x1a4,0x1a8,0x19c)+_0x4d2c75(0x1a3,0x1b9,0x1b6,0x1aa,0x1b3),color(_0x34340e(-0x9c,-0xa3,-0x7f,-0x81,-0x96),_0x34340e(-0xde,-0xd3,-0xd1,-0xf0,-0xe7)),color(pushname,_0x2173e9(0x32c,0x315,0x30c,0x318,0x317)),color(_0x4d2c75(0x1a4,0x166,0x16f,0x181,0x16a)+_0x328e2a(-0x1cb,-0x19e,-0x1b3,-0x1c3,-0x1c2),_0x382f7e(-0xb7,-0x9e,-0x8e,-0xa0,-0xaf)),color('➻',_0x4d2c75(0x19e,0x1a4,0x1ae,0x18c,0x18c)),color(''+command,_0x2173e9(0x32c,0x327,0x335,0x310,0x321)),color(_0x34340e(-0xd2,-0xf4,-0xb1,-0xcc,-0xdb)+_0x34340e(-0xa7,-0x95,-0xaa,-0xc7,-0xcc),_0x328e2a(-0x1fe,-0x215,-0x1ea,-0x21d,-0x207)),color(groupName,_0x4d2c75(0x1ab,0x18f,0x185,0x18c,0x188)));const ff={'text':_0x4d2c75(0x1b4,0x1c8,0x197,0x1bb,0x19f)+sender[_0x34340e(-0xa1,-0xa2,-0xae,-0x90,-0x99)]('@')[0x1*0xc37+-0x1247*0x1+0x2*0x308]+(_0x4d2c75(0x172,0x16e,0x1a4,0x185,0x188)+_0x382f7e(-0xb1,-0x8a,-0xa0,-0x95,-0x80)+_0x328e2a(-0x1e1,-0x1fa,-0x202,-0x1ec,-0x1de)+_0x328e2a(-0x206,-0x1cb,-0x1e7,-0x206,-0x1e6)+_0x4d2c75(0x1cd,0x1cb,0x1c1,0x1b2,0x1b8)+_0x4d2c75(0x1bc,0x19e,0x191,0x1ad,0x1c5)+_0x328e2a(-0x1c6,-0x1f3,-0x1ca,-0x1d4,-0x1d3)+_0x382f7e(-0x62,-0x62,-0x42,-0x62,-0x80)+_0x4d2c75(0x1b6,0x193,0x1a8,0x1a0,0x1a6)+_0x2173e9(0x324,0x318,0x305,0x30f,0x306)+_0x34340e(-0xbe,-0xd6,-0xa4,-0xac,-0xe1)+_0x2173e9(0x33f,0x363,0x336,0x359,0x34c)+_0x4d2c75(0x1cd,0x1c9,0x1ce,0x1ac,0x1a4)+_0x382f7e(-0x40,-0x50,-0x3e,-0x5d,-0x65)+_0x328e2a(-0x1f7,-0x1ba,-0x1d6,-0x1d0,-0x1da)+_0x34340e(-0xbc,-0xa2,-0xca,-0xc9,-0xd8)+'z?'),'contextInfo':{'mentionedJid':[sender]}};reply(ff);return;}function _0x34340e(_0x1378f5,_0x2b9cfe,_0x38812a,_0x32eed0,_0x3f1ad4){return _0x27c8(_0x1378f5- -0x1d8,_0x3f1ad4);}if(isCmd&&isFiltered(from)&&isGroup){console[_0x382f7e(-0x83,-0x82,-0x84,-0x99,-0x77)](_0x34340e(-0xdb,-0xbe,-0xe0,-0xbc,-0xe9)+'1m'+hora,_0x328e2a(-0x21c,-0x210,-0x1f2,-0x20a,-0x204)+_0x328e2a(-0x1fc,-0x1ed,-0x1f0,-0x1f2,-0x1e8)+_0x34340e(-0xc8,-0xc3,-0xb8,-0xc1,-0xcc)+_0x2173e9(0x348,0x327,0x353,0x329,0x344)+_0x328e2a(-0x1c1,-0x1d7,-0x1e6,-0x1c3,-0x1d9),color(_0x4d2c75(0x1dd,0x1a5,0x1db,0x1be,0x199),_0x4d2c75(0x17d,0x19f,0x183,0x17c,0x1a1)),color(pushname,_0x34340e(-0xce,-0xe2,-0xca,-0xde,-0xcf)),color(_0x382f7e(-0x7d,-0x8e,-0x8e,-0x9b,-0xb6)+_0x328e2a(-0x1a8,-0x1d9,-0x1e6,-0x1bf,-0x1c2),_0x328e2a(-0x227,-0x227,-0x225,-0x221,-0x207)),color('➻',_0x382f7e(-0x9a,-0xaf,-0xb3,-0x90,-0x77)),color(''+command,_0x34340e(-0xce,-0xf3,-0xbb,-0xaf,-0xd3)),color(_0x2173e9(0x328,0x335,0x320,0x30d,0x30c)+_0x4d2c75(0x1af,0x1b4,0x1b8,0x1b3,0x1c7),_0x34340e(-0xde,-0xd2,-0xf8,-0xcb,-0xd2)),color(groupName,_0x2173e9(0x32c,0x321,0x336,0x30a,0x34f)));const ff={'text':_0x4d2c75(0x1bb,0x1a6,0x1d3,0x1bb,0x1de)+sender[_0x328e2a(-0x1c3,-0x1e9,-0x1df,-0x1c5,-0x1ca)]('@')[-0x1b78+-0x1e84+0x39fc]+(_0x328e2a(-0x1fc,-0x20f,-0x1f8,-0x207,-0x1fe)+_0x2173e9(0x327,0x30b,0x33e,0x334,0x336)+_0x328e2a(-0x1e1,-0x1c8,-0x1e1,-0x1df,-0x1de)+_0x328e2a(-0x1ec,-0x1ef,-0x1f7,-0x205,-0x1e6)+_0x328e2a(-0x1dd,-0x1b2,-0x1ea,-0x1dd,-0x1d1)+_0x328e2a(-0x1fb,-0x1f4,-0x1d9,-0x1fa,-0x1d6)+_0x382f7e(-0x7f,-0x7a,-0x7b,-0x6c,-0x80)+_0x4d2c75(0x19e,0x1ca,0x1c5,0x1ba,0x19d)+_0x4d2c75(0x1c2,0x19c,0x1bf,0x1a0,0x19a)+_0x2173e9(0x324,0x323,0x340,0x334,0x332)+_0x4d2c75(0x185,0x1b8,0x17f,0x19c,0x184)+_0x34340e(-0xbb,-0xb0,-0xd3,-0xc0,-0xa3)+_0x4d2c75(0x192,0x1b8,0x1c3,0x1ac,0x1b6)+_0x4d2c75(0x19d,0x1a5,0x1c8,0x1bf,0x19c)+_0x382f7e(-0x70,-0x8a,-0x51,-0x73,-0x7d)+_0x34340e(-0xbc,-0xe0,-0x9e,-0xae,-0xa5)+'z?'),'contextInfo':{'mentionedJid':[sender]}};reply(ff);return;}
			/////***𝙁𝙐𝙉𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙑𝙄𝙍𝙐𝙎***\\\\\antivirus
    if (budy.length > 3500) {
    if (!isGroup) return
    if (!AntiVirtex) return
    if (isGroupAdmins) return;
    reply('d°§trav¥'.repeat(300))
    reply(`「 *TRAVA ACHADA* 」\nNossos sistema Detector Vestigios De Travas De spam\n Por segurança estamos de removendo `)
    client.groupRemove(from, [sender])
    }
/*if (location.includes(type)){
    if (!isAntiLoc) return
    if (isGroupAdmins) return;
    reply(`loc detectado 👍🏻`)
		client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
        setTimeout(() =>{
        client.groupRemove(from, [sender])
        }, 2000)
        setTimeout( () => {
		client.groupSettingChange(from, GroupSettingChange.messageSend, false)
		}, 8000)
	client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
	}*/
	//botao teste
	if ((budy === "COMPRAR") || (budy === "Comprar") || (budy === "comprar")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}

if ((budy === "COMPRAS") || (budy === "Compras") || (budy === "compras")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}

if ((budy === "/COMPRAS") || (budy === "/Compras") || (budy === "/compras")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}

if ((budy === "/COMPRAR") || (budy === "/Comprar") || (budy === "/comprar")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}

if ((budy === "/PREÇOS") || (budy === "/Preços") || (budy === "/preços")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}
if ((budy === "/PRECOS") || (budy === "/Precos") || (budy === "/precos")) {
gambar = fs.readFileSync('./eu.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
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
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: 'kkk'})
}

if (botao === 'PREMIUM - R$15') {
teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer vip no bot!*`
var options = {
 text: teks1
}
client.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: ftoko ,contextInfo: tomis})
reply(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser a forma de pagamento\nobs: e muito obg por me ajudar!!!`)
	}
	
	if (botao === 'GRATUITO❤️') {
teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer o bot GRATUITO!*`
var options = {
 text: teks1
}
client.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: ftoko ,contextInfo: tomis})
reply(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser😊\nobs: e muito obg por me ajudar!😊`)
	}
	
	if (botao === 'EDITADO - R$30') {
teks1 = `essa pessoa: wa.me/${sender.split("@s.whatsapp.net")[0]}\n*quer o bot já editado para ele*`
var options = {
 text: teks1
}
client.sendMessage('554498220867@s.whatsapp.net', options, text, {quoted: ftoko ,contextInfo: tomis})
reply(`Mensagem enviada ao meu dono!\njá já ele irá te responder como que vai ser a forma de pagamento\nobs: e muito obg por me ajudar!😊`)
	}
	
			

	if (isGroup && isAntiCatalogo && (type == 'productMessage')) {
if (isGroupAdmins) return reply('Isso é um catálogo, mas vc é adm então ta de boa.')
reply('🔰Ƭrανα Ƈαтάℓσgσ ∂єтєcтαdσ\n❌Rємσνєη∂σ❌')
var kik = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
  client.groupRemove(from, [kik])
}, 2000)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
client.sendMessage(from, clear , MessageType.text, {quoted: ftoko ,contextInfo: tomis, contextInfo : { forwardingScore: 500, isForwarded:true}})
}
	if (document.includes(type)){
    if (!Antidoc) return
    if (isGroupAdmins) return reply(`to de olho`)     
    reply(`documento detectado 👍🏻`)
		client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
        setTimeout(() =>{
        client.groupRemove(from, [sender])
        }, 2000)
        setTimeout( () => {
		client.groupSettingChange(from, GroupSettingChange.messageSend, false)
		}, 8000)
	client.sendMessage(from, destrava(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
	}

	

	if (contact.includes(type)){
    if (!Anticontato) return
    if (isGroupAdmins) return reply(`to de olho`)     
    reply(`contato detectado 👍🏻`)
		client.groupSettingChange(from, GroupSettingChange.messageSend, true)		
        setTimeout(() =>{
        client.groupRemove(from, [sender])
        }, 2000)
        setTimeout( () => {
		client.groupSettingChange(from, GroupSettingChange.messageSend, false)
		}, 8000)
	client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava2(prefix), text, { quoted: ftoko ,contextInfo: tomis })
                    client.sendMessage(from, destrava3(prefix), text, { quoted: ftoko ,contextInfo: tomis })
	}
			if (selectedButton == ("cassino1")){
			if (!isGroup) return fakegroup (mess.only.group)
let cassinao = ['🍉', '🍎','🍇']
let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
if(resposta1==resposta2&&resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Parabéns, _${pushname}_ VOCÊ GANHOU*!!!!!`, text, {contextInfo: tomis})
}
else if(resposta1==resposta2||resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Puts, passou perto, _${pushname}_ Quase foi...*`, text, {contextInfo: tomis})
}
else{
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*vc perdeu :( , _${pushname}_ Tente na próxima...*`, text, {contextInfo: tomis})
}
}
if (selectedButton == ("cassino2")){
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'?? : 🍒 : 🍊',
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
            reply(yow)
}

			if (messagesC.includes("casinos")){
				var buttons = [{ buttonId: 'cassino', buttonText: { displayText: 'cassino' }, type: 1 }, { buttonId: 'cassino1', buttonText: { displayText: 'cassino1' }, type: 1 }, { buttonId: 'cassino2', buttonText: { displayText: 'cassino2' }, type: 1 }]
                var buttonsMessage = { contentText: `cassinos`, footerText: 'clique aqui', buttons: buttons, headerType: 1 }
                var sendMsg = await client.prepareMessageFromContent(from, { buttonsMessage }, {})
                client.relayWAMessage(sendMsg, { waitForAck: true })
			}
      //_____________GRUPO OFC DO BOT_________//
       
            
                if ((budy === `👤 CRIADOR`)){
          reply(vcard)
      }
			if (selectedButton == ("grupo")){
				addFilter(from)
	   reply('https://chat.whatsapp.com/EVtJliGrMzmEq2gwNBgOxd')
	}
	
	if (selectedButton == ("dono")){
		addFilter(from)
	   reply('wa.me/5544998220867')
	}

	if (selectedButton == ("menu")){
		addFilter(from)
	   const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
gambar = fs.readFileSync('./eu.jpg'),
mhan = await client.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbutsan = [
  {buttonId: `dono`, buttonText: {displayText: '👤 CRIADOR'}, type: 1},
  {buttonId: `${prefix}menu2`, buttonText: {displayText: '📝 MENUS'}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help(pushname, prefix),
    footerText: `Speed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 Tɪᴏ Tᴏᴍɪᴏᴋᴀ*_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: help(pushname, temp, prefix),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: ftoko ,contextInfo: tomis})
           	
     }
if (text.includes("ip"))
  { const aris = text.replace(/!ip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIDADE:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGIÃO* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌BY:May Bot*` 
  client.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            client.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	client.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${res.data.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${res.data.data_situacao}\n\n ➸ *TIPO:* ${res.data.tipo} \n\n ➸ *NOME:* ${res.data.nome} \n\n ➸ *UF:* ${res.data.uf} \n\n ➸ *TELEFONE:* ${res.data.telefone}\n\n ➸ *SITUAÇÃO:* ${res.data.situacao} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *RUA:* ${res.data.logradouro} \n\n ➸ *NÚMERO :* ${res.data.numero} \n\n ➸ *CEP :* ${res.data.cep} \n\n ➸ *MUNICÍPIO:* ${res.data.municipio} \n\n ➸ *PORTE:* ${res.data.porte}\n\n ➸ *ABERTURA:* ${res.data.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${res.data.natureza_juridica} \n\n ➸ *FANTASIA:* ${res.data.fantasia}\n\n ➸ *CNPJ:* ${res.data.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.data.ultima_atualizacao}\n\n ➸ *STATUS:* ${res.data.status}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento}\n\n ➸ *EMAIL:* ${res.data.email}\n\n *📌BY:May Bot* `;
    client.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
                      	teste = body.slice(10)
const aris = text.replace(/!cpf /, "")
axios.get(`https://api-rwx.000webhostapp.com/api/cpf.php/?token=${aris}&cpf=${teste}`).then((res) => {
	client.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let ecpf = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CPF:* ${res.data.CPF} \n\n ➸ *NOME:* ${res.data.Nome}\n\n ➸ *MÃE:* ${res.data.NomeMae} \n\n ➸ *NASCIMENTO:* ${res.data.DataNascimento} \n\n ➸ *RUA:* ${res.data.Rua} \n\n ➸ *N°:* ${res.data.NumeroRua}\n\n ➸ *COMPLEMENTO:* ${res.data.Complemento}\n\n ➸ *BAIRRO:* ${res.data.Bairro}\n\n ➸ *CEP:* ${res.data.CEP}\n\n ➸ *UF:* ${res.data.EstadoSigla}\n\n ➸ *CIDADE:* ${res.data.Cidade}\n\n ➸ *ESTADO:* ${res.data.Estado}\n\n ➸ *PAIS:* ${res.data.Pais}  \n\n *📌BY:May Bot* `;
    client.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if ((budy === 'AJUDA') || (budy === 'Ajuda') || (budy === 'ajuda')) {
		var buttons = [{ buttonId: 'grupo', buttonText: { displayText: 'grupo' }, type: 1 }, { buttonId: 'dono', buttonText: { displayText: 'dono' }, type: 1 }, { buttonId: 'menu', buttonText: { displayText: 'menu' }, type: 1 }]
                var buttonsMessage = { contentText: `como posso ajudar?`, footerText: 'clique em um dos botões abaixo', buttons: buttons, headerType: 1 }
                var sendMsg = await client.prepareMessageFromContent(from, { buttonsMessage }, {})
                client.relayWAMessage(sendMsg, { message: { thumbnail: fs.readFileSync('./me.jpg'), caption: 'kkk'}, waitForAck: true})
}
/////_____BOTAO WA____/////
if (symmantec == 'SIM') {
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' vc ja votou!', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*razão*: ${_votes[0].reason}\n*Total de Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }}
if (symmantec == 'NÃO') {
	const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' vc já votou!', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*razão*: ${_votes[0].reason}\n*Total de Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
const sendFakeStatus = (from, teks, faketeks) => {
				client.sendMessage(from, teks, text, { thumbnail: tomis, sendEphemeral: true, quoted: ftoko ,contextInfo: tomis})
			}
	/*if ((budy === "AJUDA") || (budy === "Ajuda") || (budy === "ajuda")) {
gambar = fs.readFileSync('./me.jpg')
mhan = await client.prepareMessage(from, gambar, MessageType.image)
gbutsan = [
  {buttonId: 'id1', buttonText: {displayText: 'mais opções📝'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'registrar-me📌'}, type: 1}]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: `Olá Wa.me/${sender.split("@")[0]}`,
    footerText: `_Tomioka_`,
    buttons: gbutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./me.jpg'),
        caption: 'kkk'})
}*/
if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	client.sendMessage(id, '[❗] ESPERE ESTA PROCESSANDO', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${res.data.data.number}  \n\n *📌BY:May Bot*`;
    client.sendMessage(id, cpf ,MessageType.text);
})
}	

if (text.includes("cep")){
const aris = text.replace(/!cep /, "")
axios.get(`https://viacep.com.br/ws/${aris}/json/`).then((res) => {
	client.sendMessage(id, '[❗] ESPERE ESTOU BUSCANDO DADOS', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${res.data.cep} \n\n ➸ *ENDEREÇO:* ${res.data.logradouro}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *LOCALIDADE:* ${res.data.localidade} \n\n ➸ *UF:* ${res.data.uf}\n\n ➸ *DDD:* ${res.data.ddd} \n\n *📌BY: TOMIOKA BOT* `;
    client.sendMessage(id, cep ,MessageType.text);
}) 
}
		
if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${res.data.ano}\n ➸ *ANO MODELO* : ${res.data.anoModelo}\n ➸ *CHASSI* : ${res.data.chassi}\n ➸ *CODIGO RETORNO* : ${res.data.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${res.data.codigoSituacao}\n ➸ *COR* : ${res.data.cor}\n ➸ *MARCA* : ${res.data.marca}\n ➸ *MUNICIPIO* : ${res.data.municipio}\n ➸ *SITUACAO* : ${res.data.situacao}\n ➸ *UF* : ${res.data.uf}\n *📌BY:TOMIOKA BOT*` 
  client.sendMessage(id, hasil, MessageType.text); 
 })
 }		        

        if (messagesC.includes("preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return fakegroup ('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakegroup ("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	if (budy.includes("reply")){
	        meta = await client.loadMessage(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
            res = await client.generateForwardMessageContent(meta) 
            res = await client.prepareMessageFromContent(from, res, {quoted:mek, contextInfo:tomio, contextInfo:{mentionedJid:[]}}) 
            client.relayWAMessage(res)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return fakegroup ('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakegroup ("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return fakegroup ('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return fakegroup ("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo!`)
	}
	






	/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙒𝘼.𝙈𝙀***\\\\\
// @tio_tomioka_ofc
	        if (messagesC.includes("wa.me/")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return; 
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} voce sera expulso deste grupo!`)
        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	
	/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆***\\\\\
// @tio_tomioka_ofc
if (messagesC.includes("facebook.com")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return;
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈***\\\\\
// @tio_tomioka_ofc
        if (messagesC.includes("instagram.com")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return;
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	
	/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆 ZAP***\\\\\
// @tio_tomioka_ofc
        if (messagesC.includes("https:")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return;
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘾𝙃𝘼𝙉𝙉𝙀𝙇***\\\\\
// @tio_tomioka_ofc
	if (messagesC.includes("://youtube.com/")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return; 
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}

/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊***\\\\\
// @tio_tomioka_ofc
	if (messagesC.includes("://youtu.be/")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return; 
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
	
/////***𝙁𝙐𝙉𝘾𝙏𝙄𝙊𝙉 𝘼𝙉𝙏𝙄 𝙇𝙄𝙉𝙆  𝙏𝙀𝙇𝙀𝙂𝙍𝘼𝙈***\\\\\
// @tio_tomioka_ofc
	if (messagesC.includes("://t.me/")){
		if (!isGroup) return;
		if (!isAntiLink) return;
		if (isGroupAdmins) return;
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
	}
    
	if (messagesC.includes("Tomiokabot")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("oi?")
	}
	
		if (messagesC.includes("cadebot")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("olha eu aquiiiii🥰")
	}
	
	if (messagesC.includes("botlindo")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("obrigado amor😍")
	}
	
    if (messagesC.includes("teamobot")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("tbm te amo amor🥰")
	}
	
	if (messagesC.includes("chato")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("vc que é 😼")
	}
	
	if (messagesC.includes("rsrs")){
			client.updatePresence(from, Presence.composing)
			fakegroup ("vishh... nem vou falar nd.. 🤭")
	}
	
	if ((budy === 'LINDO') || (budy === 'Lindo') || (budy === 'lindo')) {
			client.updatePresence(from, Presence.composing)
			fakegroup ('eu?🥺')
	}
	
	if ((budy === 'PREFIXO') || (budy === 'Prefixo') || (budy === 'prefixo')) {
			client.updatePresence(from, Presence.composing)
			fakegroup (`meu prefixo é: ${prefix}`)
	}
	
	if (messagesC.includes("mt1")){
		if (!isPremium) return fakegroup (mess.only.premium)
		
			client.updatePresence(from, Presence.composing)
			reply("Você escolheu Kiny painel \n copie e cole cada um desses comandos no seu termux") 
			client.updatePresence(from, Presence.composing)
			fakegroup ("💻COMANDOS💻\n\npkg update\n\npkg upgrade\n\npkg install python\n\npkg install python2\n\npkg intall python3\n\npkg install git\n\ngit clone  https://github.com/Kiny-Kiny/Kiny-Painel ​ \n\ncd Kiny-Painel\n\npython3 main.py\n\nUsername: Kiny\n\nPassword: VirtualInsanity") 
	}
	
	       if (messagesC.includes("allofme")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/allofme.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
	        if (messagesC.includes("happier")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/happier.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
	
            if (messagesC.includes("nyanpasu")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/nyanpasu.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
	        if (messagesC.includes("bumps")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/Goosebumps.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	           
	            if (messagesC.includes("stealmygirl")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/stealmygirl.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
            }
	
	if ((budy === 'BOT') || (budy === 'Bot') || (budy === 'bot')) {
if (!codeInvite) return fakegroup (`Sou o ᴛᴏᴍɪᴏᴋᴀ ʙᴏᴛ\n\nse quer ver meu menu mande a palavra ajuda(sem o prefixo)`)     
  }           
  if ((budy === 'OI') || (budy === 'Oi') || (budy === 'oi')) {
if (!codeInvite) return fakegroup (`Sou o ᴛᴏᴍɪᴏᴋᴀ ʙᴏᴛ\n\nse quer ver meu menu mande a palavra ajuda(sem o prefixo)`)     
  }           
	           if (messagesC.includes("youloved")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/youloved.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: true, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	          
	           if (messagesC.includes("grateful")){
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/Neffex_grateful.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
			if (messagesC.includes("dbz")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Dbz.mp3');
            client.sendMessage(from, fs.readFileSync('./assets/Dbz.mp3'), audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
                 if (messagesC.includes("@554498220867")){
                client.sendMessage(from, fs.readFileSync('./figurinhas/tomioka.webp'), sticker, {contextInfo: null, quoted: ftoko ,contextInfo: tomis})
    }
    //RESETAR JOGO DA VELHA POR #
            if (messagesC.includes("#")){
            	if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {

                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");

                         const chatJqual = `*🕹️JOGO DA VELHA RESETADO...🕹️*`
                   client.sendMessage(from, chatJqual, MessageType.text, )

                    } else {

                         fakegroup(`Não a nenhuma sessão em andamento...`);

                    }}
	            if ((budy === 'AÉ') || (budy === 'Aé') || (budy === 'aé')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/Aé.webp'), sticker, {contextInfo: null, quoted: tomio})
}
                if ((budy === 'F') || (budy === 'F') || (budy === 'f')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/F.webp'), sticker, {contextInfo: null, quoted: tomio})
}
                  if ((budy === 'QUE') || (budy === 'Que') || (budy === 'que')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/Q.webp'), sticker, {contextInfo: null, quoted: tomio})
    }
               
                if ((budy === 'OIBOT') || (budy === 'Oibot') || (budy === 'oibot')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/oibot.webp'), sticker, {contextInfo: null, quoted: tomio})
                
}
if ((budy === 'FRIO') || (budy === 'Frio') || (budy === 'frio')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/frio.webp'), sticker, {contextInfo: null, quoted: tomio})
                
}
if ((budy === 'CALCULISTA') || (budy === 'Calculista') || (budy === 'calculista')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/calculista.webp'), sticker, {contextInfo: null, quoted: tomio})
                
}
if (msgReceived == "bom dia"){
client.sendMessage(from, fs.readFileSync('./figurinhas/dia.webp'), sticker, {contextInfo: null, quoted: tomio})

	}
	if (msgReceived == "boa noite"){
client.sendMessage(from, fs.readFileSync('./figurinhas/noite.webp'), sticker, {contextInfo: null, quoted: tomio})

	}
           
                if ((budy === 'TOPE') || (budy === 'Tope') || (budy === 'tope')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/tope.webp'), sticker, {contextInfo: null, quoted: tomio})
                
}

                 if ((budy === 'OI') || (budy === 'Oi') || (budy === 'oi')) {
                fakegroup (`oi '-'`)
                
}
                if ((budy === 'BAN') || (budy === 'Ban') || (budy === 'ban')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/ban.webp'), sticker, {contextInfo: null, quoted: ftoko ,contextInfo: tomis})

}

                   if ((budy === 'TOOP') || (budy === 'Toop') || (budy === 'toop')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/tudo.webp'), sticker, {contextInfo: null, quoted: ftoko ,contextInfo: tomis})
}
                  if ((budy === 'TOMIOKINHA') || (budy === 'Tomiokinha') || (budy === 'tomiokinha')) {
                client.sendMessage(from, fs.readFileSync('./figurinhas/tomiokinha.webp'), sticker, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
             
   }
	            if (budy.match('ksks')) {
client.sendMessage(from, fs.readFileSync('./figurinhas/kkk.webp'), sticker, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
}
if (budy.match('monster')) {
client.sendMessage(from, fs.readFileSync('./figurinhas/monster.webp'), sticker, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
}

					if (messagesC.includes("gay")){
			client.updatePresence(from, Presence.composing)
            reply('teu pai?')
	}
	if (messagesC.includes("rumm")){
			client.updatePresence(from, Presence.composing)
            reply('rummmmm;^;')
	}
	
	
			if ((budy === 'BV') || (budy === 'Bv') || (budy === 'bv')) {
			client.updatePresence(from, Presence.composing)
            client.sendMessage(from, fs.readFileSync('./assets/bv.mp3'), audio, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
	}
	
				if (messagesC.includes("mandememe")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/tomiokajokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Boo :V*')
	}
//definiçao cmd
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			colors = ['red','white','black','blue','yellow','green']
			const isImage = type === 'imageMessage'
			const isMedia = type === 'imageMessage' 
			const isVideo = type === 'videoMessage'
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		    const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
            const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')

		
			if (!isGroup && isCmd) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color('[EXEC]:'), color(pushname), color(' COMANDO', 'white'), color('➤', 'red'), color(`[${command}]`, 'pink'), color('NO GRUPO', 'white'), color(groupName))
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))                                         
			if (!isGroup && !isCmd) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color(pushname, 'yellow'), color(`[mensagem]`, 'orange'), color('NO GRUPO', 'white'), color(groupName))
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color('[EXEC]:'), color(pushname), color(' COMANDO', 'white'), color('➤', 'red'), color(`[${command}]`, 'yellow'), color('NO GRUPO', 'white'), color(groupName))
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log(`\x1b[1;31m~\x1b[1;37m>${hr}`, color(pushname, 'yellow'), color(`[mensagem]`, 'orange'), color('NO GRUPO', 'white'), color(groupName))
// console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'do mano', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	    
			//_ler chat
			client.chatRead(from)
			if (isCmd && isBanned) {
           return console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`5544998220867`),'DE:', color(pushname))}

				function addMetadata(packname, author) {	
				if (!packname) packname = 'TOMIOKA'; if (!author) author = '5544998220867';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	
				
}
//////********SISTEMA DE VOTAÇAO*******////traduzido por @tio_tomioka_ofc
        if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'votar'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' vc ja votou!', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*razão*: ${_votes[0].reason}\n*Total de Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' vc já votou!', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Voto:* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*razão*: ${_votes[0].reason}\n*Total de Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} Minutos\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Voto* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}
    switch(command) {
case 'rankes':
let temporalM = client.prepareMessageFromContent(from,{
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
}, {quoted:mek, contextInfo:tomio})
client.relayWAMessage(temporalM)
break
					//_BANIR E DESBANIR USUARIO DE MEXER NO BOT 
		  case 'ban':
if (!isGroup) return fakegroup (mess.only.group)
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
if (!isGroup) return fakegroup (mess.only.group)
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break
case 'ack':
        try {
   reply(JSON.stringify({contextInfo: tomis}, null, 4))
        } catch (e) {
     reply(`${e}`)
     console.log(e)
   }
          break
//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return fakegroup ('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return fakegroup ('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, contextInfo: tomis})
fs.unlinkSync(ran)
})
break
/*case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Qual é o código da linguagem?', text, {contextInfo: tomis})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto tio', text, {contextInfo: tomis})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('A maior parte do texto não é nada')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return fakegroup ('falha:(')
							client.sendMessage(from, buff, audio, {contextInfo: tomis, ptt:true})
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

                

                client.sendMessage(from, kentod2, MessageType.text, {quoted: ftoko ,contextInfo: tomis})

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

                

                client.sendMessage(from, kentod, MessageType.text, {quoted: ftoko ,contextInfo: tomis})

                break
//___________VOTAÇAO/VOTAR____________//
            case 'vote':   //case refeita pelo @tio_tomioka_ofc
            if(!isGroup) return 
            if (isVote) return reply('ja tem uma votaçao ativa')
            if(!q) return reply('*Votaçao*\n\n'+ prefix+ 'vote @tag target | motivo | 1 (1 = 1 Minuto)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('insira um numero no parametro 3\nNumeraçao: 1-9999\n1 = 1 Minutos')
            await mentions('Vote ' +'@'+ id.split('@')[0]+ '\n\n' + 'como fazer:' +'\n\n' + `votar = ✅\ndevote = ❌\n\nmotivo: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
let temporalF= client.prepareMessageFromContent(from,{
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
}, {quoted:mek, contextInfo:tomio})
client.relayWAMessage(temporalF)}
            break
//figurinha menu stiker cmd stickercmd
case 'hash': 
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (!isQuotedSticker) return reply("Marque um sticker")
const encmeds9 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediastick = await client.downloadMediaMessage(encmeds9)
var crypto = require('crypto')
hash = crypto.createHash('sha256').update(mediastick).digest('base64');
console.log(hash)
reply(hash)
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply('```so dono```')
if (isQuotedSticker) {
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("```[ ✓ ]``` pronto")
} else {
reply('Responder o sticker')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply('```so dono```')
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
reply("```[ ✓ ]``` pronto")
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
reply (`📱❤᥀🔥COMO SABER SE SUA NAMORADA ESTÁ TE TRAINDO COM ESSE APLICATIVO ANDROID [APK] [2021] [DOWNLOAD]📱❤᥀🔥\n\nhttps://seulink.online/9Jqr`)
break
case 'apk2':
reply (`᥀🔥ྍ֟᥀NOVO SPOTIFY PREMIUM + MOD v8.5.45 + LITE [2021] [APK] [MOD] [DOWNLOAD]᥀🔥ྍ֟᥀\n\nhttps://seulink.online/cHi6ezMz`)
break
case 'apk3':
reply (`᥀🔥ྍ֟NETFLIX GRÁTIS APK MOD - NOVA ATUALIZAÇÃO 2021!! - ASSISTA TUDO ONDE ESTIVER ! [APK] [MOD] [DOWNLOAD]᥀🔥ྍ֟\n\nhttps://seulink.online/3NSniiHO`)
break
case 'apk4':
reply (`🔥LISTA DE APK's E JOGOS PREMIUM/PRO/MOD 100% GRÁTIS LISTA 02! [2021]᥀🔥\n\nNOVO RESSO PREMIUM ATUALIZADO:\nhttps://seulink.online/FgSOHnxj9r\n\nYOUTUBE VANCED APK:\nhttps://seulink.online/St1OGAI\n\nSNAPTUBE PREMIUM:\nhttps://seulink.online/ITdCU\n\nKINE MASTER PREMIUM:\nhttps://seulink.online/IfmC74cv5D\n\nCHUNCHYOLL PREMIUM V3.7.0:\nhttps://seulink.online/BrpZ\n\nYOUTUBE MUSIC PREMIUM APK:\nhttps://seulink.online/LQHFAcs7T\n\nNOVO RESSO PREMIUM ATUALIZADO:\nhttps://seulink.online/FgSOHnxj9r\n\nYOUTUBE VANCED APK:\nhttps://seulink.online/St1OGAI\n\nSNAPTUBE PREMIUM:\nhttps://seulink.online/ITdCU\n\nKINE MASTER PREMIUM:\nhttps://seulink.online/IfmC74cv5D\n\nCHUNCHYOLL PREMIUM V3.7.0:\nhttps://seulink.online/BrpZ\n\nCAPCUT MOD:\nhttps://seulink.online/NeU1\n\nFOGO LIVRE GRATUITO (MAX):\nhttps://seulink.online/zwjnrznO\n\nCLANS OF CLANS MOD:\nhttps://seulink.online/fuTSyasis`)
break
case 'apk5':
reply (`🔥ྍ֟VIZER 4.5 !!! - APP P/ ASSISTIR FILMES E SERIES , ANIMES E MUITO MAIS!🔥\n\nhttps://seulink.online/WvkgLwc`)
break
case 'metodos':
reply (`᥀🔥VÁRIOS MÉTODOS PARA HACKEAR CONTAS NO FACEBOOK SEM MUITO ESFORÇO !!!᥀🔥\n\nVários métodos para você aprender a hackear facebook utilizando até alguns truques simples e um pouco de engenharia social e você terá acesso a conta que você quiser esses métodos são gringos e foram traduzidos para português.\n\nஓீᤢ✧🔥COMO HACKEAR UMA CONTA NO FACEBOOK SEM NENHUM TIPO DE CONHECIMENTO HACKER᥀🔥:\nhttps://seulink.online/8nUFM5Kndg\n\nஓீᤢ✧🔥COMO MUDAR A APARENCIA DO SEU FACEBOOK᥀🔥:\nhttps://seulink.online/gS0ALJ\n\nஓீᤢ✧🔥COMO RECUPERAR MENSAGENS EXCLUIDAS DO SEU FACEBOOK᥀🔥:\nhttps://seulink.online/D6M6aKG\n\nஓீᤢ✧🔥COMO ENVIAR PEDIDOS DE AMIZADES PARA AMIGOS QUE TE BLOQUEARAM NO FACEBOOK᥀🔥:\nhttps://seulink.online/tlL6\n\nஓீᤢ✧🔥COMO ENVIAR SMS PELO FACEBOOK᥀🔥:\nhttps://seulink.online/s0K7b0fr\n\nஓீᤢ✧🔥COMO HACKEAR UM FACEBOOK APENAS COM UM SMS᥀🔥:\nhttps://seulink.online/x2R4ztr\n\nஓீᤢ✧🔥VÁRIOS MÉTODOS PARA HACKEAR CONTAS NO FACEBOOK᥀🔥:\nhttps://seulink.online/FP1zrCb`)
break
case 'suruba':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'surubao':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
//_RANKS 
case 'rankgado':
try{
if(!isGroup) return (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankgay':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankiludidos':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankcornos':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankloucos':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankalfa':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'ranknazista':
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankbeta':
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankcaco':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return fakegroup (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'ranklindos':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankfeios':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankprincesas':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break
case 'rankprincipes':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
try{
if(!isGroup) return (mess.only.group)
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
reply('Deu erro, tente novamente :/')
}
break 
//_CASSINOS 
case 'cassino':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const cassino = ['ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 2 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 3 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 2 ─═─ 1*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 3 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 1 ─═─ 3*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 1 ─═─ 2*\n*║*\n*║*\n*╠* Não foi dessa vez mas\n*║* continue tentando.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 1 ─═─ 1 ─═─ 1*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 2 ─═─ 2 ─═─ 2*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*','ㅤ\n*╔═─ CASSINO ─══*\n*║*\n*║*\n*╠* ROLETA DOS TRÊS\n*╠* NÚMEROS\n*║*\n*╠═─ 3 ─═─ 3 ─═─ 3*\n*║*\n*║*\n*╠* PARABÉNS !!!\n*╠* VOCÊ GANHOU NO CASSINO.\n*║*\n*╚═─ CASSINO ─══*']
					random = cassino[Math.floor(Math.random() * (cassino.length))]
					reply(`${random}`)
					break
case 'cassino1':
if (!isGroup) return fakegroup (mess.only.group)
let cassinao = ['🍉', '🍎','🍇']
let resposta1 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta2 = cassinao[Math.floor(Math.random() * cassinao.length)]
let resposta3 = cassinao[Math.floor(Math.random() * cassinao.length)]
if(resposta1==resposta2&&resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Parabéns, _${pushname}_ VOCÊ GANHOU*!!!!!`, text, {contextInfo: tomis})
}
else if(resposta1==resposta2||resposta2==resposta3){
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*Puts, passou perto, _${pushname}_ Quase foi...*`, text, {contextInfo: tomis})
}
else{
client.sendMessage(from, `*JOGO DO CASSINO*:\n\n(((((((((((${resposta1}${resposta2}${resposta3})))))))))))))\n\n*vc perdeu :( , _${pushname}_ Tente na próxima...*`, text, {contextInfo: tomis})
}
break
case 'cassino2':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
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
            reply(yow)
	            break
case 'casino': 
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					var roletaresu = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍅🍅🍇`, `🍇🍒🍒`]
					var roletaresu2 = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇??🍒`, `🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍒🍒🍒`, `🍇🍇🍇`,  `🍅🍅🍅`, `🍅🍅??`, `🍇🍒🍒`, `🍒🍇🍇`]
					var roletaresu3 = [`🍒🍅🍇`, `🍅🍇🍒`, `🍇🍅🍇`, `🍒🍒🍇`, `🍇🍇🍒`, `🍅🍅🍇`, `🍇🍒🍒`, `🍇🍒🍒`, `🍒🍇🍇`]
					const roleta1 = roletaresu[Math.floor(Math.random() * roletaresu.length)]
					const roleta2 = roletaresu2[Math.floor(Math.random() * roletaresu2.length)]
					const roleta3 = roletaresu3[Math.floor(Math.random() * roletaresu3.length)]
					teksahh = `*Roleta Girada🎰??*\nlhe desejo sorte\n\n${roleta1}\n${roleta2}\n${roleta3}`
					client.sendMessage(from, teksahh, text, {contextInfo: tomis})
				
					break
case 'figutag':
case 'totag':
if (!isPremium) return fakegroup (mess.only.premium)
				
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                contextInfo: tomis
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*[❗] MARQUE A FIGURINHA 😐*`)
            }
            break
            
              case 'supertag':
               if (!isPremium) return fakegroup (mess.only.premium)
				
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                contextInfo: tomis
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                contextInfo: tomis
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                contextInfo: tomis
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await client.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                contextInfo: tomis
            }
            ini_buffer = fs.readFileSync(file)
            client.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`[❗] responder imagem/adesivo/áudio/vídeo com a legenda ${p}supertag para marcar`)
        }
        break
/*-------------[ Tictactoe Handler ]-------------*/
                case 'velha':
                if (!isUser) return reply('usuario nao registrado')                                 
						if(!isGroup) return reply('comando apenas para grupos')
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
                         client.sendMessage(from, chatMove, MessageType.text, {
                              quoted: ftoko ,contextInfo: tomis,
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
                         return reply(
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
                    client.sendMessage(from, strChat, MessageType.text, {
                         quoted: ftoko ,contextInfo: tomis,
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
                   client.sendMessage(from, chatJqual, MessageType.text, )

                    } else {

                         fakegroup(`Não a nenhuma sessão em andamento...`);

                    }
                    break
        //_RANKS E %
        case 'gay': //by gauger 
              client.updatePresence(from, Presence.composing) 
            	 random = `${Math.floor(Math.random() * 110)}`
			 body = [body.slice(5)]   
               rspst = `*Tu é mano?😳😌*\n\n*_${body}_ você é ${random}% GAY🤭🌈* __`
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(rspst)          
   			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid			 			   			   			 
					if (mentioned.length > 1) {
						teks = []
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)	
						client.sendMessage(from, mentioned)
					} else {
						mentions(`*Tu é mano?😳😌*\n\n*_@${mentioned[0].split('@')[0]}_ Você é ${random}% GAY🌈🤭*`, mentioned, true)}
                break
case '%gay':		
	            	if (args.length < 1) return fakegroup ('marque os gay do gp!')
					rate = body.slice(5)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
case '%feio':		
	            	if (args.length < 1) return fakegroup ('marque alguem fei que doi!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é feio(a): *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
case '%lindo':		
	            	if (args.length < 1) return fakegroup ('marque alguem bonito!')
					rate = body.slice(8)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como você é lindo(a): *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
case '%gostoso':		
	            	if (args.length < 1) return fakegroup ('marque sua mãe aquela gostosa!')
					rate = body.slice(9)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
case '%gado':		
	            	if (args.length < 1) return fakegroup ('marque um gado!')
					rate = body.slice(6)
					var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					var kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
//_MOSTRA O CASAL DO GRUPO 
case 'casal':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return fakegroup (mess.only.group)
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
case 'bagual':
thumb = fs.readFileSync("./eu.jpg");
client.sendMessage(from, thumb, image, {quoted : mek, viewOnce: true})
break
case 'papel': 
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/burn-paper?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break
case 'cup':              
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(4)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/funny-cup?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break
//_LISTAR USUÁRIO ONLINE
case 'online':
                    if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
                    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
                    client.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                        contextInfo: tomis,
                        contextInfo: {
                            mentionedJid: online
                        }
                    })
                    break
//_PASSAR IMAGEM PARA LINK 
case 'tourl':
                    if (!isPremium) return fakegroup (mess.only.premium)
				
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply('espere')
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imurl = `${anu.display_url}`
                        reply(imurl)
                    }
                    break
//_CHANCES MOSTRA PORCENTAGEM DO QUE ESPECIFICAR
case 'chance':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance da vaca nao dar leite amanha`, text, {contextInfo: tomis})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {contextInfo: tomis, contextInfo: {mentionedJid: [sender]}})
break
//_FOTOS SHITPOST
case 'shiti':
case 'shit':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
data = fs.readFileSync('./src/shitii.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
client.sendMessage(from, buffer, image, {caption: 'aqui está:)', contextInfo: tomis})
break
//_PLAQUINHAS
                  case 'pmake':
                  
				    if (!isPremium) return fakegroup (mess.only.premium)
				
                    if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return fakegroup ('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Ta na mão 😈'})
					break
                  case 'pmake2':
                  if (!isPremium) return fakegroup (mess.only.premium)
				
                    if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://ighteede.sirv.com/pack%20plaquinha%20%2B18%20BY%20sombrio/pack%20plaquinha%20%2B18%20BY%20sombrio/Screenshot_2021-04-10-22-59-23-1.png?text.0.text=${teks}&text.0.position.x=-36%25&text.0.position.y=-39%25&text.0.size=23&text.0.color=000000&text.0.opacity=54&text.0.font.family=Shadows%20Into%20Light`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Toma ai 😈💅 '})
					break
case 'anagrama':
 if (!isUser) return reply(yag.rg(p))
                      if (isBanned) return reply(yag.ban())
                      
						if(!isGroup) return reply('comando apenas para grupos')
					const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
					if(!isGroupAdmins) return reply('comando apenas para admins')
				 if(args.length == 0) return reply('use *anagrama ativar para ativar o jogo do anagrama\npara desativar user *anagrama desativar')
						if (args.join(' ') === 'ativar') {
							if(fs.existsSync(`./src/anagrama-${from}.json`)) {
							let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
							reply(`o jogo já foi iniciado neste grupo:
				palavra: ${dataAnagrama2.embaralhada}
				dica: ${dataAnagrama2.dica}
				`)} else {
					fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
					client.sendMessage(from, `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────
				`,MessageType.text)
				}
						} else if (args.join(' ') ==='desativar') {
						if(!fs.existsSync(`./src/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
				fs.unlinkSync(`./src/anagrama-${from}.json`)
				reply("desativado com sucesso")
						}
					break
                  case 'gostosas':
      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
      if (!isGroup) return fakegroup (mess.only.group)
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
     
       if (!isGroup) return reply(`[??] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLoc) return reply('Anti loc foi reativado')
						antiloc.push(from)
						fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc))
						reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antiloc.splice(from, 1)
						fs.writeFileSync('./database/antiloc.json', JSON.stringify(antiloc))
						reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     
break
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiCatalogo) return reply('Já está ativo!')
anticatalogo.push(from)
fs.writeFileSync('./database/json/anticatalogo.json', JSON.stringify(anticatalogo))
reply('aтινσυ cσм ѕυcєѕѕσ σ яєcυяѕσ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
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
reply('Ɗєѕαтινσυ cσм ѕυcєѕѕσ σ αηтι-cαтάℓσgσ ηєѕтє gяυρσ ✔️')
} else {
reply('1🇦​🇹​🇮​🇻​🇦​ 0🇩​🇪​🇸​🇦​🇹​🇮​🇻​🇦​')
}
break
case 'antidoc':
     
       if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						antidoc.push(from)
						fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc))
						reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						antidoc.splice(from, 1)
						fs.writeFileSync('./database/antidoc.json', JSON.stringify(antidoc))
						reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     
break
case 'infobot':
 temporlg = client.prepareMessageFromContent(from,{
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
}, {quoted:mek})
client.relayWAMessage(temporlg)
break
case 'docu':
 tope = fs.readFileSync('./assets/primeiro_teste.html')
client.sendMessage(from, tope, MessageType.document, {mimetype: 'text/html', quoted: ftoko ,contextInfo: tomis, filename: 'Tomioka.html'})
break
case 'anticontato':
 
     
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
					try {														 
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						anticontato.push(from)
						fs.writeFileSync('./database/anticontato.json', JSON.stringify(anticontato))
						reply('Ativou com sucesso o recurso de anti contato neste grupo✔️')
	 				} else if (Number(args[0]) === 0) {
						anticontato.splice(from, 1)
						fs.writeFileSync('./database/anticontato.json', JSON.stringify(anticontato))
						reply('Desativou com sucesso o recurso de anti contato neste grupo✔️')
 					} else {
						reply('1 para ativar, 0 para desativar')
 					}
 					} catch {
						reply('Deu erro, tente novamente :/')
 					}
     
break
case 'antispam':
           
                if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
                if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply('SELECIONE 1/0')
if (args[0] === "1") {
if (AntiVirtex) return reply('reativo sistema de anti trava(spam de txt)')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Sucesso em ligar antispam neste grupo_')
} else if (args[0] === "0") {
if (!AntiVirtex) return reply('ja esta ativo')
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('_Sucesso na ativaçao de antispam_')
} else {
reply('SELECIONE 1/0')
}
break

//_RANKS E %
case '%f':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
client.sendMessage(from, hasil, text, {contextInfo: tomis, contextInfo: {mentionedJid: [sender]}})
break
case '%b':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
random = `${Math.floor(Math.random() * 100)}`
hasil = `  ${body.slice(7)}\n\      ${random}% `
client.sendMessage(from, hasil, text, {contextInfo: tomis, contextInfo: {mentionedJid: [sender]}})
break
//_COMANDOS ABRIR FECHAR GRUPO
case 'abrir':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.updatePresence(from, Presence.composing)
if (!isGroup) return fakegroup (ptbr.group())
if (!isGroupAdmins) return fakegroup (ptbr.admin())
if (!isBotGroupAdmins) return fakegroup (ptbr.Badmin())
open = {
  text: `Grupo aberto por: @${sender.split("@")[0]}`,
  contextInfo: {
mentionedJid: [sender]
  }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false)
client.sendMessage(from, open, text, {
  contextInfo: tomis
})
break
case 'fechar':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'togif': 
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if ((isMedia && !client.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply("⏳Aguarde alguns instantes...⏳\n\nA seu gif será enviada em até 2 minutos\nCaso não envie, mande novamente ;)")
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, contextInfo: tomis, caption: '✅'})
fs.unlinkSync(mediaaa)
}
break  
//GIF
case 'cumgif':
try {
msgFilter.isFiltered(from)
if (!isNsfw) return fakegroup (ptbr.nsfw())
reply(ptbr.waitsfw()) 
axios.get('https://nekos.life/api/v2/img/cum').then(res => {
imageToBase64(res.data.url)
.then(
(ress) => {
var buf = Buffer.from(ress, 'base64')
a = webp2gifFile(buf)
mp4 = getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, contextInfo: tomis, caption: '✅'})
})
})
} catch (e) {
console.log(`Error :`, color(e,'red'))
reply('❌ocorreu um erro❌\n\nTente novamente. ')
}
				case 'tourl':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply('espere')
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("0c419be2e8bfc27eff00147b0c763418", owgi)
imurl = `${anu.display_url}`
reply(imurl)
}
break
case 'cep':
if (args.length < 1) return fakegroup ('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return fakegroup (hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
client.sendMessage(from, ccg, text, {quoted:mek})
break

/*case 'ddd':
if (args.length < 1) return fakegroup ('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return fakegroup (hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
client.sendMessage(from, ccg, text, {quoted:mek})
break*/
case 'convite':
if (args.length < 0) return fakegroup ('Digite o link do grupo ')
var codeInvite = body.slice(9).split('https://chat.whatsapp.com/')[1]
 if (!codeInvite) return fakegroup ('certifique-se de que o link está correto! ')                 
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {contextInfo: tomis})
var nomor = mek.participant
teks1 = `[CONVITE]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(9)}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('554498220867@s.whatsapp.net', options, text, {contextInfo: tomis})
reply("O seu convite foi enviado ao meu dono e esta em analise; Spam = block + ban.")
break
case 'ddd':
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return fakegroup ('BOT PRECISA DE ALGUM DDD DE UM NUMERO')
luc4rio1 = body.slice(5)
luc4rio2 = await fetchJson(`https://www.luc4rio-rest-api.tk/api/consultas/internacional?ddd=${luc4rio1}`, {method: 'get'})
if (luc4rio2.Erro) return fakegroup (luc4rio2.Erro)
luc4rio3 = 
` BEM VINDO AO MENU DE CONSULTA\n\n〘 INFORMAÇÕES 〙
⧴ 〘 CIDADES 〙 : ${luc4rio2.Cidades}
⧴ 〘 ESTADO 〙 : ${luc4rio2.Estado}
〘 ${luc4rio2.Mensagem} 〙\n\nNÃO E POSSÍVEL PUXA CONSULTA DE TELEFONE\n\nBY : TioTomioka`
client.sendMessage(from, luc4rio3, text, {contextInfo: tomis})
break			
case 'infome':
case 'eu':
try {
         var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
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
     「 🔥 PERFIL 🌈 」
🗒 Nome : ${pushname}
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
client.sendMessage(from, buffer, image, {caption: hisil,quoted: ftoko ,contextInfo: tomis, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
break
case 'traduzir': //@SUPRA â™¡
 if (args.length < 1) return fakegroup ('Insira o texto que vocÃª deseja traduzir')
 client.updatePresence(from, Presence.composing)
 tels = body.slice(10)
 try {
 anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/translate?text=${tels}&from=id&to=pt`, {
 method: 'get'
  })
 reply('traduzido')
 } catch {
 reply(mess.ferr)
 }
break
case 'simbolos':
				
				reply (',ツ,ッ,シ,ツ,囧,〠,㋡,㋞,ツ,༺༻,☬,Ӂ,༒,࿐,៚,༆,乡,⎝⎝⎠⎠,░,⫷⫸,෴,⚔,⚒')
				break
//_CASES PLAY MUSICA 
                 case 'play':   
                   
					if (args.length < 1) return fakegroup (`Exemplo : ${p}play Paypal`)	
					apykeybysayo = 'Skillerofc'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
					reply("espere....\nse nao enviou em ate 2 min é porque comando caiu\n\n nao floode o chat enquanto ele procura ") 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybysayo}&q=${body.slice(5)}`)
				if (anu.error) return fakegroup (anu.error)
				infomp3 = `𝐂𝐨𝐧??𝐚 ??𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐚\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
			    buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=TOMIOKA-BOT&capa=${anu.result.thumbnail}`)
				client.sendMessage(from, buffer, image, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
                msc = await getBuffer(anu.result.url_audio)				
				client.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `tomioka-bot.mp3`, contextInfo: null, quoted: ftoko ,contextInfo: tomis})
				break
case 'play1':
reply (mess.wait)
teks = body.slice(6)
musica = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
buffer1 = await getBuffer(musica.result.thumb)
buffer2 = await getBuffer(musica.result.dl_link)
teks =`𝚈𝚘??𝚝𝚞𝚋𝚎 𝙿𝚕𝚊𝚢 𝙼𝚞𝚜𝚒𝚌
𝚄𝚜𝚞𝚊́𝚛𝚒𝚘 @${sender.split("@")[0]}
𝚝𝚒𝚝𝚞𝚕𝚘 ${musica.result.title}`
client.sendMessage(from, buffer1, image, {contextInfo: tomis, caption: teks })
client.sendMessage(from, buffer2, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "꧁𝕋𝕆𝕄𝕀𝕆𝕂??~𝔹𝕆𝕋꧂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
                break
               case 'play2':
               
if (args.length < 1) return fakegroup ('Digite o nome da música')
                reply('Procurando sua musica..')
                anu = await fetchJson(`http://kratosdevofc-api.herokuapp.com/downloads/ytmp3&titulo=${teks}&apikey=tiotomioka`)
                if (anu.error) return fakegroup (anu.error)
         //       ingfomp3 = `*Musica encontrada*\n Titulo : ${anu.title}\nCanal: ${anu.channel}\nPublicado: ${anu.published}\nViews: ${anu.views}\n\n*Enviando audio🎶*`
         msg = ('Musica encontrada enviando...\nFonte:YouTube ')
                buffer = await getBuffer(anu.thumb)
                lagu = await getBuffer(anu.url)
                client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: msg})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', ptt:true})
                break
                case 'play3':
if (args.length < 1) return fakegroup ('Digite o nome da música')
play = body.slice(6)
reply('Procurando sua música...⏳')
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=tiotomioka&q=jatuh%20jadi%20resah`)
if (anu.message) return fakegroup ('Música não encontrada...\nTente específicar o nome dela.')
//aanu = await fetchJson(`https://api-client.italuh.repl.co/api/yta?url=${anu.result.source}`)
aanu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/playmp3?query=${play}&apikey=estreia`)
infomp3 = 
`    MÚSICA ENCONTRADA
‣ Título: ${anu.result.title}
‣ Fonte: ${anu.result.source}`
buffer = await getBuffer(anu.result.thumbnail)
//lagu = await getBuffer(anu.result.url_audio)
lagu = await getBuffer(aanu.url)
setTimeout( () => {
client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: infomp3})
}, 1500)
reply('Baixando e enviando sua música...')
client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', contextInfo: tomis})
break
case 'play4':
if (args.length < 1) return fakegroup ('Digite o link da música')
reply (mess.wait)
play = body.slice (6)
anu = await fetchJson(`https://enolaholmes.herokuapp.com/api/yutub/audio?url=${play}&apikey=Alphabot`)
//Info = 'Musica\ntitulo ${anu.result.title}\ntamanho ${anu.result.filesize}'
info2 = 'MUSICA ENCONTRADA!!!\nFonte:YouTube\nJa estou te enviando sua musica...'
buffer = await getBuffer(anu.result.thumb)
lagu = await getBuffer(anu.result.result)
client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: info2})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, contextInfo: tomis})
                
                break
case 'play5':
reply (mess.wait)
anu = await fetchJson('https://luc4rio.herokuapp.com/api/social/play/audio?video=${body.slice(6)}')
Info = '${anu.Mensagem}\nTitulo ${anu.Titulo_Encontrado} Duração ${anu.Duracao_Do_Video}Fonte ${Link_Do_Video}'
buffer = await getBuffer(anu.Imagem_Do_Video)
lagu = await getBuffer(anu.Link_De_Download)
client.sendMessage(from, buffer, image, {contextInfo: tomis,caption:info})
client.sendMessage(from, lagu, audio, {mimetype:'audio/mp4',filename: '${anu.Titulo_Encontrado}.mp3' , contextInfo: tomis})
break
case  'play6':
teks = body.slice(5)
krat4ss = await fetchJson (`https://api.zeks.xyz/api/ytplaymp4?apikey=apivinz&q=jatuh%20jadi%20resah`)
kratos = await getBuffer(krat4ss.resultado.audio)
reply('Enviando Aguarde')
client.sendMessage(from, kratos, audio, {contextInfo: tomis})
break
//playe tomiokaa
case 'playe':   
                    if (!isPremium) return fakegroup (mess.only.premium)
				
					if (args.length < 1) return fakegroup (`Exemplo : ${prefix}play Paypal`)	
					apykeybyTomioka = 'TioTomioka'  //CONSIGA SUA KEY NESSE SITE = https://api.zeks.xyz/api
					reply("espere....\nse nao enviou em ate 2 min é porque comando caiu\n\n nao floode o chat enquanto ele procura ") 				 
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=${apykeybyTomioka}&q=${body.slice(5)}`)
				if (anu.error) return fakegroup (anu.error)
				infomp3 = `𝐂𝐨𝐧𝐭𝐚 𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚????\n❗MUSÍCA ENCONTRADA\n[❗] enviando sua música aguarde..`				
			    buffer = await getBuffer(`https://api-exteam.herokuapp.com/api/card-spotify?titulo=${encodeURIComponent(anu.result.title)}&author=${encodeURIComponent(anu.result.source)}&album=TOMIOKA-BOT&capa=${anu.result.thumbnail}`)
				client.sendMessage(from, buffer, image, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": infomp3, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
                msc = await getBuffer(anu.result.url_audio)				
				client.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `tomioka-bot.mp3`, contextInfo: null, quoted: ftoko ,contextInfo: tomis})
				break
					case 'dado2':
					if (!isPremium) return fakegroup (mess.only.premium)
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./database/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {contextInfo: tomis})
break
case 'gerarnick': 
if (!isPremium) return fakegroup (mess.only.premium)
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
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
client.sendMessage(from, teks, text, {contextInfo: tomis})
break
case 'getpic':

if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)    
					if (args.length < 1) return 

					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakegroup ('Pronto chefe')

					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]

						try {

						pp = await client.getProfilePicture(mentioned)

						buffer = await getBuffer(pp)

						

//					client.sendMessage(from, buffer, image, {contextInfo: tomis, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

				 client.sendMessage(from, { name: ``,address: ``,jpegThumbnail: buffer }, MessageType.location)

					} catch (e) {

//					await client.sendMessage(from, buffer, image, {contextInfo: tomis, contextInfo: {"forwardingScore": 999, "isForwarded": true}})

					 client.sendMessage(from, { name: ``,address: ``,jpegThumbnail: buffer }, MessageType.location)

					}

				

break
case 'tts': 
                    		if (!isGroup) return fakegroup (`[❗] *Olá ${pushname} para poder usar os comandos do bot entre nesse grupo:*\n\n➻ *GRUPO 1* = ${grupo1}`)
				    if (args.length < 1) return client.sendMessage(from, 'O Código de idioma e obrigatório!!', text, {contextInfo: tomis})					 
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto?', text, {contextInfo: tomis})
					dtt = body.slice(8)
					const gtts = require('./lib/gtts')(args[0])
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('O texto e muito grande!!!')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
					fs.unlinkSync(ranm)
					buffer = fs.readFileSync(rano)
					if (err) return fakegroup ('ERROR')
					client.sendMessage(from, buffer, audio, {ptt:true, quoted:mek})
					fs.unlinkSync(rano)
					})
					})
					break
 //roubar fig linux
case 'roubar':        
case 'rename':
if (!isPremium) return fakegroup (mess.only.premium)

txt = args.join(' ')
pack = txt.split('/')[0]
autor = txt.split('/')[1]
fig_mencionada = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
fig_salvar = await client.downloadMediaMessage(fig_mencionada)
fs.writeFileSync('./tomioka.webp', fig_salvar)
const figenviar = await createSticker('./tomioka.webp', {type: 'full', pack: `${pack}`, author: `${autor}`, categories: ['🌹']})
client.sendMessage(from, figenviar, sticker)
break
/*case 'roubar':
case 'rename':
if (!isPremium) return fakegroup (mess.only.premium)
		    		if (!isQuotedSticker) return fakegroup ('Apenas figurinha mano')
		            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media = await client.downloadAndSaveMediaMessage(encmedia)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `YT`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `TioTomioka`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media, client, mek, from)
					break*/
case 'pucep':
if (!isPremium) return fakegroup (mess.only.premium)
 if (args.length < 1) return fakegroup ('Cad� O Cep')
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
client.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('kk/sticker/botlogo.webp')}}}})
break
case 'wikipedia':
     if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
	 teks = body.slice(11)
	send = await fetchJson(`https://api-exteam.herokuapp.com/api/info/wikipedia?search=${teks}&apikey=pip`)
	teks = ` ${send.result.result}`
	client.sendMessage(from, teks, text, {contextInfo: tomis})
	break
//github
case 'gitdobot':
case 'git':  
addFilter(from)    
if (isBanned) return reply(mess.only.benned)
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
client.sendMessage(from, texto, text, {contextInfo: null})
break
//_ATTPs	
case 'ttp': //BY SAYO

 if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)         
 if (!isPremium) return fakegroup (mess.only.premium)     
if (args.length < 1) return fakegroup (`cadê o texto mano?\nexemplo ${prefix + command} ${pushname}`)

const cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE

const fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA

 	       sayo = cor[Math.floor(Math.random() * (cor.length))]	 				 

 	       sayo2 = fonte[Math.floor(Math.random() * (fonte.length))]	 		

                    sayo = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${encodeUrl(body.slice(5))}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${sayo}&text.0.font.family=${sayo2}&text.0.background.color=ff0000`               

                    sendStickerFromUrl(from, sayo, {quoted: ftoko ,contextInfo: tomis})

                   

                    break

case 'attp':
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 0) return reply('Cadê o texto, hum?')
reply(mess.wait)
var txt = encodeURI(body.slice(6))
anu = await getBuffer(`https://api.xteam.xyz/attp?file&text=${txt}`)
client.sendMessage( from, anu, sticker, {quoted:mek, contextInfo:tomio})
break	
case 'attp1':	
if (!isPremium) return fakegroup (mess.only.premium)	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break	     
case 'attp2':	
if (!isPremium) return fakegroup (mess.only.premium)	
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break	
case 'attp3': 	
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break	
case 'attp4': 
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break	
case 'attp5':	
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break
case 'attp6':		
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}sttc kratos*`)
teks = body.slice(6)
url = encodeURI(`http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${teks}`)
send = await getBuffer(url)
client.sendMessage(from, send, sticker, {quoted: ftoko ,contextInfo: tomis})
break
case 'cc':
case 'caracoroa':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const cara = fs.readFileSync('./database/cara/cara.webp');
const coroa = fs.readFileSync('./database/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
reply(`você conseguiu: ${fej}`)
cararoa = fs.readFileSync('./database/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {contextInfo: tomis})
break
case 'sn':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const sn = ['sim', 'não']
gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Tomioka  é um baiano preguiçoso?`, text, {contextInfo: tomis})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
reply(hasil)
break
				case 'gadometro':
case 'gado':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil) 
break
case 'viadometro':
case 'viado':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
var chifre = ["ultra extreme viado", "viado-Master", "viado-Rei", "viado", "viado-ceta", "viado-ceta Maximo", "viadao???", "mestredos viados<3", "Mestre Do viados em pessoa<3<3", "viado-Manso", "viado-Conformado", "viado-Incubado", "viado Deus", "Mestre dos viados", "Topa tudo por buceta", "viado Comum", "Mini viadinho", "viado Iniciante", "viado Basico", "viado Intermediario", "viado Avançado", "viado Profisional", "viado Mestre", "viado Chifrudo", "viado Conformado", "viado HiperViadão", "viadão Deus", "Mestre dos viadões"]
var viado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${viado}`
reply(hisil) 
break

				case 'abraço':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroup) return fakegroup (mess.only.group)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
mentions(yhb, yhb, true)
break
				case 'contar':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (args.length == 0) return fakegroup ( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caractere.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break
				case 'membrocm':
				if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		client.sendMessage(from, membrocm(prefix, sender), text, {contextInfo: tomis})
                break
				case 'utils':
				if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		client.sendMessage(from, utils(prefix, sender), text, {contextInfo: tomis})
                break
case 'imunes':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		client.sendMessage(from, fs.readFileSync('./assets/imunes.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: imunes(prefix, sender), thumbnail: fs.readFileSync('./assets/imunes.jpg')})
                break
				case 'metodos':
				if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		client.sendMessage(from, metodos(prefix, sender), text, {contextInfo: tomis})
                break
			/*  case 'compras':
			if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
		client.sendMessage(from, compras(prefix, sender), text, {contextInfo: tomis})
                break*/
			  case 'pack18':
			
		         if (!isPremium) return fakegroup (mess.only.premium)
                 client.sendMessage(from, pack18(prefix, sender), text, {contextInfo: tomis})
                break
/*case 'semoji': //cry-bot
reply(mess.wait)
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
anu = await fetchJson(`https://api-gdr2.herokuapp.com/api/emoji2png?text=${emoji}`)
buffer = await getBuffer(anu.result)
client.sendMessage(from, buffer, image, { quoted: ftoko ,contextInfo: tomis })
break*/
case 'emoji':
if (!isPremium) return fakegroup (mess.only.premium)
            if (!q) return fakegroup('e o emoji?')
            qes = args.join(' ')
            emoji.get(`${qes}`).then(emoji => {
            const emojitext = `${emoji.images[4].url}`
            sendStickerFromUrl(from,`${emojitext}`) 
            console.log(emojitext)
            })
            break
case 'emoji2':
if (!isPremium) return fakegroup (mess.only.premium)
reply(mess.wait)
if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=6b25e69d0ba3dc9447010464`)
client.sendMessage(from, buffer, sticker, { quoted: ftoko ,contextInfo: tomis })
break
case 'gimage':
case 'googleimage':
case 'img':
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length < 1) return reply('O que você deseja procurar?')
console.log(color('[premium]', 'cyan'), color('[❗] PROCURANDO A IMAGEM NO GOOGLE...', 'magenta'))
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Erro encontrado ou resultado não encontrado_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: ftoko ,contextInfo: tomis, caption: `*Resultados da pesquisa de : * ${teks}`})
}
}
break
case 'button':
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    const menu = `*꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂*
   bem vindo *${pushname}*🎉
         👷🏻DONO👷🏻
   ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
   *wa.me/5544998220867*
   ✧═══•❁❀❁•═══✧
         𝗣𝗜𝗫: *${prefix}doar*
   ✧═══•❁❀❁•═══✧
   ⏰tempo do bot ativo: 
   *${temp}*
   ✧═══•❁❀❁•═══✧
   reportar bug: 
   *${prefix}bug (o bug)*
   ✧═══•❁❀❁•═══✧
   enviar sugestão:
   *${prefix}request (sua sugestão)*
   ✧═══•❁❀❁•═══✧
   para fazer figurinhas 
        *_${prefix}f_*
   ✧═══•❁❀❁•═══✧
   para buscar musica:
        *_${prefix}play_*
   ` 

        
        sendButLocation(from, `${menu}`, `Speed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 Tɪᴏ Tᴏᴍɪᴏᴋᴀ*_`, {jpegThumbnail:img}, [{buttonId: `${prefix}dono`, buttonText: {displayText: '👤 CRIADOR'}, type: 1},{buttonId:`${prefix}menu2`, buttonText: {displayText: '📝 MENUS'}, type: 1}])

        
break
/*case 'teste':
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    const menu = `*꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂*
   bem vindo *${pushname}*🎉
         👷🏻DONO👷🏻
   ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
   *wa.me/5544998220867*
   ✧═════•❁❀❁•═════✧
   𝗣𝗜𝗫: *${prefix}doar*
   ✧═════•❁❀❁•═════✧
   ⏰tempo do bot ativo: 
   *${temp}*
   ✧═════•❁❀❁•═════✧
   reportar bug: 
   ${prefix}bug (o bug)
   ✧═════•❁❀❁•═════✧
   enviar sugestão:
   ${prefix}request (sua sugestão)
   ✧═════•❁❀❁•═════✧
   para fazer figurinhas 
   ${prefix}f
   ✧═════•❁❀❁•═════✧
   para buscar musica:
   ${prefix}play` 
   gbutsan = [
    {buttonId: `👤 CRIADOR`, buttonText: {displayText: '👤 CRIADOR'}, type: 1},
    {buttonId: `${prefix}menu2`, buttonText: {displayText: '📝 MENUS'}, type: 1}
  ]
client.sendMessage(from, {
locationMessage: { 
jpegThumbnail: img,
},
contentText: `${menu}`,
footerText: `Speed    : ${latensii.toFixed(4)} Second\nRuntime : ${teks}\n\n_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 Tɪᴏ Tᴏᴍɪᴏᴋᴀ*_`,
buttons: gbutsan,
headerType: 6
}, MessageType.buttonsMessage)
               
  
					  addFilter(from)
          break*/
          case 'menu2':
addFilter(from)
const tomioks = `_ESCOLHA UM DOS MENUS ABAIXO_
` 
let temporalY= client.prepareMessageFromContent(from, {
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
                    "title": '🗣️MENU DE VOZ🗣️',
                    "rowId": `${prefix}mvoz`
                  },
                  {
                    "title": '🦋MENU DE INTERAÇÃO/GRUPO🦋',
                    "rowId": `${prefix}ranks`
                  }
                ]
              }
            ]                    
          }
}, {quoted:mek, contextInfo:tomio})
client.relayWAMessage(temporalY)
break
//_ MENU PRINCIPAL
case 'menu':
addFilter(from)
const tempo = speed();
const latencia = speed() - tempo
	run = process.uptime() 
    teks = `${kyun(run)}`
gambar = fs.readFileSync('./eu.jpg'),
mhan = await client.prepareMessage(from, gambar, image, {thumbnail: gambar})
gbuutsan = [
  {buttonId: `${prefix}dono`, buttonText: {displayText: '👤 CRIADOR'}, type: 1},
  {buttonId: `${prefix}menu2`, buttonText: {displayText: '📝 MENUS'}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: help(pushname, prefix),
    footerText: `Speed    : ${latencia.toFixed(4)} Second\nRuntime : ${teks}\n\n_*© 𝙲𝚁𝙴𝙰𝚃𝙴𝙳 𝙱𝚈 Tɪᴏ Tᴏᴍɪᴏᴋᴀ*_`,
    buttons: gbuutsan,
    headerType: 4
}
await client.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./eu.jpg'),
        caption: help(pushname, temp, prefix),
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: ftoko ,contextInfo: tomis})
           	break
/*case 'menu':
case 'comandos':
addFilter(from)
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
wew = fs.readFileSync('./assets/vidmenu.mp4')
const tomiokm= `❦ ══════ •⊰❂⊱• ══════ ❦
           *꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂*
❦ ══════ •⊰❂⊱• ══════ ❦
┃         
🧸bem vindo *${pushname}* ao menu do tomioka~bot🧸
┃  
┃          👷🏻DONO👷🏻
┃
➯👑 𝗗𝗢𝗡𝗢:ᬊ⃔⃕͜ 亇ł❍ 亇❍ᛖł❍Ҡ么↯愛
 ✧══════•❁❀❁•══════✧
➯👑 𝗭𝗔𝗣: wa.me/5544998220867
 ✧══════•❁❀❁•══════✧
➯👑 𝗣𝗜𝗫: (𝘁𝗲𝗹𝗲𝗳𝗼𝗻𝗲) 𝟰𝟰𝟵𝟵𝟴𝟮𝟮𝟬𝟴𝟲𝟳
❗se quizer doar por chave pix ${prefix}doar
 ✧══════•❁❀❁•══════✧
➯🔰  𝗦𝗧𝗔𝗧𝗨𝗦: 𝗢𝗡 𝙉𝙀 𝙑𝙄𝘿𝘼😏
 ✧══════•❁❀❁•══════✧
┃ ❥ canal do yt  ❧${prefix}canal
✧══════•❁❀❁•══════✧
⏰tempo do bot ativo: *${temp}*
✧══════•❁❀❁•══════✧
┋
┋❧${prefix}sugerir★ (comando que quer que ponhe)
┋Utilidade－sugere para o dono um novo comando 
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}bug★ (diga o bug que encontrou)
┋✔Utilidade－reporta algum bug 
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}infodono★ 
┋✔Utilidade－fala as redes sociais do dono😳
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}dono★ 
┋✔Utilidade－manda o contato do dono 
 ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}picpay★ 
┋✔Utilidade－pra quem quer um banco digital sendo de menor
 ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}novid★🎉
┋✔Utilidade－acessa o menu de novidades!
 ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

  *╔═══❖•ೋ° °ೋ•❖═══╗*            
                 🃏𝗙𝗜𝗚𝗨𝗥𝗜𝗡𝗛𝗔𝗦🃏
  *╚═══❖•ೋ° °ೋ•❖═══╝*

┋❧${prefix}f
┋✔Utilidade－faz figurinha só marcar a foto
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}toimg★ 
┋✔Utilidade－tranforma figurinha em foto dnv
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋❧${prefix}togif★ 
┋✔Utilidade－transforma figurinha animada pra gif devolta!
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

  *╔═══❖•ೋ° °ೋ•❖═══╗*            
       🔥𝗔𝗣𝗘𝗡𝗔𝗦 𝗘𝗠 𝗚𝗥𝗨𝗣𝗢𝗦🔥
  *╚═══❖•ೋ° °ೋ•❖═══╝*

┋❧${prefix}grupo★
┋✔Utilidade－mostra o menu para grupo
┋
┋❧${prefix}interativos★
┋✔Utilidade－abre o menu de interativos 
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

*╔═══❖•ೋ° °ೋ•❖═══╗*          
                  🗺️𝗜𝗠𝗔𝗚𝗘𝗡𝗦🗺️
*╚═══❖•ೋ° °ೋ•❖═══╝*

┋ ❧${prefix}imagens
┋✔Utilidade－acessa o menu de imagens e edits
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

   *╔═══❖•ೋ° °ೋ•❖═══╗*          
                 💎𝗦𝗼́ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠💎
   *╚═══❖•ೋ° °ೋ•❖═══╝*

┋ ❧💎${prefix}premium💎
┋✔Utilidade－acessa o menu premium
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋
┋ ❧💎${prefix}logopremium💎
┋✔Utilidade－acessa o menu de logos 
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
┋❗para ser premium:
┋➭${prefix}compras⚡
┋

   *╔═══❖•ೋ° °ೋ•❖═══╗*          
         🤖𝗘𝗦𝗣𝗘𝗖𝗜𝗙𝗜𝗖𝗢 𝗗𝗢 𝗕𝗢𝗧🤖
   *╚═══❖•ೋ° °ೋ•❖═══╝*

┋❧${prefix}especifico★
┋✔Utilidade－acessa o menu do bot (especifico)
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

   *╔═══❖•ೋ° °ೋ•❖═══╗*          
                 🎱𝗠𝗔𝗜𝗦 𝗔𝗟𝗚𝗨𝗡𝗦🎱
   *╚═══❖•ೋ° °ೋ•❖═══╝*

┋❧${prefix}outros★
┋✔Utilidade－abre o menu de outros do bot 
  ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆

   *╔═══❖•ೋ° °ೋ•❖═══╗*          
                  🗣️𝗠𝗘𝗡𝗨 𝗗𝗘 𝗩𝗢𝗭🗣️
   *╚═══❖•ೋ° °ೋ•❖═══╝*

┋❧${prefix}mvoz★
┋✔Utilidade－abre o menu de voz do bot 
   ◆ ▬▬▬▬▬ ❴✪❵ ▬▬▬▬▬ ◆
  
  *╔═══❖•ೋ° °ೋ•❖═══╗*                      
               🦋𝗿𝗮𝗻𝗸𝘀/𝗶𝗻𝘁𝗲𝗿𝗮𝗰̧𝗮̃𝗼🦋
  *╚═══❖•ೋ° °ೋ•❖═══╝*
┋❧${prefix}rankes★ou
┋❧${prefix}ranks★
┋✔Utilidade－abre o menu de ranks para interaçao
┋❗ somente em grupos ❗

❦ ══════ •⊰❂⊱• ══════ ❦
           *꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂*
❦ ══════ •⊰❂⊱• ══════ ❦
`
client.sendMessage(from, wew, MessageType.video, {mimetype: 'video/gif', contextInfo: null, quoted: ftoko ,contextInfo: tomis, caption: (tomiokm) })
break*/
case 'bolsonaro':
 var apikey = `akame`
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  img = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(`*⏳Em processo⏳*`)
	  midia = await client.downloadAndSaveMediaMessage(img)
	  msg = body.slice(7)
	  akame = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", midia)
	  resultado = await getBuffer(`https://akamer.herokuapp.com/api/canvas/bolsonaro?img=${akame.display_url}&apikey=${apikey}`)
	 client.sendMessage(from, resultado, image, {quoted:mek})
	} else {
	  reply('Marque alguma imagem')
	}
	break
case 'gp':
if (!isBotGroupAdmins) return reply(`O BOT PRECISA SER ADM`)
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
 temporall = client.prepareMessageFromContent(from,{
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
}, {quoted:mek})
client.relayWAMessage(temporall)
break
case 'resetar':
if (!isBotGroupAdmins) return reply(`O BOT PRECISA SER ADM`)
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
client.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await client.groupInviteCode(from)
reply('link resetado com sucesso!')
break
/*case 'jadibot':
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,client,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2123, 8]
    conn.browserDescription = [ 'jadibot', '', '3.0' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Escanea el codigo QR para convertirte en un bot\n*Reglas:*\nEl codigo vence cada 30 segundos asi que intenta ser rapido.'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	const topesd = `Nuevo bot detectado\n\n*Dispositivo*:\n\n ${JSON.stringify(conn.user,null,2)}`
    	reply(topesd)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    conn.on('chat-update', async (message) => {
        require('../tomioka.js')(conn, message)
    })
}

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply('Jadibot apagado')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}
break*/
case 'cry':
addFilter(from)
           data = await fetchJson('https://waifu.pics/api/sfw/cry')
           hasil = await getBuffer(data.url)
               client.sendMessage(from, hasil, MessageType.video, {contextInfo: tomis, mimetype: 'video/gif', thumbnail: null})
           break
				/*case 'menu':
				 if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                wew = fs.readFileSync('./assets/foto.png')
                client.sendMessage(from, wew, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: help(prefix) })
                break*/
case 'infodono':
addFilter(from)
                if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					   client.sendMessage(from, infodono(prefix) , text, {contextInfo: ftoko})
					   break
case 'testi':
const tp = `GGGGGFFFFGFFFDFGFGFGou`
					   client.sendMessage(from, tp, text, {quoted: fgif})
					   break
case 'picpay':
addFilter(from)
                 reply(`pra quem quer um banco e é de menor(minimo 16 anos) :\n\nhttp://www.picpay.com/convite?DYULZN`)  
                         break
case 'ajudantes':
addFilter(from)
				      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, ajudantes(prefix) , text, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "AJUDANTES 🥰", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					break
                case 'leveis':
                addFilter(from)
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins && !isOwner) return reply('so adm pd usar')
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)
                    if (Number(args[0]) === 1) {
                    if (isLevelingOn) return reply('❎O recurso LEVEIS já está ativado no grupo❎')
                        leveling.push(from)
                        fs.writeFileSync('./database/json/leveling.json', JSON.stringify(leveling))
                        reply('✅O recurso LEVEIS foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isLevelingOn) return reply('❎O recurso LEVEIS não está ativado no grupo❎')
                        leveling.splice(from)
                        fs.writeFileSync('./database/json/leveling.json', JSON.stringify(leveling))                 
                        reply('❌O recurso LEVEIS foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
                    }

                    break
           case 'addxp':
           addFilter(from)
                if (!isOwner) return reply('só o dono pode')
                    if (!isGroup) return reply('so grupo')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
addFilter(from)
                if (!isLevelingOn) return reply(`leveling tem que estar ativado!: ${prefix}leveling 1`)
                if (!isGroup) return reply('só grupo')
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply('bah')
                const requiredXp = 7 * Math.round(userLevel) * 13 * userLevel 
                resul = `┏━━❉ *NÍVEL* ❉━━\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : wa.me/${sender.split("@")[0]}\n┣⊱ *XP* :  ${userXp}/${requiredXp}\n┣⊱ *Seu nível* : ${userLevel}\n┣⊱ *Patente* : ${patt}\n┗━━━━━━━━━━━━`
                reply(resul)
				break 
				
//////////////
case 'outros':
addFilter(from)
					if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				    client.sendMessage(from, fs.readFileSync('./assets/outros.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: outros(prefix), thumbnail: fs.readFileSync('./assets/outros.jpg')})
					break
				case 'mvoz':
				addFilter(from)
				      if (!isUser) return fakegroup(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                client.sendMessage(from, fs.readFileSync('./assets/voz.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: menuvoz(prefix), thumbnail: fs.readFileSync('./assets/voz.jpg')})
                break
                    case 'logopremium':
                    addFilter(from)
				      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, fs.readFileSync('./assets/logo.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: logos(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
					   break
case 'novid':
addFilter(from)
if (!isUser) return fakegroup(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.sendMessage(from, fs.readFileSync('./assets/novid.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: novid(prefix), thumbnail: fs.readFileSync('./assets/novid.jpg')})
break
					case 'ranks':
					addFilter(from)
					  if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					client.sendMessage(from, fs.readFileSync('./assets/ranke.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: rank(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
					    break
                        case 'customfig':
                        addFilter(from)
                      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, custom(prefix) , text, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${waktoonyabro}\n𝐜??𝐦𝐚𝐧𝐝𝐨: ${command}`, 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})
					    break
                case 'interativos':
                addFilter(from)
                      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, fs.readFileSync('./assets/interact.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: interact(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
					    break
case 'imagens':
addFilter(from)
if (!isUser) return fakegroup(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
client.sendMessage(from, fs.readFileSync('./assets/image.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: imagens(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
break
                case 'especifico':
                addFilter(from)
                      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					     client.sendMessage(from, fs.readFileSync('./assets/interact.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: especifico(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
			            break
				case 'efeitos':
				addFilter(from)
				if (!isUser) return fakegroup(`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                client.sendMessage(from, fs.readFileSync('./assets/efeito.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: efeitoaudio(prefix), thumbnail: fs.readFileSync('./assets/efeito.jpg')})
break
                case 'premium':
                addFilter(from)
                      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, fs.readFileSync('./assets/premium.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: premiuns(prefix), thumbnail: fs.readFileSync('./assets/premium.jpg')})
				        break
                case 'grupo':
                addFilter(from)
                      if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					  client.sendMessage(from, fs.readFileSync('./assets/adm.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: grupo(prefix), thumbnail: fs.readFileSync('./assets/botlogo.webp')})
						break
/////////////////////
                         if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                         case 'mdono':
                         addFilter(from)
					  client.sendMessage(from, fs.readFileSync('./assets/dono.jpg'), MessageType.image, {quoted: ftoko ,contextInfo: tomis, caption: dono(prefix), thumbnail: fs.readFileSync('./me.jpg')})
					   break
                   case 'modapk':
                   addFilter(from)
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    client.sendMessage(from, modapk(prefix), text, { quoted: ftoko ,contextInfo: tomis, thumbnail: fs.readFileSync('./me.jpg') })
                    break
                   case 'gbin':
                   addFilter(from)
                    if (!isPremium) return fakegroup (mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
                   case 'gpessoa':
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
				
                    client.sendMessage(from, gpessoa(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
                   case 'destrava':
                   addFilter(from)
                    
                    client.sendMessage(from, destrava(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    client.sendMessage(from, destrava2(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    client.sendMessage(from, destrava3(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
                   
                   case 'chentai':
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
				
                    client.sendMessage(from, chentai(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
                   case 'gcpf':
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
				
                    client.sendMessage(from, gcpf(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
				case 'ytmp4':
				addFilter(from)
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (args.length < 1) return fakegroup ('Cadê o url, hum?')
					//if(!isUrl(args[0]) && !args[0].includes('youtu')) return fakegroup (mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {contextInfo: tomis, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, contextInfo: tomis})
					break
case 'gay2':
addFilter(from)
              if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
			     	                

                try {

				ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)

				} catch {

				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

				}          

				                random = `${Math.floor(Math.random() * 100)}`

boiola = random

if (boiola < 20) {bo = 'hmm... você é hetero 😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'}  else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né???'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}

teks = `Você é ${random}% Gay\n\n${bo}`

                gay = await getBuffer(`https://api-exteam.herokuapp.com/api/rainbow?img=${ppimg}`)

               client.sendMessage(from, gay, image, { contextInfo: tomis, caption: teks})

				break
	
					case 'antifake': 
					addFilter(from)
if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (!isGroup) return fakegroup (mess.only.group)
if (args.length < 1) return fakegroup ('ativar 1, desativar 0')
if (args[0] === '1') {
if (isAntiFake) return fakegroup ('「 ❗ 」anti números fakes ativado✔️')
antifake.push(from)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
return fakegroup ('「 ❗ 」anti números fakes ativado✔️')
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
if (!codeInvite) return fakegroup ('「 ❗ 」anti números fakes desativado✔️')
}}
break
case 'antifake1': 
					addFilter(from)
if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (!isGroup) return fakegroup (mess.only.group)
if (isAntiFake) return fakegroup ('「 ❗ 」anti números fakes ativado✔️')
antifake.push(from)
fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
return fakegroup ('「 ❗ 」anti números fakes ativado✔️')

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
if (!codeInvite) return fakegroup ('「 ❗ 」anti números fakes desativado✔️')}
break
					case 'antiracismo':
					addFilter(from)
					if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (args.length < 1) return fakegroup ('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return fakegroup ('O modo antiracismo já está ativo')
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Ativado com sucesso o modo antiracismo no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'modonsfw':
				addFilter(from)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (args.length < 1) return fakegroup ('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return fakegroup ('O modo nsfw já está ativo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativado com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para ativar, Off para desligar')
					}
					break
				case 'rtext':
				addFilter(from)
					if (args.length < 1) return fakegroup (mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return fakegroup ('O texto é longo, com até 10 caracteres')
					return fakegroup (mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: tels5})
					break
				case 'water':
				addFilter(from)
					if (args.length < 1) return fakegroup (mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return fakegroup ('O texto é muito longo, até 20 caracteres')
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {contextInfo: tomis})
					break
                 case 'nomegp':
                 addFilter(from)
		             if (args.length < 1) return fakegroup  ('o nome do grupo é: *${groupMetadata.subject}*')
		             break
					case 'xd':
addFilter(from)				
					if (args.length < 1) return fakegroup (mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					return fakegroup (mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Pesquisa : '+pinte+'*', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
//_Figurinhas customizadas
                          
                    case 'morto':
                           case 'morte':
                           addFilter(from)
                           if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/rip?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                                 
                    case 'hitler':
                    addFilter(from)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/hitler?img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break    
                    case 'covidglobal':
addFilter(from)  
if (isBanned) return reply('Você foi banido de utilizar os comandos, desculpe!')
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
reply(ini_txt)
break
case 'execut':
if (!isGroupAdmins) return reply('só Adm')
return eval(`${args.join(' ')}`)
break
case 'executt':
if (isBanned) return reply(mess.only.benned)
if (args.length < 1) return reply('cade o text' + `Wa Automate function/função da Wa Automate.\n\nEx: ${prefix}execut `)
if (!isGroupAdmins) return reply('só Adm')
try {
const waitEval = (cmd) => { return new Promise((resolve, reject) => { eval(cmd) }) }
(async () => { await waitEval(body.slice(8).replace('await ', '')) })()
} catch (error) {
reply(from, 'deu erro', text)
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
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
break
case 'execut2':
  if (!issupre) return 
return eval(`${args.join(' ')}`)
break 

if (!mek.key.fromMe) {
if (isGroup && !isBanned) {
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
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', contextInfo: tomis })
fs.unlinkSync(ran)
})
break
/*case 'reiniciar':
addFilter(from)  
if (!isOwner) return reply(mess.only.ownerB)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `YT`
require('./lib/fetcher.js').createExif(satu)
require('./lib/fetcher.js').modStick(media, client, mek, from)
rano = getRandom('.webp')
reply('*「 ❗ 」 Espere só um pouquinho migo, está reiniciando...*')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','Bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
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
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo`)
}
break  */           
case 'smeme': 
case 'stickmeme':
gh = body.slice(7)           
var top = gh.split('/')[0]
var bottom = gh.split('/')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9a7ea179fd1ce8bbe552fc1cb5ef122b", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
break
                case 'figulgbt':
                addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/rainbow?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return fakegroup (`DEU ERROR ??`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                contextInfo: tomis
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
                    
                     case 'figuc':
                     addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return fakegroup (`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                contextInfo: tomis
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                                   
case 'tapa':
addFilter(from)
                    if (!isGroup) return reply('só grupo 🤡')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pru = '.\n'
                    for (let _ of mentioned) {
                        pru += `@${_.split('@')[0]}\n`
                    }
                    const shino = fs.readFileSync('./assets/tapa.mp4')
                    client.sendMessage(from, shino, MessageType.video, {
                        mimetype: 'video/gif',
                        quoted: ftoko ,contextInfo: tomis,
                        caption: `Você acabou de dar um tapa na raba da😏 @${mentioned[0].split('@')[0]}`
                    })
                    break     
                                        case 'borra':
                                        addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-gdr2.herokuapp.com/api/pixelate?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return fakegroup (`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                contextInfo: tomis
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break              
                    case 'florest':            
                    addFilter(from)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/nature-3d?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '*prontinho*'})
					break
case 'bot2':
addFilter(from)
reply('http://wa.me/994400733887')
break
case 'lolkey':

       case 'cekapikey':
       addFilter(from)

              if (args.length < 1) return reply(`Modelo ${prefix}sua key`) 

              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)

              teks = `*SUA CHAVE API * \ n \ e➸ nome de usuário= ${anu.result.username}\n➸ Solicitar= ${anu.result.requests}\n➸ Hoje= ${anu.result.today}\n➸ tipo de conta= ${anu.result.account_type}\n➸ Expirado= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`

              client.sendMessage(from, teks, text, {quoted: ftoko ,contextInfo: tomis})

              break
                      case 'joke':
                      addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/jokeOverHead?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
                case 'animerosto':
                addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/facepalm?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break                                                 
                    case 'quadro':
                    addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/beautiful?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                case 'afetar':
                addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://lolhuman.herokuapp.com/api/creator1/affect?apikey=genbotkey&img=${teks}`)
                        abc = await getBuffer(anu8)
                        client.sendMessage(from, abc, image, {
                            contextInfo: tomis
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break  
                    case 'flower':    
                    addFilter(from)
                    if (!isPremium) return fakegroup (`Você não é um Membro Premium, entre em contato com o proprietário ou digite *${prefix}compras* para adquirir o acesso ` ,text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/flowertext?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break
case 'lighttxt':       
if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(9)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/glowtext?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break                                                                    
                    case 'procurado':
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/procurado?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return fakegroup (`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                contextInfo: tomis
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break
case 'ppt':
addFilter(from)
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
return fakegroup ('escolha o que quer jogar\n(-ppt pedra)\n(-ppt papel)\n(-ppt tesoura)')
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
reply(`TOMIOKA-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
addLevelingXp(sender, ppg)
if (tes == "Vitória do jogador") {
reply(pph)
}
break
//MUSICAS LIBERADAS PELO SAYO 
case 'sound':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
enol = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound.mp3`)
client.sendMessage(from, enol, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound1':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
satu = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound1.mp3`)
client.sendMessage(from, satu, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound2':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
dua = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound2.mp3`)
client.sendMessage(from, dua, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound3':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
tiga = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound3.mp3`)
client.sendMessage(from, tiga, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound4':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
empat = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound4.mp3`)
client.sendMessage(from, empat, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound5':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
lima = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound5.mp3`)
client.sendMessage(from, lima, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound6':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
enam = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound6.mp3`)
client.sendMessage(from, enam, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound7':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
tujuh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound7.mp3`)
client.sendMessage(from, tujuh, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound8':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
lapan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound8.mp3`)
client.sendMessage(from, lapan, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound9':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
bilan = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound9.mp3`)
client.sendMessage(from, bilan, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
case 'sound10':
addFilter(from)
reply('Enviando audio tenha paciência e não mande muitas mensagens, pois irá falhar')
puluh = await getBuffer(`https://dappa-result.herokuapp.com/untukbot/sound10.mp3`)
client.sendMessage(from, puluh, audio, { mimetype: 'audio/mp4', filename: `5544998220867.mp3`, contextInfo: tomis})

break
                case 'wasted':
                addFilter(from)
                    		if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro Mande o comando : ${prefix}rg`)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         return fakegroup (mess.wait)
                        owgi = await client.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("2dfc5ed7147aa334e0d8d4e644175256", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://api-exteam.herokuapp.com/api/wasted?img=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return fakegroup (`DEU ERROR 😞`)
                            nobg = fs.readFileSync(rano)
                            client.sendMessage(from, nobg, sticker, {
                                contextInfo: tomis
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break                  
                    case 'metadinha':
addFilter(from)
if (isBanned) return reply(mess.only.benned)
reply(mess.wait)
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=dappakntlll`) 
cowo = await getBuffer(anu.result.male)
client.sendMessage(from, cowo, image, {quoted: ftoko ,contextInfo: tomis})
cewe = await getBuffer(anu.result.female)
client.sendMessage(from, cewe, image, {quoted: ftoko ,contextInfo: tomis})
break
case 'gtav':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'zombie':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'firef':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/fireAnimation?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'vidroqb':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/brokemirror?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'arteft':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/artePhoto?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case '2arma':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/crossgun?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'armast':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/gunscircle?apikey=brizaloka&text=Bandido(a)&text2=da área&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {contextInfo: tomis})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'effect':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://leyscoders-api.herokuapp.com/api/imgmaker/firework?url=${imgtrg}&apikey=dappakntlll`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, video, {contextInfo: tomis, mimetype: 'video/mp4'})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break

case 'paisagem':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/mixGalaxy?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'acess':
if (!isOwner) return reply(mess.only.ownerB)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return client.sendMessage(from, `root@ALEATORY-BOT:~ ${err}`, text, { contextInfo: tomis })
if (stdout) {
client.sendMessage(from, stdout, text)
}
})
break
case 'cubof':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/cuboFoto1?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wallimg':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`http://brizas-api.herokuapp.com/photooxy/v2/phonewallpaper?apikey=brizaloka&img=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.resultado)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'qbcabeca':
case 'qbcabeça':  
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)                 
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/puzzle?url=${imgtrg}`)
if (anu1.error) return reply("Não consegui detectar nenhum rosto")
nobg = await getBuffer(anu1.result.url)
client.sendMessage(from, nobg, image, {
contextInfo: tomis
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
                    case 'arma':
case 'figuarma':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
lfy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lfy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/gun?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'sc':
case 'stcirculo':
if (isBanned) return reply('BANIDO DE UTILIZAR OS COMANDOS DO BOT')
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply(mess.wait)
owgi = await client.downloadAndSaveMediaMessage(ger)
fgh = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${fgh.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/circle?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis
})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
await limitAdd(sender)
break
case 'hitler':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/hitler?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'wanted':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
qkl = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qkl.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/wanted?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'calunia':
if (isBanned) return reply(mess.only.benned)
if (args.length == 2) return reply(`Use assim: ${prefix + command} 558167892920|sou gay|Já sabia\nPode usar qualquer coisa`)
k = `${body.slice(10)}`
txt1 = k.split("|")[0];
txt2 = k.split("|")[1];
txt3 = k.split("|")[2];
 client.sendMessage(from, `${txt3}`,text,{quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break
case 'triggered':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
dsr = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${dsr.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/triggered?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'rip':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
qhy = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${qhy.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/rip?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'trash':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
der = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${der.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/trash?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'preso':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
lder = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${lder.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/jail?img=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break
case 'figupet':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-gdr2.herokuapp.com/api/petpet?url=${imgtrg}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
case 'heroiimg':
addFilter(from)  
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
reply('Estou fazendo, espere')                     
owgi = await client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://dapuhy-api.herokuapp.com/api/canvas/crush?img=${imgtrg}&apikey=eZmRwQ7L04xF6d9`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(`DEU ERROR 😞`)
nobg = fs.readFileSync(rano)
client.sendMessage(from, nobg, sticker, {contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply('Você precisa marcar ou enviar uma imagem para isso')
}
break 
//@Tio Tomioka YT					
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    
					break
case 'wolf':  
                   if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                   F = body.slice(6)
                   return fakegroup (mess.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=TioTomioka&text1=rimurubotz&text2=${F}`)
                   client.sendMessage(from, anu, image, {caption: `Aqui está 😊`, contextInfo: tomis})
                   break    
				case 'ytsearch':

            if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
            return fakegroup (mess.wait)
			if (args.length < 1) return fakegroup ('Tolong masukan query!')

			const srch = args[0];

			try {

        	var aramas = await yts(srch);

   			} catch {

        	return await client.sendMessage(from, 'Error!', MessageType.text,)

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

    		await client.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./assets/foto.png'),contextInfo: tomis, caption: ytresult})

			
break
				case 'textblue':
					if (args.length < 1) return fakegroup (mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return fakegroup ('O texto é longo, até 9 caracteres')
					return fakegroup (mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {contextInfo: tomis})
					break
				case 'rize':
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/s1ecUj8`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					 	
					break 
				case 'mia':
				  	if (!isNsfw) return fakegroup (' *Ative o modo nsfw, para ativar use: .modonsfw on* ')
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'i love you, mia 🥺❤️', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					 	
					break 
					case 'qrcode':
					if (!isPremium) return fakegroup (mess.only.premium)
				
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {contextInfo: tomis})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {contextInfo: tomis})
					break
				case 'texteng':
					if (args.length < 1) return fakegroup (mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return fakegroup ('O texto é longo, até 9 caracteres')
					return fakegroup (mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {contextInfo: tomis})
					break
				
					case 'brainly':
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Questão:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					client.sendMessage(from, teks, text, {contextInfo: tomis, detectLinks: false})
                        console.log(res)
                    })
					
					break
				case 'premiumlist':
					teks = '╭────*「 *USUÁRIOS PREMIUM👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *TOMIOKA BOT* 」`
					client.sendMessage(from, teks.trim(), extendedText, {contextInfo: tomis, contextInfo: {"mentionedJid": premium}})
					break
             /*     case 'qrcode':
        			if (!isPremium) return fakegroup (mess.only.premium)
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {contextInfo: tomis})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {contextInfo: tomis})
					break*/
		    	case 'wa.me':
		        case 'wame':
		
		          if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*_TOMIOKABOT_*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis} )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nome Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
            /*   case 'pornhub':
			   return fakegroup (mess.wait)
              	    if (args.length < 1) return fakegroup ('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Título: ${bokep.title}\nAtor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuração: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	 
			     	break  */
			     case 'nekopoi':
			   return fakegroup (mess.wait)
              	    if (args.length < 1) return fakegroup ('Cadê o texto, mano?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Título: ${neko.title}\nDescrição: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	 
			     	break  
			     case 'xvideos':
              	    if (args.length < 1) return fakegroup ('Cadê o texto, mano?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	 
			     	break 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {contextInfo: tomis, ptt:true})
                break
				case 'hunti':
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return fakegroup (anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', contextInfo: tomis})
					break
                 case 'setdesc':
                     if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
			    	 if (!isGroup) return fakegroup (mess.only.group)
				     if (!isGroupAdmins) return fakegroup (mess.only.admin)
			   	     if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descrição alterada com sucesso', text, {contextInfo: tomis})
				     break 
                case 'speed':
                case 'ping':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    addFilter(from)  
if (isBanned) return reply(mess.only.benned)
const timestamp = speed();
const latensi = speed() - timestamp
client.updatePresence(from, Presence.composing) 
uptime = process.uptime()
client.sendMessage(from, 
`SPEED: *${latensi.toFixed(4)} _SEGUNDO_*
*O BOT ESTEVE ATIVO POR*
*${kyun(uptime)}*`, text, { quoted: ftoko ,contextInfo: tomis})
                    break
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return fakegroup (mess.only.premium)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
           case 'playmp3':
                return fakegroup (mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return fakegroup (anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIANDO POR FAVOR, NÃO SPAME O CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, contextInfo: tomis})
                 
                break 
            case 'smule':
					if (args.length < 1) return fakegroup ('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return fakegroup (mess.error.Iv)
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return fakegroup (anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {contextInfo: tomis, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, contextInfo: tomis, caption: 'Aqui mano'})
					 	
					break  
case 'donate': case 'doar':
console.log(color('[DOAR]', 'blue'), color(`DOAÇAO ATIVADA!`, 'pink'))
                    donate = `Incentive meu criador fazendo uma doação via pix:\n`
                    donate2 = `aa204cca-88cd-47c9-8727-1d335c55aa93`
                client.sendMessage(from, donate, text, {quoted: ftoko ,contextInfo: tomis})
                client.sendMessage(from, donate2, text, {quoted: ftoko ,contextInfo: tomis})
                break 
                case 'desbloquear':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isOwner) return fakegroup (mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`, text)
				    break
				    case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isOwner) return fakegroup (mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `ESTE COMANDO NÃO ESTÁ FUNCIONANDO, EM BREVE SERÁ CORRIGIDO ${body.slice(7)}@c.us`, text)
					break
                case 'image':
					if (args.length < 1) return fakegroup ('O que você quer procurar, mana?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					return fakegroup (mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
				case 'playstore':
					kuji = body.slice(7)
					return fakegroup (mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {contextInfo: tomis, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
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
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=${tels}`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: `*PINTEREST*\n\*Resultado da pesquisa* : *${tels}*`})
                    
					break
case 'anime':
                    
                    client.updatePresence(from, Presence.composing)
                    am = ["anime tumblr",
                        "wallpaper anime hd",
                        "anime aestethic",
                        "anime hd"
                    ]
                    nk = am[Math.floor(Math.random() * am.length)]
                    data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                        method: 'get'
                    })
                    reply(ptbr.wait())
                    n = JSON.parse(JSON.stringify(data));
                    nimek = n[Math.floor(Math.random() * n.length)];
                    pok = await getBuffer(nimek)
                    client.sendMessage(from, pok, image, {
                        contextInfo: tomis,
                        caption: `💮`
                    })
                    break
//_PESQUISA ESPECÍFICA DE FOTO 
case 'naruto':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=naruto`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: '*naruto uzumikin*'})
                    
					break
case 'sakura':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sakura`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: '*sakura*'})
                    
					break
case 'saske':
case 'sasuke':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sasuke`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: '*saske*'})
                    
					break
case 'hinata':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=hinata`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: '*hinata*'})
                    
					break
case 'tomioka':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=gyutomioka`, {method: 'get'})
					return fakegroup (mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { contextInfo: tomis, caption: '*tomioka*'})
                    
					break
                case 'cringe':
                 if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				 data = fs.readFileSync('./src/tomiokajokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Boo :V*')
				break
                case 'alerta':
                 if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break
                 case 'vanitas':
                 if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				 data = fs.readFileSync('./src/alerta1.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*vanitas :V*')
				break
case 'fogos':                   
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(6)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break			
case 'summer':      
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break
						case 'path':          
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(5)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/crismes?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break
         case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: `${teks}`})
			
			break
		case 'happymod':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: `${teks}`})
			
			break
				case 'nsfwboquete':

					return fakegroup (mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					
					break 
					case 'resetlink':
if (!isBotGroupAdmins) return reply(`O BOT PRECISA SER ADM`)
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
client.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgc = await client.groupInviteCode(from)
fakegroup('link resetado com sucesso! Grupo de links novo https://chat.whatsapp.com/'+linkgc)
break
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return fakegroup (mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
						fs.unlinkSync(rano)
					})
					 
					break 
case 'onich':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'banoit':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/banoit.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'batarde':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/batarde.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'bodia':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/bodia.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
tujuh = fs.readFileSync('./assets/a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {contextInfo: tomis, mimetype: 'audio/mp4', ptt:true})
break
case 'tomioka':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
result = fs.readFileSync(`./figurinhas/tomioka.webp`)
client.sendMessage(from, result, sticker, {contextInfo: null, quoted: ftoko ,contextInfo: tomis})
break
case 'status':

      case 'stats':
              groups = client.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
unread = await client.loadAllUnreadMessages();
timestampe = speed();
totallChat = await client.chats.all()
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
\`\`\`▢ Wa Versão: ${client.user.phone.wa_version}\`\`\`
\`\`\`▢ A versão: ${client.user.phone.os_version}\`\`\`
\`\`\`▢ Fabricante do dispositivo: ${client.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Modelo do dispositivo: ${client.user.phone.device_model}\`\`\`
\`\`\`▢ Número da construção do sistema operacional: ${client.user.phone.os_build_number}\`\`\``
reply(teks)

             break
				case 'hinata':

					return fakegroup (mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/0nxV5Sc`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					
					break
case 'covid19':
post = await fetchJson(`https://api-gdr2.herokuapp.com/api/covidbr`)
send = `𝐋𝐎𝐂𝐀𝐋: ${post.result.local}\n𝐃𝐀𝐃𝐎𝐒: ${post.result.dadosAtualizados}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐂𝐀𝐒𝐎𝐒: ${post.result.totalCasos}\n𝐍𝐎𝐕𝐎𝐒 𝐂𝐀𝐒𝐎𝐒: ${post.result.novosCasos}\n𝐓𝐎𝐓𝐀𝐋 𝐃𝐄 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.totalMortes}\n𝐍𝐎𝐕𝐀𝐒 𝐌𝐎𝐑𝐓𝐄𝐒: ${post.result.novasMortes}\n𝐑𝐄𝐂𝐔𝐏𝐄𝐑𝐀𝐃𝐎𝐒: ${post.result.recuperados}\n 
𝐕𝐀𝐂𝐈𝐍𝐀𝐃𝐎𝐒-1: ${post.result.vacinadosPrimeiraDose}\n𝐕𝐀𝐂??𝐍𝐀𝐃𝐎𝐒-2: ${post.result.vacinadosSegundaDose}\n𝐁𝐎𝐋????𝐈𝐍𝐒: ${post.result.boletinsContabilizados}`
client.sendMessage(from, send, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "𝐕𝐞𝐫𝐢𝐟𝐢𝐜𝐚𝐝𝐨 𝐩𝐨𝐫 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩\nEstatisticas Covid-19 Br", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./assets/botlogo.webp')} } }, caption: "<//>" })
break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return fakegroup (anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return fakegroup (ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
						fs.unlinkSync(rano)
					})
					
					break
case 'exe':
	              client.updatePresence(from, Presence.composing) 
	              if (!isOwner) return reply(mess.only.ownerB)
	               const cmd = body.slice(5)
	               exec(cmd, (err, stdout) => {
		           if(err) return client.sendMessage(from, "Comando errado", text, { quoted: ftoko ,contextInfo: tomis })
		           if (stdout) {
			       client.sendMessage(from, stdout, text, { quoted: ftoko ,contextInfo: tomis })
		           }
	           })
                  break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return fakegroup (anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return fakegroup (ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
						fs.unlinkSync(rano)
					})
					
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return fakegroup (anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return fakegroup (ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
						fs.unlinkSync(rano)
					})
					
					break
case 'traduzir1':
teks = args.join(" ")
post = await fetchJson(`https://dapuhy-api.herokuapp.com/api/others/translate?from=id&to=pt&text=${teks}&apikey=SOTyzhkStLBrlpT`).then(async (x) => {
send = `${x.result}`
reply(send)
})
break
case 'igdl':

case 'instagram':

try {

if (!q) return reply('cade o link?')

reply(mess.wait)

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

reply(String(e))

}

break
case 'divulgar':
					if (!isOwner) return fakegroup ('Quem é você?')
					if (args.length < 1) return fakegroup ('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐭𝐨𝐦𝐢𝐨𝐤𝐚 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐕𝐢𝐝𝐞𝐨 𝐧𝐨𝐯𝐨 𝐝𝐨 𝐭𝐨𝐦𝐢𝐨𝐤𝐚 ]\n\n${body.slice(11)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
				case 'bc':
if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
}
reply('Transmissão enviada com sucesso')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ TRANSMISSÃO DE AVISO ]\n\n${body.slice(4)}`)
}
reply('Transmissão enviada com sucesso')
}
break
case 'bcsticker':
case 'bcstik':
if (!isOwner) return fakegroup (mess.only.ownerB)
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bc, sticker, {quoted:mek})
						}
						reply('tm de fig enviada')
					}
					break
case 'bcaudio':
					if (!isOwner) return reply('```OWNER ONLY```')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko ,contextInfo: tomis,caption: `[ *TOMIOKA TRANSMISSÃO* ]\n\n${body.slice(9)}`})
						}
						reply('sucesso')
					}
					break
////transmissão
case 'banchat':
case 'pausar':
if (!isOwner) return 
if (args.length < 1) return reply('Para activar usa *si* y para desactivar *no*')
if ((args[0]) === 'si') {
if (isBanChat) return reply('Ya el bot esta ignorando este chat!')
chatban.push(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*Bot pausado en este grupo.*')
} else if ((args[0]) === 'no') {
chatban.splice(from)
fs.writeFileSync('./src/ban.json', JSON.stringify(chatban))
reply('*El Bot ya no esta pausado en este grupo.*')
} else {
reply(`Porfavor escriba bien el comando: ${prefix}banchat *si/no*`)
}
break
				case 'addfoto':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isOwner) return fakegroup ('Você quem é o dono? ')
					client.sendMessage(from, addfoto(prefix), text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
			  case 'next':
                if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                if (isGroup) return  reply( 'NÃO PODE ESTAR EM GRUPO!!!!')
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
                break		    
				case 'tedio':	
					reply('Não fique entediado eu estou aqui🥰')
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return fakegroup ('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break                       
				case 'testime':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					setTimeout( () => {
					client.sendMessage(from, 'O tempo acabou:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos para ir', text) // ur cods
					}, 0) // 1000 = 1s,
					break
                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return fakegroup ("*escolher:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("O tempo acabou")
				}, timer)
				break
				case 'delete':
				    if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakegroup ('marque a msg para apagar *seja um administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recebido, excluir mensagem :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Perintah di terima, hapus pesan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					brea
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return fakegroup ('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return fakegroup ('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
//DINHEIRO DO BOT

case 'dinhero':          

      case 'dinheiro':       

	     case 'meudinhero':
	  	  if (!isUser) return reply('usuario nao registrado')
      
				const uangkau = checkATMuser(sender)
				sayo = `*┏⊱ 「 🤑DINHEIRO🤑 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinhero* : ${uangkau}\n┗━━━━━━━━━━`
				reply(sayo)
break

			 	case 'dardinhero': 
		        	if (!isOwner) return reply('só dono')
				const recebidor = args[0].replace('@','')
                const quantidade = args[1]
                if (quantidade <= 1) return reply(`Precisa dar no minímo 1 dinheiro`)
                if (isNaN(quantidade)) return reply(`[❗] USE ASSIM\n ${prefix + command} @556181496039 5`)
                if (!recebidor) return reply(`[❗] USE ASSIM\n ${prefix + command} @556181496039 5`)
                const add = recebidor + '@s.whatsapp.net'
               addKoinUser(add, 0)                                        
               reply(`${quantidade} de dinhero foi adicionado na conta de @${recebidor}`)
                break
				case 'animekiss':
                 
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {contextInfo: tomis})
						fs.unlinkSync(rano)
					})
					 
					break 
				case 'setfoto':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    if (!isGroup) return fakegroup (mess.only.group)
                    if (!isGroupAdmins) return fakegroup (mess.only.admin)
                    if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterou com sucesso o ícone do Grupo')
                    break		
			    case 'tinyurl':
			    return fakegroup (mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			         
			        break 
				case 'slide':
					if (args.length < 1) return fakegroup ('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					return fakegroup (mess.wait)
					client.sendMessage(from, atytyd, video, {contextInfo: tomis})
					 
					break  
					case 'spotify':
if (args.length == 0) return 
reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=genbotkey&url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.thumbnail)
await client.sendMessage(from, thumbnail, image, {contextInfo: tomis, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, contextInfo: null, quoted: ftoko ,contextInfo: tomis})
break 
case 'spotifyy':
if (args.length == 0) return 
reply(`Exemplo: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
url = args[0]
get_result = await fetchJson(`https://api-gdr2.herokuapp.com/api/spotifyurl?url=${url}`)
get_result = get_result.result
ini_txt = `Titulo : ${get_result.title}\n`
ini_txt += `Duração : ${get_result.duration}\n`
thumbnail = await getBuffer(get_result.image)
await client.sendMessage(from, image, image, {contextInfo: tomis, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, contextInfo: null, quoted: ftoko ,contextInfo: tomis})
break
//_LOGOS 
      case 'greenhorror':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/greenhorror?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'sciencefiction':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/sciencefiction?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'transformer':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/transformer?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'berry':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/berry?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'magmahot':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/magmahot?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dstone':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dstone?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dneonlight':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dneonlight?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'impressiveglitch':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/impressiveglitch?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'harrypotter':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HarryPotter?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'embossed':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/embossed?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'brokenglass':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Brokenglass?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'artpaper':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/artpaper?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dglossy':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dglossy?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'neondevilwings':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/neondevilwings?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dunderwater':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dunderwater?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'bearmascot':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/bearmascot?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'wonderfulgraffiti':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/wonderfulgraffiti?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'futuristicneon':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/futuristicneon?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'snow':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/snow?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'cloud':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/cloud?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'luxurygold':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/luxurygold?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dgradient':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3Dgradient?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'realisticcloud':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/realisticcloud?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'sandsummer':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SandSummer?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'sandwriting':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SandWriting?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'sandengraved':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Sandengraved?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'summerysand':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/summerysand?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dglue':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3dglue?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'metaldarkgold':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/MetalDarkGold?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'neonlight':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/NeonLight?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '1917':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/1917Style?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'xmascards3d':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/XmasCards3D?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'blood':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Blood?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'halloweenfire':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HalloweenFire?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'lava':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Lava?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'steeltext':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/SteelText?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'captainamerica':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/CaptainAmerica?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'toxic':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Toxic?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'chocolate':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Chocolate?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'matrix':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Matrix?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'horrorblood':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/HorrorBlood?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'thunder2':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/Thunder2?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dbox':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3DBox?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'naturalleaves':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/natural-leaves?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'blackpink':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/black-pink?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'dropwater':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/drop-water?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'christmas':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/christmas?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case '3dgradient':  //by Ꮥꪖꪗꪮ </>
                   addFilter(from)
                   if (!isPremium) return fakegroup (mess.only.premium)
                			if (args.length == 0) return reply(`Exemplo: ${prefix + command} tomioka`)
                   texto = args.join(" ")
                   reply(`[❗] aguarde..`)
                   anu = await fetchJson(`https://tomioka-api.herokuapp.com/api/textpro/3d-gradient?apikey=sayoez&text=${texto}`)
                   buffer = await getBuffer(anu.resultado)
                   client.sendMessage(from, buffer, image, {caption: `prontinho ⚡`, quoted: ftoko ,contextInfo: tomis, contextInfo: null})
                   break
                   case 'tagg':
                  if (!isGroupAdmins) return reply('Você precisa ser adm')
                   const tag = `‼️𝑶𝑩𝑹𝑰𝑮𝑨𝑻𝑶́𝑹𝑰𝑶 𝑼𝑺𝑶 𝑫𝑨 𝑻𝑨𝑮‼️

𝛹
𝛹(nick)𝛹
♕(nick)♛
(Nick)🔱🔥
🔱🔥(Nick)

𝙏𝘼͢ 𝙄𝙈𝙋𝙀͢͢𝙍𝙄𝙐͢𝙈,𝙏𝘼 𝘾͢𝙊𝙈 𝘿𝙀͢𝙐𝙎🔱͢🔥`
reply(tag)
break
case 'halloween':
if (!isPremium) return fakegroup (mess.only.premium)
if (args.length == 0) return reply(`Use: ${prefix + command} text\nExemplo: ${prefix + command} Bot`)
txt = args.join(" ")
buffer = await getBuffer(`https://pencarikode.xyz/api/textpro/halloween?text=${txt}&apikey=pais`)
client.sendMessage(from, buffer, image, {caption: 'está ai', quoted: ftoko ,contextInfo: tomis, thumbnail:null})
break
case 'space':
if (!isPremium) return fakegroup (mess.only.premium)
                      team = body.slice(6)
                      teks1 = team.split("|")[0];
                      teks2 = team.split("|")[1];
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/space-3d?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: ftoko ,contextInfo: tomis})
                      break

case 'glitch2':
if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(8)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                case 'glitch':
                if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(7)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch2?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'demon':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(6)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=darling&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'toxic':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(6)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'transformer':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=team=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'graffiti':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(9)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'blackpink':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'thunder':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(8)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'thunderv2':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=team=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'harrypotter':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/harrypotter2?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'pornhub':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(8)
                      teks1 = teks.split("|")[0];
                      teks2 = teks.split("|")[1];
                      reply('[❗]ESPERE ...')
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/pornhub?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
                      buff = await getBuffer(team.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'neon3d':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(7)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon3d?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'horrorblood':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(12)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/horror-blood?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'neondevil':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon-devil?texto=${teks}&apikey=apiteam`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'dropwater':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'advancedglow':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(13)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/advanced-glow?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'wonderfulgraffiti':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(18)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/wonderful-graffiti?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'dropwater':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'captainamerica':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(15)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/captain-america?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                          case 'jokerlogo':
                          if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(10)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/jokerlogo?apikey=apiteam&texto=${teks}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'marvel':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      if (args.length < 1) return reply('Cadê o texto?')
                      teks = body.slice(7)
                      reply('[❗]ESPERE ...')
                      anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/marvel?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
                      buff = await getBuffer(anu.resultado)
                      client.sendMessage(from, buff, image, {quoted: ftoko ,contextInfo: tomis})
                      break
                      case 'lavatext':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      team = body.slice(9)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/lava-text?apikey=apiteam&texto1=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: ftoko ,contextInfo: tomis, thumbnail: hero})
                      break
                      case 'magma':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      team = body.slice(6)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/magma-text?apikey=apiteam&texto=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: ftoko ,contextInfo: tomis, thumbnail: hero})
                      break
                      case 'matrix':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      team = body.slice(7)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/matrix-text?texto=${team}&apikey=apiteam`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: ftoko ,contextInfo: tomis, thumbnail: hero})
                      break
                      case 'breakwall':
                      if (!isPremium) return fakegroup (mess.only.premium)
                      team = body.slice(10)
                      team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/break-wall?apikey=apiteam&texto=${team}`)
                      of = await getBuffer(team.resultado)
                      hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
                      client.sendMessage(from, of, image, {quoted: ftoko ,contextInfo: tomis, thumbnail: hero})
                      break
case 'tel':
teks = body.slice(4)
anu = await fetchJson(`http://ifind.chapada.com.br:7777/?token=20491c06-5675-4e06-b2ae-4e3fcda2abdd&tel=${teks}`)
ipl = `busca encomtrado🐊🚩

➸ *nome:* ${anu.nome}
➸ *cpf_cnpj*: ${anu.cpf_cnpj}
➸ *tipo*: ${anu.tipo}
➸ *operadora*: ${anu.operadora}`
reply(ipl)
break
case 'tel2':
if (args.length == 0) return
query = args.join(" ")
get_result = await fetchJson(`http://ifind.chapada.com.br:7777/?token=20491c06-5675-4e06-b2ae-4e3fcda2abdd&tel=${query}`)
for (var x of get_result) {
ini_mn1k += `Nome : ${x.NOME}\n`
ini_mn2k += `cpf_cpnj : ${x.CPF_CNPJ}\n`
}
reply(ini_mn1k)
reply(ini_mn2k)
break
case 'nulis': 
if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup ('comando é usado assim ${prefix}textmar texto')
					teks = body.slice(6)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '🌺prontinho mano🌺'})
					break
case 'textmar': 
if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup ('comando é usado assim ${prefix}textmar texto')
					teks = body.slice(8)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/underwater?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '🌺prontinho mano🌺'})
					break
					case 'bneon': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(6)
					if (teks.length > 15) return fakegroup ('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '🌺prontinho🌺'})
					break
					case 'naruto': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return fakegroup ('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/naruto?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '🌺prontinho🌺'})
					break
case '3dcube': 
if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup ('comando é usado assim ${prefix} matrix texto')
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/under-cube?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '🌺prontinho mano🌺'})
					break

					case 'cross': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(6)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/crosslogo?apikey=cAdmS2XqIbRSP3vYAdqHvYqAD6W&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '😊ta ai'})
					break
					case 'wolf': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text1=${teks}&text2=${teks}`)

					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '😊ta ai'})

					break


					case 'flame': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/flametext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '😊ta ai'})

					break
case 'ytsrc':     //case by: Bielzinho-Bot // nao remova os créditos
if (!isPremium) return fakegroup (mess.only.premium)
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
let preparedPayload = await client.prepareMessageFromContent(from, payload,{});
await client.relayWAMessage(preparedPayload, {waitForAck: true})
break
				case 'sky': 
				    if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)

					teks = body.slice(7)

					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')

					reply('*Estou fazendo, se der erro tente novamente ✓*')

					buffer = await getBuffer(`https://api.zeks.xyz/api/skytext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)

					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: '😊ta ai'})

					break
                    case 'litig': 
                    if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/lithgtext?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break
					case 'epep': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(6)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/epep?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break
					case 'text3d': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break
					case 'text3d': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(8)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break
					case 'text3dbox': 
					if (!isPremium) return fakegroup (mess.only.premium)
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(11)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=hAin9sRj99puPHGV5KU1tDEizr7&text=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'ta ai'})
					break

//INICIO DO JOGO DA VELHA ❌ ⭕ 🔲
case 'ttthelp':
		client.sendMessage(from, ttthelp(prefix) , text, {contextInfo: tomis, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Jogo da velha", 'jpegThumbnail': fs.readFileSync('./assets/botlogo.webp')}}}})					
                break
case 'ttt':				
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
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
reply(`O jogo começou!!!\nModo: ${tttset.tttdifficulty} use ${prefix}ttthelp caso não saiba jogar`, text, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Bom jogo`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 120000) 
}
break	
case 'tttme':
if (!isGroup) return fakegroup (ptbr.group())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break	
case 'tttrank':
if (!isGroup) return fakegroup (ptbr.group())
//if (tictactoe.length < 3) return fakegroup (`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
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
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {contextInfo: tomis})
}
break	
case 'coord' :
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
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
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
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
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO 𝐁𝐎𝐓 🎉🎉`, text)
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
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
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
case 'aviso':
					if (!isOwner) return fakegroup ('Quem é você?')
					if (args.length < 1) return fakegroup ('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ 𝐀𝐯𝐢𝐬𝐨 𝐓𝐎𝐌??𝐎𝐊𝐀 𝐁𝐎𝐓 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐀𝐯𝐢𝐬𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 𝐁𝐎𝐓 ]\n\n${body.slice(7)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
case 'tm':
					if (!isOwner) return fakegroup ('Quem é você?')
					if (args.length < 1) return fakegroup ('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						
						for (let _ of anu) {
							client.sendMessage(_.jid, image, {caption: `[ 𝐓𝐫𝐚𝐧𝐬𝐦𝐢𝐬𝐬𝐚̃𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ 𝐓𝐫𝐚𝐬𝐦𝐢𝐬𝐚̃𝐨 𝐓𝐎𝐌𝐈𝐎𝐊𝐀 ]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
				case 'usuarios':
				client.sendMessage(from,`total de usuários registrados no TOMIOKA BOT 🥰: ${user.length}`, text)
				break
				case 'cgame':

					return fakegroup (mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', contextInfo: tomis})
					 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					return fakegroup (mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', contextInfo: tomis})
					 
					break 
				case 'cstyle':

					return fakegroup (mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', contextInfo: tomis})
					 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					return fakegroup (mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', contextInfo: tomis})
					 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return fakegroup ('Cadê o texto, mano??')
                     if (args.length > 10) return fakegroup ('pelo menos 10 caracteres')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {contextInfo: tomis})
                   
                  break 
				case 'setnomebot':
					if (args.length < 1) return
					if (!isOwner) return fakegroup (mess.only.ownerB)
					name = body.slice(12)
					reply(`O nome do bot foi alterado com sucesso para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return fakegroup ('Cadê o texto, mano??')
                     if (args.length > 10) return fakegroup ('pelo menos 10 caracteres')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {contextInfo: tomis})
					 
					 break
case 'smeme': case 'stickmeme':
if (!isUser) return reply(yag.rg(p))
           if (isBanned) return reply(yag.ban())
top = arg.split('|')[0] 
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  client.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Use fotos/adesivos!')
}
break
case 'travargp':
if (!isOwner) return reply('só dono')
let tmporalc = client.prepareMessageFromContent(from,{
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
}, {quoted:mek, contextInfo:tomio})
client.relayWAMessage(tmporalc)
break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque o video pfv')
				    reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', contextInfo: tomis})
						fs.unlinkSync(ran)
					})
				break
case 'rptag':
 if (!isGroup) return fakegroup (mess.only.group)
 if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Marque a pessoa [@]")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return fakegroup ('Masukan username mu!!')
					ige = body.slice(9)
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ TOMIOKA :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: capt})
					break
                   case 'map':
                   if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {contextInfo: tomis, caption: `Resultados de *${body.slice(5)}*`})
                   
                   break
					case 'users':
					if (!isOwner) return fakegroup (mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS TOMIOKA BOT 👑* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *TOMIOKA* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {contextInfo: tomis, contextInfo: {"mentionedJid": user}})
					break
                case 'limparchat':
					case 'clearall':
					case 'limpar':
					case 'limpa':
									if (!isOwner) return fakegroup ('só o cria pode')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(`[❗] CHATS LIMPO`)
				
break
case 'tempban':
                  if (!isOwner) return fakegroup ('só o cria pode')
				if (args[1]=="segundos") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return enviar("*selecionar:*\nsegundos\nminuto\nhora")}
				if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.sayo> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
	exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
reply(`[❗] tempo de ban : ${args[0]} ${args[1]}`)
		setTimeout( () => {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupAdd(from, [exe1])			
				}, timer)
		
break
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return fakegroup (`Envie fotos com legendas ${prefix}setbotpp ou tags de imagem que já foram enviadas`)
					if (!isOwner) return fakegroup (mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil😗')
					break
case 'happymod': 
				///_Thiago02_
				if (isBanned) return fakegroup ('voce nao é digno de usar esse comando')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=rm4zfzxZwjqaiEL4mu6x`)
				hupo = data.result[0] 
				teks = `*Nome*: ${data.result[0].title}\n*versao*: ${hupo.version}\n*tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*valor*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
				buffer = await getBuffer(hupo.image)
				client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: `${teks}`})
				
				break
				case 'setnome':
				   if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                   if (!isGroup) return fakegroup (mess.only.group)
			       if (!isGroupAdmins) return fakegroup (mess.only.admin)
			   	   if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Sucesso, alterou o nome do grupo', text, {contextInfo: tomis})
                   break
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return fakegroup (mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
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
					client.sendMessage(from, buf, image, {contextInfo: tomis, caption: teks})
					break
case 'block':

if (!isOwner) return fakegroup ("Apenas em grupo.")
client.blockUser (`${body.slice(9)}@c.us`, "add")
client.sendMessage(from, `BLOQUEADO`, text)
break
                    case 'unblock':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isOwner) return fakegroup (mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Pedido recebido, desbloquear ${body.slice(9)}@c.us`, text)
				    break
				case 'bloqueados':
				     if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					 if (!isPremium) return fakegroup (mess.only.premium)
                     teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {contextInfo: tomis, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ler':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						return fakegroup (mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					break
case 'amongus':
if (!isGroup) return reply('só gp')
                    if (!isGroupAdmins) return fakegroup (ind.admin())
					if (!isBotGroupAdmins) return fakegroup (ind.badmin())
                    
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
                        //client.groupRemove(from, mentioned)
                    mentions(`${sus}`, mentioned, true)
                    break
case 'st':
                
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)                                     
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
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
client.sendMessage(from, buffer1, sticker, {quoted: ftoko ,contextInfo: tomis})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('❬❗❭ Espera mano')
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
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
client.sendMessage(from, buffer2, sticker, {quoted: ftoko ,contextInfo: tomis})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
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
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(mess.wait)
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply('erro')
                            })
                            .on('end', function() {
                                
                                exec(`webpmux -set exif ${addMetadata('TIOTOMIOKA', '(44) 98220867')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply('erro')
                                    client.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        contextInfo: null, quoted: ftoko ,contextInfo: tomis
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(mess.wait)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                
                            })
                            .on('error', function(err) {
                                
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply('erro')
                            })
                            .on('end', function() {
                               
                                
                                exec(`webpmux -set exif ${addMetadata('TIOTOMIOKA', '(44) 98220867')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply('erro')
                                    client.sendMessage(from, fs.readFileSync(ran), sticker, {contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Primeiro vc precisa enviar a imagem, video ou gif de até 9 segundos, ai vc comenta com ${prefix}f`)
                    }
                    break
					case 'dado':    
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
case 'clearvp':
if (!isGroup) return fakegroup (mess.only.group)
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
if (!isGroup) return fakegroup (mess.only.group)
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
if (!isGroup) return fakegroup (mess.only.group)
if (!isOwner) return fakegroup ('*Este comando só pode ser usado pelo o dono!* ')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
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
					client.sendMessage(from, daftarvip(prefix) , text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
					case 'nekopoi':   
					
					client.sendMessage(from, nekopoi(prefix) , text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					break
					case 'cekvip': 
					if (!isPremium) return fakegroup (mess.only.premium)
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*NOME DO BOT:* ꧁𝕋𝕆𝕄𝕀𝕆𝕂𝔸~𝔹𝕆𝕋꧂\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*•NÚMERO:* *${sender.split("@s.whatsapp.net")[0]}*\n*•STATUS:* *ATIVO*\n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*\n*STATUS BOT:* *${kyun(uptime)}*\n\n*VOCE É UM MEMBRO PREMIUM😍* \n*▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃*` , text, { contextInfo: tomis, })
					break
				case 'bomdia':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/7VL9cFf.jpg`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Bom dia, vcs sao fodas ❤️'})
					break
				case 'boatarde':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/JaO3yoV.jpg`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Boa tarde, rapeize 😎👍'})
					break
case 'hearth':      
					if (args.length < 1) return fakegroup (mess.blank)
					teks = body.slice(7)
					if (teks.length > 10) return fakegroup ('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/wood-hearth?teks=${teks}`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, thumbnail: null, caption: 'tai'})
					break
				case 'boanoite':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/yOFxSUR.jpg`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'Boa noite fml ❤️'})
					break
				case 'lofi':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: '️💆'})
					break
				case 'malkova':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: '️💆'})
					break
				case 'canal':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					buffer = await getBuffer(`https://rbacelia.sirv.com/IMG-20210624-WA0373.jpg`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption:'*canal do Tomioka:*\n\n https://youtube.com/channel/UC8DcGKSSBm7kv2lXsjAmmMQ', contextInfo: tomis} )
					break
//_COMANDOS NSFW
				case 'loli':
if (isBanned) return reply(mess.only.benned)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/neko')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: ftoko ,contextInfo: tomis,contextInfo: null, caption: 'rum'})
break
case 'loli2':
if (isBanned) return reply(mess.only.benned)
reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/fox_girl')
loliz = await getBuffer(anu.data.url)
client.sendMessage(from, loliz, image, {quoted: ftoko ,contextInfo: tomis,contextInfo: null, caption: 'rum'})
break
                    case 'neko':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				    
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/eroneko?apikey=brizaloka`)
					client.sendMessage(from, buffer, image, {quoted: ftoko ,contextInfo: tomis, contextInfo: null, caption: 'Rum️'})
					break
                    case 'hentai':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    
					buffer = await getBuffer(`http://brizas-api.herokuapp.com/random/hentai/classic?apikey=brizaloka`)
					client.sendMessage(from, buffer, image, {quoted: ftoko ,contextInfo: tomis, contextInfo: null, caption: 'rum'})
					break
				case 'boanoite':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'boa noite ❤️'})
					break
				case 'bomdia':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
					client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: 'bom dia ❤️'})
					break
		    	case 'grupoinfo':
		            if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return fakegroup (mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {contextInfo: tomis, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${groupDesc}`})
                    break
				case 'meme':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					return fakegroup (mess.wait)
					anu = await fetchJson(`https://imgur.com/gallery/rvz2dPi`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', contextInfo: null, quoted: ftoko ,contextInfo: tomis})
					 	
					break
				case 'rr':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou,ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    client.sendMessage(from, ''+ cu+'', text, { contextInfo: null, quoted: ftoko ,contextInfo: tomis})
                    break
case 'bug':
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
const bug = body.slice(5)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {contextInfo: tomis})
var nomor = mek.participant
teks1 = `[REPORT]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('554498220867@s.whatsapp.net', options, text, {contextInfo: tomis})
reply("Mensagem enviada ao meu dono; Spam = block + ban.")
break
case 'request':
                if (isBanned) return fakegroup ('Desculpe, você foi pego!')
                if (args.length < 1) return fakegroup (`O que você deseja solicitar? Exemplo: ${prefix}request fitur anime`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return client.sendMessage(from, text , 'Desculpe, o texto é muito longo, máximo de 300 textos')
                       const ress = `*[REQUEST]*\nNúmero : @${tonor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [tonor]},
                     }
                    client.sendMessage('554498220867@s.whatsapp.net', options, text, {contextInfo: tomis})
                    reply('SUA SOLICITAÇÃO ATINGEU O proprietário do BOT, Solicitações pals /main2 não serão respondidas. ')
                    break
				case 'dono':
				  (function(_0x249afd,_0x251517){function _0x5e1e91(_0x4a42c2,_0x2ed74d,_0x2d4339,_0x2a37f4,_0x2d97b3){return _0x1a25(_0x2d4339-0x1c,_0x2a37f4);}function _0xc9df7e(_0x52efc0,_0x215e4f,_0x274576,_0x4169bc,_0x5ca356){return _0x1a25(_0x215e4f- -0x358,_0x52efc0);}function _0x183f40(_0x445663,_0x247eb2,_0x340209,_0x594da6,_0x46a87e){return _0x1a25(_0x46a87e- -0x102,_0x340209);}function _0x4bcc62(_0x1a83ae,_0x2439d3,_0x28be2f,_0x49d789,_0x4d5ee7){return _0x1a25(_0x1a83ae- -0x39,_0x4d5ee7);}var _0x368b7a=_0x249afd();function _0x5cdf2f(_0xe53fdb,_0x2442d0,_0x4bc388,_0x2d0b88,_0x30d040){return _0x1a25(_0x4bc388- -0x1d4,_0xe53fdb);}while(!![]){try{var _0x35417b=-parseInt(_0x5e1e91(0x154,0x154,0x15b,'O$7n',0x158))/(0x16f*0x3+0x105+-0x1*0x551)*(parseInt(_0x4bcc62(0x102,0xed,0xed,0x105,'wTke'))/(0xe3b+-0x962+-0xb1*0x7))+-parseInt(_0x5e1e91(0x15e,0x144,0x14b,'RcRw',0x15a))/(-0x23ce+-0x25ab+0x497c*0x1)+-parseInt(_0x5e1e91(0x154,0x14a,0x154,'fDTz',0x144))/(-0x1d31+0x260e+-0x8d9)+parseInt(_0x5e1e91(0x183,0x176,0x16d,'9Aqq',0x165))/(0xb5*-0x35+0x1*-0xb12+0x6f0*0x7)*(parseInt(_0x5cdf2f('6*SP',-0x98,-0x8f,-0xa0,-0x97))/(-0x45*-0x67+-0x1b0c*-0x1+0x113*-0x33))+-parseInt(_0x4bcc62(0x10f,0x112,0x11e,0x119,'Le91'))/(-0x1a13+0x5*-0x371+-0x1*-0x2b4f)*(-parseInt(_0x183f40(0x1d,0x1a,'VfJn',0x29,0x2a))/(0x806+-0x1fe+-0x600))+-parseInt(_0x5e1e91(0x158,0x13c,0x149,'PI52',0x156))/(0xab7*0x1+-0x62b+-0x4d*0xf)+parseInt(_0x5cdf2f('@iQ9',-0x94,-0x85,-0x6e,-0x6f))/(-0x26f7+-0x1aa2+0x1*0x41a3);if(_0x35417b===_0x251517)break;else _0x368b7a['push'](_0x368b7a['shift']());}catch(_0x361104){_0x368b7a['push'](_0x368b7a['shift']());}}}(_0x4e6e,0x8625+0x60522+0x6e2d*-0x3));var _0x2c3804={};_0x2c3804[_0x1a766d(0x352,0x356,0x354,0x364,'VfJn')+_0x23764a(0x35a,'TD&v',0x35a,0x36a,0x360)+'e']=_0x23764a(0x359,'nIgW',0x377,0x379,0x368)+'KA',_0x2c3804[_0x5a231b('nIgW',-0x1e5,-0x1e2,-0x1f3,-0x208)]=vcard;function _0x4e6e(){var _0x3cd2fc=['W6aDW5ldUa','pmkPm8kTW4G','j8krcmk/WQ3cPSkmWRVcSbijmdK','WO5ozwn+','oCk2Bv7cSW','W53dMXNcMHfEWRFdTKi','uCozBMKj','W6JcRmkoWPxcRG','W7jOWOtcOCko','W5JcRmoMW5JdHWhcP0D5kG','WP/cPe90W6K','yCktW4jSb8ozW7JdRe7dT8oEWRpcQG','WQRcK0VdLZG','xSoDwf3dPa','j8kcWRNdNCkwWRWjhCkCgW','WOddGmkHurNdHSo9ax4lyCk7Dq','WPpcQNeTW54','W58GW7xdM2i','Fu4tWOb2WOXgAq8eW7a','WPpcUgO4W48','W7ZdPNOLDbaLaCkMWO7dJSkFdG','W6Sxnmokua','WOBcGKldOwW','q8otWQxdICo2','vCoSfCoUW6T7W67cJmooWOFcVG','gmkcWRtcLmkQW6/dGsldI8kiACo0WRHr','W6WrkCooxq','WRzrW75shNfoBG','F8ootmoPW74','W458jmkMW78','W61ypSoreq','W7NdQWzjiNn3aq','oSkdWPldPMG','W6LLW5ldSmkU','WOTdwZOM','WRLaA8kisCoyW73cM8oHW5y','W4BdUq1SWRZcRZWohJvfq8oZ','jmk5WO8MW45et8opWPddLCkyu8kwzW','BSorW5tcT3LWnSkPnX1GW6Lc','W4pdTaLGWRZcQJKUbZHZuSoh','W73cJSoxWRZcPG','WPa3bmkQC8oOAeeB','W70mW5NdOeK','WRzwWOq+tXaACepdM8oOdCkh','gmkkWRtcM8oRWRVcSgtdPCkF'];_0x4e6e=function(){return _0x3cd2fc;};return _0x4e6e();}function _0x1be2e6(_0x53eb0c,_0xb56273,_0x2be0c6,_0x3cbd46,_0x1d37bc){return _0x1a25(_0x1d37bc- -0x32,_0xb56273);}function _0x23764a(_0x5510d0,_0x31b233,_0x24278a,_0x23a441,_0x496c7b){return _0x1a25(_0x496c7b-0x235,_0x31b233);}var _0x55ed89={};function _0x5a231b(_0x5b645f,_0x49f084,_0x17eaa6,_0x17bf78,_0xb7286a){return _0x1a25(_0x17bf78- -0x33a,_0x5b645f);}function _0x1a766d(_0x1c8ff1,_0xdf4f40,_0x15926a,_0x31926a,_0x64e440){return _0x1a25(_0x31926a-0x214,_0x64e440);}function _0x1a25(_0x4d4875,_0x2805dd){var _0x22a4d4=_0x4e6e();return _0x1a25=function(_0x15f69f,_0x380f65){_0x15f69f=_0x15f69f-(-0x6e1*0x1+0x1*0x22c5+-0x1abd);var _0x3c4508=_0x22a4d4[_0x15f69f];if(_0x1a25['xPqZYy']===undefined){var _0x28b0e6=function(_0x2d9e7b){var _0x177857='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x22ecfa='',_0x38df67='';for(var _0x1e76dc=-0x2fc+0xf62+-0x2e*0x45,_0xe9fc5e,_0x497d13,_0x74023f=-0x1ae1+0x1d04*-0x1+0x37e5;_0x497d13=_0x2d9e7b['charAt'](_0x74023f++);~_0x497d13&&(_0xe9fc5e=_0x1e76dc%(0x62+-0x162f+0x1*0x15d1)?_0xe9fc5e*(0xbd4+-0x181d+0xc89)+_0x497d13:_0x497d13,_0x1e76dc++%(-0x247f*0x1+0x197*0x6+0x565*0x5))?_0x22ecfa+=String['fromCharCode'](-0x23e+0x32d*0xa+0x1c85*-0x1&_0xe9fc5e>>(-(0x1d02+-0x76+0x232*-0xd)*_0x1e76dc&0x2c8*0xa+-0x1bd6+-0xc*-0x1)):0xa*-0x1a1+-0x1c*0xa9+0x22c6*0x1){_0x497d13=_0x177857['indexOf'](_0x497d13);}for(var _0x58fe1f=-0x407*-0x6+-0x3*0x28a+-0x108c,_0x1e8199=_0x22ecfa['length'];_0x58fe1f<_0x1e8199;_0x58fe1f++){_0x38df67+='%'+('00'+_0x22ecfa['charCodeAt'](_0x58fe1f)['toString'](0x1*0xe5+-0x6e2+0x60d*0x1))['slice'](-(-0x1283*0x1+-0x1*-0x634+0x41b*0x3));}return decodeURIComponent(_0x38df67);};var _0x34e71c=function(_0x109a33,_0x1f4430){var _0x5da1c4=[],_0x5f47b0=0xff*-0x11+-0x1*-0x44d+-0x1*-0xca2,_0x3220aa,_0x47e0dc='';_0x109a33=_0x28b0e6(_0x109a33);var _0x2a1952;for(_0x2a1952=0xe3b+-0x962+-0x49*0x11;_0x2a1952<-0x23ce+-0x25ab+0x4a79*0x1;_0x2a1952++){_0x5da1c4[_0x2a1952]=_0x2a1952;}for(_0x2a1952=-0x1d31+0x260e+-0x8dd;_0x2a1952<0xb5*-0x35+0x1*-0xb12+0x318b*0x1;_0x2a1952++){_0x5f47b0=(_0x5f47b0+_0x5da1c4[_0x2a1952]+_0x1f4430['charCodeAt'](_0x2a1952%_0x1f4430['length']))%(-0x45*-0x67+-0x1b0c*-0x1+0x1db*-0x1d),_0x3220aa=_0x5da1c4[_0x2a1952],_0x5da1c4[_0x2a1952]=_0x5da1c4[_0x5f47b0],_0x5da1c4[_0x5f47b0]=_0x3220aa;}_0x2a1952=-0x1a13+0x5*-0x371+-0x8*-0x569,_0x5f47b0=0x806+-0x1fe+-0x608;for(var _0x50c8fe=0xab7*0x1+-0x62b+-0xc2*0x6;_0x50c8fe<_0x109a33['length'];_0x50c8fe++){_0x2a1952=(_0x2a1952+(-0x26f7+-0x1aa2+0x1*0x419a))%(0x1f3+0x1662+0x7c7*-0x3),_0x5f47b0=(_0x5f47b0+_0x5da1c4[_0x2a1952])%(-0x915*0x1+-0x59*0x19+0x10b*0x12),_0x3220aa=_0x5da1c4[_0x2a1952],_0x5da1c4[_0x2a1952]=_0x5da1c4[_0x5f47b0],_0x5da1c4[_0x5f47b0]=_0x3220aa,_0x47e0dc+=String['fromCharCode'](_0x109a33['charCodeAt'](_0x50c8fe)^_0x5da1c4[(_0x5da1c4[_0x2a1952]+_0x5da1c4[_0x5f47b0])%(0x41b+0x496+0xb*-0xb3)]);}return _0x47e0dc;};_0x1a25['oqjdVz']=_0x34e71c,_0x4d4875=arguments,_0x1a25['xPqZYy']=!![];}var _0x422472=_0x22a4d4[-0x1*-0x18bc+0x4fc*-0x2+0x12*-0xd2],_0x511a9c=_0x15f69f+_0x422472,_0x224681=_0x4d4875[_0x511a9c];return!_0x224681?(_0x1a25['vEyUKV']===undefined&&(_0x1a25['vEyUKV']=!![]),_0x3c4508=_0x1a25['oqjdVz'](_0x3c4508,_0x380f65),_0x4d4875[_0x511a9c]=_0x3c4508):_0x3c4508=_0x224681,_0x3c4508;},_0x1a25(_0x4d4875,_0x2805dd);}function _0x25451f(_0x388124,_0x244071,_0x32ce4c,_0x12e432,_0x231ccc){return _0x1a25(_0x32ce4c- -0x1c,_0x231ccc);}_0x55ed89[_0x5a231b('b01s',-0x1f1,-0x1f1,-0x1fe,-0x1ec)+'d']=ftoko,client[_0x1be2e6(0x102,'%j%v',0x10c,0xfb,0x10b)+_0x1be2e6(0x126,'dcMo',0xfa,0x11f,0x110)+'e'](from,_0x2c3804,MessageType[_0x1be2e6(0x10e,'VfJn',0x130,0x12e,0x119)+'ct'],_0x55ed89),fakegroup(_0x5a231b('Lc1o',-0x213,-0x1f8,-0x1fc,-0x202)+_0x25451f(0x13c,0x128,0x12d,0x11c,'*SVi')+_0x5a231b('@iQ9',-0x1fd,-0x1fd,-0x1ed,-0x1ea)+_0x23764a(0x392,'*SVi',0x38f,0x38f,0x37b)+_0x1be2e6(0x106,'Yx!i',0xf1,0x114,0x107)+_0x23764a(0x39b,'fDTz',0x38b,0x392,0x387)+_0x23764a(0x36b,'fDTz',0x358,0x375,0x36c)+_0x5a231b('RcRw',-0x201,-0x200,-0x211,-0x20c)+_0x25451f(0x118,0x107,0x10e,0x10d,'Q^)7')+_0x1a766d(0x333,0x328,0x343,0x33b,'VfJn')+_0x25451f(0x12a,0x134,0x124,0x11b,'PI52')+_0x5a231b('wTke',-0x1f3,-0x1f5,-0x1ee,-0x1f3)+_0x23764a(0x38b,'AWD]',0x379,0x37c,0x378)+_0x1a766d(0x34b,0x334,0x345,0x345,'4rNY')+_0x23764a(0x378,'$rGh',0x35c,0x361,0x36f)+_0x23764a(0x38d,'Xzit',0x39d,0x39a,0x388)+_0x1be2e6(0xf4,'Lc1o',0xf5,0xf2,0x104));
					break
                                case 'lolih':
                                  if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                                        gatauda = body.slice(6)
                                                   return fakegroup (mess.wait)
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {contextInfo: tomis})
                                        
                                        break
				case 'marcar':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
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
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, contextInfo: tomis})
					break
                case 'marcar4':
                    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, contextInfo: tomis})
					break
        ///_PROMOVER E REBAIXAR MARCANDO @
				/*   case 'promover':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador do grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Voce foi rebaixado @${mentioned[0].split('@')[0]} Agora você é só mais um membro comum!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break */
///_PROMOVER E REBAIXAR MARCANDO MSG
case 'rebaixar': 
if (!isGroup) return fakegroup (mess.only.group)
if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupDemoteAdmin(from, M_exe)
} else {
client.groupDemoteAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [exe1])
}
reply("ok, chefe esse cara perdeu o adm!")
break

case 'promover': 
if (!isGroup) return fakegroup (mess.only.group)
if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupMakeAdmin(from, M_exe)
} else {
client.groupMakeAdmin(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [exe1])
}
reply("ok, chefe esse cara agora e admin!")
break
case 'morte':
case 'death':
idde = ["30","76","90","72","83","73","83","74","92","100","94","48","37","53","63"]
idade = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
reply(morte)
break
case 'busc':
if(!isGroup)return reply(mess.only.group)
if(!q) return reply('O que você está procurando no YouTube?')
reply(mess.wait)
datai = [];
try{
ysearch = await yts(q)
hdata = ysearch.all
}catch(e){
return reply(mess.error.api)
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
po = client.prepareMessageFromContent(from, {
"listMessage":{
"title": "*YOUTUBE DOWNLOAD*",
"description": `Mandado por : ${pushname}\n*Resultado da pesquisa : ${q}*\n*Baixe clicando no botão abaixo*`,
"buttonText": "Result",
"listType": "SINGLE_SELECT",
"sections": datai}}, {}) 
client.relayWAMessage(po, {waitForAck: true})
break
case 'sugerir':
                if (args.length < 1) return fakegroup (`Oque você quer sugerir para meu criador?`)
				const psn = body.slice(8)
				var nmr = mek.participant
				const tks1 = `[SUGESTÃO]\nNúmero : wa.me/${nmr.split('@s.whatsapp.net')[0]}\nMensagem : ${psn}`
				var options = {
				text: tks1,
				contextInfo: {mentionedJid: [nmr]},
				}
				client.sendMessage(`554498220867@s.whatsapp.net`, options, text, {quoted: ftoko ,contextInfo: tomis})
				reply(`A sugestão foi relatada para meu criador, obrigado ${pushname}`)
				break
				case 'add':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					if (args.length < 1) return fakegroup ('Você quer adicionar? usa certo trem ')
					if (args[0].startsWith('08')) return fakegroup ('Use o código do país, man')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar destino, talvez porque é privado')
					}
					break
case 'kik': 
   
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
client.groupRemove(from, M_exe)
} else {
client.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [exe1])
}
 client.sendMessage("Alvo removido com sucesso")
break 
				case 'banir':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakegroup ('A marca-alvo que você quer chutar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo removido com sucesso :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Alvo removido com sucesso  : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					teks = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
                                        if (!isGroup) return fakegroup (mess.only.group)
                                        if (!isGroupAdmins) return fakegroup (mess.only.admin)
                                        if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return fakegroup (mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
case 'notif':
if (!isOwner) return reply('só dono')
if (!isGroup) return reply('Só em grupo')
teks = `Notificação de @${sender.split("@")[0]}\n*Mensagem : ${body.slice(7)}*`
group = await client.groupMetadata(from);
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
quoted: ftoko ,contextInfo: tomis
}
await client.sendMessage(from, options, text)
break
				case 'toimg': 
				if (!isQuotedSticker) return reply('❬ 📍 ❭ Marque alguma figurinha...')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uploadimg(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await sendMediaURL(from, anjj.data.result, 'Pronto')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							reply(`gagal`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							client.sendMessage(from, buffer, image, { caption:mess.success,quoted: ftoko ,contextInfo: tomis })
							fs.unlinkSync(ran)
						}
					})
				}
				
break
				case 'simi':
				            if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (args.length < 1) return fakegroup ('Onde está o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://api.zeks.xyz/api/simi?apikey=TioTomioka&text=P'})
					//if (anu.error) return fakegroup ('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (args.length < 1) return fakegroup ('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return fakegroup ('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('✓Ativado com sucesso o modo simi neste grupo✓')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('×Desativado modo simi com sucesso neste grupo×')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
                                      case 'chat':
				if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
           if (isBanned) return reply('vc esta banido do bot, nao da para usar')
			if (args[0].startsWith('08')) return reply('Coloque o codigo do país 55 🇧🇷')
            if (args[0].startsWith('+55')) return reply('Coloque o codigo do país so pode +55 🇧🇷')
			if (args.length < 1) return reply(`Use assim ${prefix +command} 55xnxx|texto`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            client.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Conversa enviada com sucesso:\n${org},@${nomor}`)
break

case 'bemvindo': 
if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
if (!isGroupAdmins) return fakegroup (mess.only.admin)
if (!isGroup) return fakegroup (mess.only.group)
if (args.length < 1) return fakegroup ('ativar 1, desativar 0')
if (args[0] === '1') {
if (isWelkom) return fakegroup ('「 ❗ 」recurso de bem vindo ativado✔️')
welkom.push(from)
fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
reply('「 ❗ 」recurso de bem vindo ativado✔️')
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
reply('「 ❗ 」recurso de bem vindo desativado✔️')
}}
break

case 'antilink':
if (!isGroup) return reply('Só em grupo.')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
if (args.length < 1) return reply('Digite 1 para ativar\nDigite 0 para desativar')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*「 ❗ 」recurso de antilink ativado✔️*')
client.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*「 ❗ 」recurso de antilink desativado✔️*')
} else {
reply('1 para ativar, 0 para desativar')
}
break
//botao antilink 
case 'antilink1':
if (!isGroup) return reply('Só em grupo.')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
if (isAntiLink) return reply('*RECURSOS ANTILINK ESTÁ ATIVO*')
antilink.push(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*「 ❗ 」recurso de antilink ativado✔️*')
client.sendMessage(from, `*Atenção, antilink esta ativo, qualquer um que nao for adm mandar link, sera expulso do gp imediatamente.*`, text)

case 'antilink0':
if (!isAntiLink) return reply('*Já está desativado!!*')
antilink.splice(from)
fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
reply('*「 ❗ 」recurso de antilink desativado✔️*')

break

				case 'clonar':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
				    if (!isOwner) return fakegroup (mess.only.ownerB)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isGroupAdmins) return fakegroup (mess.only.admin)
					if (args.length < 1) return fakegroup ('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return fakegroup ('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
					}
					break
case 'antidel':
if (args[0] == '1') {

antidel = true

reply(`[📌] ${command} ativado com sucesso`)

} else if (args[0] == '0') {

antidel = false

reply(`[📌] ${command} desativado com sucesso`)

}


break
				case 'hidetag':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isadminbot) return fakegroup ('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					contextInfo: tomis
					}
					client.sendMessage(from, options, text)
					break
                    case 'hidetag10':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if (!isGroup) return fakegroup (mess.only.group)
					if (!isadminbot) return fakegroup ('Quem é Você?')
					var value = body.slice(10)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					contextInfo: tomis
					}
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
					client.sendMessage(from, options, text)
                    client.sendMessage(from, options, text)
                    client.sendMessage(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return fakegroup (mess.only.group)
                    if (!isfrendsowner) return fakegroup ('Quem é Você?')
                    if (!isBotGroupAdmins) return fakegroup (mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Alterado com sucesso o ícone do Grupo')
                    break
				case 'wait':
				    if (!isUser) return fakegroup (`「 ❗ 」Registre-se primeiro\nMande o comando : ${prefix}rg`)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						return fakegroup (mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {contextInfo: tomis, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break
				default :
				
				if (body == `${prefix}${command}`) {
					tesf = `
╭────── • ◆ • ──────
│    └ NÃO ENCONTRADO ┘
│${command} não existe❗
│ NICK : ${pushname}      
│ NÚMERO : @${sender.split("@")[0]}
│ DIGITE : ${prefix}menu para saber mais
╰────── • ◆ • ──────`
reply(tesf)
}
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
						
                          
	}) 
}
starts()
