var cont=-1;
var cont2=0;
var cronometro=()=>{
   
    if(encendido ===true&&timer===true){
        if(cont<59){
           document.querySelector("#segundos").classList.replace("segundos","segundos1")
           cont+=1
          if(cont<10){
             document.querySelector("#segundos").innerHTML=`<p id="num" class="nu">0${cont2}:0${cont}</p>`
          }else{
             document.querySelector("#segundos").innerHTML=`<p id="num" class="nu">0${cont2}:${cont}</p>`
          }

        }else if(cont>=59){
             
            cont=-1;
           
            cont2=cont2+1;
        

        }
    }
}


var id;
let time=1000;
var on=()=>{
    
    encendido=true;
    timer=true;
    if(timer===true&&encendido===true){
       id= setInterval(function(){
       
        cronometro()
       
        
     time=time+1;
        console.log(time)
    
    },time)
  }
     
}

var off=()=>{
    
    if(encendido===true&&timer===true){
        
        encendido=false;
        clearInterval(id)
         time=1000;
    }
}
var timer=true;
var restablecer=()=>{
   
    clearInterval(id);
    if(encendido===false&&timer===true){
       
       
       cont=-1;
      cont2=0;
       time=1000;
       
       
       
       document.querySelector("#num").innerHTML=""
       encendido=false;
       timer=false; 
    }
    
       
}

var apagar=()=>{

    encendido=false;
    timer=false;
    document.querySelector("#segundos").classList.replace("segundos1","segundos")
    document.querySelector("#num").classList.replace("numero","nu")
    document.querySelector("#num").innerHTML=""
    clearInterval(id);
 
    console.log(cont)
    cont=-1;
    cont2=0;
    time=1000;

}



 
setInterval(function(){
  
   obtener()
     
},segundos) 
 

const obtener=()=>{
    var hora= new Date()
    var segundos=hora.getSeconds()
    document.querySelector("#seconds").innerHTML=`<input style=" width:30px;height:30px;font-size:20px;padding:5px" placeholder="${segundos}">`

}





