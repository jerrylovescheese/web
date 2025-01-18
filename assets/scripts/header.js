/* 
 * Author: Generative AI
 * Version: 1.0
 * Date: 2025-01-17
 */
// Load the header.html content into the #header-container div
$(function () {
    $.get('./static/templates/header.html')
        .done(function (html) {
            $('#header-container').html(html);
        })
        .fail(function (error) {
            console.error('Error loading the header:', error);
        });
});