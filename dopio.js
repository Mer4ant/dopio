class dopioClass {
    constructor(selector) {
        this.elements = new Set();
        selector instanceof HTMLElement ? this.elements.add(selector) : document.querySelectorAll(selector).forEach((e) => this.elements.add(e));
    }
    text(content) {
        Array.from(this.elements).forEach((e) => {
            e.textContent = content
        });
        return this
    }
    on(event, callback) {
        Array.from(this.elements).forEach((element) => {
            element.addEventListener(event, e => callback(e))
        });
        return this
    }
    click(callback) {
        callback === undefined ? Array.from(this.elements).forEach((e) => {
            e.click()
        }) : Array.from(this.elements).forEach((e) => {
            e.addEventListener("click", callback)
        });
        return this
    }
    is(selector) {
        return Array.from(this.elements).some((e) => Array.from(document.querySelectorAll(selector)).includes(e))
    }
    html(content) {
        this.elements.forEach((e) => {
            e.innerHTML = content
        });
        return this
    }
    css(key, value) {
        let style = value === undefined ? Array.from(this.elements)[0].style[key] : Array.from(this.elements).forEach((e) => {
            e.style[key] = value
        });
        return style === undefined ? this : style
    }
    attribute(key, value) {
        let attribute = value === undefined ? Array.from(this.elements)[0].getAttribute(key) : Array.from(this.elements).forEach((e) => {
            e.setAttribute(key, value)
        });
        return attribute === undefined ? this : attribute
    }
    addClass(cls) {
        Array.from(this.elements).forEach((e) => {
            e.classList.add(cls)
        });
        return this
    }
    removeClass(cls) {
        Array.from(this.elements).forEach((e) => {
            e.classList.remove(cls)
        });
        return this
    }
    each(callback) {
        for (let i = 0; i < Array.from(this.elements).length; i++) {
            if (callback(elements[i], i) === false) break
        };
        return this
    }
}
const dopio = (selector) => new dopioClass(selector);
