$(function () {
    $(".devour").on("click", function (event) {
        var id = $(this).data("id");

        var devoured = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function () {
                console.log("Burger devoured");

                // Reload the page to get the updated list
                location.reload();
            });
    });

    $("#subBtn").on("click", function(event) {
        event.preventDefault();

        var newBurga = {
          burger_name: $("#brgrName").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurga
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
});