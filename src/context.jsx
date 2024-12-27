export const coord = {
    x : 0,      // column of the cell (starting top left)
    y : 0,      // row of the cell
    index : 0   // index of the cell
}
export const context = {
    frame : 0,          // current frame
    time : 0,           // current time in ms
    cols : 0,           // number of columns of the rendering context
    rows: 0,           // number of rows of the rendering context
    width: 500,          // width of the container element (pixels)
    height: 500,         // height of the container element (pixels)
    metrics : {
        aspect: 0.44,     // aspect ratio of a single char (monospaced font assumed)
        cellWidth: 8.44,  // width of a char
        lineHeight: 21.2, // computed, but should be the same as CSS
        fontFamily: 'Pilat-Demi', // CSS string
        fontSize: 16,   // Derived from CSS (pixels)
        _update : function(){const t=b(e);for(var o in t)"number"!=typeof t[o]&&"string"!=typeof t[o]||(m[o]=t[o])}   // Function to recalc the metrics (slow!)
    },
    settings : { fps : 60 },       // The settings object
    runtime : {
        cycle: 12,      // local cycle count of the script (for debugging purposes)
        fps: 60       // average frame rate (measured)
    },
}
export const cursor = {
    x: 0,          // column of the cell hovered
    y: 0,          // row of the cell hovered
    pressed: 0,    // mouse or pointer is pressed (boolean)
    p : {       // cursor state of the previous frame
        x: 0,
        y: 0,
        pressed: 0
    }
}

