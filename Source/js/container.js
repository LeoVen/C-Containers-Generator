// Functions related to the generation of container files

// Generates a header for preview
function containerPreviewHeader(directory) {

    $("#preview_header_content").html("");

    $.ajax({
        url: `files/${directory}/header.txt`,
        dataType: 'text',
        success: function (data) {

            var containerName= $(`#${directory}_container_name`).val();
            var containerPrefix = $(`#${directory}_container_prefix`).val();

            data = data.replace(/::CONTAINER_NAME::/g, containerName)
                .replace(/::FILE_NAME::/g, containerName.toUpperCase())
                .replace(/::CORE_DEFINITION::/g, mainGlobalCoreHeader)
                .replace(/::FUNCTION_PREFIX::/g, containerPrefix)
                .replace(/::DATA_TYPE::/g, 'T');

            $('#preview_header_content').html(data);

            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });

            console.log("%c Loaded preview successfully", 'color: green;');
        },
        error: function (data) {
            console.log("%c Could not load preview", 'color: red;');
        }
    });
}

// Erases modal preview content
function containerDeletePreviewHeader() {

    $("#preview_header_content").html("");
}

// Loads Core header to global variable
function containerLoadCore() {

    $.ajax({
        url: 'files/core/header.txt',
        dataType: 'text',
        success: function (data) {

            mainGlobalCoreHeader = data;

            console.log("%c Loaded core header successfully", 'color: green;');
        },
        error: function (data) {
            console.log("%c Could not load core header", 'color: red;');
        }
    });
}