const gameBoard= {
    board: ["","","","","","","","",""],
    linkGrid: function(){
        let boxes= document.querySelectorAll(".gridBox")
        let boxesArray=Array.from(boxes)
        let boxIndex=null;
        boxesArray.forEach((box)=>{
            boxIndex=boxesArray.indexOf(box);
            box.textContent=gameBoard.board[boxIndex]
        });
    },
    findWinner: function(){
        let test=document.querySelector(".test")
        let playerOneMarker=players.player1.marker
        let playerTwoMarker=players.player2.marker
        let findWinner=function(winningMarker){
            let bofy=document.querySelector("body")
            let winnerDisplay=document.createElement("div");
            winnerDisplay.classList.add("winner-display")
            test.classList.add("blur")
            if(playerOneMarker==winningMarker){
                bofy.appendChild(winnerDisplay)
                if(players.playerOneRealName==null){
                    winnerDisplay.textContent=`Player 1 Wins`
                } else{
                    winnerDisplay.textContent=`${players.playerOneRealName} Wins`
                };
            } else if(playerTwoMarker==winningMarker){
                bofy.appendChild(winnerDisplay)
                if(players.playerTwoRealName==null){
                    winnerDisplay.textContent=`Player 2 Wins`
                }else{
                winnerDisplay.textContent=`${players.playerTwoRealName} Wins`
                }
            } 
        }

        switch(true){
            case ((gameBoard.board[0]==="X") && (gameBoard.board[1]==="X") && (gameBoard.board[2]==="X"))|| ((gameBoard.board[0]==="O") && (gameBoard.board[1]==="O") && (gameBoard.board[2]==="O")):
                winningMarker=this.board[0]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[0]==="X") && (gameBoard.board[3]==="X") && (gameBoard.board[6]==="X"))|| ((gameBoard.board[0]==="O") && (gameBoard.board[3]==="O") && (gameBoard.board[6]==="O")):
                winningMarker=this.board[0]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[0]==="X") && (gameBoard.board[4]==="X") && (gameBoard.board[8]==="X"))|| ((gameBoard.board[0]==="O") && (gameBoard.board[4]==="O") && (gameBoard.board[8]==="O")):
                winningMarker=this.board[0]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[1]==="X") && (gameBoard.board[4]==="X") && (gameBoard.board[7]==="X"))|| ((gameBoard.board[1]==="O") && (gameBoard.board[4]==="O") && (gameBoard.board[7]==="O")):
                winningMarker=this.board[1]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[2]==="X") && (gameBoard.board[5]==="X") && (gameBoard.board[8]==="X"))|| ((gameBoard.board[2]==="O") && (gameBoard.board[5]==="O") && (gameBoard.board[8]==="O")):
                winningMarker=this.board[2]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[3]==="X") && (gameBoard.board[4]==="X") && (gameBoard.board[5]==="X"))|| ((gameBoard.board[3]==="O") && (gameBoard.board[4]==="O") && (gameBoard.board[5]==="O")):
                winningMarker=this.board[3]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[6]==="X") && (gameBoard.board[7]==="X") && (gameBoard.board[8]==="X"))|| ((gameBoard.board[6]==="O") && (gameBoard.board[7]==="O") && (gameBoard.board[8]==="O")):
                winningMarker=this.board[6]
                findWinner(winningMarker)
                break;
            case ((gameBoard.board[6]==="X") && (gameBoard.board[4]==="X") && (gameBoard.board[2]==="X"))|| ((gameBoard.board[6]==="O") && (gameBoard.board[4]==="O") && (gameBoard.board[2]==="O")):
                winningMarker=this.board[6]
                findWinner(winningMarker)
                break;
            case (gameBoard.board[0]==="X"||gameBoard.board[0]==="O") && (gameBoard.board[1]==="X"||gameBoard.board[1]==="O") &&
            (gameBoard.board[2]==="X"||gameBoard.board[2]==="O") && (gameBoard.board[3]==="X"||gameBoard.board[3]==="O") &&
            (gameBoard.board[4]==="X"||gameBoard.board[4]==="O") && (gameBoard.board[5]==="X"||gameBoard.board[5]==="O") &&
            (gameBoard.board[6]==="X"||gameBoard.board[6]==="O") && (gameBoard.board[7]==="X"||gameBoard.board[7]==="O") &&
            (gameBoard.board[8]==="X"||gameBoard.board[8]==="O"):
                body.classList.add("blur")
                alert("You Tied, No WInner");
                break;
        };
        
    }
};

