export class Excel {
	constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.componnents = options.components || [];
  }
}
