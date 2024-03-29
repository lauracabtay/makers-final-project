import p5 from 'p5';
import { BaseObject } from './baseObject';

export class Character extends BaseObject {
  static objects = [];
  static objectImagesURI = [];
  static objectImages = [];

  constructor(name, imageIndex, x, y, onClick = () => {}, onHover = () => {}) {
    super(x, y, 32, 32, name);

    this.name = name;
    this.image = imageIndex;

    this.enabled = true;
    this.hidden = false;

    this.onClick = onClick;
    this.onHover = onHover;

    const bypassDiv = document.getElementById(this.id);
    bypassDiv?.addEventListener("click", this.onClick);
  }

  updateImage() {
    this.image = Character.objectImages[this.image];
    this.image.resize(0, 32 * BaseObject.scaleFactor);
  }

  update() {
    if (!this.enabled) return;
    if (this.pointCircleCollision(p5.mouseX, p5.mouseY)) {
      this.onHover();

      if (p5.mouseIsPressed) {
        this.onClick();
      }
    }
  }

  display() {
    if (this.hidden) return;
    let pos = this.getPosNoTranslation();
    p5.image(this.image, pos[0], pos[1]);
  }
}
