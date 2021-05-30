

var c1 = document.getElementById("bg1");
var c2 = document.getElementById("bg2");
var c3 = document.getElementById("bg3");
var bg = "images/card-back.png";
var a = "images/king1.png";
var b = "images/queen.jpg";
var c = "images/a-card.png";


function result(bt){
    var randomNum = Math.ceil(Math.random()*3);
    if((bt === "bt3" && randomNum === 2)||(bt=== "bt1" && randomNum === 1) ||(bt === "bt2" && randomNum === 3)){
        startGame(randomNum)
        setTimeout(()=>{win()},100)
        // setTimeout(win,1000)
        
    }else {
        startGame(randomNum)
        setTimeout(()=>{lose()},100)
        // setTimeout(lose,1000)
    }

    
}

function startGame(randomNum){
    
    
        
    
    
    if(randomNum === 1){
            c1.src = a;
            c2.src = b;
            c3.src = c;
        
        }else if(randomNum === 2){
                c1.src = b;
                c2.src = c;
                c3.src = a;
            
            }else{
                    c1.src = c;
                    c2.src = a;
                    c3.src = b;
                }               
                    }
                
                
                
                
                
                
                function win(){
                    
                    
                    alert("you win!");
                    var score = document.getElementById('score');
                    score.value = Number(score.value) + 1;
                    console.log(score.value);
                    if(score.value == 3){
                        alert("YOU WIN!");
                        score.value = 0;
                    }
                    
                    c1.src = bg;
                    c2.src= bg;
                    c3.src = bg;
                    
                }
                
                
                function lose(){
                    
                    
                    alert("you lose!");
                    var score = document.getElementById('score');
                    score.value = 0;
                    c1.src = bg;
                    c2.src= bg;
                    c3.src = bg;
                }
                