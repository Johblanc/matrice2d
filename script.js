
function newCoords(newOffset){
    return `M 10,${newOffset} L ${newOffset},140 140,${150 - newOffset} ${150 - newOffset},10 Z`
}

function rollCoords(offset=10){
    document.getElementById("poly").setAttribute("d",newCoords(offset));
    offset +=3;
    if (offset>=140){offset=10};
    setTimeout(rollCoords,25,offset);
}

rollCoords()




