var comprobarJ=0;
var comprobarU=0;
var comprobarEq=0;
var comprobarCa=0;
var comprobarEn=0;
var comprobarCo=0;
var userId= -1;
var midato= new Object();
var tipos = [];
var m;// variable utilizada en frontal para sacar los tipos
$(document).ready(function(){
	
	
// alert("ready");
	// iniciarJAdmin();
	$(".tituloJAdmin").click(function(){
		if(comprobarJ==0){
			$(".rellenoAdminJugadores").show(1200); 
			$(".rellenoAdminUsuario").hide(800);
			$(".rellenoAdminEquipo").hide(800);
            $(".rellenoAdminEntrenador").hide(800); 
            $(".rellenoAdminCategoria").hide(800); 
            $(".rellenoAdminConsulta").hide(800); 
            comprobarJ=1;
		}else{
			$(".rellenoAdminJugadores").hide(800);
			comprobarJ=0;
		}
    });
    // iniciarUAdmin();

    

    $(".tituloEqAdmin").click(function(){
		if(comprobarEq==0){
			$(".rellenoAdminEquipo").show(1200); 
			$(".rellenoAdminJugadores").hide(800);
            $(".rellenoAdminUsuario").hide(800);
            $(".rellenoAdminEntrenador").hide(800); 
            $(".rellenoAdminCategoria").hide(800); 
            $(".rellenoAdminConsulta").hide(800); 
            comprobarEq=1;
		}else{
			$(".rellenoAdminEquipo").hide(800);
			comprobarEq=0;
		}
    });
    
    $(".tituloEnAdmin").click(function(){
		if(comprobarEn==0){
            $(".rellenoAdminEntrenador").show(1200); 
			$(".rellenoAdminUsuario").hide(800); 
			$(".rellenoAdminJugadores").hide(800);
			$(".rellenoAdminEquipo").hide(800);
            $(".rellenoAdminCategoria").hide(800); 
            $(".rellenoAdminConsulta").hide(800); 
            comprobarEn=1;
		}else{
			$(".rellenoAdminEntrenador").hide(800);
			comprobarEn=0;
		}
    });	


    $(".tituloCaAdmin").click(function(){
		if(comprobarCa==0){
            $(".rellenoAdminCategoria").show(1200); 
            $(".rellenoAdminEntrenador").hide(800); 
			$(".rellenoAdminUsuario").hide(800); 
			$(".rellenoAdminJugadores").hide(800);
			$(".rellenoAdminEquipo").hide(800);
            $(".rellenoAdminConsulta").hide(800); 
            comprobarCa=1;
		}else{
			$(".rellenoAdminCategoria").hide(800);
			comprobarCa=0;
		}
    });	

    $(".tituloCoAdmin").click(function(){
		if(comprobarCo==0){
            $(".rellenoAdminConsulta").show(1200); 
            $(".rellenoAdminCategoria").hide(800); 
            $(".rellenoAdminEntrenador").hide(800); 
			$(".rellenoAdminUsuario").hide(800); 
			$(".rellenoAdminJugadores").hide(800);
			$(".rellenoAdminEquipo").hide(800);
            comprobarCo=1;
		}else{
            $(".rellenoAdminConsulta").hide(1200); 
			comprobarCo=0;
		}
    });	

    $(".tituloUAdmin").click(function(){
		if(comprobarU==0){
			$(".rellenoAdminUsuario").show(1200); 
			$(".rellenoAdminJugadores").hide(800);
			$(".rellenoAdminEquipo").hide(800);
            $(".rellenoAdminEntrenador").hide(800); 
            $(".rellenoAdminCategoria").hide(800); 
            $(".rellenoAdminConsulta").hide(800); 
            comprobarU=1;
		}else{
			$(".rellenoAdminUsuario").hide(800);
			comprobarU=0;
		}
    });	
	// $(".insertV").click(function(){
		
	// 	$(".paneles").hide(800);
	// 	$(".encabezado_vAdmin").hide(800);
	// 	$("body").css("background-color", "	#abcdef");

	//     $(".insertarAdmin").html("");
	// 	$(".insertarAdmin").append(`<form id="form_vAdminInsertV" >
	// 	    <div id="elementos_vAdminInsertV">
	// 	        <div class="nombre_vAdminInsertV">
	// 	        <label>Nombre:</label>
	// 	        <input id="nombre" type="text">
	// 	        </div>
		
	// 	        <div class="modelo_vAdminInsertV">
	// 	        <label>Modelo:</label>
	// 	        <input id="modelo" type="text">
	// 	        </div>
		
	// 	        <div class="potencia_vAdminInsertV">
	// 	        <label>Potencia:</label>
	// 	        <input id="potencia" type="text">     
	// 	        </div>
		
	// 	        <div class="img_vAdminInsertV">
	// 	        <label>Img:</label>
	// 	        <input id="img" type="text"> 
	// 	        </div>
		
	// 	        <div class="tipo_vAdminInsertV">
	// 	        <label>Tipo:</label>
	// 				<select id="tipo">
	// 		        <option value="Bicicleta">Bicicleta</option>
	// 		        <option value="Coche">Coche</option>
	// 		        <option value="Monopatin">Monopatin</option>
	// 		        <option value="Patinete">Patinete</option>
	// 	        </select>		        
	// 	        </div>
	// 	        <input type="button" id="submit_vAdminInsertV" value="GO!" onclick="insertarVehiculo()">
				
	// 	    </div>
	// 	    <button class="boton_atras_vAdminV goBack">GO BACK</button>
	// 	    </form>`);
		
		
		
		//boton para esconder el insert de vAdmin correspondiente y mostrar las tablas
		// $(".goBack").click(function(){
		// 	$(".insertarAdmin").hide(800);

		// 	$(".paneles").show(1200);
			
		// });    
	});
	
	
