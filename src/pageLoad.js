export function createHeader() {
    const headerContainer = document.querySelector('#header-container');

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Kanazawa Delights';

    const openingHours = document.createElement('div');
    openingHours.id = 'opening';
    
    const friday = document.createElement('p');
    friday.textContent = 'Friday: 09.00 - 22.00';
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday: 10.00 - 22.00';

    headerContainer.append(title, openingHours);
    openingHours.append(friday, saturday);
}


