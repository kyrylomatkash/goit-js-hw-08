// Імпорт
import throttle from 'lodash.throttle';
import Player from "@vimeo/player"
// Основні змінні
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
// Функція запису часу відтворення
function onPlay({seconds}) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log('Час відтворення:', seconds);
}
// Збереження часу
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

