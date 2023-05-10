const _ = function(selector) {
    return new _.prototype.init(selector);
};

_.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    };
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

_.prototype.init.prototype = _.prototype;

window._ = _;

export default _;