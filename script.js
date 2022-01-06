

var rand=Math.random();
rand=rand*6;
rand=Math.floor(rand)+1;
var src_1="images/dice"+rand+".png";
document.querySelector(".img1").setAttribute("src",src_1);



var rand2=Math.random();
rand2=rand2*6;
rand2=Math.floor(rand2)+1;
var src_2="images/dice"+rand2+".png";
document.querySelector(".img2").setAttribute("src",src_2);


if(rand===rand2)
{
  document.querySelector(".container h1").innerHTML="Draw";

}
else if(rand>rand2)
{
      document.querySelector(".container h1").innerHTML="Player One Wins";

}
else{
       document.querySelector(".container h1").innerHTML="Player Two Wins";

}
