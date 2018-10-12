// Functions related to the generation of container files

// Generates a header for preview
function containerPreviewHeader(container) {

    $("#preview_header_content").html("");

    $.ajax({
        url: `files/${container}/header.txt`,
        dataType: 'text',
        success: function (data) {

            const containerName = $(`#${container}_container_name`).val();
            const containerPrefix = $(`#${container}_container_prefix`).val();

            let containerFunctionName;

            let containerType = 'T ';

            const includeCoreHeader = $(`#${container}_include_core`).is(":checked");
            let coreHeader;

            const typedef = $(`#${container}_typedef`).is(":checked");

            const fileName = $(`#${container}_header_file_name`).val();
            let headerName;

            if (fileName !== "") {
                headerName = fileName.toUpperCase();
            } else {
                headerName = containerName.toUpperCase();
            }

            if (includeCoreHeader) {
                coreHeader = mainGlobalCoreHeader;
            } else {
                coreHeader = '#include "Core.h"';
            }

            const isPrimitive = $(`#${container}_primitive`).is(":checked");
            const isCustom = $(`#${container}_custom`).is(":checked");

            if (isPrimitive) {

                containerType = $(`#${container}_primitive_data_type`).val() + ' ';
            } else if (isCustom) {

                let customValue = $(`#${container}_custom_data_type`).val().trim();

                if (customValue !== "") {

                    containerType = customValue + ' *';
                }
            }

            if (typedef) {
                data = data.replace(/::CONTAINER_TYPEDEF::/, ' ::CONTAINER_NAME::_t, *::CONTAINER_NAME::')
                    .replace(/::CONTAINER_TYPEDEF_KEYWORD::/, 'typedef ')
                    .replace(/::CONTAINER_NAME::/, '::CONTAINER_NAME::_s');

                containerFunctionName = containerName + ' ';
            } else {
                data = data.replace(/::CONTAINER_TYPEDEF::/, '')
                    .replace(/::CONTAINER_TYPEDEF_KEYWORD::/, '');

                containerFunctionName = 'struct ' + containerName + ' *';
            }

            data = data.replace(/::CONTAINER_NAME::/g, containerName)
                .replace(/::CONTAINER_FUNCTION_NAME::/g, containerFunctionName)
                .replace(/::FUNCTION_PREFIX::/g, containerPrefix)
                .replace(/::CORE_HEADER::/g, coreHeader)
                .replace(/::FILE_NAME::/g, headerName)
                .replace(/::DATA_TYPE::/g, containerType);

            $('#preview_screen_content').html(data);

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

    event.preventDefault();
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
