$(document).ready(function () {
    $("#ReadJson").click(function () {
        $.getJSON("Source/STARWARS.JSON", function (data) {
            $('#stg').html('<h2>STAR WARS filmek és sorozatok gyártás szerinti sorrendben</h2>');
            data.forEach(function (movies) {
                $('#stg').append('<hr>');
                $('#stg').append('<p><b>Film címe: </b>' + movies.filmcim + '</p>');
                $('#stg').append('<p><b>Megjelenés éve: </b>' + movies.megjelensev + '</p>');
                $('#stg').append('<p><b>Film/sorozat: </b>' + movies.filmsorozat + '</p>');
                $('#stg').append('<p><b>Látható: </b>' + movies.elerhetoseg + "</p><br>");
            });
        });
    });
});

$(document).ready(function () {
    $("#ReadJson1").click(function () {
        $.getJSON("Source/STARWARS1.JSON", function (data) {
            $('#stg').html('<h2>STAR WARS filmek és sorozatok történeti időrendi sorrendben</h2>');
            data.forEach(function (movies) {
                $('#stg').append('<hr>');
                $('#stg').append('<p><b>Film címe: </b>' + movies.filmcim + '</p>');
                $('#stg').append('<p><b>Megjelenés éve: </b>' + movies.megjelensev + '</p>');
                $('#stg').append('<p><b>Film/sorozat: </b>' + movies.filmsorozat + '</p>');
                $('#stg').append('<p><b>Látható: </b>' + movies.elerhetoseg + "</p><br>");
            });
        });
    });
});
