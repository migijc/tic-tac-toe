let gameBoard= {
    board: ["x","","","","","","","","X"],
    linkGrid: function(){
        let boxes= document.querySelectorAll(".gridBox")
        let boxesArray=Array.from(boxes)
        let boxIndex=null;
        boxesArray.forEach((box)=>{
            boxIndex=boxesArray.indexOf(box);
            box.textContent=gameBoard.board[boxIndex]
})
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
            } else if(e.target.textContent=="o"){
                players.player2=playerFactory("player2", "X")
            }
            player1Buttons.forEach((button)=>{
                button.disabled=true;
            })
        })
    })

    let gridBoxes= document.querySelectorAll(".gridBox")
    return{}
}())









