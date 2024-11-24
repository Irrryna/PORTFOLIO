function openGame() {
    let modalWindow = document.getElementById("easter-egg");
    if(modalWindow.className == "invisible") {
        modalWindow.className = "visible";
    } else {
        modalWindow.className = "invisible";
    }
}