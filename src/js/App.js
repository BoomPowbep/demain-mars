import Stars from './Stars';

import {TweenMax} from "gsap/TweenMax";

class App {

    constructor() {
        console.log('🚀 Demain, Mars ? 🌟 Workshop Dataviz 📊');
    }

    init() {
        Stars.init();
        this._initAnimations();
    }

    _initAnimations() {
        TweenMax.to(".patate.one", 2, {y:"-=100px", ease:Power1.easeOut});
        TweenMax.to(".patate.two", 2.5, {y:"-=100px", ease:Power1.easeOut});
        TweenMax.to(".patate.three", 3, {y:"-=100px", ease:Power1.easeOut});
        TweenMax.to("#title", 1.5, {opacity:"1", ease:Power1.easeOut});
    }
}

export default App;
