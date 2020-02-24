$(document).ready(function() {
    $(".design").click(function() {
        $(".p1").toggle();
        $(".image1").toggle();
    });
});
$(document).ready(function(){
    $(".devpt").click(function(){
        $(".p2").toggle();
        $(".image2").toggle();
    });
});
$(document).ready(function(){
    $(".product").click(function(){
        $(".p3").toggle();
        $(".image3").toggle
    });
});
// $("document").hover(function(){
//     $(tc).css("background-color", "white");
//     }, function(){
//     $(tc).css("background-color", "white");
//   });

function myFunction (){
    var name = document.getElementById("name").value;
    if (name !== ""){
        alert(name + " we have received your email");
        } else if (name == "") {
        alert(name + " enter valid address");
        } else {
            alert("Fill your form correctly!");
        };
}
