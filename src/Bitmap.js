'use strict';

class Bitmap {
    constructor() {
        this.data = null;
        this.width = 0;
        this.height = 0;
        this.bitDepth = 0;
        this.alpha = false;
        this.components = 0;
        this.channels = 0;
    }
}

module.exports = Bitmap;
