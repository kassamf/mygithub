// Authors: Irshaad Sardiwalla

function totalCost(caller,pkgcost){
    // alert("This is from the linked JS file");
    let travellers=parseInt(caller.value)
    document.getElementById('cost').innerText = 'Cost $' + (pkgcost*travellers);
        }
