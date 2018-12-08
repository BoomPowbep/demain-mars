import fullpage from 'fullpage.js';

class ScrollHandler {

    constructor() {

         this.fullPageInstance = new fullpage('#fullpage', {
             licenseKey: null,
             navigation: false,
             verticalCentered: false,


        });
    }
}


export default ScrollHandler;
