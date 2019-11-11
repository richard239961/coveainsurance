var pon = '234112'
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function random() {
  document.getElementById("gen").innerHTML = Math.random();
}

function title() {
  a = document.getElementById("title").value
  if(a=="Question one"){
    document.getElementById("document.getElementById('id01').style.display='block'")
  } else if(a=="Question one"){
      document.getElementById("document.getElementById('id02').style.display='block'")
  } else if(a=="Question Three"){
      document.getElementById("document.getElementById('id03').style.display='block'")
  } else if(a=="Question Four"){
      document.getElementById("document.getElementById('id04').style.display='block'")
  } else if(a=="Question Five"){
      document.getElementById("document.getElementById('id05').style.display='block'")
  } else if(a=="Question Six"){
      document.getElementById("document.getElementById('id06').style.display='block'")
  } else if(a=="Question Seven"){
      document.getElementById("document.getElementById('id07').style.display='block'")
  } else if(a=="Question Eight"){
      document.getElementById("document.getElementById('id08').style.display='block'")
  } else if(a=="Question Nine"){
      document.getElementById("document.getElementById('id09').style.display='block'")
  } else (a=="Question Ten"){
     document.getElementById("document.getElementById('id10').style.display='block'")
   }
}
