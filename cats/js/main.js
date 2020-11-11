
$(function(){
    
    $('.cards_favorite').on('click', function(){
        $(this).toggleClass('cards_favorite--active');
        $('#popup').css('top',$(this).offset().top).show();
      e.preventDefault();
    });

    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000);
    });

    $(".select-sort").change(function(){
        var order = $(this).val();
        
        var items = $("#cards_container .cards_item").sort(function(a,b){
                            var av = $(a).data('price');
                            var bv = $(b).data('price');
                            return order == 'desc' ? av-bv : bv-av;
                        });
        $(items).detach().appendTo("#cards_container");
     });

     $(".subscribe_btn").on("click", validate);
    function validateEmail(email) {
    var re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return re.test(String(email).toLowerCase());
  }
   
    function sendForm() {
    $(".error").text("Отправлено").fadeIn();
  }
 
    function validate() {
    var email = $(".subscribe_input").val();
    var $error = $(".error");
    $error.text("");
 
    if (validateEmail(email)) {
      $error.fadeOut();
      sendForm();
    } else {
      $error.fadeIn();
      $error.text(email + " некорректное значение e-mail");
    }
    return false;
  }

});