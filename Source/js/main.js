var mainGlobalPrimitives = [];
var mainGlobalCoreHeader;

$(document).ready(function () {

    textsLoadDescriptions();
    textsLoadPrimitiveSelects();
    textsComingSoon();

    formPrimitiveInformation();

    containerLoadCore();

    $('.modal').modal();

});