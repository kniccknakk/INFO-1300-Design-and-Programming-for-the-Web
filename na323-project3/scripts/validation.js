$(document).ready(function () {

// TODO: when user selects that they have dietary restrictions
$("#yes").on("change", function() {

    console.log("yes selected");

    $("#specification_label").removeClass("hidden");
    $("#specifications").removeClass("hidden");
    $("#specifications").attr("required", true);



})


// TODO: when user selects that they have no dietary restrictions
$("#no").on("change", function() {

    console.log("no selected");

    $("#specification_label").addClass("hidden");
    $("#specifications").addClass("hidden");
    $("#restriction_error").addClass("hidden");
    $("#specifications").attr("required", false);


})

$("#raffle").on("submit", function() {
  var formValid = true;
	// if name component is valid ("Check Component Validity" snippet):

  if( $("#name").prop("validity").valid ) {

    $("#name_error").addClass("hidden");

} else {

  $("#name_error").removeClass("hidden");
  formValid = false;
}

  if( $("#email").prop("validity").valid ) {
  // hide feedback message
  $("#email_error").addClass("hidden");
} else {
  // show feedback message
  $("#email_error").removeClass("hidden");
  formValid = false;
}


// Number of items
var party_size = parseInt($("#party_size").val());
if ( party_size > 0 ) {
  $("#num_error").addClass("hidden");
} else {
  $("#num_error").removeClass("hidden");

  formValid = false;
};


if( $("#robbies").is(":checked") ||
    $("#aj").is(":checked") ||
    $("#bubo").is(":checked") ||
    $("#ba").is(":checked") ||
    $("#creamcycle").is(":checked") ) {

    $("#vendor_error").addClass("hidden")

} else {
  $("#vendor_error").removeClass("hidden")


  // TODO: snippet(s) for when NO checkboxes are checked

  formValid = false;
}

if( $("#specifications").prop("validity").valid ) {

  $("#restriction_error").addClass("hidden")

  // TODO: snippet(s) for if component data is valid

} else {

  $("#restriction_error").removeClass("hidden")


  // TODO: snippet(s) for if component data is NOT valid

  formValid = false;
}


  return formValid;

});
});
