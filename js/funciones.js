function ocultar(){
    // $("#contenido").hide("slow")
    $("#contenido").hide(5000)
}

const conmutar = () => {
    $("#contenido").toggle(3500)
}

$(document).ready(function(){
    let n = ""
    $("#boton").click(function(){
        n= $("#nombre").val()
        // alert('Hola, tu nombre es: '+n)
        // $("#menu").text('Hola, tu nombre es: '+n)
        $("#menu").html('Hola, tu nombre es: <b>'+n+'</b>')
    })
    $("#titulo").click(ocultar)

    $("address").click(()=>{
        $("#contenido").show(5000)
    })

    $("h2").click(conmutar)
})

