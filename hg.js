// always need document.ready in a jquery file
$(document).ready(function(){
    $('#name').submit(function(){
    $.get("https://api.github.com/users/tomguy04", displayName,'json');
    return false;})})

    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function displayName(data) {
        console.log(data);
        $('#target').html(`${data.login}`);
    }

    //alternatively
    $('button').click(function(){
        // as soon as the AJAX request returns, displayName is invoked and passed data!
        //https://api.jquery.com/jquery.get/
        $.get('https://api.github.com/users/tomguy04', getName,'json');
        
      });
    function getName(data){
        console.log(data.login);
        if (data.login){
          $('body').append("<p>"+data.login+"</p>");
        }
      }
    
    
