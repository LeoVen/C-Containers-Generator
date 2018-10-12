// Utility functions

function capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
}

if(typeof(String.prototype.trim) === "undefined")
{
    String.prototype.trim = function()
    {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}