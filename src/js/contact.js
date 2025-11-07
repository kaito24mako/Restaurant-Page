export function createContactTab() {
    const tabContainer = document.querySelector('#content-container');

    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.id = 'contactTab';

    const contactWrapper = document.createElement('div');
    contactWrapper.id = 'contactWrapper';

    const address = document.createElement('div');
    address.id = 'address';

    const addressHeading = document.createElement('h2');
    const address1 = document.createElement('p');
    const address2 = document.createElement('p');
    const address3 = document.createElement('p');
    addressHeading.textContent = 'Contact Details';
    address1.textContent = '253 Fake Street';
    address2.textContent = 'Melbourne, Victoria, Australia';
    address3.textContent = '+(01) 123 456 789';

    const socials = document.createElement('div');
    socials.id = 'socials';

    const socialsHeading = document.createElement('h2');
    const socials1 = document.createElement('p');
    const socials2 = document.createElement('p');
    socialsHeading.textContent = 'Follow Us';
    socials1.textContent = 'Facebook';
    socials2.textContent = 'Instagram';

    tabContainer.appendChild(contactTab);
    contactTab.appendChild(contactWrapper);
    contactWrapper.append(address, socials);
    address.append(addressHeading, address1, address2, address3);
    socials.append(socialsHeading, socials1, socials2);
}