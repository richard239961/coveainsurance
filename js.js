function myFunction() /* When the user clicks on the button, toggle between hiding and showing the dropdown content */ {
    document.getElementById("myDropdown").classList.toggle("show");
  }
function filterFunction() /*Filter funtion for dropdown not being used*/ {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("polices");
  a = div.getElementsByTagName("a, h1");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
