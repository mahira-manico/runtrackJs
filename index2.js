$(document).ready(function() {

    $("#btn").text("Mélanger").click(function() {
        $(".img").each(function() {
   
            $(this).appendTo("#shuffler");

            let maxWidth = $(window).width() - 150;
            let maxHeight = $(window).height() - 300;

            let positionX = Math.floor(Math.random() * maxWidth);
            let positionY = Math.floor(Math.random() * maxHeight);

            $(this).css("position", "absolute").animate({
                "left": positionX + "px",
                "top": positionY + "px"
            }, 500);
        });
    });

 
    $(".img").click(function() {
 
        $(this).appendTo("#conteneur");
        $(this).css({
            "position": "static",
            "margin": "0"
        });
    });

    $("#btn-verif").text("Vérifier l'ordre").click(function() {
        let resultat = "";
 
        $("#conteneur img").each(function() {
            let id = $(this).attr("id");  
            let numero = id.replace("img", "");
            resultat += numero;
        });

        if (resultat === "123456") {
            alert("Victoire !");
        } else {
            alert("C'est le désordre ! Essayez encore.");
        }
    });
});