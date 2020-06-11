const spinner = document.getElementById("spinner");

import config from './config.js'

const update = () => {
    spinner.classList.add("fa-spin", "fast-spin");
    fetch(config.api + '/prod/streams')
        .then(response => response.json())
        .then(response => {
            const streams = response.body;
            const randomNumber = Math.floor(Math.random() * streams.length);
            const url = `https://twitch.tv/${streams[randomNumber]}`;
            const linkElement = document.getElementById("twitchStreamUrl")
            linkElement.href = url;
            linkElement.innerHTML = url;
            spinner.classList.remove("fa-spin", "fast-spin");
        });
}

update();

spinner.onclick = () => {update()};