let round = 0;

document.getElementaryById("beginGame")
.addEventListener("click", function(){
round = getRandomInt(100);
alert(round);
});

function getRandomInt(max){
    return Math.floor(Math.random() *);
}