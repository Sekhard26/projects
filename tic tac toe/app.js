let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let msgContainer= document.querySelector(".msg-container");
let newGameBtn= document.querySelector("#new-btn");
let msg= document.querySelector("#msg");


let turnO= true ;//playerX and playerO

const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("box was clicked")
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetGame=()=>{
turnO= true;
enableBoxes();
msgContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
msg.innerText=`Congratulation, The winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner= ()=>{
    for(let patterns of winPattern){
     

        let pos1Val= boxes[patterns[0]].innerHTML;
        let pos2Val= boxes[patterns[1]].innerHTML;
        let pos3Val= boxes[patterns[2]].innerHTML;
      if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
        //   console.log("winner", pos1Val);

          showWinner(pos1Val);
        }
        
      }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame );


