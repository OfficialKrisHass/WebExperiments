const signUpBttn = document.getElementById("signUpBttn");
const signInBttn = document.getElementById("signInBttn");

const switchAnim = document.getElementById("decor").animate(
    [{ transform: "scale(1.1, 1.1)" }, { transform: "translateX(-100%) scale(1.1, 1.1)" }, { transform: "translateX(-100%) scale(1, 1)" }],
    {
        easing: "ease-in-out",
        duration: 1000,
    },);
switchAnim.pause();

signUpBttn.onclick = function() {

    console.log("Successfully signed up");

}
signInBttn.onclick = function() {

    switchAnim.play();
    console.log("Switched to sign in");

}
