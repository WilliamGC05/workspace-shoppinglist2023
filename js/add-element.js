/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$(".hot").each(function(){
  this.setAttribute("class", "cool");
  // Add Cool Class **
  
});

// traverse the elements
$("#two").next().next().text("Candy");

// add a new element by clicking the plus sign
document.getElementById("add").addEventListener("click", addElement, false);

// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element

    //JQuery
    $("#todo").append("<li> <input type=\"text\"> </li>");
    $('input').blur(function() {
      var userInput = $(this).val();
      $(this).parent().addClass("cool");
      $(this).parent().text(userInput);
    });
    $('li').click(changeStyle);

    //JS
    //document.getElementById("todo").innerHTML += "<li> <input type=\"text\"> </li>";
    
  // whenever the user are done add the element
  console.log("added element" + $('input').val());
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle

//  three style : complete, cool, hot

function changeStyle() {
  // change the style of the element

  //JQuery
  if($(this).hasClass("cool")){
    $(this).removeClass("cool");
    $(this).addClass("complete");
  }
  else if ($(this).hasClass("complete")){
    $(this).removeClass("complete");
    $(this).addClass("cool");
  }
  else if ($(this).hasClass("hot")){
    $(this).removeClass("hot");
    $(this).addClass("complete");
  }

  // CTRL + I to Change all elements to complete
  

  //JS
  /*if(this.className == "cool"){
    this.className = "complete";
  }
  else if (this.className == "complete"){
    this.className = "cool";
  }*/
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement, false);

function removeElement() {
  // remove the marked elements  -- element with style complete
  //JQuery
  $(".complete").remove();
}
