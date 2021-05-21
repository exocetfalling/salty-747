var B747_8_LowerEICAS_ECL;
(function (B747_8_LowerEICAS_ECL) {
    class Display extends Airliners.EICASTemplateElement {
        constructor() {
            super();
            this.isInitialised = false;
        }
        get templateID() { return "B747_8LowerEICASECLTemplate" }
        connectedCallback() {
            super.connectedCallback();
            TemplateElement.call(this, this.init.bind(this));
        }
        init() {
            this.isInitialised = true;
        }
        update(_deltaTime) {

        }
    }
    B747_8_LowerEICAS_ECL.Display = Display;
})(B747_8_LowerEICAS_ECL || (B747_8_LowerEICAS_ECL = {}));
customElements.define("b747-8-lower-eicas-ecl", B747_8_LowerEICAS_ECL.Display);
//# sourceMappingURL=B747_8_LowerEICAS_ECL.js.map