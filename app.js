let MyWindow = function (myWindow, myBackgroundWindow) {

    this.backgroundWindow = myBackgroundWindow;

}

MyWindow.prototype.openWindow = () => this.backgroundWindow.style.display = "block";

MyWindow.prototype.closeWindow = () => this.backgroundWindow.style.display = "none";


let myNewWindow = new MyWindow(document.getElementById('window'), document.querySelector('#backgroundWindow'));

// open button
document.getElementById('open').addEventListener("click", () => myNewWindow.openWindow());

// close button
document.getElementById('close').addEventListener("click", () => myNewWindow.closeWindow());

// submit button
document.getElementById('submit').addEventListener("click", () => myNewWindow.closeWindow());