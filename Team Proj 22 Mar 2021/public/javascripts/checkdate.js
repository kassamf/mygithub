// Authors: Mostafa Mohamed/Irshaad Sardiwalla
// Grp1 Team 2
// Date: 28 Mar 2021

//Description: changes expired dates to red

function checkDate(){
    // alert("This is from the linked JS file");
    for (let element of document.getElementsByClassName('dateclass')) {
        let startdate=new Date(element.innerText);
        if (startdate < new Date()){
          element.previousElementSibling.style="color:red";}
      }
        }
