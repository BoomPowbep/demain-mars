import {TweenLite, TweenMax, TimelineLite} from "gsap";
import Datas from './Datas';

const Animations = {

    playIntro: () => {
        console.log('▶️ Play Intro');
        let sequence = new TimelineLite({
            onComplete: () => {
                let els = document.querySelectorAll('#fullpage .section:not(:first-child)');
                els.forEach((cur) => {
                    cur.style.opacity = 1;
                });

                TweenLite.to('.mouse', 0.5, {opacity: "1"});
            }
        });

        /** Mars */
        sequence.to("#title_container", 1.5, {opacity: "1", ease: Power1.easeOut, force3D: true}, 0);

        /** Patates */
        sequence.to(".patate.one", 2, {y: "-=100px", opacity: "1", ease: Power1.easeOut, force3D: true}, 0);
        sequence.to(".patate.two", 2.5, {y: "-=100px", opacity: "1", ease: Power1.easeOut, force3D: true}, 0);
        sequence.to(".patate.three", 3, {y: "-=100px", opacity: "1", ease: Power1.easeOut, force3D: true}, 0);

        sequence.add("cometes", 0.5); // Démarre les comètes à 0.5 seconde

        /** Comètes */
        sequence.to(".comete.one", 1, {x: "+=500px", y: "+=500px", ease: Power1.easeOut, force3D: true}, "cometes");
        sequence.to(".comete.two", 1.5, {x: "+=500px", y: "+=500px", ease: Power1.easeOut, force3D: true}, "cometes");
        sequence.to(".comete.three", 1.8, {x: "-=500px", y: "+=500px", ease: Power1.easeOut, force3D: true}, "cometes");
        sequence.to(".comete.four", 0.8, {x: "+=800px", y: "+=800px", ease: Power1.easeOut, force3D: true}, "cometes");
        sequence.to(".comete.five", 1.4, {x: "+=500", y: "+=500", ease: Power1.easeOut, force3D: true}, "cometes");

        /** Titre */
        // sequence.add("titre", 1.5);
        // sequence.to(CSSRulePlugin.getRule("#title_container:after"), 1, {
        //     cssRule: {
        //         top: "-=100px"
        //     }
        // }, "titre");
    },

    revealIntroSpeech: () => {
        console.log('▶️ Play Intro Speech');
        let sequence = new TimelineLite();
        sequence.to('#appear1', 0.7, {opacity:1});
        sequence.add('next1', 4);
        sequence.to('#appear2', 0.7, {opacity:1}, 'next1');
        sequence.add('next2', 8);
        sequence.to('#appear3', 0.7, {opacity:1}, 'next2');
        sequence.add('next3', 13);
        sequence.to('#appear4', 0.7, {opacity:1}, 'next3');
    },

    playComparisonIntro: () => {
        Animations.playPlanetsComparison();
    },

    playPlanetsComparison: () => {
        // TweenMax.to('.contour_terre', 20, {transformOrigin: "50% 50%", rotation: 360, force3D: true, ease: Power0.easeNone, repeat: -1});
    },

    playGravity: () => {
        console.log('▶️ Play Gravity Animations');
        function loop() {
            let jumper = document.querySelector('#jumper .landscape');
            setTimeout(() => {

                if (jumper.classList.contains('paysageTerre')) {
                    jumper.classList.remove('paysageTerre');
                    jumper.classList.add('paysageMars');
                    jumper.src = 'images/paysages/mars.svg';
                    Datas.drawGravity('mars');
                } else if (jumper.classList.contains('paysageMars')) {
                    jumper.classList.remove('paysageMars');
                    jumper.classList.add('paysageTerre');
                    jumper.src = 'images/paysages/terre.svg';
                    Datas.drawGravity('terre');
                }
                loop();
            }, 5000);
        }

        loop();
    },

    playSolarSystem: () => {
        console.log('▶️ Play Solar System');
        TweenMax.to('.space .mars', 10, {
            transformOrigin: "50% 250px",
            rotation: 360,
            force3D: true,
            ease: Power0.easeNone,
            repeat: -1
        });
        TweenMax.to('.space .terre', 5, {
            transformOrigin: "50% 162.5px",
            rotation: 360,
            force3D: true,
            ease: Power0.easeNone,
            repeat: -1
        });

        function loop() {
            let graph = document.querySelector('#day_year');
            setTimeout(() => {

                if (graph.classList.contains('day')) {
                    graph.classList.remove('day');
                    graph.classList.add('year');
                    Datas.drawTime('year');
                } else if (graph.classList.contains('year')) {
                    graph.classList.remove('year');
                    graph.classList.add('day');
                    Datas.drawTime('day');
                }
                loop();
            }, 5000);
        }

        loop();
    },

    jump: () => {
        let land = document.querySelector('.landscape');
        if (land.classList.contains('paysageTerre')) {
            let seq = new TimelineLite();
            seq.to('.mini_cosmonaut', 0.5, {y: "-=30px", force3D: true, ease: Power0.easeNone});
            seq.to('.mini_cosmonaut', 0.5, {y: "+=30px", force3D: true, ease: Power0.easeNone});
        } else if (land.classList.contains('paysageMars')) {
            let seq = new TimelineLite();
            seq.to('.mini_cosmonaut', 1.5, {y: "-=90px", force3D: true, ease: Power0.easeNone});
            seq.to('.mini_cosmonaut', 1.5, {y: "+=90px", force3D: true, ease: Power0.easeNone});
        }
    },

    /** ********************************** **/
    openAboutModal: () => {
        document.querySelector('#about_modal').style.display = 'block';
        TweenLite.to("#about_modal", 0.5, {opacity: "1", ease: Power1.easeOut, force3D: true});
    },

    closeAboutModal: () => {
        TweenLite.to("#about_modal", 0.5, {
            opacity: "0", ease: Power1.easeOut, force3D: true,
            onComplete: () => {
                document.querySelector('#about_modal').style.display = 'none';
            }
        });
    },
    /** ********************************** **/
};

export default Animations;
