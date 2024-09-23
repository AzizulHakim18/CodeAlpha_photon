// Modal elements
const modal = document.getElementById('detailsModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDetails = document.getElementById('modalDetails');
const modalAuthor = document.getElementById('modalAuthor');
const modalDate = document.getElementById('modalDate');
const modalAward = document.getElementById('modalAward');
const closeModal = document.querySelector('.close');

// Show modal on "More details" click
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('details-btn')) {
        event.preventDefault();
        const card = event.target.closest('.portfolio-card');
        const cardId = card.getAttribute('data-id').split('-');
        const categoryIndex = cardId[0];
        const itemIndex = cardId[1];

        // Fetch data
        fetch('../data/dummy.json')
            .then(response => response.json())
            .then(data => {
                const categoryData = data[categoryIndex];
                const itemData = categoryData.data[itemIndex];

                // Populate modal with dynamic data
                modalImage.innerHTML = `<img class="modal_img" src="${itemData.img}" alt="${itemData.name}"/>`;
                modalName.textContent = itemData.name;
                modalDetails.textContent = itemData.details;
                modalAuthor.textContent = itemData.author;
                modalDate.textContent = itemData.date;
                modalAward.textContent = itemData.award;

                // Show modal
                modal.style.display = 'flex';
            });
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
