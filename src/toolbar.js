import '../style/ole.css';

export default class Toolbar extends ol.control.Control {
  /**
   * Constructor.
   * @param {ol.Map} map The map object.
   * @param {ol.Collection.<ol.control.Control>} controls Controls.
   */
  constructor(map, controls) {
    var element = document.createElement('div');
    element.setAttribute('id', 'ole-toolbar');

    super({
      element: element
    });

    this.controls = controls;
    this.map = map;

    this.map.getTargetElement().appendChild(this.element);

    if (this.controls.getLength()) {
      this._load();
    }

    this.controls.on('change:length', this._load, this);
  }

  /**
   * Loads the toolbar.
   */
  _load() {
    for (var i = 0; i < this.controls.getLength(); i++) {
      var btn = this.controls.item(i).getElement();
      this.element.appendChild(btn);
    }
  }
}
