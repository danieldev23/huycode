const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: Đặng Quốc Huy ( Huypc )
  \n❎ Tuổi: 21
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m67 47 kg
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: Nghệ An
  \n🤔 Nơi ở: Nghệ An
  \n👫 Gu: Tính cách và ngoại hình :<
  \n🌸 Tính cách: Là một chàng goodboy :3
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100056344273067}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };