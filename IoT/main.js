const endPoint = "http://172.20.10.2";

function getLampuPanjang() {
    fetch(endPoint + "/panjang", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledDapur.style.backgroundColor = "red"
            dapurLedImage.src = "./assets/led-on.png"
        } else {
            ledDapur.style.backgroundColor = "blue"
            dapurLedImage.src = "./assets/led-off.png"
        }
    });
}

function setLampuPanjang() {
    fetch(endPoint + "/panjang", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function getLampuPendek() {
    fetch(endPoint + "/pendek", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if(result == "ON") {
            ledTamu.style.backgroundColor = "red"
            tamuLedImage.src = "./assets/led-on.png"
        } else {
            ledTamu.style.backgroundColor = "blue"
            tamuLedImage.src = "./assets/led-off.png"
        }
    });
}

function setLampuPendek() {
    fetch(endPoint + "/pendek", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getLampuPanjang();
getLampuPendek();