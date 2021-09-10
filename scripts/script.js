$(document).ready(function(){
    $("#home").click(function(){
        $('.facilities').hide();
        $('.rules').hide();
        $('.gallery').hide();
        $('.home').show();
      });
    $("#facilities").click(function(){
      $('.home').hide();
      $('.rules').hide();
      $('.gallery').hide();
      $('.facilities').show();
    });

    $("#rules").click(function(){
        $('.home').hide();
        $('.facilities').hide();
        $('.gallery').hide();
        $('.rules').show();
      });

      $("#gallery").click(function(){
        $('.home').hide();
        $('.facilities').hide();
        $('.rules').hide();
        $('.gallery').show();
      });
      

    
      // About us section
      $("#aboutus").click(function() { 
      	$('html, body').animate({scrollTop: '2000px'}, 800);
    }); 

          // Contact section
          $("#contact").click(function() { 
            $("html, body").animate({ scrollTop: $(document).height() });
        }); 
  });