function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
//@target: ES5
var M;
(function(M1) {
    var Symbol;
    var _iterator = Symbol.iterator;
    var C = /*#__PURE__*/ function() {
        "use strict";
        function C() {
            _classCallCheck(this, C);
        }
        _createClass(C, [
            {
                key: _iterator,
                value: function value() {}
            }
        ]);
        return C;
    }();
    M1.C = C;
    (new C)[Symbol.iterator];
})(M || (M = {}));
(new M.C)[Symbol.iterator];
