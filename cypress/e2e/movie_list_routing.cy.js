describe('Movie List Page Routing and URL Parameters', () => {

    let baseUrl;

    before(() => {
        cy.fixture('config').then((config) => {
            baseUrl = config.baseUrl;
        });
    });

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('should load the base URL without query parameters by default', () => {
        cy.url().should('eq', baseUrl);
        cy.location('search').should('be.empty');
    });

    it('should update URL query parameters when genre and sort criteria change', () => {
        cy.contains('.genre-button', 'Comedy').click();
        cy.location('search').should('include', 'genre=Comedy');

        cy.get('.sort-select').select('release_date');
        cy.location('search').should('include', 'sortBy=release_date');
    });

    it('should update URL query parameters when search query, genre, and sort criteria change', () => {
        const searchQuery = 'Shrek';

        cy.get('input[type="text"][placeholder="Search..."]').type(searchQuery);
        cy.contains('button', 'Search').click();
        cy.location('search').should('include', `query=${encodeURIComponent(searchQuery)}`);

        cy.contains('.genre-button', 'Horror').click();
        cy.location('search').should('include', 'genre=Horror');
        cy.location('search').should('include', `query=${encodeURIComponent(searchQuery)}`);

        cy.get('.sort-select').select('title');
        cy.location('search').should('not.include', 'sortBy=title'); // default

        cy.location('search').should('include', `query=${encodeURIComponent(searchQuery)}`);
        cy.location('search').should('include', 'genre=Horror');
        cy.location('search').should('not.include', 'sortBy=title');
    });

    it('should navigate to movie details page and update URL with movie ID when a movie is selected', () => {
        cy.get('.movie-list .movie-tile', { timeout: 10000 }).should('have.length.gt', 0);
        cy.get('.movie-list .movie-tile').first().click();
        cy.location('pathname').should('match', /\/\d+$/);

        cy.get('.movie-details').should('be.visible');
    });

    it('should persist the selected movie details page on page reload', () => {
        cy.get('.movie-list .movie-tile', { timeout: 10000 }).should('have.length.gt', 0);

        let selectedMovieTitle = '';
        cy.get('.movie-list .movie-tile')
            .first()
            .find('.movie-title')
            .invoke('text')
            .then((text) => {
                selectedMovieTitle = text.trim();
                cy.log(`Selected movie title: ${selectedMovieTitle}`);
            });

        cy.get('.movie-list .movie-tile').first().click();
        cy.get('.movie-details h2', { timeout: 10000 }).should('be.visible').then(($h2) => {
            expect($h2.text().trim()).to.equal(selectedMovieTitle);
        });
        cy.location('pathname').should('match', /\/\d+$/);

        cy.reload();

        cy.get('.movie-details h2', { timeout: 10000 }).should('be.visible').then(($h2) => {
            expect(selectedMovieTitle).not.to.be.empty;
            expect($h2.text().trim()).to.equal(selectedMovieTitle);
        });

        cy.location('pathname').should('match', /\/\d+$/);
    });
});