export function createAboutTab() {
    // const aboutBtn = document.querySelector('#aboutBtn');
    const tabContainer = document.querySelector('#content-container');

    const aboutTab = document.createElement('div');
    aboutTab.classList.add('tab');
    aboutTab.id = 'aboutTab';

    const aboutWrapper = document.createElement('div');
    aboutWrapper.id = 'aboutWrapper';

    const heading = document.createElement('p');
    heading.id = 'heading';
    heading.textContent = 'About Kanazawa Delights';

    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = 'Welcome to Kanazawa Delights. At our restaurant, we strive to provide authentic, delicious Japanese foods inspired from the beautiful city of Kanazawa. Even though this is a fake restaurant, we do wish for a Kanazawa-inspired restaurant to be developed worldwide. There truly would be nothing quite like it.'

    const achievements = document.createElement('div');
    achievements.id = 'achievements';

    const googleReview = document.createElement('p');
    const locations = document.createElement('p');
    const michelin = document.createElement('p');
    googleReview.textContent = '⭐ 4.8 out of 5 on Google Reviews';
    locations.textContent = '🌍 Stores in 50+ countries';
    michelin.textContent = '🥘 5-star Michelin Restaurant';

    tabContainer.appendChild(aboutTab);
    aboutTab.appendChild(aboutWrapper);
    aboutWrapper.append(heading, description, achievements);
    achievements.append(googleReview, locations, michelin);
}