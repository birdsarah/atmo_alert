const PUSHBULLET_API = "https://api.pushbullet.com/v2/pushes";
let stillLaunching = false;


function onStorageError(error) {
    console.log(`Error: ${error}`);
}

function onPushbuttonGot(item) {
    let pushbullet = item.pushbullet;
    if (!pushbullet) {
        return;
    }
    let requestBody = {
        "type": "note",
        "title": "ATMO Cluster Ready",
        "body": "Your ATMO cluster is ready"
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST', PUSHBULLET_API, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", `Bearer ${pushbullet}`);
    xhr.send(JSON.stringify(requestBody));
}

for (element of document.getElementsByTagName('p')) {
    if (element.innerText.includes("Your cluster is still launching")) {
        document.body.style.borderTop = "15px solid gray";
        stillLaunching = true;
        window.setTimeout(() => {
            window.location.reload();
        }, 30000)  // Reload after 30s
    }
}

if (stillLaunching === false) {  
    browser.runtime.sendMessage({type: "atmoReady"});
    document.body.style.borderTop = "15px solid #5cb85c";
    let getting = browser.storage.local.get("pushbullet");
    getting.then(onPushbuttonGot, onStorageError)
}

