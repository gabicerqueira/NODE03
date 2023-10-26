let estado = function(a){
    if (a === "SP" || a === "RJ" || a === "sp" || a === "rj"){
        return "Estado permitido"
    } else{
        return "Estado negado"
    }
}

module.exports = estado