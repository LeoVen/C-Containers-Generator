// This script is reserved to writing things to HTML such as the container descriptions

// Loads all container descriptions
function textsLoadDescriptions() {

    $.ajax({
        url: 'files/descriptions.json',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (index, element, wat) {

                $("#" + element.id).html(element.content);
            });

            console.log("Loaded descriptions successfully")
        },
        error: function (data) {
            console.log("Could not load descriptions");
        }
    });

}