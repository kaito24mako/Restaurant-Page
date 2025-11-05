export function createHeader() {
    const headerContainer = document.querySelector('#header-container');
    const nav = document.querySelector('#tabs-container');

    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Kanazawa Delights';

    const openingHours = document.createElement('div');
    openingHours.id = 'opening';

    // friday 
    const fridayWrapper = document.createElement('div');
    fridayWrapper.classList.add('day-wrapper');
    
    const friday = document.createElement('p');
    friday.textContent = 'Friday';
    const fridayTime = document.createElement('p');
    fridayTime.textContent = '09.00 - 22.00';

    fridayWrapper.append(friday, fridayTime);

    // saturday
    const saturdayWrapper = document.createElement('div');
    saturdayWrapper.classList.add('day-wrapper');

    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday';
    const saturdayTime = document.createElement('p');
    saturdayTime.textContent = '10.00 - 22.00';

    saturdayWrapper.append(saturday, saturdayTime);

    // put everything together
    headerContainer.insertBefore(title, nav);
    headerContainer.insertBefore(openingHours, nav);
    openingHours.append(fridayWrapper, saturdayWrapper);
}


