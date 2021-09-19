firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.replace("index.html");
  } else {
    document.getElementById("user").innerHTML = "Hello" + user.email;
  }
});

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;




  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      location.replace("welcome.html");
    })
    .catch((error) => {
      document.getElementById("errormsg").innerHTML = error.message

    });
}


function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)

    .catch((error) => {
      document.getElementById("errormsg").innerHTML = error.message

    });

}


function forget() {
  firebase.auth().sendPasswordResetEmail(email);
  const email = document.getElementById("email").value

    .then(() => {
      alert("go to your email and reset your password")

    })
    .catch((error) => {
      document.getElementById("errormsg").innerHTML = error.message


    });
}