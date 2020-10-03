document.firstElementChild.style.zoom = "reset";

function pintar(seleccion){
    var simg = document.getElementById(seleccion);
    var ruta = simg.getAttribute("src");
    var foto = document.getElementById('image-f');
        foto.setAttribute("src",ruta);
        foto.setAttribute("width","50%");
        /*
        var selector = document.querySelector('.selector');
        selector.setAttribute("style","display: none");
        */
    var buttons = document.querySelector('#change-f');
        buttons.setAttribute("style","margin-top: 2.5rem");
};

var rotate = 0;
slider = document.querySelector("#color-f");
slider.addEventListener("input", change);        
function change(){
    var image = document.getElementById('image-f');
    var cambio = this.value;
        var colores = cambio +'deg';
        image.style.filter = "hue-rotate("+colores+")";
        console.log(colores);
    console.log('colores');
}

var control = 0;
function background_change(color){
     control = control + color;
    var fondo = document.getElementById('background-f');
    if(control ==1){
        fondo.style.background = '#fcbf49';
    }else{
        if(control ==2){
            fondo.style.background = '#ef233c';    
        }
        else{
            if(control ==3){
                fondo.style.background = '#55a630';    
            }
            else{
                if(control ==4){
                    fondo.style.background = '#023e8a';    
                }
                else{
                    fondo.style.background = '#ffcad4';
                    control = 0
                }
            }
        }
    }
};