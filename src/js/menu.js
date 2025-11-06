export function createMenuTab() {
    const tabContainer = document.querySelector('#content-container');

    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.id = 'menuTab';

    const menuWrapper = document.createElement('div');
    menuWrapper.id = 'menuWrapper';

    const heading = document.createElement('h2');
    heading.id = 'heading';
    heading.textContent = 'Featured Menu Items';

    const itemWrapper = document.createElement('div');
    itemWrapper.id = 'itemWrapper';

    const item = document.createElement('div');
    item.classList.add('item');
    
    const descriptionWrapper = document.createElement('div');
    descriptionWrapper.classList.add('descriptionWrapper');
    
    const name = document.createElement('p');
    name.textContent = 'Name...';

    const description = document.createElement('p');
    description.textContent = 'Description...';

    const price = document.createElement('p');
    price.textContent = 'Price...';

    tabContainer.appendChild(menuTab);
    menuTab.appendChild(menuWrapper);
    menuWrapper.append(heading, itemWrapper);
    itemWrapper.appendChild(item);
    item.append(descriptionWrapper, price);
    descriptionWrapper.append(name, description);
}

