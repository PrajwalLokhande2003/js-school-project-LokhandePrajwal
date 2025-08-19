import EventData from './types.js';

export default function renderModal(index: number, data: EventData[]): void {
  const modal = document.getElementById('modal') as HTMLElement;
  modal.classList.add('d-none');
  modal.innerHTML = '';

  const currentItem = data[index] as EventData;
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  modal.appendChild(modalContainer);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', () => {
    modal.classList.add('d-none');
    modal.classList.remove('d-flex');
  });
  modalContainer.appendChild(closeButton);

  const modalTitle = document.createElement('h3');
  modalTitle.classList.add('item-title');
  modalTitle.textContent = currentItem.title;
  modalContainer.appendChild(modalTitle);

  const modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('item-image-container');
  const modalImage = document.createElement('img');
  modalImage.classList.add('item-image');
  modalImage.src = currentItem.imageURL;
  modalImageContainer.appendChild(modalImage);

  const modalImageCaption = document.createElement('div');
  modalImageCaption.classList.add('item-image-caption');
  modalImageCaption.textContent = currentItem.category;
  modalImageContainer.appendChild(modalImageCaption);
  modalContainer.appendChild(modalImageContainer);

  const itemDescription = document.createElement('div');
  itemDescription.classList.add('item-description');
  itemDescription.textContent = currentItem.description;
  modalContainer.appendChild(itemDescription);
}