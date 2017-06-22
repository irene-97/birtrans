/**
 * @return {boolean}
 */
window.ShowShareDialog = function (counter) {
    var div = document.getElementById("share-dialog" + counter);

    if (!div) {
        return;
    }

    if (div.style.display == "block") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }

    return false;
};

/**
 * @return {boolean}
 */
window.CloseShareDialog = function (counter) {
    var div = document.getElementById("share-dialog" + counter);

    if (!div) {
        return;
    }

    div.style.display = "none";

    return false;
};

window.__function_exists = function (function_name) {
    if (typeof function_name == 'string') {
        return (typeof window[function_name] == 'function');
    } else {
        return (function_name instanceof Function);
    }
};