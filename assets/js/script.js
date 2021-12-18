'use strict';

const cardImage = document.getElementById('card-img');
const cardTitle = document.getElementById('card-title');
const cardIntro = document.getElementById('card-intro');

setTimeout(() => {
    cardImage.classList.remove('skeleton');
    cardTitle.classList.remove('skeleton');
    cardIntro.classList.remove('skeleton');

    cardImage.innerHTML = '<img src="https://cdn.vox-cdn.com/thumbor/vEfdcq4C5OBUT5d5h7b5qR2Ommc=/0x0:864x1280/1200x800/filters:focal(363x571:501x709)/cdn.vox-cdn.com/uploads/chorus_image/image/63239723/MLou2_Payoff_1_Sht_Online_DOM_v7_Sm_0.0.jpg" />';
    cardTitle.innerText = 'Avengers: Endgame';
    cardIntro.innerText = 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.';
    
}, 3000);