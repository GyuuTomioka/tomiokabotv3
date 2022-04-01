#!/usr/bin/bash
apt install figlet 
apt install hiptext
CYAN="\033[1;36m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

if [ -e "$HOME/../usr/bin/ruby" ]; then
	echo $GREEN"ruby detectado prosseguindo..."
	sleep 1
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat não detectado, instalando..."
		gem install lolcat
	fi
else
	echo $RED"Você não instalou o ruby, instalando..."
	sleep 1
	apt install ruby
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat não detectado, instalando..."
		gem install lolcat
	fi
fi

clear

figlet -c -f slant -t 'Tomioka bot' | lolcat 

echo  "TOMIOKA AQUI KAKA" | lolcat -a -d 50 

apt-get update
apt-get upgrade
apt-get install nodejs
apt-get install libwebp
apt-get install ffmpeg
apt-get install wget
apt-get install mc
termux-setup-storage
apt-get install tesseract
npm i imgbb-uploader
npm i cheerio
npm i yt-search
npm i emoji-api
npm i google-it
npm i g-i-s
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm i -g cwebp && npm i -g ytdl && npm i  && npm i got
echo "[*] obrigado por utilizar o bot \"TOMIOKABOT\" TOMIOKA agradece"
echo  "USE NPM START PARA INICIAR E ESCANEIE O CODIGO" | lolcat -a -d 50 
