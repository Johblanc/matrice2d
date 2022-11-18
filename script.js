const FORME_A = document.getElementById("poly")

/**Coordonnées 2d issues d'un path svg*/
class Coord{
    constructor(format="",x=0,y=0){
        this.format = format;
        this.x = x;
        this.y = y;
    }
}

/**Ce texte est-il un ensemble de coordonnées ? */
function isCoord(str){
    return str.split(",").length == 2;
}

/**Convertion des coordonnées svg en Array de Coord */
function convertCoordSvg(balise){
    let d = balise.getAttribute("d")
    let result = [];
    let decoupe = d.split(" ")
    let format = ""
    for (let i = 0 ; i < decoupe.length ; i++){
        if (isCoord(decoupe[i])){
            format = isCoord(decoupe[i-1]) ? "" : decoupe[i-1];
            result.push(
                new Coord(
                    format,
                    decoupe[i].split(",")[0],
                    decoupe[i].split(",")[1]
                )
            );
        };
    }
    return result ;
}

function newCoords(newOffset){
    return `M 10,${newOffset} L ${newOffset},140 140,${150 - newOffset} ${150 - newOffset},10 Z`
}

function rollCoords(offset=10){
    FORME_A.setAttribute("d",newCoords(offset));
    offset +=3;
    if (offset>=140){offset=10};
    setTimeout(rollCoords,25,offset);
}

rollCoords()




