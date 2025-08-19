var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b, _c;
import getData from './fetcher.js';
import renderTimeline from './renderer.js';
import renderItem from './renderItem.js';
import renderModal from './modal.js';
const timeline = document.getElementById('timeline');
const timelineItem = (_c = (_b = (_a = timeline === null || timeline === void 0 ? void 0 : timeline.children) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c[0];
const toggleBtn = document.querySelector('.toggle-btn');
if (toggleBtn) {
    toggleBtn.style.justifyContent = 'start';
    toggleBtn.addEventListener('click', () => {
        if (toggleBtn.style.justifyContent === 'start') {
            document.body.classList.add('active');
            toggleBtn.style.justifyContent = 'end';
        }
        else {
            document.body.classList.remove('active');
            toggleBtn.style.justifyContent = 'start';
        }
    });
}
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getData();
    if (timelineItem) {
        renderTimeline(0, data, timelineItem);
    }
    renderItem(0, data);
    renderModal(0, data);
    console.log(data);
});
console.log('getData()');
