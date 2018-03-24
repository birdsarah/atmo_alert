let pushbulletId = "#pushbullet"

function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    pushbullet: document.querySelector(pushbulletId).value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector(pushbulletId).value = result.pushbullet || '';
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("pushbullet");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
