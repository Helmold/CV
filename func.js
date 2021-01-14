window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*
function ber(){
  document.getElementById("ber").style.display="block";
  document.getElementById("aus").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("hob").style.display = "none";
  document.getElementById("neb").style.display = "none";
}
function aus(){
  document.getElementById("ber").style.display="none";
  document.getElementById("aus").style.display = "block";
  document.getElementById("skill").style.display = "none";
  document.getElementById("hob").style.display = "none";
  document.getElementById("neb").style.display = "none";
}
function skill(){
  document.getElementById("ber").style.display="none";
  document.getElementById("aus").style.display = "none";
  document.getElementById("skill").style.display = "block";
  document.getElementById("hob").style.display = "none";
  document.getElementById("neb").style.display = "none";
}
function hob(){
  document.getElementById("ber").style.display="none";
  document.getElementById("aus").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("hob").style.display = "block";
  document.getElementById("neb").style.display = "none";
}
function neb(){
  document.getElementById("ber").style.display="none";
  document.getElementById("aus").style.display = "none";
  document.getElementById("skill").style.display = "none";
  document.getElementById("hob").style.display = "none";
  document.getElementById("neb").style.display = "block";
}*/

$(document).ready(function(){
  $("#b").click(function(){
    $("#aus").hide();
    $("#skill").hide();
    $("#hob").hide();
    $("#neb").hide();
    $("#ber").fadeIn(2000);
  });

  $("#a").click(function(){
    $("#ber").hide();
    $("#skill").hide();
    $("#hob").hide();
    $("#neb").hide();
    $("#aus").fadeIn(2000);
  });

  $("#s").click(function(){
    $("#aus").hide();
    $("#ber").hide();
    $("#hob").hide();
    $("#neb").hide();
    $("#skill").fadeIn(2000);
  });

  $("#h").click(function(){
    $("#aus").hide();
    $("#skill").hide();
    $("#ber").hide();
    $("#neb").hide();
    $("#hob").fadeIn(2000);
  });

  $("#n").click(function(){
    $("#aus").hide();
    $("#skill").hide();
    $("#hob").hide();
    $("#ber").hide();
    $("#neb").fadeIn(2000);
  });
  $("#down").click(function(){
    $("#aus").hide();
    $("#skill").hide();
    $("#hob").hide();
    $("#neb").hide();
    $("#ber").hide();
  });
});
