let stillLaunching = false;

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
}

