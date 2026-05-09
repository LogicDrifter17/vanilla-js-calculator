
let button = document.querySelectorAll("button");
let calculating_area = document.getElementById("calculating_area");
var finalstring ="";
for (let i = 0; i < button.length; i++) {

  if (i == 1) {
    continue;            // skip clear buttton
  }
  if (i == 2) {
    continue;            //  skip del button 
  }


  if (i == 19) {
    continue;           //  skip result button 
  }

  console.log(button[i], i);
  button[i].addEventListener("click", function () {
    let input = document.createElement("span");
    input.innerText = this.innerText;                                 //press and display buttons
    console.log(input);
    calculating_area.appendChild(input);

  });
}
//------------------------------------------------------------------------del button(removes all element in the display)--------------------------------------------------------------------------------------------------------------------------------------------------------------------
let del = document.getElementById("Delete");
del.addEventListener("click", function () {
  let lastchild = calculating_area.lastElementChild;
  console.log(lastchild);
  calculating_area.removeChild(lastchild);

})
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------clear button(remove the single element in the display)--------------------------------------------------------------------------------------------------------------------------------------------------------------
let clear = document.getElementById("Clear");
clear.addEventListener("click", function () {
  calculating_area.replaceChildren();
})
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  let symbol = document.querySelectorAll(".symbol")
  let result = document.getElementById("Answer");

// ----------------------------------------------------------------------- equal to button--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
result.addEventListener("click", function () {
  
  let lastchild = calculating_area.lastElementChild;
  let firstchild = calculating_area.firstElementChild;
 
//-------------------------------------------------------------------error handling (symbol at first and last)-----------------------------------------------------------------------------------------------------------------------------------------------
  
   if (["+", "-", "*", "/", "%", "."].includes(lastchild.innerText) || ["+", "-", "*", "/", "%", "."].includes(firstchild.innerText))
        
  {

    calculating_area.replaceChildren();
    let error = document.createElement("span");
    error.innerText = "syntax error";
    calculating_area.appendChild(error);

     return
  }
//-------------------------------------------------------error handling (double symbol)------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

while(calculating_area.firstElementChild)  
  {
    let firstchild = calculating_area.firstElementChild;   // again declaring if not it will always takes value stored in the before "firstchild" varible, so it will not update
  if( ["+", "-", "*", "/", "%", "."].includes(firstchild.innerText)){
    if (firstchild.nextElementSibling && ["+", "-", "*", "/", "%", "."].includes(firstchild.nextElementSibling.innerText))
       {
      calculating_area.replaceChildren();
      let error = document.createElement("span");
      error.innerText = "syntax error";
      calculating_area.appendChild(error);
      return;
    }
  }

         finalstring += firstchild.innerText;
     calculating_area.removeChild(calculating_area.firstElementChild);
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
if(calculating_area.firstElementChild == null)
{

    let finval = eval(finalstring);
    let answer = document.createElement("span");
    answer.innerText = finval;
    calculating_area.appendChild(answer);
    finalstring = "";
    return 
    
}


  

})




  























