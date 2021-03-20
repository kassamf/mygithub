//IRSHAAD SARDIWALLA
//TRAVEL AGENCY ASSIGNMENT PART 1 WEBDEV CPRG-008-001
//03 MAR 2021
//TEAM 2

function confirmation(){
    return window.confirm("Are you sure you would like to proceed ?");     
}

// courtesy of Mostafa Mohamed
function mouseEnter(caller){
    if(caller.children.length < 3) return;
    if(caller.children[2].tagName === 'SMALL')
        caller.children[2].style.display=''
}

function mouseOut(caller){
    if(caller.children.length < 3) return;
    if(caller.children[2].tagName === 'SMALL')
        caller.children[2].style.display='none'
}

function mypageLoad(){
    let divs = document.getElementsByClassName("form-group");
    for(let i = 0; i < divs.length; i++){
        divs[i].children[1].onfocus= ()=> mouseEnter(divs[i])
        divs[i].children[1].onblur= ()=> mouseOut(divs[i])
    }
}
