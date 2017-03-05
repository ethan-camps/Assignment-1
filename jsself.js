/*create an event listener to make sure the page is 
loaded before running the script and PUT ALL JAVASCRIPT IN INIT FUNCTION*/

function init(){

$('#hidden_about').hide();
$('#hidden_design').hide();
$('#hidden_lh').hide();
$('#hidden_contact').hide();
//set up relationship between id of box 1 with a varaible

//cover variable
var introCover = document.getElementById('intro');

//box variables
var firstBox = document.getElementById('box1');
var secondBox = document.getElementById('box2');
var thirdBox = document.getElementById('box3');
var fourthBox = document.getElementById('box4');


var navAbout = document.getElementById('nav_about');
var navDesign = document.getElementById('nav_design');
var navLh = document.getElementById('nav_lh');
var navContact = document.getElementById('nav_contact');




/* add an event listener to 
detect mouse interaction  - listen for even ON vairable for box1 */


//first argument is event, second is argument to call*/
firstBox.addEventListener('mousedown',firstBoxFunction);
secondBox.addEventListener('mousedown',secondBoxFunction);
thirdBox.addEventListener('mousedown',thirdBoxFunction);
fourthBox.addEventListener('mousedown',fourthBoxFunction);

introCover.addEventListener('mousedown',fadeIntroCover);



/*write a function to do somehting when the mouse interacts with the element*/
function firstBoxFunction (){

      //do stuff
      $(firstBox).css('width','62.25%');
      $(secondBox).css('width','12.25%');
      $(thirdBox).css('width','12.25%');
      $(fourthBox).css('width','12.25%');


      $(navAbout).css('float','right');
      $(navAbout).css('width','10%');
      $(navDesign).css('width','50%');
      $(navLh).css('width','30%');
      $(navContact).css('width','50%');
      $('#hidden_about').fadeIn(2000);
      $('#hidden_design').hide();
      $('#hidden_lh').hide();
      $('#hidden_contact').hide();
}

function secondBoxFunction (){

      //do stuff
      $(firstBox).css('width','12.25%');
      $(secondBox).css('width','62.25%');
      $(thirdBox).css('width','12.25%');
      $(fourthBox).css('width','12.25%');


      $(navAbout).css('width','50%');
      $(navDesign).css('float','right');
      $(navDesign).css('width','10%');
      $(navLh).css('width','30%');
      $(navContact).css('width','50%');
      $('#hidden_design').fadeIn(2000);
      $('#hidden_about').hide();
      $('#hidden_lh').hide();
      $('#hidden_contact').hide();

}

function thirdBoxFunction (){

      //do stuff
      $(firstBox).css('width','12.25%');
      $(secondBox).css('width','12.25%');
      $(thirdBox).css('width','62.25%');
      $(fourthBox).css('width','12.25%');


      $(navAbout).css('width','50%');
      $(navDesign).css('width','50%');
      $(navLh).css('width','10%');
      $(navLh).css('float','right');
      $(navContact).css('width','50%');
      $('#hidden_about').hide();
      $('#hidden_design').hide();
      $('#hidden_contact').hide();
      $('#hidden_lh').fadeIn(2000);

}

function fourthBoxFunction (){

      //do stuff
      $(firstBox).css('width','12.25%');
      $(secondBox).css('width','12.25%');
      $(thirdBox).css('width','12.25%');
      $(fourthBox).css('width','62.25%');
      $(navAbout).css('width','50%');
      $(navDesign).css('width','50%');
      $(navLh).css('width','30%');
      $(navLh).css('padding-right','5%');
      $(navContact).css('float','right');
      $(navContact).css('width','15%');
      $(navContact).css('padding-right','5%');
      $('#hidden_about').hide();
      $('#hidden_design').hide();
      $('#hidden_lh').hide();
      $('#hidden_lh').hide();
      $('#hidden_contact').fadeIn(2000);
}







function fadeIntroCover (){

      //do stuff
      $(introCover).fadeOut(2000);
}


};


//-- Photography Slideshow----//
var images = ["p_1.png","p_2.jpg","p_3.jpg","p_5.jpg","p_7.jpg"];
          
      
      var i = 1;
      
      
      
      var clear = setInterval(slide_show,2000);
      
                        
      
      
      function slide_show(){;
      
            $("#img1").attr("src",images[i]);
            
            $("#img1").hover(hover_func);
            
            $("#img1").mouseout(restart);
            
      
            
            function hover_func(){
                  
                  
                  clearInterval(clear);
            }
            
            function restart(){
                  
            clear = setInterval(slide_show,2000);
                  
                  
            }
            
                  if(i < 4)
                        {
                              i++
                        }
      
                  else{
            
                        i=0

                        }
                                     
      }

  //end of init function 


// add the event listener to detect when the page has loaded


window.addEventListener("load",init);


