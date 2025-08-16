import renderItem from "./renderItem.js";
export default function renderTimeline(ele, data, timelineItem) {
    timelineItem.innerHTML = '';
    const min = ele - 2;
    const max = ele + 2;
    for (let i = min; i <= max; i++) {
        const timeStamp = document.createElement('button');
        timeStamp.classList.add('timestamp');
        timelineItem.appendChild(timeStamp);
        if (i >= 0 && i < data.length) {
            timeStamp.style.scale = i === ele ? '1.5' : '1';
            timeStamp.value = String(i);
            const currentItem = data[i];
            const timeStampText = document.createElement('caption');
            timeStampText.classList.add('timestamp-text');
            timeStampText.textContent = currentItem.year;
            timeStamp.appendChild(timeStampText);
            timeStamp.addEventListener('click', () => {
                renderTimeline(i, data, timelineItem);
                renderItem(i, data);
            });
        }
        else {
            timeStamp.classList.add('disabled');
        }
    }
}
