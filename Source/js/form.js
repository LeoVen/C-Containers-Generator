// Form related functions

// Toggles text input for functions
function formToggle(element) {

    var $el = $(element);

    var attr = $el.attr('disabled');

    if (typeof attr !== typeof undefined && attr !== false) {

        $el.removeAttr('disabled');
    } else {

        $el.attr('disabled', 'disabled');
    }
}

// Adds a quick information about selected primitive data type
function formPrimitiveInformation() {

    $('.primitive_select').on('change', function () {

        var value = $(this).val();

        var object = {};

        for (var i = 0; i < mainGlobalPrimitives.length; i++) {

            if (mainGlobalPrimitives[i].name === value) {

                object = mainGlobalPrimitives[i];
                break;
            }
        }

        var htmlContent = formMakePrimitiveInformation(object);

        var htmlId = $(this).attr('field-id');

        var target = $('#' + htmlId);

        target.html('');
        target.html(htmlContent);
    });
}

// Makes the info list
function formMakePrimitiveInformation({name, range, bytes, description}) {

    var list = $('<ul>').addClass('collection');

    list.append($('<li>').addClass('collection-item').html(`<b>${name}</b>`));
    list.append($('<li>').addClass('collection-item').html(`<b> Range: </b> ${range}`));
    list.append($('<li>').addClass('collection-item').html(`<b> Bytes: </b> ${bytes}`));
    list.append($('<li>').addClass('collection-item').html(description));

    return list;
}