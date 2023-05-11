import _ from "../core";

_.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

_.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

_.prototype.toggleClass = function(className) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }

    return this;
};