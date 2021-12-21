(function(){
    var gmo_yads = {};

    // SPのトップページパス
    const URL_SP_TOP = '/';

    function isTop() {
        let path = location.pathname;
        if (path === URL_SP_TOP) {
            return true;
        } else {
            return false;
        }
    }

    // 条件: トップページ以外
    gmo_yads.condition = (function(){
        let flg = false;
        let is_top = isTop();
        if (is_top === false) {
            flg = true;
        }
        return flg;
    })();

    window.gmo_yads = gmo_yads;
})();
