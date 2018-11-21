//calcular el monto del prestamo en el index
    var cont = 50;
    $(document).ready(function(){
        $("#masSoles").click(function(){
        var dat =parseInt($("#solesTexto").val()) + parseInt(cont);
        if(dat < 1000){
            document.getElementById('solesTexto').value = dat;
            localStorage.setItem('solesTexto',dat);
        }else{
        openModal3();
        }
        });
        });
     $(document).ready(function(){
        $("#menosSoles").click(function(){
        var dat =parseInt($("#solesTexto").val())- parseInt(cont);
        if(dat >= 100){
            document.getElementById('solesTexto').value = dat;   
        }else{
           openModal4();
        }
        });
    });    
        

        
    // calcular dias para el prestamo
         var d = 5;
     $(document).ready(function(){
        $("#menosDias").click(function(){
        var dat =parseInt($("#diasTexto").val())- parseInt(d);
        if(dat >= 5){
        document.getElementById('diasTexto').value = dat;   
        }else{
        openModal2();
        }
        });
        });
   $(document).ready(function(){
        $("#masDias").click(function(){
        var dat =parseInt($("#diasTexto").val()) +  parseInt(d);
        if(dat <= 30){
        document.getElementById("diasTexto").value = dat;   
        }else{
        //alert("no se puede sumentar mas");
        //    window.open(  "width=380, height=500, top=85, left=50", true);
                openModal();
        }
        });
    });
    function openModal(){
        $("#dmasDias").modal( );
    }
    function openModal2(){
        $("#dmenosDias").modal( );
    }
    function openModal3(){
        $("#dmasSoles").modal();
    }
    function openModal4(){
        $("#dmenosSoles").modal();
    }

   var tasa = 0.001;
  $(document).ready(function(){
      $("#masDias").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML = monto;
      })
  });
  $(document).ready(function(){
      $("#menosDias").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML = monto;
      })
  });
$(document).ready(function(){
      $("#masSoles").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML = monto;
      })
  });
    
$(document).ready(function(){
      $("#menosSoles").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML = monto;
      })
  });
    

// probando persistencia de los  datos pru1
/*$(document).ready(function(){
    $('#enviar').click(function(){
        var monto= document.getElementById("solesTexto").value;
       
        localStorage.setItem("Soles",monto);
       
        var cantidad = localStorage.getItem("Soles");
        alert(cantidad);
        document.getElementById("Soles2").innerHTML= cantidad;
     
        document.getElementById("formDias").innerHTML=dias;
        
    })
});*/
/*function enviar(){
    var monto= document.getElementById("solesTexto").value;
    var dias = document.getElementById("diasTexto").value;
    $.post("dato.php",{
        "solesTexto":monto ,"dias":dias},function(respuesta){
        alert(respuesta);
    }
    )
}*/
/*$(document).ready(function(){
   $('#enviar').click(function(){
       var url="dato.php";
       $.ajax({
           type:"POST",
           url: url,
           data:$("#valor").serialize(),
           success:function(data){
               $('#resp').html(data);
           }
       });
   }); 
    
});*/

$(document).ready(function(){
    $("#enviar").click(function(){
    $.get("formulario.html",function(){
    var mont = document.getElementById("solesTexto").value;
    document.getElementById("formSoles").innerHTML=mont;
    })
    })
});

