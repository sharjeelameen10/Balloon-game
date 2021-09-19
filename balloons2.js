setTimeout(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
            location.replace("index.html");
        }
        else {
            console.log(user)
            document.getElementById("user").innerHTML = "Welcome:" + user.email
        }
    })
}, 2000);



function logout() {

    firebase.auth().signOut()
}




let popped = 0;

document.addEventListener('mouseover', function (e) {

    if (e.target.className === "blue") {

        e.target.style.backgroundColor = "black";
        e.target.textContent = "!";
        popped++;
        checkAllPopped();

    }
    if (e.target.className === "balloon") {

        alert("GameOver")

    }
});

function removeEvent(e) {
    e.target.removeEventListener('mouseover', function () {

    })
};

function checkAllPopped() {
    if (popped === 6) {
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.getElementById('wellplayed');
        gallery.innerHTML = 'Move To Next Level'
        message.style.display = 'block';
    }
};