// 	iniciarUAdmin();
	
	// $(".tituloUAdmin").click(function(){
	// 	if(comprobarU==0){
	// 		$(".rellenoAdminUsuario").show(1200);
	// 		$(".rellenoAdminVehiculo").hide(800);
	// 		$(".rellenoAdminReserva").hide(800);

	// 	comprobarU=1;
	// 	}else{
	// 		$(".rellenoAdminUsuario").hide(800);
	// 		comprobarU=0;
	// 	}
	// });
// $(".insertU").click(function(){
		
// 		$(".paneles").hide(800);
// 		$(".encabezado_vAdmin").hide(800);
// 		$("body").css("background-color", "	#abcdef");
// 	    $(".insertarAdmin").html("");	    
// 		$(".insertarAdmin").append(`<form id="form_vAdminInsertU" >
// 		    <div id="elementos_vAdminInsertU">
		    
// 		        <div class="usuario_vAdminInsertU">
// 		        <label>Usuario:</label>
// 		        <input id="usuario" type="text">
// 		        </div>
		        
// 		        <div class="contrasena_vAdminInsertU">
// 		        <label>Contrasena:</label>
// 		        <input id="contrasena" type="text">
// 		        </div>	
		        	        
// 		        <div class="nombre_vAdminInsertU">
// 		        <label>Nombre:</label>
// 		        <input id="nombre" type="text">
// 		        </div>	
		        
// 		        <div class="apellido_vAdminInsertU">
// 		        <label>Apellido:</label>
// 		        <input id="apellido" type="text">
// 		        </div>
		        
// 		        <div class="telefono_vAdminInsertU">
// 		        <label>Telefono:</label>
// 		        <input id="telefono" type="text">
// 		        </div>
		        
// 		        <div class="dni_vAdminInsertU">
// 		        <label>DNI:</label>
// 		        <input id="dni" type="text">
// 		        </div>
		        
// 		        <div class="tipo_vAdminInsertU">
// 		        <label>Tipo:</label>
// 		        <input id="tipo" type="number">
// 		        </div>
		        
