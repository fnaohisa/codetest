/**
 * 171218_ sukupara_interstitial.js
 *
 */

(function() {
    var BODY            = document.querySelector("body");
    var OUTER_WRAPPER   = BODY.querySelector('.gmoam_outer_wrapper');

    // 画像拡張
    function modifyDivContents() {
        if (BODY) {
            if (OUTER_WRAPPER) {
                let CON_WRAPPER = OUTER_WRAPPER.querySelector('.gmoam_container_wrapper');
                let GMOAMSQ1    = OUTER_WRAPPER.querySelector(".gmoam_sq1");
                let base_width  = (GMOAMSQ1.clientWidth === 0) ? 300 : GMOAMSQ1.clientWidth;
                let maxScale    = 414 / base_width;
                let scale       = window.innerWidth / base_width;
                if (scale > maxScale) { // 画面が414より大きい
                    CON_WRAPPER.style.transform = "scale(" + maxScale + ")";
                } else { // 画面が414以下
                    CON_WRAPPER.style.transform = "scale(" + scale + ")";
                }
                let CLOSE           = OUTER_WRAPPER.querySelector('.gmoam_close');
                let gmoamsq1_width  = CON_WRAPPER.querySelector('.gmoam_sq1').getBoundingClientRect().width;
                CLOSE.style.width   = gmoamsq1_width;
            }
        }
    }

    // 閉じるボタン
    function closeButtonPushed() {
        let CLOSE_BUTTON = OUTER_WRAPPER.querySelector('.gmoam_close_button');
        CLOSE_BUTTON.addEventListener("click", () => {
            BODY.style.position = "initial";
            OUTER_WRAPPER.style.display = "none";
        });
    }

    // 表示
    function displayBlock() {
        if (OUTER_WRAPPER) {
            OUTER_WRAPPER.style.display = "block";
            modifyDivContents();
            BODY.style.position = "fixed"; // for no scrolling
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        displayBlock();
        closeButtonPushed();
    });
})();
