
const GameModule =(function(){
    const gameBoard= {
        theGameBoard:["x","O","x","x","O","x","x","O","x"]
    }
    const linkBoardToGrid =function (){
        const topLeft=document.querySelectorAll(".gridBox")
    }

    const Player= function(name){
        name=name;
        return {name}
    }

    
    return{gameBoard,Player}
    
})();



const testObject=GameModule.Player("miguel");

console.log(testObject)

const linkBoardToGrid =function(){
    const topLeft=document.querySelectorAll(".gridBox")
}

const topLeft=document.querySelectorAll('.gridBox')
// topLeft.forEach((box)=>{
//     console.log(topLeft.indexOf(box))
// })
console.log(topLeft)
let nodeListToArray= Array.from(topLeft)
console.log(nodeListToArray)



