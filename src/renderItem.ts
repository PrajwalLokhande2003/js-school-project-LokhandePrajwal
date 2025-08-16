import EventData  from './types.js';
import renderModal from "./modal.js";

export default function renderItem(index: number, data: EventData[]): void {
  const item = document.querySelector('.item') as HTMLElement;
  const modal = document.getElementById('modal') as HTMLElement;

  item.innerHTML = '';
  const currentItem = data[index] as EventData;

  const itemTitle = document.createElement('h3');
  itemTitle.classList.add('item-title');
  itemTitle.textContent = currentItem.title;
  item.appendChild(itemTitle);

  const itemImageContainer = document.createElement('div');
  itemImageContainer.classList.add('item-image-container');
  const itemImage = document.createElement('img');
  itemImage.classList.add('item-image');
  itemImage.src = currentItem.imageURL;
  itemImageContainer.appendChild(itemImage);

  const itemImageCaption = document.createElement('div');
  itemImageCaption.classList.add('item-image-caption');
  itemImageCaption.textContent = currentItem.category;
  itemImageContainer.appendChild(itemImageCaption);
  item.appendChild(itemImageContainer);

  const itemDescription = document.createElement('div');
  itemDescription.classList.add('item-description');
  itemDescription.textContent = currentItem.description;
  item.appendChild(itemDescription);

  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.textContent = 'Load More';
  loadMoreBtn.classList.add('load-more-btn');
  loadMoreBtn.addEventListener('click', () => {
    modal.classList.remove('d-none');
    modal.classList.add('d-flex');
    renderModal(index, data);
  });
  item.appendChild(loadMoreBtn);
}
