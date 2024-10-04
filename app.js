let boxes=document.querySelectorAll(".btn")
let reset=document.querySelector("#reset")
let winner=document.querySelector(".hide")
let msg=document.querySelector("#msg")
let msgContainer=document.querySelector(".msgContainer")
let newGame = document.querySelector("#newGame")

let turn1=true;


let winning=[
    [0,1,2],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let resetgame=()=>{
    turn1=true;
    enablebox();
    msgContainer.classList.add("hide")

}

boxes.forEach((m)=>{
    m.addEventListener("click",()=>{
        if(turn1){
            m.innerText="O"
            turn1=false;
        }else{
            m.innerText="X"
            turn1=true;
        }
        m.disabled=true;
        checkWinner()
    })
})
let disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
let enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


let showWinner=(show)=>{
    msg.innerText =  `Winner is  : ${show}`;
    msgContainer.classList.remove("hide")
    disabledbox();
}
let checkWinner=()=>{
    for(win of winning){
        let win1val=boxes[win[0]].innerText
        let win2val=boxes[win[1]].innerText
        let win3val=boxes[win[2]].innerText


        if(win1val!=""&&win2val!=""&& win3val!=""){
            if(win1val===win2val&&win2val===win3val){
                showWinner(win1val)
    }
}

    }
}


newGame.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)
