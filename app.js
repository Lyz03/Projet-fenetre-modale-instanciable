let MyWindow = function (myWindow, myPage) {

    this.window = myWindow;
    this.page = myPage;

    this.openWindow = () => {
        this.window.style.display = 'block';
        this.page.style.display = 'none'
    }

    this.closeWindow = () => {
        this.window.style.display = 'none';
        this.page.style.display = 'block';
    }

}

let myNewWindow = new MyWindow(document.getElementById('window'), document.querySelector('main'));

// open button
document.getElementById('open').addEventListener("click", () => myNewWindow.openWindow());

// close button
document.getElementById('close').addEventListener("click", () => myNewWindow.closeWindow());

// submit button
document.getElementById('submit').addEventListener("click", () => myNewWindow.closeWindow());