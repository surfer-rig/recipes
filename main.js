import recipes from './recipes.mjs';

// Select the container where recipes will be displayed
const recipesSection = document.getElementById('recipesSection');

// Helper: Create a star rating element with ARIA support
function createRatingStars(rating) {
	const ratingSpan = document.createElement('span');
	ratingSpan.classList.add('rating');
	ratingSpan.setAttribute('role', 'img');
	ratingSpan.setAttribute('aria-label', `Rating: ${rating} out of 5 stars`);

	for (let i = 1; i <= 5; i++) {
		const star = document.createElement('span');
		star.setAttribute('aria-hidden', 'true');
		star.textContent = i <= rating ? '⭐' : '☆';
		star.classList.add(i <= rating ? 'icon-star' : 'icon-star-empty');
		ratingSpan.appendChild(star);
	}

	return ratingSpan;
}

// Helper: Create a recipe card
function createRecipeCard(recipe) {
	const card = document.createElement('article');
	card.classList.add('recipe-card');

	// Recipe name
	const title = document.createElement('h2');
	title.textContent = recipe.name;

	// Image
	const img = document.createElement('img');
	img.src = recipe.image;
	img.alt = recipe.name;

	// Description
	const desc = document.createElement('p');
	desc.classList.add('description');
	desc.textContent = recipe.description;

	// Rating
	const rating = createRatingStars(Math.round(recipe.rating));

	// Append all to the card
	card.append(title, img, rating, desc);
	return card;
}

// Clear the container and add all recipe cards
recipesSection.innerHTML = '';
recipes.forEach(recipe => {
	const recipeCard = createRecipeCard(recipe);
	recipesSection.appendChild(recipeCard);
});
