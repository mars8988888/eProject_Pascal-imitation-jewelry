function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  
  for (i = 0; i < tabcontent.length; i++) { //
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    
  }
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].id = tablinks[i].id.replace("item10000", "");
    
  }

  document.getElementById(cityName).style.display = "block";  
  evt.currentTarget.className += " active";                    // 
  
  evt.currentTarget.id += "item10000"

  var z = document.getElementById("item10000").innerHTML;



  var x = document.getElementById("click");

  x.innerHTML = z;
  
}




