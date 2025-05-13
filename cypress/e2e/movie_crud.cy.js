describe('Movie Add and Edit Flows', () => {

    let baseUrl;

    const newMovie = {
        title: 'Cypress Test Movie ' + Date.now(),
        release_date: '2024-05-15',
        poster_path: 'https://via.placeholder.com/300x450.png?text=Test+Poster',
        vote_average: '8.5',
        genres: 'Comedy',
        runtime: '120',
        overview: 'This is a test movie added via Cypress E2E test.'
    };

    before(() => {
        cy.fixture('config').then((config) => {
            baseUrl = config.baseUrl;
        });
    });

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('.movie-list .movie-tile', { timeout: 15000 }).should('have.length.gt', 0);
    });

    it('should allow adding a new movie via the form', () => {
        cy.contains('button', '+ ADD MOVIE').click();

        cy.url().should('eq', `${baseUrl}new`);
        cy.get('.dialog-content').should('be.visible');
        cy.get('.dialog-header h2').should('contain.text', 'Add movie');

        cy.get('.dialog-content #title').type(newMovie.title);
        cy.get('.dialog-content #release_date').type(newMovie.release_date);
        cy.get('.dialog-content #poster_path').type(newMovie.poster_path);
        cy.get('.dialog-content #vote_average').type(newMovie.vote_average);
        cy.get('.dialog-content #genres').select(newMovie.genres);
        cy.get('.dialog-content #runtime').type(newMovie.runtime);
        cy.get('.dialog-content #overview').type(newMovie.overview);

        cy.intercept('POST', '**/movies').as('addMovieApi');

        cy.get('.dialog-content form[data-testid="movie-form"]').submit();

        cy.wait('@addMovieApi').its('response.statusCode').should('eq', 201);
        cy.url().should('match', /\/\d+$/);
        cy.url().should('not.eq', `${baseUrl}new`);

        cy.get('.dialog-content').should('not.exist');

        cy.get('.movie-details h2', { timeout: 10000 }).should('contain.text', newMovie.title);
        cy.get('.movie-details').should('contain.text', newMovie.overview);
        cy.get('.movie-details').should('contain.text', newMovie.genres);
    });

});