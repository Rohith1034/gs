var user_name = "";
function collect() {
  user_name = document.querySelectorAll("input")[0].value;
  var email_id = document.querySelectorAll("input")[1].value;
  var phone_number = document.querySelectorAll("input")[2].value;
  var address = document.querySelectorAll("input")[3].value;
  var pin_code = document.querySelectorAll("input")[4].value;
  alert("Successfully submitted");
  redirect();
}
function redirect() {
  var rd = window.location.href = "file:///C:/Users/manin/webdev/grocery/grocery.html";
  document.querySelector(".title-heading").innerHTML = ""
}




function search() {
  var searchInput = document.querySelector(".searchbox").value.toLowerCase();
  var cardTitles = document.querySelectorAll(".card-title");
  var count = 0;
  
  for (var i = 0; i < cardTitles.length; i++) {
    var title = cardTitles[i].innerHTML.toLowerCase();
    if (title.includes(searchInput)) {
      count++;
      var itemId = cardTitles[i].getAttribute("id");
      window.location.href = "#" + itemId;
      document.querySelector("#" + itemId).parentNode.parentNode.classList.add("animated");
      setTimeout(function (itemId) {
        document.querySelector("#" + itemId).parentNode.parentNode.classList.remove("animated");
      }, 2000, itemId);
    }
  }
  
  if (count === 0) {
    alert("Not Found!!");
    window.location.href = "#";
  }
}
