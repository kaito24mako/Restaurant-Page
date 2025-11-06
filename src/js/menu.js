export function createMenuTab(arr) {
    const tabContainer = document.querySelector('#content-container');

    const menuTab = document.createElement('div');
    menuTab.classList.add('tab');
    menuTab.id = 'menuTab';

    const menuWrapper = document.createElement('div');
    menuWrapper.id = 'menuWrapper';

    const heading = document.createElement('h2');
    heading.id = 'heading';
    heading.textContent = 'Featured Menu';

    const itemWrapper = document.createElement('div');
    itemWrapper.id = 'itemWrapper';

    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        
        const descriptionWrapper = document.createElement('div');
        descriptionWrapper.classList.add('descriptionWrapper');
        
        const name = document.createElement('p');
        name.textContent = arr[i].name;

        const description = document.createElement('p');
        description.textContent = arr[i].description;

        const price = document.createElement('p');
        price.id = 'price';
        price.textContent = arr[i].price;

        itemWrapper.appendChild(item);
        item.append(descriptionWrapper, price);
        descriptionWrapper.append(name, description);
    }

    tabContainer.appendChild(menuTab);
    menuTab.appendChild(menuWrapper);
    menuWrapper.append(heading, itemWrapper);
}

export function displayMenuItems() {
    let menuArray = [];

    class MenuItem {
        constructor(name, description, price) {
            this.name = name;
            this.description = description;
            this.price = price;
        }
    }

    function addMenuItem(name, description, price) {
        let newItem = new MenuItem(name, description, price);
        menuArray.push(newItem);
    }

    addMenuItem('Mako Ramen', 'Original creamy pork and dashi broth with noodles', '$23');
    addMenuItem('Miri Marvel', "A mixture of our beautiful dog's leftovers", '$12');
    addMenuItem('Kanazawa Takoyaki', 'Sizzing octopus balls filled with vegetables', '$13');
    addMenuItem('God Fire Ramen', 'Spicy ramen coated in chilli oil and black fungus', '$21');

    return menuArray;
}
    


