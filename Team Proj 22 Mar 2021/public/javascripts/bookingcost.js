//IRSHAAD SARDIWALLA
//TRAVEL AGENCY ASSIGNMENT PART 1 WEBDEV CPRG-008-001
//03 MAR 2021
//TEAM 2

function totalCost(caller,pkgcost){
    // alert("This is from the linked JS file");
    let travellers=parseInt(caller.value)
    document.getElementById('cost').innerText = 'Cost $' + (pkgcost*travellers);
        }
