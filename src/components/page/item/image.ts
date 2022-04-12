export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const templete = document.createElement('template');
    templete.innerHTML = `<section class="image">
    <div class="image-holder">
      <img src="" alt="" class="image-thumbnail">
    </div>
    <p class="image-tilte"></p>
  </section>`;
    this.element = templete.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector(
      '.image-thumbnail'
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image-tilte'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
