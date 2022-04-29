const cubes = {
    height: 198,
    weight: 320,
    matrix: 2,
    cards: [
        {
            color: '#87D204'
            isShow: false
        },
        {
            color: '#D27904'
            isShow: false
        },
        {
            color: '#87D204'
            isShow: false
        },
        {
            color: '#D27904'
            isShow: false
        },
    ]
}

$(document).ready(function () {

    $("#root").html("<div class='matrix'>1</div>");
    $(".matrix").width((cubes.width + 24) * cubes.matrix).height((cubes.height + 24) * cubes.matrix);

    for (let i = 0; i < cubes.length; i++) {
       $(".matrix").html("<div id='cube_"+ i +"' class='cube'>1</div>");
    }

    for (let i = 0; i < cubes.cards.length; i++) {
        const e = cubes.cards[i];
        $("#cube_" + i).click(function () {
            const id = $("#cube_" + i).attr('id');
            $("#cube_" + i).css({
                "backgroundColor": e.color
            });
            console.log(Number(id.replace('cube_', '')));
        });
    }

});