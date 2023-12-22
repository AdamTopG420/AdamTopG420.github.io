//first page javascripting
function checkPassword() {
  var input = document.getElementById("passwordInput").value;
  if (input === "anushkdawg") {
    $("#passwordScreen").fadeOut(5000, function() { 
      var audio = new Audio("placeholderAudio"); //To be replaced with time travel audio file
      audio.play();
      $("#1stmessage").fadeIn(2000).fadeOut(2000);
      setTimeout(function() { $("#2ndmessage").fadeIn(2000).fadeOut(2000); }, 4000); 
      setTimeout(function() { $("#3rdmessage").fadeIn(2000).fadeOut(2000); }, 10000);
      setTimeout(function() { $("#4thmessage").fadeIn(2000).fadeOut(2000); }, 14000);
      setTimeout(function() { $("#5thmessage").fadeIn(2000).fadeOut(2000); }, 18000);
      setTimeout(function() { $("#6thmessage").fadeIn(2000).fadeOut(2000); }, 22000);
      setTimeout(function() { $("#7thmessage").fadeIn(2000).fadeOut(2000); }, 26000);
      setTimeout(function() { $("#8thmessage").fadeIn(2000).fadeOut(2000); }, 30000);
      setTimeout(function() { $("#9thmessage").fadeIn(2000).fadeOut(2000); }, 34000);
      setTimeout(function() { $("#10thmessage").fadeIn(2000).fadeOut(2000); }, 38000);
      setTimeout(function() { $("#11thmessage").fadeIn(2000)}, 42000);

    
    });} 


    // copy format for other passwords. 
  else if (input === "HoneyBunches") {
    $("#passwordScreen").fadeOut(5000, function() { 
      var audio = new Audio("placeholderAudio"); //To be replaced with time travel audio file
      audio.play();
      $("#2message1").fadeIn(2000).fadeOut(2000);
      setTimeout(function() { $("#2message2").fadeIn(2000).fadeOut(2000); }, 4000);
      setTimeout(function() { $("#2message3").fadeIn(2000)}, 8000);
  });}
    
  else {
    alert("Incorrect password. *anushkdawg* I thought I told you the password?!");
  }
}






function showPassword() {
  var passwordInput = document.getElementById('passwordInput');
  if (passwordInput.type === "password") {
    passwordInput.type = "text"; 
  } else {
    passwordInput.type = "password";
  }
}

