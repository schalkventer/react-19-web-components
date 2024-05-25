class SchalkExample extends HTMLElement {
  inner = this.attachShadow({ mode: "closed" });

  static observedAttributes = ["colour"];

  constructor() {
    super();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "colour" && oldValue !== newValue) {
      const element = this.inner.querySelector("input");
      if (!element) return;
      element.value = newValue;
    }
  }

  connectedCallback() {
    const colour = this.getAttribute("colour");

    this.inner.innerHTML = /* html */ `
      <label>
        <span>Colorise!</span>
        <input value="${colour}">
        <button>Apply</button>
      </label>
    `;

    const button = this.inner.querySelector("button");
    const input = this.inner.querySelector("input");

    if (!button || !input)
      throw new Error("Element missing");

    button.addEventListener("click", () => {
      const payload = new CustomEvent("ColourChange", {
        detail: input.value,
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(payload);
    });
  }
}

window.customElements.define(
  "schalk-example",
  SchalkExample
);
