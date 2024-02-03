// when user submits form ("On Form Submit Event" snippet):

$(document).ready(function () {
$("#ticketForm").on("submit", function() {
  var formValid = true;
	// if name component is valid ("Check Component Validity" snippet):

  if( $("#userName").prop("validity").valid ) {

    $("#userNameFeedback").addClass("hidden");

} else {

  $("#userNameFeedback").removeClass("hidden");
  formValid = false;
}

  if( $("#userEmail").prop("validity").valid ) {
  // hide feedback message
  $("#emailFeedback").addClass("hidden");
} else {
  // show feedback message
  $("#emailFeedback").removeClass("hidden");
  formValid = false;
}

  if( $("#numTickets").prop("validity").valid ) {
  // hide feedback message
  $("#ticketsFeedback").addClass("hidden");
} else {
  // show feedback message
  $("#ticketsFeedback").removeClass("hidden");
  formValid = false;
}

  // TODO: snippet(s) for if component data is NOT valid
  return formValid;

		// hide name feedback
	// else
		// show name feedback


	// if email component is valid ("Check Component Validity" snippet):
		// hide email feedback
	// else
		// show email feedback


  // if numTickets component is valid ("Check Component Validity" snippet):
		// hide email feedback
	// else
		// show email feedback


	// send form to server if formValid is true (included as part of "On Form Submit Event" snippet)
});
});
