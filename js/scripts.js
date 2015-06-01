$(document).ready(function(){
  $("#add-place").click(function(){
    $("#new-place").append('<h3>New place:</h3>' +
    '<div id="new-place">' +
    '<div class="new-place">' +
    '<div class="form-group">' +
    '<label for="new-location">Location</label>' +
    '<input type="text" class="form-control new-location">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-landmark">Landmarks</label>' +
    '<input type="text" class="form-control new-landmark">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-timeOfYear">Time of year</label>' +
    '<input type="text" class="form-control new-timeOfYear">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-note">Notes</label>' +
    '<input type="text" class="form-control new-note">' +
    '</div>' +
    '</div>' +
    '</div>');
  });

  $('form#new-person').submit(function(event){
    event.preventDefault();

    var inputFirstName = $('input#new-first-name').val();
    var inputLastName = $('input#new-last-name').val();
    var newTraveler = { firstName: inputFirstName, lastName: inputLastName, places: [] };

  $(".new-place").each(function(){
    var inputLocation = $(this).find("input.new-location").val();
    var inputLandmark = $(this).find("input.new-landmark").val();
    var inputTimeOfYear = $(this).find("input.new-timeOfYear").val();
    var inputNote = $(this).find("input.new-note").val();

    var newPlace = {thelocation: inputLocation, landmark: inputLandmark, timeOfYear: inputTimeOfYear, note: inputNote};
    newTraveler.places.push(newPlace);
  });

  $('ul#traveler').append("<li><span class='traveler'>" + newTraveler.firstName + ", " + newTraveler.lastName + "</span></li>");

  $('.traveler').last().click(function(){
    $('#show-traveler').show();
    $('#show-contact h2').text(newTraveler.firstName + " " + newTraveler.lastName);
    $('.first-name').text(newTraveler.firstName);
    $('.last-name').text(newTraveler.lastName);

    $('ul#places').text("");
    newTraveler.places.forEach(function(place){
      $('ul#places').append("<li>" + place.thelocation + ", " + place.landmark + ", " + place.timeOfYear + ", " + place.note + "</li>");
    });
  });

  $('input#new-first-name').val("")
  $('input#new-last-name').val("")
  $('input.new-location').val("")
  $('input.new-landmark').val("")
  $('input.new-timeOfYear').val("")
  $('input.new-note').val("")
  });
});
