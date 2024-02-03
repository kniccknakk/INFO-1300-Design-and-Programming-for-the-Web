// TODO: when user select credit option
$("#credit").on("change", function() {

    console.log("credit selected");

    $("#credit_label").removeClass("hidden");
    $("#credit_num").removeClass("hidden");
    $("#credit_num").attr("required", true);


})


// when user selects no dietary restrictions option
$("#no").on("change", function() {

    console.log("no selected");

    $("#credit_label").addClass("hidden");
    $("#credit_num").addClass("hidden");
    $("#credit_error").addClass("hidden");
    $("#credit_num").attr("required", false);


})
// when user submits form
$("#order").on("submit", function() {
  var formValid = true;

  // Check whether the name was provided and show an error if not.
  if ( $("#name").prop("validity").valid ) {
    $("#name_error").addClass("hidden");
  } else {
    $("#name_error").removeClass("hidden");

    formValid = false;
  };

  // Check whether the email is valid and show an error if not.
  if ( $("#email").prop("validity").valid ) {
    $("#email_error").addClass("hidden");
  } else {
    $("#email_error").removeClass("hidden");

    formValid = false;
  };

  // Number of items
  var coffee = parseInt($("#coffee").val());
  var tea = parseInt($("#tea").val());
  var donuts = parseInt($("#donuts").val());
  var bagels = parseInt($("#bagels").val());
  if ( coffee + tea + donuts + bagels > 0 ) {
    $("#item_error").addClass("hidden");
  } else {
    $("#item_error").removeClass("hidden");

    formValid = false;
  };

  // Pick-up Date & Time
  if ( $("#time").prop("validity").valid && $("#date").prop("validity").valid ) {
    $("#time_error").addClass("hidden");
  } else {
    $("#time_error").removeClass("hidden");

    formValid = false;
  };

  // Credit card number
  if ( $("#credit_num").prop("validity").valid ) {
    $("#credit_error").addClass("hidden");
  } else {
    $("#credit_error").removeClass("hidden");

    formValid = false;
  };

  return formValid;
});
