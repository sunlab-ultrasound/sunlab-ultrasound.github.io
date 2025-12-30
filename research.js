const content = [
    {
        title: "Card 1",
        description: "Description for Card 1",
        images: ["path/to/image1.jpg", "path/to/image2.jpg"]
    },
    {
        title: "Card 2",
        description: "Description for Card 2",
        images: ["path/to/image3.jpg", "path/to/image4.jpg"]
    },
    {
        title: "Card 3",
        description: "Description for Card 3",
        images: ["path/to/image5.jpg", "path/to/image6.jpg"]
    }
    // Add more content items as needed
];

const container = document.getElementById('container');

// Function to create cards based on the content array
function createCards() {
    content.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2 class="title">${item.title}</h2>
            <p class="description">${item.description}</p>
            ${item.images.map(img => `<img src="${img}" alt="Image">`).join('')}
        `;
        container.appendChild(card);
    });
}

createCards();

// Scroll event to detect and highlight the active card
container.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    let activeCard = 0;
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.8) {
            activeCard = index;
        }
    });

    cards.forEach((card, index) => {
        if (index === activeCard) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
});

