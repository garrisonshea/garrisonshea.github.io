$(window).on("load", function () {
  let text = $("#welcome-message").text();
  let count = 0;
  // console.log(text);
  let timerID = setInterval(function () {
    let dots = "";
    for (let i = 0; i < count; i++) {
      dots += ".";
    }
    $("#welcome-message").text(text + dots);
    count++;
  }, 1000);

  let timerID2 = setTimeout(function () {
    clearInterval(timerID);
    $("#prompt").removeClass("sr-only").addClass("animated fadeIn");
  }, 8000);
});