// This script is reserved to writing things to HTML such as the container
// descriptions and possibly other things in the future

// Loads all container descriptions
function textsLoadDescriptions() {

    $.ajax({
        url: 'files/descriptions.json',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (index, element) {

                $("#" + element.id).html(element.content);
            });

            console.log("%c Loaded container descriptions successfully", 'color: green;');
        },
        error: function (data) {
            console.log("%c Could not load container descriptions", 'color: red;');
        }
    });
}

// Adds options to primitive type selection
function textsLoadPrimitiveSelects() {

    $.ajax({
        url: 'files/primitive_data_types.json',
        dataType: 'json',
        success: function (data) {

            $.each(data, function (index_0, element_0) {

                $.each(element_0.types, function (index_1, element_1) {

                    mainGlobalPrimitives.push(this);

                    $('.' + element_0.id).append(`<option value='${this.name}'>${this.name}</option>`);
                });
            });

            $('select').material_select();

            console.log("%c Loaded primitive options successfully", 'color: green;');
        },
        error: function (data) {
            console.log("%c Could not load primitive options", 'color: red;');
        }
    });
}

// Adds a coming soon popup for every coming-soon class
function textsComingSoon() {

    $('.coming-soon').each(function () {

        $(this).addClass('tooltipped');
        $(this).addClass('btn white-text orange');
        $(this).attr('data-delay', '50');
        $(this).attr('data-position', 'top');
        $(this).attr('data-tooltip', 'Coming Soon');
    });

    $('.tooltipped').tooltip();
}