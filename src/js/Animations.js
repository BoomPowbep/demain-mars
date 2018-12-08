import {TweenMax, TimelineLite, CSSRulePlugin} from "gsap/all";

const Animations = {

    playIntro: () => {
        let sequence = new TimelineLite();

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

    /** ********************************** **/
    openAboutModal: () => {
        document.querySelector('#about_modal').style.display = 'block';
        TweenMax.to("#about_modal", 0.5, {opacity: "1", ease: Power1.easeOut, force3D: true});
    },

    closeAboutModal: () => {
        TweenMax.to("#about_modal", 0.5, {
            opacity: "0", ease: Power1.easeOut, force3D: true,
            onComplete: () => {
                document.querySelector('#about_modal').style.display = 'none';
            }
        });
    },
    /** ********************************** **/


};

export default Animations;
