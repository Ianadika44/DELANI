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
$(document).ready(function() {
    $("#image1")
      .mouseover(function() {
        $("#par1").show();
      })
      .mouseout(function() {
        $("#par1").hide();
      });
  })
  $(document).ready(function() {
    $("#image2")
      .mouseover(function() {
        $("#par2").show();
      })
      .mouseout(function() {
        $("#par2").hide();
      });
  })
  $(document).ready(function() {
    $("#image3")
      .mouseover(function() {
        $("#par3").show();
      })
      .mouseout(function() {
        $("#par3").hide();
      });
  })
  $(document).ready(function() {
    $("#image4")
      .mouseover(function() {
        $("#par4").show();
      })
      .mouseout(function() {
        $("#par4").hide();
      });
  })
  $(document).ready(function() {
    $("#image5")
      .mouseover(function() {
        $("#par5").show();
      })
      .mouseout(function() {
        $("#par5").hide();
      });
  })
  $(document).ready(function() {
    $("#image6")
      .mouseover(function() {
        $("#par6").show();
      })
      .mouseout(function() {
        $("#par6").hide();
      });
  })
  $(document).ready(function() {
    $("#image7")
      .mouseover(function() {
        $("#par7").show();
      })
      .mouseout(function() {
        $("#par7").hide();
      });
  })
  
  $(document).ready(function() {
    $("#image8")
      .mouseover(function() {
        $("#par8").show();
      })
      .mouseout(function() {
        $("#par8").hide();
      });
  })
  

