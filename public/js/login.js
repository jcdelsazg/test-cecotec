$(document).ready(function() {
  $('#submit').click(function() {
    event.preventDefault(); // prevent PageReLoad

    var ValidEmail = $('#username').val() === 'cecotec'; // User validate
    var ValidPassword = $('#password').val() === '1234'; // Password validate

    if (ValidEmail === true && ValidPassword === true) {
      // if ValidEmail & ValidPassword
      //window.location = '/crud'; // go to home.html
      localStorage.setItem('logged', true);
      window.location = '/';
    } else {
      $('.error').css('display', 'block'); // show error msg
    }
  });
});
