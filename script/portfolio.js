// Fetch the dummy.json file
fetch('../data/dummy.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        generatePortfolioCards('all', data);
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

// Function to generate the image cards
function generatePortfolioCards(category, portfolioData) {
    const portfolioGallery = document.getElementById('portfolioGallery');
    portfolioGallery.innerHTML = '';

    portfolioData.forEach((categoryObj, cartIndex) => {
        if (category === 'all' || category === categoryObj.categoryName) {
            categoryObj.data.forEach((item, itemIndex) => {
                const card = `
          <div class="portfolio-card" data-id="${cartIndex}-${itemIndex}">
            <img src="${item.img}" alt="${item.name}" />
            <div class="portfolio-info">
              <h3>${item.name}</h3>
              <p>${item.headline}</p>
              <a href="#" class="details-btn">More details</a>
            </div>
          </div>
        `;
                portfolioGallery.insertAdjacentHTML('beforeend', card);
            });
        }
    });


}



// Example filter button click listener
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        fetch('../data/dummy.json')
            .then(response => response.json())
            .then(data => generatePortfolioCards(category, data))
            .catch(error => console.error('Error fetching JSON:', error));
    });
});