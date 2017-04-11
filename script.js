function animate(id){
  console.log(id);
  switch(id){
    case "main_about":
      document.getElementById("main_home").style.display = "none";
      document.getElementById("main_contact").style.display = "none";
      document.getElementById("main_about").style.display = "";
      var id_build = '#' + id;
      $(id_build).animate2('slideInLeft');
    break;
    case "main_home":
      document.getElementById("main_about").style.display = "none";
      document.getElementById("main_contact").style.display = "none";
      document.getElementById("main_home").style.display = "";
      var id_build = '#' + id;
      $(id_build).animate2('slideInRight');
    break;
    case "main_contact":
      document.getElementById("main_about").style.display = "none";
      document.getElementById("main_home").style.display = "none";
      document.getElementById("main_contact").style.display = "";
      var id_build = '#' + id;
      $(id_build).animate2('slideInRight');
    break;
    default:
      console.log("none");
   }
 
}

window.onload = function(){

document.getElementById('menu_home').addEventListener('click', function(){animate('main_home');}, false);
document.getElementById('menu_about').addEventListener('click', function(){animate("main_about");}, false);
document.getElementById('menu_contact').addEventListener('click', function(){animate("main_contact");}, false);

}


