//calcular el monto del prestamo en el index
    var cont = 50;
    $(document).ready(function(){
        $("#masSoles").click(function(){
        var dat =parseInt($("#solesTexto").val()) + parseInt(cont);
        if(dat < 1000){
            document.getElementById('solesTexto').value = dat;
        }else{
        openModal3();
        }
        });
        $("#menosSoles").click(function(){
        var dat =parseInt($("#solesTexto").val())- parseInt(cont);
        if(dat >= 100){
            document.getElementById('solesTexto').value = dat;   
        }else{
           openModal4();
        }
        });
         // calcular dias para el prestamo
         var d = 5;
         $("#menosDias").click(function(){
        var dat =parseInt($("#diasTexto").val())- parseInt(d);
        if(dat >= 5){
        document.getElementById('diasTexto').value = dat;   
        }else{
        openModal2();
        }
        });
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

      $("#masDias").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML= monto;
          var dat =parseInt($("#solesTexto").val());
          var day = parseInt($("#diasTexto").val())
           var objeto ={'monto':dat,'dias':day , 'total':monto};
               localStorage.setItem('datos',JSON.stringify(objeto));
      })
  
  
      $("#menosDias").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML= monto;
          var dat =parseInt($("#solesTexto").val());
          var day = parseInt($("#diasTexto").val())
           var objeto ={'monto':dat,'dias':day, 'total':monto};
               localStorage.setItem('datos',JSON.stringify(objeto));
      })
 
      $("#masSoles").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML= monto;
          var dat =parseInt($("#solesTexto").val());
          var day = parseInt($("#diasTexto").val())
           var objeto ={'monto':dat,'dias':day , 'total':monto};
               localStorage.setItem('datos',JSON.stringify(objeto));
      })
 
    
      $("#menosSoles").click(function(){
          var monto = parseInt($("#solesTexto").val()) + ( parseInt($("#solesTexto").val())*(parseFloat(tasa))*(parseInt($("#diasTexto").val()))) ;
          document.getElementById("monto").innerHTML= monto;
          var dat =parseInt($("#solesTexto").val());
          var day = parseInt($("#diasTexto").val())
           var objeto ={'monto':dat,'dias':day ,'total':monto};
               localStorage.setItem('datos',JSON.stringify(objeto));
      })
      
// Get the modal
var modal = document.getElementById('modalformulario');

// Get the button that opens the modal
var btn = document.getElementById("btnmodal");
var btn2 = document.getElementById("aun-no-te-decides2");
var btn3 = document.getElementById("solicitar-prestamo2");
var btn4 = document.getElementById("btn-porqueelegirnos");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}
btn4.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}     
 });
    

