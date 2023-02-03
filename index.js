let isGameOver = false; //The flag of Game Over.
let fields = []; //Game cells.

//Start game.
function start() {    
    fields = document.querySelectorAll("td > div");

    let cells = document.querySelectorAll("td");
    for(let cell of cells) {
        cell.addEventListener("click", putSign);
    }
}

window.addEventListener("load", start);

function changeClass(el){
    el.classList.toggle("ring");
    el.classList.toggle("cross");
}

function refresh(){
    isGameOver = false;
    //Restore table header after Game Over.
    document.getElementById("player-title").className = "choise-player";
    document.getElementById("player-sign").className = "choise-player";
    document.getElementById("player-title").textContent = "Active player";
    //Generate first player.
    let randomImage = Math.floor(Math.random()* 10);    
    let c1 = document.getElementById("player");
    if(randomImage%2===0 & c1.className === "ring"){        
        c1.classList.replace("ring", "cross");        
    }
    else {  
        c1.classList.replace("cross", "ring");   
    }
    //Cleaning game field.
    for (let field of fields) {
        if(field.className === "ring" || field.className === "cross"){
            field.className = "empty";
        }
    }    
}
//Checking for a winner.
function isVictory(fields) {
	let combinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let comb of combinations) {
		if (
			fields[comb[0]].className === fields[comb[1]].className &&
			fields[comb[1]].className === fields[comb[2]].className &&
			fields[comb[0]].className !== "empty"
		) {
			return true;
		}
	}
	return false;
}
//Checkin for a draw.
function isDraw(fields) {
    for (let field of fields) {
        if (field.className === "empty"){
            return false;
        }        
    }
    return true;
}

function putSign(e){
    let el = e.target;
    
    //Block clicking after win.
    if(isGameOver){
        return;
    }    
    let c1 = document.getElementById("player");//Active player.
    if(el.querySelector("div").className === "empty"){
        el.querySelector("div").className = c1.className; //This turn.
    }     
    //Checking for a winner.
    if (isVictory(fields)){
        isGameOver = true;
        if(c1.className === "cross"){
            document.getElementById("player-title").classList.add("winner-cross");
            document.getElementById("player-sign").classList.add("winner-cross");
            document.getElementById("player-title").textContent = "Cross won!!!";                                
        }
        else if(c1.className === "ring"){
            document.getElementById("player-title").classList.add("winner-rings");
            document.getElementById("player-sign").classList.add("winner-rings");
            document.getElementById("player-title").textContent = "Rings won!!!";
        }
        return;          
    }
    //Checking for a draw.
    if (isDraw(fields)){
        isGameOver = true;
        document.getElementById("player-title").textContent = "- DRAW -";
        return;
    }
    //Changing active player.
    changeClass(c1);     
}