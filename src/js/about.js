export function createAboutTab() {
    // const aboutBtn = document.querySelector('#aboutBtn');
    const tabContainer = document.querySelector('#content-container');

    const aboutTab = document.createElement('div');
    aboutTab.classList.add('tab');
    aboutTab.id = 'aboutTab';

    const description = document.createElement('p');
    description.textContent = 'Welcome to Kanazawa Delights. At our restaurant, we strive to provide authentic, delicious Japanese foods inspired from the beautiful city of Kanazawa. There is nothing quite like this.'

    const achievements = document.createElement('div');
    achievements.id = 'achievements';

    const googleReview = document.createElement('p');
    const locations = document.createElement('p');
    const michelin = document.createElement('p');
    googleReview.textContent = '4.8 stars out of 5 on Google Reviews';
    locations.textContent = 'Stores in 50+ countries';
    michelin.textContent = '5-star Michelin Restaurant';

    tabContainer.appendChild(aboutTab);
    aboutTab.append(description, achievements);
    achievements.append(googleReview, locations, michelin);
}