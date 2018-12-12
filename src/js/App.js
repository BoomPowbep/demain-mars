/**
 * npm run encore.watch
 */

import ScrollHandler from './ScrollHandler';
import Stars from './Stars';
import Animations from './Animations';
import Datas from './Datas';

class App {

    constructor() {
        console.log('🚀 Demain, Mars ? 🌟 Workshop Dataviz 📊');
    }

    init() {
        this._registerTriggers();
        this.scrollHandler = new ScrollHandler();
        this.scrollHandler.init();
        this._initPositions();
        Stars.init();
        Animations.playIntro();
    }

    _registerTriggers() {

        /** Modal about **/
        document.querySelector('#about_btn').addEventListener('mousedown', () => {
            Animations.openAboutModal();
        });
        document.querySelector('#about_close').addEventListener('mousedown',() => {
            Animations.closeAboutModal();
        });
        /** *********** **/

        document.querySelector('#jumper').addEventListener('mousedown', () => {
            Animations.jump();
        });
    }

    _initPositions() {

        /** Textes centrés */
        let conts = document.querySelectorAll('.centered_text');
        conts.forEach((curr) => {
            curr.style.top = (window.innerHeight / 2 - curr.getBoundingClientRect().height / 2) + "px";
        });

        let intros = document.querySelectorAll('.appear');
        intros.forEach((curr) => {
            curr.style.opacity = 0;
        });

        // let introText = document.querySelector('.intro_speech').innerText;
        // let introWords = introText.split(' ');
        // introWords.forEach((curr) => {
        //     curr.style.opacity = 0;
        // });

        /** Texte dans le bloc, slide comparaisons */
        // let rightTxt = document.querySelector('.fifty_fifty .right .left_text');
        // let rightTxtInfos = document.querySelector('.fifty_fifty .right').getBoundingClientRect();
        // let fiftyContainer = document.querySelector('.fifty_fifty').getBoundingClientRect();
        // rightTxt.style.top = fiftyContainer.height / 2;

        /** Contour de la Terre, slide comparaisons */
        // let contourTerre = document.querySelector('.contour_terre');
        // let mars = document.querySelector('#planetes_confrontation .mars').getBoundingClientRect();
        //
        // contourTerre.style.top = (mars.top - 4) + "px";
        // contourTerre.style.left = (mars.left - 3.5) + "px";
    }
}

export default App;
