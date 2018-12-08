/**
 * npm run encore.watch
 */

import Stars from './Stars';
import Animations from './Animations';
import ScrollHandler from './ScrollHandler';
import Datas from './Datas';

class App {

    constructor() {
        console.log('🚀 Demain, Mars ? 🌟 Workshop Dataviz 📊');
        this.scrollHandler = new ScrollHandler();
    }

    init() {
        Stars.init();
        this._registerTriggers();
        Animations.playIntro();
        // Datas.draw();
    }

    _registerTriggers() {

        /** Support pour différents navigateurs **/
        // window.addEventListener('mousewheel', (e)=> {
        //     this.scrollHandler.scroll(e);
        // });
        // window.addEventListener('DOMMouseScroll', (e)=> {
        //     this.scrollHandler.scroll(e);
        // });

        /** Modal about **/
        document.querySelector('#about_btn').addEventListener('mousedown', () => {
            Animations.openAboutModal();
        });
        document.querySelector('#about_close').addEventListener('mousedown',() => {
            Animations.closeAboutModal();
        });
        /** *********** **/
    }
}

export default App;
