import fullpage from 'fullpage.js';
import Animations from './Animations';
import Datas from './Datas';

class ScrollHandler {

    constructor() {
        console.log('⛓ Scroll handler');
        this.firstIntro = false;
        this.firstDiam = false;
        this.firstGrav = false;
        this.firstTime = false;
        this.firstAgen = false;
    }

    init() {
        let fullPageInstance = new fullpage('#fullpage', {
            licenseKey: 'IwI5sxPw!;',
            navigation: false,
            verticalCentered: false,
            recordHistory: false,
            anchors: ['intro', 'first', 'diam', 'grav', 'time', 'agen', 'end'],
            afterLoad: (origin, destination, direction) => {

                switch (destination.anchor) {
                    case 'first':
                        if (!this.firstIntro) {
                            this.firstIntro = true;
                            Animations.revealIntroSpeech();
                        }
                        break;
                    case 'diam':
                        if (!this.firstDiam) {
                            this.firstDiam = true;
                            Animations.playComparisonIntro();
                            Datas.drawDiameter();
                        }
                        break;
                    case 'grav':
                        if (!this.firstGrav) {
                            this.firstGrav = true;
                            Animations.playGravity();
                            Datas.drawGravity('terre');
                        }
                        break;
                    case 'time':
                        if (!this.firstTime) {
                            this.firstTime = true;
                            Animations.playSolarSystem();
                            Datas.drawTime('year');
                        }
                        break;
                    case 'agen':
                        if (!this.firstAgen) {
                            this.firstAgen = true;
                            Datas.drawAgencies();
                        }
                        break;
                }
            }
        });
    }
}

export default ScrollHandler;
