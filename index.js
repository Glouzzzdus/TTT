let isDone = false;

function changeClass(el){
    el.classList.toggle("ring");
    el.classList.toggle("cross");
}

function refresh(){
    isDone = false;
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

function putSign(el){
    if(isDone){
        return;
    }
    let fields = document.querySelectorAll("td > div");
    let c1 = document.getElementById("player");
    let winField = document.getElementsByTagName("th");
    if(el.querySelector("div").className === ""){
        el.querySelector("div").className = c1.className;        
        if (isVictory(fields)){
            isDone = true;
            if(c1.className = "cross"){
                winField.classList.replace("choise-player", "winner-cross");
            }
            else{
                winField.classList.replace("choise-player", "winner-ring");
            }
            return;          
        }
        changeClass(c1);        
    }    
}





