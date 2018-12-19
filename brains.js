$(document).ready(function () { 
    $('.email').hide()
    $('.showE').click(function () {
        $('.email').fadeIn();
    })
    $('.showE').dblclick(function(){
        $('.email').fadeOut();
    })
    $(".hP").click(function (){
        $(".des").append("This is a project I did on my own. It was meant to be my favorite thing. <br>I chose the harry potter movie collection as my favorite thing. This was made out of just HTML and CSS. Click <a href=https://beniciva.github.io/Projects/favoritething/harrypotter.html>Here</a> To view this webpage.")
    })
    $(".quid").click(function (){
        $(".des1").append("This was a project I did to learn how to use bootstrap. My teacher made the html skeleton, and I did all of the bootstrap. Click <a href=https://beniciva.github.io/Projects/Quidditch2/quidditch.html>Here</a> To view this webpage.")
    })
    $('.introName').hide()
    $('.myPicture').click(function () {
        $('.introName').fadeIn();
    })
})