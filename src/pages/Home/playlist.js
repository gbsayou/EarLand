import iceLake from '../../assets/sounds/冰湖.mp3';
import treeSkin from '../../assets/sounds/剥树皮.mp3';
import houseWalking from '../../assets/sounds/古道西风瘦马.mp3';
import summerNight from '../../assets/sounds/夏夜虫鸣.mp3';
import hillRiver from '../../assets/sounds/山涧流水.mp3';
import springThunder from '../../assets/sounds/春雷惊蛰.mp3';
import springWind from '../../assets/sounds/春风拂晓.mp3';
import woodenFish from '../../assets/sounds/木鱼.mp3';
import bubble from '../../assets/sounds/气泡.mp3';
import seawave from '../../assets/sounds/海浪.mp3';
import river from '../../assets/sounds/溪流.mp3';
import train from '../../assets/sounds/火车.mp3';
import forestRain from '../../assets/sounds/竹林雨声.mp3';
import BambooWindChime from '../../assets/sounds/竹风铃.mp3';
import bonfire from '../../assets/sounds/篝火.mp3';
import studyRoom from '../../assets/sounds/自习室.mp3';
import northenWind from '../../assets/sounds/西北风.mp3';
import rain from '../../assets/sounds/雨声.mp3';
import rainRiver from '../../assets/sounds/雨天流水.mp3';
import thender from '../../assets/sounds/雷鸣.mp3';

const playlist = [
  {
    title: '白噪音',
    list: [
      {sound: rain, name: '雨声'},
      {sound: seawave, name: '海浪'},
      {sound: river, name: '溪流'},
      {sound: woodenFish, name: '木鱼'},
      {sound: iceLake, name: '冰湖'},
      {sound: treeSkin, name: '剥树皮'},
      {sound: bubble, name: '气泡'},
    ],
  },
  {
    title: '自然之音',
    list: [
      {sound: springWind, name: '春风拂晓'},
      {sound: springThunder, name: '春雷惊蛰'},
      {sound: summerNight, name: '夏夜虫鸣'},
      {sound: houseWalking, name: '落叶走马'},
      {sound: northenWind, name: '西北风'},
      {sound: thender, name: '雷鸣'},
      {sound: hillRiver, name: '山涧流水'},
      {sound: forestRain, name: '竹林雨声'},
      {sound: rainRiver, name: '雨天流水'},
    ],
  },
  {
    title: '惬意生活',
    list: [
      {sound: train, name: '火车'},
      {sound: BambooWindChime, name: '竹风铃'},
      {sound: bonfire, name: '篝火'},
      {sound: studyRoom, name: '自习室'},
    ],
  },
];

export default playlist;
