"use strict";

browser.runtime.onMessage.addListener(msg => {
  const {type} = msg;

  switch (type) {
  case "atmoReady":
    browser.notifications.create({
        title: "ATMO Cluster Ready",
        message: "Your cluster is ready",
        type: "basic"
    });
    break;
  }
});