const players={
    player1:null,
    player2:null,
    playerOneRealName:null,
    playerTwoRealName:null
};

const playerFactory= function(name, marker){
   name=name;
   marker=marker;
   return{name, marker};
};

const GameFlow= (function (){
    const gridBoxes= document.querySelectorAll(".gridBox");
    let boxesArray=Array.from(gridBoxes);
    let currentIndex=null;
    let currentMarker=null;
    const player1ButtonsList= document.querySelectorAll(".playerOneSelection");
    const player2ButtonsList= document.querySelectorAll(".playerTwoSelection");
    const playerOneAllButtons= document.querySelector(".playerOneSelections");
    const playerTwoAllButtons= document.querySelector(".playerTwoSelections");
    let playerOneMarker= document.createElement("p");
    let playerTwoMarker=document.createElement("p");
    playerOneMarker.classList.add("player-one-marker")
    playerTwoMarker.classList.add("player-two-marker")
   
    
   
    player2ButtonsList.forEach((button)=>{
        button.disabled=true;
    })

    let createPlayersAndSetMarkers=(function(){
        const playerOneDiv=document.querySelector(".playerOne");
        const playerTwoDiv=document.querySelector(".playerTwo");
        player1ButtonsList.forEach((button)=>{
            button.addEventListener("click", (e)=>{
                console.log(e.target);
                playerOneAllButtons.classList.add("hide");
                playerTwoAllButtons.classList.add("hide");
                players.player1= playerFactory("playerOne", e.target.textContent);
                if(e.target.textContent=="X"){
                    players.player2=playerFactory('playerTwo', "O");
                } else if(e.target.textContent=="O"){
                    players.player2=playerFactory("player2", "X")
                };
                player1ButtonsList.forEach((button)=>{
                    button.disabled=true;
                    currentMarker=players.player1.marker;
                });
                playerOneMarker.textContent=players.player1.marker
                playerOneDiv.appendChild(playerOneMarker)
                playerTwoMarker.textContent=players.player2.marker
                playerTwoDiv.appendChild(playerTwoMarker)

            });
        });
    }());

    
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

    const getPlayerNames= (function(){
        const playerOneDiv=document.querySelector(".playerOne")
        const playerTwoDiv=document.querySelector(".playerTwo")
        const nameInputSection=document.querySelector(".nameInputP1")
        const name1=document.querySelector(".inputP1");
        name1.focus();
        const playerOneTitle=document.querySelector(".playerOneHeading")
        const playerTwoTitle=document.querySelector(".playerTwoHeading")
        const playerOneNameButton=document.querySelector(".playerOneButton")
        const playerTwoNameButton=document.querySelector(".playerTwoButton")
        const name2=document.querySelector(".inputP2")
        const nameInputSectionP2=document.querySelector(".nameInputP2")
        playerOneNameButton.addEventListener('click', ()=>{
            playerOneDiv.removeChild(nameInputSection);
            console.log(players)
            playerOneTitle.textContent=name1.value
            players.playerOneRealName=name1.value
            nameInputSectionP2.classList.add("launch")
            name2.focus();
            playerTwoNameButton.addEventListener("click", ()=>{
                playerTwoTitle.textContent=name2.value;
                players.playerTwoRealName=name2.value
                playerTwoDiv.removeChild(nameInputSectionP2)
            })
        })
    }())

    let restart= (function(){
        let body=document.querySelector("body")
        let test=document.querySelector(".test")
        const restartButton= document.querySelector(".restart-button")
        restartButton.addEventListener("click", ()=>{
            let winnerDisplay=document.querySelector(".winner-display");
            gameBoard.board=["","","","","","","","",""]
            currentMarker=players.player1.marker
            gameBoard.linkGrid();
            test.classList.remove("blur")
            body.removeChild(winnerDisplay)
        })
        }());
    


    return{}
}())











