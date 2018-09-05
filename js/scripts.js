$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        let btnSpan = $("#carouselButton span");
        if (btnSpan.hasClass("fa-pause")) {
            $("#mycarousel").carousel('pause');
            btnSpan.removeClass("fa-pause");
            btnSpan.addClass("fa-play");
        } else if (btnSpan.hasClass("fa-play")) {
            $("#mycarousel").carousel('cycle');
            btnSpan.removeClass("fa-play");
            btnSpan.addClass("fa-pause");
        }
    });

    $("#reserveTableBtn").click(function () {
        $("#reserveTableModal").modal();
    });

    $("#loginBtn").click(function () {
        $("#loginModal").modal();
    });
});