// 		        <input type="button" id="submit_vAdminInsertU" value="GO!" onclick="insertarUsuario()">
				
// 		    </div>
// 		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
// 		    </form>`);
		
		
		
// 		//boton para esconder el insert de vAdmin correspondiente y mostrar las tablas
// 		$(".goBack").click(function(){
// 			$(".insertarAdmin").hide(800);

// 			$(".paneles").show(1200);
			
// 		});    
// 	});
	
// 	iniciarRAdmin();
	
// 	$(".tituloRAdmin").click(function(){
// 		if(comprobarR==0){
// 			$(".rellenoAdminReserva").show(1200);			
// 			$(".rellenoAdminUsuario").hide(800);
// 			$(".rellenoAdminVehiculo").hide(800);

// 		comprobarR=1;
// 		}else{
// 			$(".rellenoAdminReserva").hide(800);
			
// 			comprobarR=0;
// 		}
// 	});
	
// 	$(".insertR").click(function(){
// 		$(".paneles").hide(800);
// 		$(".encabezado_vAdmin").hide(800);
// 		$("body").css("background-color", "	#abcdef");
// 	    $(".insertarAdmin").html("");	    
// 		$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
// 		    	        		    <div id="elementos_vAdminUpdate">
		    	        		    
// 		    	        		        <div class="nombre_vAdminInsertU">
// 		    	        		        <label>Fecha reserva:</label>
// 		    	        		        <input id="fechaReserva" type="date" >
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="contrasena_vAdminInsertU">
// 		    	        		        <label>Fecha reservada:</label>
// 		    	        		        <input id="fechaReservada" type="date"  >
// 		    	        		        </div>	
		    	        		        	        
// 		    	        		        <div class="nombre_vAdminInsertU">
// 											<label for="reservaInputRango">Rango</label>  <select
// 											id="rango" class="form-control" name="rango">
// 											<option value="1">09:00-12:00</option>
// 											<option value="2">13:00-16:00</option>
// 											<option value="3">17:00-20:00</option>
// 		    	        		        	</select>
// 		    	        		        </div>
// 		    	        		        <div class="apellido_vAdminInsertU">
// 		    	        		        <label>Precio:</label>
// 		    	        		        <input id="precio" type="number"  value="30" readonly>
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="telefono_vAdminInsertU">
// 		    	        		        <label>Id usuario:</label>
// 		    	        		        <input id="idUsuario" type="text" >
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="dni_vAdminInsertU">
// 		    	        		        <label>Id vehiculo:</label>
// 		    	        		        <input id="idVehiculo" type="text" >
// 		    	        		        </div>
		
		    	        		        
// 		    	        		        <input type="button" class="submit_vAdminUpdate" onclick="insertarReserva()" value="GO!">
		    	        				
// 		    	        		    </div>
// 		    	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
// 		    	        		    </form>`);
		
		
		
// 		//boton para esconder el insert de vAdmin correspondiente y mostrar las tablas
// 		$(".goBack").click(function(){
// 			$(".insertarAdmin").hide(800);

// 			$(".paneles").show(1200);
			
// 		});    
// 	});
	
// });



/*INICIO DE INICIAR LAS TABLAS EN LA VISTA ADMIN
 * 
 * 
*/

