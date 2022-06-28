
const gameModule =(function(){

    const gridBoxes=document.querySelectorAll('.gridBox');
    const arrayOfGridBoxNodeList= Array.from(gridBoxes);

    let playerOne={
        name:"player1",
        marker: null
    }

    playerTwo={
        name:"player2",
        marker:null,
    }

    let currentPlayer= playerOne;

    const gameBoard= {
        theGameBoard:["","","","","","","","","test"]
    };

    const linkBoardToGrid =function (){
        let checkForWinner= ()=>{
            switch(true){
                case gameBoard.theGameBoard[0,1,2]==playerOne.marker:
                    console.log(true)
            }
        }
        // const gridBoxes=document.querySelectorAll('.gridBox');
        // const arrayOfGridBoxNodeList= Array.from(gridBoxes);
        let markGridSpot= (function(){
            gridBoxes.forEach((box)=>{
                box.addEventListener("click", (e)=>{
                    let boxIndex= arrayOfGridBoxNodeList.indexOf(box)
                    console.log(boxIndex)
                    gameBoard.theGameBoard[boxIndex]=currentPlayer.marker
                    box.textContent=gameBoard.theGameBoard[boxIndex];
                    if(currentPlayer == playerOne){
                        currentPlayer=playerTwo;
                    } else{
                        currentPlayer=playerOne
                    }

                    checkForWinner();
                })
            })
        })();

        // gridBoxes.forEach((box)=>{
        // let boxIndex=arrayOfGridBoxNodeList.indexOf(box);
        // box.textContent=gameModule.gameBoard.theGameBoard[boxIndex];
        // });

        
    };
   
    const gameFlow= ()=>{
        let checkSpot=function(){
            gridBoxes.forEach((box)=>{
                box.addEventListener("mouseenter", ()=>{
                    box.classList.add("boxHovered")
                })
            })

            gridBoxes.forEach((box)=>{
                box.addEventListener("mouseleave", ()=>{
                    box.classList.remove("boxHovered")
                })
            })
        };

        const playerTwoButtons= document.querySelectorAll(".playerTwoSelection")
        playerTwoButtons.forEach((button) => {
            button.disabled=true;
        });

        const playerOneButtons= document.querySelectorAll(".playerOneSelection")
        
        playerOneButtons.forEach((button) => {
            button.addEventListener("click", (e)=>{
                console.log(e.target.textContent);
                playerOne.marker=e.target.textContent
                console.log(playerOne.marker)
                if (playerOne.marker=="X"){
                    playerTwo.marker="o";
                } else if(playerOne.marker=="o"){
                    playerTwo.marker="X";
                };
                playerOneButtons.forEach((button)=>{
                    button.disabled=true;
                });
                checkSpot();
            })
        });
        
    };

    
    return{gameBoard, linkBoardToGrid, gameFlow,playerOne,playerTwo}
})();


gameModule.gameFlow();
gameModule.linkBoardToGrid();


    










