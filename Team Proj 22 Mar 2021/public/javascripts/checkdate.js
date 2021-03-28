// Authors:

function checkDate(){
    // alert("This is from the linked JS file");
    for (let element of document.getElementsByClassName('dateclass')) {
        let startdate=new Date(element.innerText);
        if (startdate < new Date()){
          element.previousElementSibling.style="color:red";}
      }
        }
