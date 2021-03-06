import * as Konami from 'konami';

import ScrollHandler from './ScrollHandler';
import Stars from './Stars';
import Animations from './Animations';

window.mobilecheck = function () {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

class App {

    constructor() {
        console.log('');
        console.log('%c🚀 Demain, Mars ? ⏩ %cWorkshop Dataviz 📊 BDDI 2018', 'color: #3b3652; font-weight: bold;', 'font-weight: normal;');
        console.log('');
        console.log('%c👉 Équipe :', 'font-weight: bold; color: blue;');
        console.log('%c     Nitya Tchangodei : Graphisme', 'font-weight: bold; color: blue;');
        console.log('%c     Mickaël Debalme : Développement', 'font-weight: bold; color: blue;');
        console.log('');
        this.song = null;
    }

    init() {
        Stars.init();
        if (!mobilecheck()) {
            document.querySelector('#fullpage').style.display = 'block';
            document.querySelector('#about_btn').style.display = 'block';
            this._initKonami();
            this._registerTriggers();
            this.scrollHandler = new ScrollHandler();
            this.scrollHandler.init();
            this._initPositions();
            Animations.playIntro();
        } else {
            document.querySelector('#mobile_view').style.display = 'block';
            let rect = document.querySelector('#mobile_content_container').getBoundingClientRect();
            document.querySelector('#mobile_content_container').style.top = window.innerHeight / 2 - rect.height / 2 + "px";
        }
    }

    _initKonami() {
        new Konami(() => {
            this.song = new Audio('sound/starwars.mp3');
            this.song.play();
            document.querySelector('#speaker').style.display = 'block';
        });
    }

    _registerTriggers() {

        console.log('🎛 Register triggers');

        let speaker = document.querySelector('#speaker');
        let speakerImage = document.querySelector('#speaker img');
        speaker.addEventListener('mousedown', () => {
            if(speaker.classList.contains('off')) {
                speaker.classList.remove('off');
                speaker.classList.add('on');
                speakerImage.src = 'images/speaker_on.svg';
                this.song.play();
            }
            else if(speaker.classList.contains('on')) {
                speaker.classList.remove('on');
                speaker.classList.add('off');
                speakerImage.src = 'images/speaker_off.svg';
                this.song.pause();
            }
        });

        /** Modal about **/
        document.querySelector('#about_btn').addEventListener('mousedown', () => {
            Animations.openAboutModal();
        });
        document.querySelector('#about_close').addEventListener('mousedown', () => {
            Animations.closeAboutModal();
        });
        /** *********** **/

        document.querySelector('#jumper').addEventListener('mousedown', () => {
            Animations.jump();
        });

        /** Infobox **/
        // document.querySelector('.info_icon').addEventListener('mousedown', () => {
        //     document.querySelector('.infoBox').style.display = 'block';
        // });
        // document.querySelector('.infoBox').addEventListener('mousedown', () => {
        //     document.querySelector('.infoBox').style.display = 'none';
        // });
        /** *********** **/
    }

    _initPositions() {

        console.log('📏 Init positions');

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
