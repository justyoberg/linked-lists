export default class Node {

  constructor(value) {
    this.value = value || null;
    this.next = null;
    this.updateValue = function(newVal) {
      this.value = newVal;
    }
  }

}
