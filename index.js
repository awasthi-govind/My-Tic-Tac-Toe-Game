var b0 = document.querySelectorAll("button")[0].innerText;
var b1 = document.querySelectorAll("button")[1].innerText;
var b2 = document.querySelectorAll("button")[2].innerText;
var b3 = document.querySelectorAll("button")[3].innerText;
var b4 = document.querySelectorAll("button")[4].innerText;
var b5 = document.querySelectorAll("button")[5].innerText;
var b6 = document.querySelectorAll("button")[6].innerText;
var b7 = document.querySelectorAll("button")[7].innerText;
var b8 = document.querySelectorAll("button")[8].innerText;
var p = 1;
for(let i = 0; i < 9; i++){
document.querySelectorAll("button")[i].addEventListener("click" , function () {
    var a = i;
    if(p % 2 !== 0){
    document.querySelectorAll("button")[a].firstElementChild.innerText = "X";
    this.disabled = true;
    b0 = document.querySelectorAll("button")[0].innerText;
b1 = document.querySelectorAll("button")[1].innerText;
b2 = document.querySelectorAll("button")[2].innerText;
b3 = document.querySelectorAll("button")[3].innerText;
b4 = document.querySelectorAll("button")[4].innerText;
b5 = document.querySelectorAll("button")[5].innerText;
b6 = document.querySelectorAll("button")[6].innerText;
b7 = document.querySelectorAll("button")[7].innerText;
b8 = document.querySelectorAll("button")[8].innerText;
    if(b0 === "X" && b0 === b1 && b1 === b2){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b0 === b1 && b1 === b2){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b3 === "X" && b4 === b3 && b5 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b3 === "O" && b4 === b3 && b5 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b6 === "X" && b7 === b6 && b8 === b7){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b6 === "O" && b7 === b6 && b8 === b7){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "X" && b0 === b3 && b3 === b6){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b0 === b3 && b3 === b6){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b1 === "X" && b4 === b1 && b7 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b1 === "O" && b4 === b1 && b7 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "X" && b5 === b2 && b8 === b5){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "O" && b5 === b2 && b8 === b5){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "X" && b4 === b0 && b8 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b4 === b0 && b8 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "X" && b4 === b2 && b6 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "O" && b4 === b2 && b6 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else {};
    } else{
        document.querySelectorAll("button")[a].firstElementChild.innerHTML = "O";
        this.disabled = true;
        b0 = document.querySelectorAll("button")[0].innerText;
b1 = document.querySelectorAll("button")[1].innerText;
b2 = document.querySelectorAll("button")[2].innerText;
b3 = document.querySelectorAll("button")[3].innerText;
b4 = document.querySelectorAll("button")[4].innerText;
b5 = document.querySelectorAll("button")[5].innerText;
b6 = document.querySelectorAll("button")[6].innerText;
b7 = document.querySelectorAll("button")[7].innerText;
b8 = document.querySelectorAll("button")[8].innerText;
        if(b0 === "X" && b0 === b1 && b1 === b2){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b0 === b1 && b1 === b2){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b3 === "X" && b4 === b3 && b5 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b3 === "O" && b4 === b3 && b5 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b6 === "X" && b7 === b6 && b8 === b7){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b6 === "O" && b7 === b6 && b8 === b7){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "X" && b0 === b3 && b3 === b6){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b0 === b3 && b3 === b6){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b1 === "X" && b4 === b1 && b7 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b1 === "O" && b4 === b1 && b7 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "X" && b5 === b2 && b8 === b5){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "O" && b5 === b2 && b8 === b5){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "X" && b4 === b0 && b8 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b0 === "O" && b4 === b0 && b8 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "X" && b4 === b2 && b6 === b4){
    document.querySelectorAll(".X h1")[0].classList.toggle("output");
    document.querySelectorAll(".O h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else if(b2 === "O" && b4 === b2 && b6 === b4){
    document.querySelectorAll(".O h1")[0].classList.toggle("output");
    document.querySelectorAll(".X h1")[1].classList.toggle("output");
    for(var  m = 0 ; m < 9; m++){
    document.querySelectorAll("button")[m].disabled = true;
}
} else {};
    }
    p++;
});
};

function refreshPage(){
    window.location.reload();
} 


// let b0 = document.querySelectorAll("button")[0].innerHTML;
// let b1 = document.querySelectorAll("button")[1].innerHTML;
// let b2 = document.querySelectorAll("button")[2].innerHTML;
// let b3 = document.querySelectorAll("button")[3].innerHTML;
// let b4 = document.querySelectorAll("button")[4].innerHTML;
// let b5 = document.querySelectorAll("button")[5].innerHTML;
// let b6 = document.querySelectorAll("button")[6].innerHTML;
// let b7 = document.querySelectorAll("button")[7].innerHTML;
// let b8 = document.querySelectorAll("button")[8].innerHTML;

// if(b0 === "X" && b0 === b1 && b1 === b2){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b0 === "O" && b0 === b1 && b1 === b2){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b3 === "X" && b4 === b3 && b5 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b3 === "O" && b4 === b3 && b5 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b6 === "X" && b7 === b6 && b8 === b7){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b6 === "O" && b7 === b6 && b8 === b7){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b0 === "X" && b0 === b3 && b3 === b6){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b0 === "O" && b0 === b3 && b3 === b6){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b1 === "X" && b4 === b1 && b7 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b1 === "O" && b4 === b1 && b7 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b2 === "X" && b5 === b2 && b8 === b5){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b2 === "O" && b5 === b2 && b8 === b5){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b0 === "X" && b4 === b0 && b8 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b0 === "O" && b4 === b0 && b8 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b2 === "X" && b4 === b2 && b6 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else if(b2 === "O" && b4 === b2 && b6 === b4){
//     document.querySelectorAll(".X .win").classList.toggle("output");
//     for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }
// } else {};

// for(let  m = 0 ; m < 9; m++){
//     document.querySelectorAll("button")[m].disabled = true;
// }