$(document).ready(function() {
    $(".click1").click(function() {
        $(".design").toggle();
        $(".p1").toggle();
    });
});
$(document).ready(function(){
    $(".click2").click(function(){
        $(".devpt").toggle();
        $(".p2").toggle();
    });
});
$(document).ready(function(){
    $(".click3").click(function(){
        $(".product").toggle();
        $(".p3").toggle();
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
