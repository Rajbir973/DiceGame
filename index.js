var ramNumber=Math.floor(Math.random()*6)+1
var randomImage= "dice" + ramNumber + ".png";
var randomImage1 ="images/" + randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

var ramNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+ramNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(ramNumber===ramNumber2)
{
    document.querySelector("h1").innerHTML="Play Again to Decide a winner";
} 

else if(ramNumber>ramNumber2)
{
    document.querySelector("h1").innerHTML="Player One is the winner &#128681";
      
}
else
{
    document.querySelector("h1").innerHTML="Player Two is the winner &#128681";
   
}