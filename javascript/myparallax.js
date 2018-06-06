$(document).ready(function() {
                
                $(".link").click(function() {
                                
            var link = $(this).attr("href"); 
                    
                    $('html, body').animate({
                        scrollTop: $(link).offset().top
                    });
                });
            });