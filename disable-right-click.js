var tenth = "";

function ninth() {
    if(document.all) {
        (tenth);
        
        return false;
    }
}

function elev(e) {
    if(document.layers || (document.getElementById && !document.all)) {
        if(e.which == 2 || e.which == 3) {
            (tenth);
            
            return false;
        }
    }
}

if(document.layers) {
    document.captureEvents(event.MOUSEDOWN);
    document.onmousedown = elev;
} else {
    document.onmouseup = elev;
    document.oncontextmenu = ninth;
}
document.oncontextmenu = new Function('return false');