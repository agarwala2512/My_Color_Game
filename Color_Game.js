var no_of_colors=6;
var colors=[];
var color_selected;
var lis=document.querySelectorAll(".square");
// var easy=document.querySelector("#easy");
// var hard=document.querySelector("#hard");
var h1=document.querySelector("h1");
var colorDisplay=document.getElementById("colorDisplay");
var resetButton=document.getElementById("reset");
colorDisplay.textContent=color_selected;
var messageDisplay=document.querySelector("#message");
var modeButton=document.querySelectorAll(".mode");
 
init();

 function init(){
    setupModeButtons();
    setupSquares();
    reset();
 }

 function setupModeButtons(){
    for(var i=0;i<modeButton.length;i++){
        modeButton[i].addEventListener("click",function()
        {
            modeButton[1].classList.remove("selected");
            modeButton[0].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"?no_of_colors=3:no_of_colors=6;
            reset();
        });
    }
 }
 function setupSquares(){
    for(var i=0;i<lis.length;i++)
    {
            lis[i].addEventListener("click" , function(){
                var picked_color=this.style.background;
                if(color_selected===picked_color)
                {
                    messageDisplay.textContent="Correct";
                    changecolor(color_selected);
                    resetButton.textContent="Play Again??";
                    h1.style.background=color_selected;
                }
                else{
                    this.style.background="#232323";  
                    messageDisplay.textContent="Try Again";
                }
            });
    }
 }
function reset(){
    colors=generateRandomColors(no_of_colors);
    color_selected=pickColor();
    colorDisplay.textContent=color_selected;
    for(var i=0;i<lis.length;i++)
    {
        if(colors[i])
        {
            lis[i].style.display="block";
            lis[i].style.background=colors[i];
        }else
        lis[i].style.display="none";
    }
    messageDisplay.textContent="";
    resetButton.textContent="New Colors";
    h1.style.background="steelblue";
}

resetButton.addEventListener("click",function()
{
    reset();
});

function changecolor(color){
    for(var i=0;i<lis.length;i++)
    {
        lis[i].style.background=color;
     }
}
function pickColor(){
    var temp=Math.floor(Math.random()*(colors.length));
    return colors[temp];
}
function generateRandomColors(num){
    var arr=new Array(num);
    for(var i=0;i<num;i++)
    {
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
  var r=Math.floor(Math.random()*256); 
  var g=Math.floor(Math.random()*256); 
  var b=Math.floor(Math.random()*256);
  return ("rgb(" + r + ", " + g + ", " + b +")"); 
}