let gameBoard= {
    board: ["","","","","","","","",""],
    linkGrid: function(){
        let boxes= document.querySelectorAll(".gridBox")
        let boxesArray=Array.from(boxes)
        let boxIndex=null;
        boxesArray.forEach((box)=>{
            boxIndex=boxesArray.indexOf(box);
            box.textContent=gameBoard.board[boxIndex]
        })
    },
    findWinner: function(){
        switch(true){
            case gameBoard.board[0]==="X" && gameBoard.board[1]==="X" && gameBoard.board[2]==="X" :
                alert("Player1 Wins")
                break;
            case gameBoard.board[0]==="X" && gameBoard.board[3]==="X" && gameBoard.board[6]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[0]==="X" && gameBoard.board[4]==="X" && gameBoard.board[8]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[1]==="X" && gameBoard.board[4]==="X" && gameBoard.board[7]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[2]==="X" && gameBoard.board[5]==="X" && gameBoard.board[8]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[3]==="X" && gameBoard.board[4]==="X" && gameBoard.board[5]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[6]==="X" && gameBoard.board[7]==="X" && gameBoard.board[8]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[6]==="X" && gameBoard.board[4]==="X" && gameBoard.board[2]==="X":
                alert("Player1 Wins")
                break;
            case gameBoard.board[0]==="O" && gameBoard.board[1]==="O" && gameBoard.board[2]==="O" :
                alert("Player2 Wins")
                break;
            case gameBoard.board[0]==="O" && gameBoard.board[3]==="O" && gameBoard.board[6]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[0]==="O" && gameBoard.board[4]==="O" && gameBoard.board[8]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[1]==="O" && gameBoard.board[4]==="O" && gameBoard.board[7]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[2]==="O" && gameBoard.board[5]==="O" && gameBoard.board[8]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[3]==="O" && gameBoard.board[4]==="O" && gameBoard.board[5]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[6]==="O" && gameBoard.board[7]==="O" && gameBoard.board[8]==="O":
                alert("Player2 Wins")
                break;
            case gameBoard.board[6]==="O" && gameBoard.board[4]==="O" && gameBoard.board[2]==="O":
                alert("Player2 Wins")
                break;
        }
    }
}

let players={
    player1:null,
    player2:null
}

let playerFactory= function(name, marker){
   name=name;
   marker=marker
   return{name, marker}
}

let GameFlow= (function (){
    let currentMarker=null
    
    let player1Buttons= document.querySelectorAll(".playerOneSelection");
    let player2Buttons= document.querySelectorAll(".playerTwoSelection")
    player2Buttons.forEach((button)=>{
        button.disabled=true;
    })

    player1Buttons.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            console.log(e.target)
            players.player1= playerFactory("playerOne", e.target.textContent)
            if(e.target.textContent=="X"){
                players.player2=playerFactory('playerTwo', "O");
            } else if(e.target.textContent=="O"){
                players.player2=playerFactory("player2", "X")
            }
            player1Buttons.forEach((button)=>{
                button.disabled=true;
                currentMarker=players.player1.marker
            })
        })
    })

    let gridBoxes= document.querySelectorAll(".gridBox")
    let boxesArray=Array.from(gridBoxes)
    let currentIndex=null
    gridBoxes.forEach((box)=>{
        box.addEventListener('mouseenter', ()=>{
            box.classList.add("boxHovered")
        })
        box.addEventListener('mouseleave', ()=>{
            box.classList.remove("boxHovered")
        })
    })

    gridBoxes.forEach((box)=> {
        console.log(currentMarker)
        box.addEventListener("click", (e)=>{
            currentIndex=boxesArray.indexOf(box)
            if(gameBoard.board[currentIndex]=="X"){
                alert("That Spot Is Taken!")
                return
            } else if(gameBoard.board[currentIndex]=="O"){
                alert("That Spot Is Taken!")
                return
            }
            
            gameBoard.board[currentIndex]=currentMarker
            gameBoard.linkGrid()
            gameBoard.findWinner()
            if(currentMarker==players.player1.marker){
                currentMarker=players.player2.marker;
            } else if(currentMarker==players.player2.marker){
                currentMarker=players.player1.marker;
            }
        })
    })
    


    return{}
}())









