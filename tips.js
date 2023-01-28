const tips = [
  "クモ退治には、Rockが効果的です。",
  "DPSが最も高いペタルはRiceです。使いこなせば最強かも？",
  "かつてLightingは最強と呼ばれていました。",
  "Yggdrasilを落とすのは黄色いテントウムシです。",
  "hideさんは、このwikiの管理人です。",
  "hanaさんは、前wikiの管理人です。",
  "Honeyはミツバチとスズメバチには効かないようです。",
  "Heavyは元々Heaviestという名前でした。",
  "新florr.ioができたすぐのころは、Oceanはありませんでした。",
  "昔のサソリは、今のクモのような毒で襲い掛かってきました。",
  "昔のMythic Eggからは、Hornetが2体出現していました。",
  "昔のStingerの再生時間は2.5sでした。",
  "実装された直後のPowderは効果が重複しました。",
  "SandとLightでは、基本的にSandの方が優秀です。",
  "面白いことに、SandとStingerのDPSは同じ値です。",
  "tomo事変を知っていますか？",
  "ラッキー！このメッセージを見たあなたは、今日の運を使い果たしたことでしょう！",
  "Diggerはdigdig.ioからやってきました。",
  "超レアモブであるSquareは、Diep.ioでは最弱の図形です。",
  "バナナはおやつに入るのか？",
  "動画広告は、ページをリロードすればすっとばすことができます。",
  "Hornetは昔、頭から針を発射していました。",
  "Dandelionはタンポポという意味です。",
  "florr.ioのクラフトは、昔は失敗すればするほど確率が上がるようになっていました。",
  "Diggerのドロップは、画面内にいる全員が獲得することができます。",
  "昔のHoneyは、当てた相手のペタルの回転速度を落とす仕様でした。",
  "Pearlのステータスは、Rockと全く同じです。",
  "クラゲの電撃はMagnetで防ぐことができます。",
  "かつてflorr.ioにはスクアドがありました。",
  "taming.ioとarras.ioをやったことはある？",
  "ペタルには、非常に近い敵に自動で近づく仕様があります。",
  "PvPは、それはそれは楽しかったですよ！",
  "daromanimu.D.Bさんは、florr.ioの動画も投稿しているyoutuberです。",
  "Queen Fire Antは、Ant Hellの最奥でスポーンします。",
  "Stickの正式名称はMysterious Stickです。"
];

const tipsButton = document.getElementById("tipsButton");
tipsButton.onclick = onClick;
const tipsText = document.getElementById("tipsText");

function onClick() {
  const nowDate = new Date();
  const today = nowDate.getDate() + ":" + nowDate.getMonth();
  
  console.log(today);
  if(localStorage.getItem('tipsDate') !== today) {
    tipsText.textContent = tips[Math.floor( Math.random() * tips.length)];
    localStorage.setItem('tipsDate', today);
  } else {
    tipsButton.textContent = "また明日見に来てね";
  }
}