function iniciarJAdmin(){
	$.ajax({
        type:"JSON",
        url:"../controller/cMostrarVehiculos.php",
        success: function(datosV){
/*
 * alert(datos); alert("success");
 */            midatoV=JSON.parse(datosV);
 		$.each(midatoV,function(i,datoV){
	

            $(".rellenoAdminJugadores").append(`<tr>
            		<td>`+datoV.idVehiculo+`</td>            		
            		<td>`+datoV.nombre+`</td>
            		<td>`+datoV.modelo+`</td>
            		<td>`+datoV.potencia+`</td>
            		<td><img src="`+datoV.img+`" style="width:100px; height:auto;"></td>
            		<td>`+datoV.tipo+`</td>
            		<td><button class="deleteV delete_paneles" value="`+datoV.idVehiculo+`">DELETE</button></td>
            		<td><button class="updateV update_paneles" value="`+datoV.idVehiculo+`||`+datoV.nombre+`||`+datoV.modelo+`||`+datoV.potencia+`||`+datoV.img+`||`+datoV.tipo+`">UPDATE</button></td>
        		</tr>`);
 		});

 		
 		$(".deleteV").click(function(){
 			
 			var id=$(this).val(); 
 			console.log(id);
 			
 		  	$.ajax({
 		       	type: "GET",
 		       	data:{'id':id},
 		       	url: "../controller/cDeleteVehiculo.php", 

 		       	success: function(result){  
 		       		
 		       		console.log(result);
 		       		location.reload(true);  //recarga la pagina
 		       	},
 		       	error : function(xhr) {
 		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
 		   		}
 		       });
 		  	
 		 
 	   });
		$(".updateV").click(function(){
			var todo=$(this).val();

			var todo = todo.split("||");
			
 			var id=todo[0]; 
 			var nombre=todo[1]; 
 			var modelo=todo[2]; 
 			var potencia=todo[3]; 
 			var img=todo[4]; 
 			var tipo=todo[5]; 

 			$(".paneles").hide(800);
    		$(".encabezado_vAdmin").hide(800);
    		$("body").css("background-color", "	#abcdef");

 		 
 		       	$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
	        		    <div id="elementos_vAdminUpdate">
	        		    
	        		        <div class="nombre_vAdminInsertU">
	        		        <label>Nombre:</label>
	        		        <input id="nombre" type="text" value="`+nombre+`">
	        		        </div>
	        		        
	        		        <div class="contrasena_vAdminInsertU">
	        		        <label>modelo:</label>
	        		        <input id="modelo" type="text"  value="`+modelo+`">
	        		        </div>	
	        		        	        
	        		        <div class="nombre_vAdminInsertU">
	        		        <label>potencia:</label>
	        		        <input id="potencia" type="text"  value="`+potencia+`">
	        		        </div>	
	        		        
	        		        <div class="apellido_vAdminInsertU">
	        		        <label>img:</label>
	        		        <input id="img" type="text"  value="`+img+`">
	        		        </div>
	        		        
	        		        <div class="telefono_vAdminInsertU">
	        		        <label>tipo:</label>
	        		        <select id="tipo">
	        		        <option value="Bicicleta">Bicicleta</option>
	        		        <option value="Coche">Coche</option>
	        		        <option value="Monopatin">Monopatin</option>
	        		        <option value="Patinete">Patinete</option>
	        		        </select>
	        		        </div>
	        		        
	        		        <input type="button" class="submit_vAdminUpdate" id="`+id+`" value="GO!">
	        				
	        		    </div>
	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
	        		    </form>`);
 		       		
		        	$(".submit_vAdminUpdate").click(function(){
		        		var id=$(this).attr("id"); 
		        		var nombre=$("#nombre").val();
		        		var modelo=$("#modelo").val();
		        		var potencia=$("#potencia").val();
		        		var img=$("#img").val();
		        		var tipo=$("#tipo").val();
		        		
		        		$.ajax({
		        		 	type: "GET",
		        		 	data:{'id':id,'nombre':nombre , 'modelo':modelo , 'potencia':potencia, 'img':img , 'tipo':tipo },
		     		       	url: "../controller/cUpdateVehiculo.php", 

		     		       	success: function(result){  
		     		       		
		     		       		console.log(result);
		     		       		location.reload(true);  //recarga la pagina
		     		       	},
		     		       	error : function(xhr) {
		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
		     		   		}
		     		       });
		 	       });
		  });
		
 

        },
        error: function(xhr){
            alert("An error occured: "+xhr.status+" "+xhr.statusText);
        }
    });
	}

// function iniciarUAdmin(){
// 	$.ajax({
//         type:"JSON",
//         url:"../controller/cMostrarUsers.php",
//         success: function(datosU){

// /*
//  * alert(datos); alert("success");
//  */            midatoU=JSON.parse(datosU);


// 				$.each(midatoU,function(i,datoU){
				
// 		            $(".rellenoAdminUsuario").append(`<tr>
// 		            		<td>`+datoU.idUsuario+`</td>            		
// 		            		<td>`+datoU.usuario+`</td>
// 		            		<td>`+datoU.contrasena+`</td>
// 		            		<td>`+datoU.nombre+`</td>
// 		            		<td>`+datoU.apellido+`</td>
// 		            		<td>`+datoU.telefono+`</td>
// 		            		<td>`+datoU.dni+`</td>
// 		            		<td>`+datoU.tipo+`</td>
// 		            		<td><button class="deleteU delete_paneles" value="`+datoU.idUsuario+`">DELETE</button></td>
// 		            		<td><button class="updateU update_paneles" value="`+datoU.idUsuario+`||`+datoU.usuario+`||`+datoU.contrasena+`||`+datoU.nombre+`||`+datoU.apellido+`||`+datoU.telefono+`||`+datoU.dni+` ||`+datoU.tipo+`">UPDATE</button></td>
// 		        		</tr>`);
		            
		        
// 		        	$(".deleteU").click(function(){
		     			
// 		     			var id=$(this).val(); 
// 		     			console.log(id);
		     			
// 		     		  	$.ajax({
// 		     		       	type: "GET",
// 		     		       	data:{'id':id},
// 		     		       	url: "../controller/cDeleteUser.php", 

// 		     		       	success: function(result){  
		     		       		
// 		     		       		console.log(result);
// 		     		       		location.reload(true);  //recarga la pagina
// 		     		       	},
// 		     		       	error : function(xhr) {
// 		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 		     		   		}
// 		     		       });
// 		 	       });

// 		        		//boton para esconder el insert de vAdmin correspondiente y mostrar las tablas
// 		        		$(".goBack").click(function(){
// 		        			$(".insertarAdmin").hide(800);

// 		        			$(".paneles").show(1200);
		        			
// 		        		});    
		        	
// 				});
				
// 	        	$(".updateU").click(function(){
// 					var todo=$(this).val();

// 					var todo = todo.split("||");
					
// 	     			var id=todo[0]; 
// 	     			var usuario=todo[1]; 
// 	     			var contrasena=todo[2]; 
// 	     			var nombre=todo[3]; 
// 	     			var apellido=todo[4]; 
// 	     			var telefono=todo[5]; 
// 	     			var dni=todo[6]; 
// 	     			var tipo=todo[7]; 

	     			
// 	        		$(".paneles").hide(800);
// 	        		$(".encabezado_vAdmin").hide(800);
// 	        		$("body").css("background-color", "	#abcdef");

	     		 
// 	     		       	$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
// 	    	        		    <div id="elementos_vAdminUpdate">
	    	        		    
// 	    	        		        <div class="nombre_vAdminInsertU">
// 	    	        		        <label>Usuario:</label>
// 	    	        		        <input id="usuario" type="text" value="`+usuario+`">
// 	    	        		        </div>
	    	        		        
// 	    	        		        <div class="contrasena_vAdminInsertU">
// 	    	        		        <label>Contrasena:</label>
// 	    	        		        <input id="contrasena" type="text"  value="`+contrasena+`">
// 	    	        		        </div>	
	    	        		        	        
// 	    	        		        <div class="nombre_vAdminInsertU">
// 	    	        		        <label>Nombre:</label>
// 	    	        		        <input id="nombre" type="text"  value="`+nombre+`">
// 	    	        		        </div>	
	    	        		        
// 	    	        		        <div class="apellido_vAdminInsertU">
// 	    	        		        <label>Apellido:</label>
// 	    	        		        <input id="apellido" type="text"  value="`+apellido+`">
// 	    	        		        </div>
	    	        		        
// 	    	        		        <div class="telefono_vAdminInsertU">
// 	    	        		        <label>Telefono:</label>
// 	    	        		        <input id="telefono" type="text"  value="`+telefono+`">
// 	    	        		        </div>
	    	        		        
// 	    	        		        <div class="dni_vAdminInsertU">
// 	    	        		        <label>DNI:</label>
// 	    	        		        <input id="dni" type="text"  value="`+dni+`">
// 	    	        		        </div>
	    	        		        
// 	    	        		        <div class="tipo_vAdminInsertU">
// 	    	        		        <label>Tipo:</label>
// 	    	        		        <input id="tipo" type="number"  value="`+tipo+`">
// 	    	        		        </div>
	    	        		        
// 	    	        		        <input type="button" class="submit_vAdminUpdate" id="`+id+`" value="GO!">
	    	        				
// 	    	        		    </div>
// 	    	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
// 	    	        		    </form>`);
	     		       		
// 	    		        	$(".submit_vAdminUpdate").click(function(){
// 	    		        		var id=$(this).attr("id"); 
// 	    		        		var usuario=$("#usuario").val();
// 	    		        		var contrasena=$("#contrasena").val();
// 	    		        		var nombre=$("#nombre").val();
// 	    		        		var apellido=$("#apellido").val();
// 	    		        		var telefono=$("#telefono").val();
// 	    		        		var dni=$("#dni").val();
// 	    		        		var tipo=$("#tipo").val();
	    		        		
// 	    		        		$.ajax({
// 	    		        		 	type: "GET",
// 	    		        		 	data:{'id':id,'usuario':usuario , 'contrasena':contrasena , 'nombre':nombre, 'apellido':apellido , 'telefono':telefono , 'dni':dni , 'tipo':tipo },
// 	    		     		       	url: "../controller/cUpdateUsuario.php", 

// 	    		     		       	success: function(result){  
	    		     		       		
// 	    		     		       		console.log(result);
// 	    		     		       		location.reload(true);  //recarga la pagina
// 	    		     		       	},
// 	    		     		       	error : function(xhr) {
// 	    		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 	    		     		   		}
// 	    		     		       });
// 	    		 	       });
// 				  });
				
//         },
//         error: function(xhr){
//             alert("An error occured: "+xhr.status+" "+xhr.statusText);
//         }
//     });
// 	}

// function iniciarRAdmin(){
// 	$.ajax({
//         type:"JSON",
//         url:"../controller/cMostrarReservas.php",
//         success: function(datosR){
        	
//              midatoR=JSON.parse(datosR);

// 			$.each(midatoR,function(i,datoR){
			
// 			            $(".rellenoAdminReserva").append(`<tr>
// 			            		<td>`+datoR.idReserva+`</td>            		
// 			            		<td>`+datoR.fechaReserva+`</td>
// 			            		<td>`+datoR.fechaReservada+`</td>
// 			            		<td>`+datoR.rango+`</td>
// 			            		<td>`+datoR.precio+`</td>
// 			            		<td>`+datoR.idUsuario+`</td>
// 			            		<td>`+datoR.idVehiculo+`</td>
// 			            		<td><button class="deleteR delete_paneles" value="`+datoR.idReserva+`">DELETE</button></td>
// 			            		<td><button class="updateR update_paneles" value="`+datoR.idReserva+`||`+datoR.fechaReserva+`||`+datoR.fechaReservada+`||`+datoR.rango+`||`+datoR.precio+`||`+datoR.idUsuario+`||`+datoR.idVehiculo+`">UPDATE</button></td>
// 			        		</tr>`);
			            
// 			            $(".deleteR").click(function(){
			     			
// 			     			var id=$(this).val(); 
			     		
			     			
// 			     		  	$.ajax({
// 			     		       	type: "GET",
// 			     		       	data:{'id':id},
// 			     		       	url: "../controller/cDeleteReservas.php", 

// 			     		       	success: function(result){  
			     		       		
// 			     		       		console.log(result);
// 			     		       		location.reload(true);  //recarga la pagina
// 			     		       	},
// 			     		       	error : function(xhr) {
// 			     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 			     		   		}
// 			     		       });
// 			 	       });
			            

				
// 			        		//boton para esconder el insert de vAdmin correspondiente y mostrar las tablas
// 			        		$(".goBack").click(function(){
// 			        			$(".insertarAdmin").hide(800);

// 			        			$(".paneles").show(1200);
			        			
// 			        		});    
			        	
// 					});
					
// 					$(".updateR").click(function(){
// 						var todo=$(this).val();

// 						var todo = todo.split("||");
						
// 		     			var id=todo[0]; 
// 		     			var fechaReserva=todo[1]; 
// 		     			var fechaReservada=todo[2]; 
// 		     			var rango=todo[3]; 
// 		     			var precio=todo[4]; 
// 		     			var idUsuario=todo[5]; 
// 		     			var idVehiculo=todo[6]; 
// //		     			
// //		     			fechaReservada=fechaReservada.split("-");
// //		     			fechaReservada=fechaReservada[2]+"-"+fechaReservada[1]+"-"+fechaReservada[0];
// //		     			alert(fechaReservada);
// //		     			fechaReserva=fechaReserva.split("-");
// //		     			fechaReserva=fechaReserva[2]+"-"+fechaReserva[1]+"-"+fechaReserva[0];
// //		     			alert(fechaReserva);

// 		     			$(".paneles").hide(800);
// 		        		$(".encabezado_vAdmin").hide(800);
// 		        		$("body").css("background-color", "	#abcdef");

		     		 
// 		     		       	$(".insertarAdmin").append(`<form id="form_vAdminUpdate" >
// 		    	        		    <div id="elementos_vAdminUpdate">
		    	        		    
// 		    	        		        <div class="nombre_vAdminInsertU">
// 		    	        		        <label>Fecha reserva:</label>
// 		    	        		        <input id="fechaReserva" type="date" value="`+fechaReserva+`">
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="contrasena_vAdminInsertU">
// 		    	        		        <label>Fecha reservada:</label>
// 		    	        		        <input id="fechaReservada" type="date"  value="`+fechaReservada+`">
// 		    	        		        </div>	
		    	        		        	        
		    	        		      	
// 		    	        		        <div class="nombre_vAdminInsertU">
// 											<label for="reservaInputRango">Rango</label>  <select
// 											id="rango" class="form-control" name="rango">
// 											<option value="1">09:00-12:00</option>
// 											<option value="2">13:00-16:00</option>
// 											<option value="3">17:00-20:00</option>
// 		    	        		        	</select>
// 		    	        		        </div>
// 		    	        		        <div class="apellido_vAdminInsertU">
// 		    	        		        <label>Precio:</label>
// 		    	        		        <input id="precio" type="number"  value="`+precio+`" readonly>
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="telefono_vAdminInsertU">
// 		    	        		        <label>Id usuario:</label>
// 		    	        		        <input id="idUsuario" type="text"  value="`+idUsuario+`">
// 		    	        		        </div>
		    	        		        
// 		    	        		        <div class="dni_vAdminInsertU">
// 		    	        		        <label>Id vehiculo:</label>
// 		    	        		        <input id="idVehiculo" type="text"  value="`+idVehiculo+`">
// 		    	        		        </div>
		
		    	        		        
// 		    	        		        <input type="button" class="submit_vAdminUpdate" id="`+id+`" value="GO!">
		    	        				
// 		    	        		    </div>
// 		    	        		    <button class="boton_atras_vAdminU goBack">GO BACK</button>
// 		    	        		    </form>`);
		     		       		
// 		    		        	$(".submit_vAdminUpdate").click(function(){
// 		    		        		var id=$(this).attr("id"); 
// 		    		        		var fechaReserva=$("#fechaReserva").val();
// 		    		        		var fechaReservada=$("#fechaReservada").val();
// 		    		        		var rango=$("#rango").val();
// 		    		        		var precio=$("#precio").val();
// 		    		        		var idUsuario=$("#idUsuario").val();
// 		    		        		var idVehiculo=$("#idVehiculo").val();
		    		        		
// 		    		        		$.ajax({
// 		    		        		 	type: "GET",
// 		    		        		 	data:{'id':id,'fechaReserva':fechaReserva , 'fechaReservada':fechaReservada , 'rango':rango, 'precio':precio , 'idUsuario':idUsuario , 'idVehiculo':idVehiculo },
// 		    		     		       	url: "../controller/cUpdateReserva.php", 

// 		    		     		       	success: function(result){  
// 		    		     		       		console.log(result);

// 		    		     		       		location.reload(true);  //recarga la pagina
// 		    		     		       	},
// 		    		     		       	error : function(xhr) {
// 		    		     		   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 		    		     		   		}
// 		    		     		       });
// 		    		 	       });
// 					  });

//         },
//         error: function(xhr){
//             alert("An error occured: "+xhr.status+" "+xhr.statusText);
//         }
//     });
// 	}



/*FIN DE INICIAR LAS TABLAS EN LA VISTA ADMIN */

/*INICIO DE INSERTAR DATOS EN LAS TABLAS DESDE VADMIN */

// function insertarVehiculo() {
//     // do your things
   
		
// 	var nombre=$("#nombre").val();
// 	var modelo=$("#modelo").val();
// 	var potencia=$("#potencia").val();
// 	var img=$("#img").val();
// 	var tipo=$("#tipo").val();
	
	
// 	$.ajax({
// 	 	type: "GET",
// 	 	data:{ 'nombre':nombre, 'modelo':modelo,'potencia':potencia,'img':img,'tipo':tipo },
// 	 	url: "../controller/cInsertVehiculo.php", 
	
// 	 	success: function(result){  
	 		
// 	 		console.log(result);
// 	 		location.reload(true);  //recarga la pagina
// 	 	},
// 	 	error : function(xhr) {
// 				alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 			}
// 	 });
// }


// function insertarUsuario() {
//     // do your things
   
// 	var usuario=$("#usuario").val();
// 	var contrasena=$("#contrasena").val();
// 	var nombre=$("#nombre").val();
// 	var apellido=$("#apellido").val();
// 	var telefono=$("#telefono").val();
// 	var dni=$("#dni").val();
// 	var tipo=$("#tipo").val();
	
	
// 	$.ajax({
// 	 	type: "GET",
// 	 	data:{'usuario':usuario , 'contrasena':contrasena , 'nombre':nombre, 'apellido':apellido , 'telefono':telefono , 'dni':dni , 'tipo':tipo },
// 	 	url: "../controller/cInsertUsuario.php", 
	
// 	 	success: function(result){  
	 		
// 	 		console.log(result);
// 	 		location.reload(true);  //recarga la pagina
// 	 	},
// 	 	error : function(xhr) {
// 				alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 			}
// 	 });
// }

// function insertarReserva() {
// 	var fechaReserva=$("#fechaReserva").val();
	
// 	var fechaReservada=$("#fechaReservada").val();
// 	var rango=$("#rango").val();
// 	var precio=$("#precio").val();
// 	var idUsuario=$("#idUsuario").val();
// 	var idVehiculo=$("#idVehiculo").val();
	
// 	$.ajax({
// 	 	type: "GET",
// 	 	data:{'fechaReserva':fechaReserva , 'fechaReservada':fechaReservada , 'rango':rango, 'precio':precio , 'idUsuario':idUsuario , 'idVehiculo':idVehiculo },
// 	       	url: "../controller/cInsertReserva.php", 

// 	       	success: function(result){  
	       		
// 	       		console.log(result);
// 	       		alert(result);
// 	       		//location.reload(true);  //recarga la pagina
// 	       	},
// 	       	error : function(xhr) {
// 	   			alert("An error occured: " + xhr.status + " " + xhr.statusText);
// 	   		}
// 	       });
// }

/*FIN DE INSERTAR DATOS EN LAS TABLAS DESDE VADMIN */