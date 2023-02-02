let isDone = false;

function changeClass(el){
    el.classList.toggle("ring");
    el.classList.toggle("cross");
}

function refresh(){
    isDone = false;
    document.getElementById("player-title").className = "choise-player";
    document.getElementById("player-sign").className = "choise-player";
    document.getElementById("player-title").textContent = "Active player";
    let randomImage = Math.floor(Math.random()* 10);    
    let c1 = document.getElementById("player");
    if(randomImage%2===0 & c1.className === "ring"){        
        c1.classList.replace("ring", "cross");        
    }
    else {  
        c1.classList.replace("cross", "ring");   
    }
    var divs = document.querySelectorAll("td > div");
    for (let el of divs) {
        if(el.className === 'ring' || el.className === 'cross'){
            el.className = ''
        }
    }    
}

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
			fields[comb[0]].className !== ""
		) {
			return true;
		}
	}
	return false;
}

function IsDraw(fields){
    for (let field in fields){
        if (field.className === ""){
            return false;
        }        
    }
    return true;
}

function putSign(el){
    if(isDone){
        return;
    }
    let fields = document.querySelectorAll("td > div");
    let c1 = document.getElementById("player");
    if(el.querySelector("div").className === ""){
        el.querySelector("div").className = c1.className;        
        if (isVictory(fields)){
            isDone = true;
            if(c1.className === "cross"){
                document.getElementById("player-title").className = "winner-cross";
                document.getElementById("player-sign").className = "winner-cross";
                document.getElementById("player-title").textContent = "Cross won!!!";                                
            }
            else if(c1.className === "ring"){
                document.getElementById("player-title").className = "winner-ring";
                document.getElementById("player-sign").className = "winner-ring";
                document.getElementById("player-title").textContent = "Rings won!!!";
            }
            return;          
        }
        if (IsDraw(fields)){
            document.getElementById("player-title").textContent = "- DRAW -";
            return;
        }
        changeClass(c1);        
    }    
}





