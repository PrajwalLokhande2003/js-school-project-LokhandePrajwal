import getData  from './fetcher.js';
import renderTimeline from './renderer.js';
import renderItem from './renderItem.js';
import renderModal from './modal.js';

const timeline = document.getElementById('timeline') as HTMLElement | null;
const timelineItem = timeline?.children?.[0]?.children?.[0] as HTMLElement | undefined;

const toggleBtn = document.querySelector('.toggle-btn') as HTMLElement | null;
if (toggleBtn) {
  toggleBtn.style.justifyContent = 'start';
  toggleBtn.addEventListener('click', () => {
    if (toggleBtn.style.justifyContent === 'start') {
    document.body.classList.add('active');
    toggleBtn.style.justifyContent = 'end';
  } else {
    document.body.classList.remove('active');
    toggleBtn.style.justifyContent = 'start';
  }
});
}

window.onload = async () => {
  const data = await getData();
  if (timelineItem) {
    renderTimeline(0, data, timelineItem);
  }
  renderItem(0, data);
  renderModal(0, data);
  console.log(data);

};

console.log('getData()');

