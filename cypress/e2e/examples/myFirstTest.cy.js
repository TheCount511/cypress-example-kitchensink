// const navbarText = Cypress.env('navbarText')

context('My First Test', () => {
    beforeEach(() => {
        cy.visit('/commands/actions/')
    })

    // it('triggers a popover on click', () => {
    //     cy.get('.action-btn').click()
    //     cy.findByText('This popover shows up on click').should('be.visible')
    // })

    // it('can click on different sections of a canvas', () => {
    //     cy.get('#action-canvas').click('top')
    //     cy.get('#action-canvas').click('bottomRight')
    //     cy.get('#action-canvas').click(80, 100)
    // })

    // it('can double click to edit', () => {
    //     cy.get('.action-div').dblclick().should('not.be.visible')
    //     cy.get('.action-input-hidden').should('be.visible')
    // })

    // it('can right click to edit', () => {
    //     cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    //     cy.get('.rightclick-action-input-hidden').should('be.visible')
    // })

    it('shows the nav links to hover', () => {
        cy.get('.dropdown-toggle').trigger('mouseover')
        cy.get('.dropdown-menu').should('be.visible')
    })
    // cy.fixture('example').then(function (data) {
    //     this.data = data
    //     cy.log('THIS:', this.data)
    // })

    // it('uses fixture data in a network request', function () {
    //     cy.visit('/commands/network-requests')
    //     cy.intercept('GET', '**/comments/*', this.data).as('getComment')
    //     cy.get('.network-btn').click()
    //     cy.wait('@getComment').then((res) => {
    //         cy.log('Response', res)
    //     })
    // })

    // it('pulls data from a fixture', () => {
    //     cy.fixture('example').then((data) => {
    //         cy.log('Data:', data)
    //     })
    // })

    // it('updates fixture data inline', () => {
    //     cy.fixture('example').then((data) => {
    //         data.email = 'updated@mail.com'
    //         cy.log('updated:', data)
    //     })
    // })

    // const token = 'abcd123'

    // it('sets a token in local storage', () => {
    //     cy.setLocalStorage('token', token)
    // })

    // it(' sets and gets a token from local storage', () => {
    //     cy.setLocalStorage('token', token)
    //     cy.getLocalStorage('token').should('eq', token)
    // })

    // it('overwrites the type command by using sensitive characters', () => {
    //     cy.visit('/commands/actions')
    //     cy.findAllByPlaceholderText('Email').type('testemailaddress@gmail.com')
    //     cy.findAllByPlaceholderText('Email').type('testemailaddress@gmail.com', { sensitive: true })
    // })
    // before(() => {
    //     cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
    // })

    // beforeEach(() => {
    //     cy.visit('/')
    // })

    // afterEach(() => {
    //     cy.log('after each hook is here')
    // })

    // after(() => {
    //     cy.log('the final hook runs once')
    // })

    // it('has an h1 on the page', () => {
    //     cy.get('h1').should('exist')
    // })

    // it('has an h1 on the page', () => {
    //     cy.get('h1').should('contain.text', 'Kitchen Sink')
    // })
    // beforeEach(() => {
    //     cy.visit('/')
    // })

    // it('has an h1 on the page', () => {
    //     cy.get('h1').should('exist')
    // })

    // it('renders the correct h1 text', () => {
    //     cy.get('h1').should('contain.text', 'Kitchen')
    // })

    // it('renders a paragraph under the h1', () => {
    //     cy.get('.container').eq(1).find('p').should('exist')
    // })

    // it('renders a section with the correct elements', () => {
    //     cy.get('.container').eq(2).within(() => {
    //         cy.get('h2').should('exist')
    //         cy.get('p').should('exist')
    //     })
    // })

    // it('correctly renders the cypress website link', () => {
    //     cy.findByText(navbarText).should('exist')
    // })

    // it('types into an Email field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findAllByPlaceholderText('Email').type('testemailaddress@gmail.com')
    //     cy.wait(5000).then(() => {
    //         // eslint-disable-next-line no-console
    //         console.log('test is finished')
    //         fetch('https://api.spacexdata.com/v3/missions')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 //eslint-disable-next-line no-console
    //                 console.log(data)
    //             })
    //     })
    // })

    // it('shows an active class for the current page', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
    // })

    // it('should not have an active class on inactive pages', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
    //         .find('a').should('have.attr', 'href', '/commands/querying')
    // })

    // it('links to the actions page correctly', () => {
    //     cy.visit('/')
    //     cy.findAllByText('Actions').first().click({ force: true })
    //     cy.url().should('include', 'commands/actions')
    // })

    // it('lets you type in an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findAllByPlaceholderText('Email').type('test').should('have.value', 'test')
    // })

    // it('lets you clear an input field', () => {
    //     cy.visit('/commands/actions')
    //     cy.findAllByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
    //         .clear().should('have.value', '')
    // })

    // it('lets you check a checkbox', () => {
    //     cy.visit('/commands/actions')
    //     cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')
    // })
})
