let submit = document.querySelector("#submit");
let container = document.querySelector(".container")
let box = document.querySelector(".box")
let buttons = document.querySelectorAll("#rating");
let h3 = document.querySelector("h3");
let selectRating = 0;


buttons.forEach(rating => {
    rating.onclick = () => {
        buttons.forEach(b => {
            b.style.backgroundColor = "";
            b.style.color = "";
        });
        rating.style.backgroundColor = "white";
        rating.style.color = "black";

        selectRating = rating.innerText;
    };

});

submit.onclick = function () {
    if (selectRating == 0) {
        alert("please select a rating");
        return;
    }
    container.style.display = "none";
    box.style.display = "block";

    h3.innerText = "you selected " + selectRating + " out of 5";
};