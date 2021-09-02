$( document ).ready(function() {
    $('#btn-send').click(function () {
        console.log('onclick');

    let value=$("#PostValue").val();
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${value}`,
            contentType: "application/json",
            dataType: 'json',
            type: 'GET',
            success: function(result){
                console.log(result);
            },
            failure: function(result){
                console.log('La llamada no sepudo completar');
            }
        });
    });
});