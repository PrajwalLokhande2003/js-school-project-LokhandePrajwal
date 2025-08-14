
const timeline = document.getElementById('timeline');
const modal = document.getElementById('modal');
const item = document.querySelector('.item');
const toggleBtn = document.getElementById('toggle-btn');
const toggleBtnInner = document.querySelector('.toggle-btn-inner');

toggleBtn.style.justifyContent = 'start';

toggleBtn.addEventListener('click', function () {
    if (toggleBtn.style.justifyContent === 'start') {
        toggleBtn.classList.add('active');
        toggleBtnInner.classList.add('active');
        document.querySelector('.main-content').classList.add('active');
        document.body.classList.add('active');
        document.querySelector('.header').classList.add('active');
        modal.classList.add('active');
        toggleBtn.style.justifyContent = 'end'
    } else {
        toggleBtn.classList.remove('active');
        toggleBtnInner.classList.remove('active');
        document.querySelector('.main-content').classList.remove('active');
        document.body.classList.remove('active');
        document.querySelector('.header').classList.remove('active');
        modal.classList.remove('active');
        toggleBtn.style.justifyContent = 'start'
    }

});

const timelineItem = timeline.children[0].children[0];

function getData() {
    return fetch('data.json')
        .then(res => res.json())
        .then(data => data)
}
const data = getData();


let ele = 0;

function renderTimeline(ele) {
    timelineItem.innerHTML = "";
    let min = ele - 2;
    let max = ele + 2;
    data.then(res => {
        for (let i = min; i <= max; i++) {
            const timeStamp = document.createElement('button');
            timeStamp.classList.add('timestamp');
            timelineItem.appendChild(timeStamp);
            if (i >= 0 && i < res.length) {
                timeStamp.style.scale = i === ele ? '1.5' : '1';
                timeStamp.value = i;
                const timeStampText = document.createElement('caption');
                timeStampText.classList.add('timestamp-text');
                timeStampText.textContent = res[i].year;
                timeStampText.value = i;
                timeStamp.appendChild(timeStampText);
                timeStamp.addEventListener('click', function (e) {
                    ele = parseInt(e.target.value);
                    renderTimeline(ele);
                    renderItem(ele);
                })
            } else {
                timeStamp.classList.add('disabled');
            }
        }
    });
}

function renderItem(index) {
    item.innerHTML = "";
    data.then(res => {
        const currentItem = res[index];

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
            renderModal(index);
        });
        item.appendChild(loadMoreBtn);
    });

}

modal.classList.add('d-none');

function renderModal(index) {
    modal.innerHTML = "";
    data.then(res => {
        const currentItem = res[index];

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
    });
}

window.onload = () => {
    renderTimeline(ele);
    renderItem(0);
    renderModal(0);
};
