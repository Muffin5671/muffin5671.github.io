console.log("%cWelcome to Muffin's Tools",'font-family: Roboto; font-size: 25px; text-align: center; background-color: #7aa0ff; color: #ffffff; padding: 32px 48px;');
console.log('%cnote: i really only added this because i love the console styling feature','font-family: Roboto; font-size: 16px; text-align: center; background-color: #eeeeee; color: #363636; padding: 8px 32px;');
console.log("%cyou may or may not have seen pixi js do it uhhhhhhh here's my yt okay bye",'font-family: Roboto; font-size: 16px; text-align: center; background-color: #eeeeee; color: #363636; padding: 8px 32px;');
console.log('%chttps://www.youtube.com/@MuffinGDYT','font-family: Roboto; font-size: 16px; font-weight: 500; text-align: center; background-color: #e62c2c; color: #ffffff; padding: 12px 48px; border-radius: 4px; cursor: pointer;');

window.onload = function editErrorText() {
  document.getElementById('errortext').innerHTML = "The requested file " 
  + document.location.pathname + 
  " was not hosted on the server. (404)"
}
