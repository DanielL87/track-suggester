$(document).ready(function() {
  $("#submit").click(function(event) {

    var school = $("#school").val();
    var describe = $("#describe").val();
    var hobby = $("#hobby").val();
    var sales = $("#sales").val();
    var goal = $("#goal").val();


  if (school == "Art" && describe == "Quiet and Reserved" && hobby == "Painting" && sales == "Marketing" && goal == "To share my design visions with others"){
    $(".result2").hide();
    $(".result3").hide();
    $(".result4").hide();
    $(".result1").show();
  }
  else if (school == "Math and Science" && describe == "Loud and Cheerful" && hobby == "Playing Video Games" && sales == "Working out Shipping Details" && goal == "To learn how an app works"){
    $(".result1").hide();
    $(".result3").hide();
    $(".result4").hide();
    $(".result2").show();
  }
  else if (school == "Language Arts" && describe == "Neither" && hobby == "Reading Books" && sales == "Head of Finance" && goal == "To make money"){
    $(".result1").hide();
    $(".result2").hide();
    $(".result4").hide();
    $(".result3").show();
  }
  else {
    $(".result1").hide();
    $(".result2").hide();
    $(".result3").hide();
    $(".result4").show();
  }

  event.preventDefault();
  });
});
