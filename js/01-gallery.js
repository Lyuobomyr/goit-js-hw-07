import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  console.log(event.target);
  const source = event.target.dataset.source;
  const currentItem = galleryItems.find(({ original }) => original === source);

  if (currentItem) {
    const instance = basicLightbox.create(
      `<img src="${currentItem.original}"></img>`
    );

    instance.show();

    document.addEventListener("keydown", (event) => {    
      if (event.code === "Escape") instance.close();
    });
  }
}



