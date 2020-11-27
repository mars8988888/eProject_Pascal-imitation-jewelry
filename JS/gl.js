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
  document.getElementById(cityName).style.display = "block";  
  evt.currentTarget.className += " active";                    // 
}


// function myFunction(e) {
//   // document.getElementById("gallery").style.width = "500px";
//   // var y = e.clientY;
//   var Count, n,m,i;
//   var x = document.getElementsByClassName("gallery") 
//   Count = x.style.width
  
//   for (i =0; i < Count; i++){
//     n++;
//     m = e.currentTarget.id += "n";
//     document.getElementById("m").style.width = "500px";
//   }
      

//   // // var coor = "Coordinates: (" + x + "," + y + ")";
//   // document.getElementById("demo").innerHTML = coor;
// }

// function clearCoor() {
//   document.getElementById("m").style.width = "200px"
// }