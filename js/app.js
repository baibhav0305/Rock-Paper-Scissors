
let userBtn = document.querySelectorAll("button");
let startBtn = document.getElementById("startBtn");
// for (i = 0; i < 3; i++) {
startBtn.addEventListener("click", function () {
    // console.log(startBtn);

    let i = 0;
    // while (i < 10) {
    console.log("value of i: " + i);

    userBtn[0].addEventListener("click", function () {
        // console.log(userBtn[0].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        if (randomNumber == 0) {
            console.log("TIE !");
        }
        else if (randomNumber == 1) {
            console.log("DEFEAT !");
            i++;
        }
        else {
            console.log("VICTORY !");
            i++;
        }
        console.log("value of i: " + i);
    });

    userBtn[1].addEventListener("click", function () {
        // console.log(userBtn[1].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        if (randomNumber == 0) {
            console.log("VICTORY !");
            i++;
        }
        else if (randomNumber == 1) {
            console.log("TIE !");
        }
        else {
            console.log("DEFEAT !");
            i++;
        }
        console.log("value of i: " + i);
    });

    userBtn[2].addEventListener("click", function () {
        // console.log(userBtn[2].innerHTML);
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        if (randomNumber == 0) {
            console.log("DEFEAT !");
            i++;
        }
        else if (randomNumber == 1) {
            console.log("VICTORY !");
            i++;
        }
        else {
            console.log("TIE !");
        }
        console.log("value of i: " + i);
    });
    // i = 0;
    // if (i == 10) {
    //     break;
    // }
    // }

});
// }
// for (i = 0; i < 3; i++) {
//     userBtn[i].addEventListener("click", function () {
        // console.log(i);
//     })
// }