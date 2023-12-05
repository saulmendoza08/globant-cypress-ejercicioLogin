context('Login',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    
    //login
    it('Test #1',()=>{
        cy.get('#85ca2f1f-fd2a-15fc-e180-fd8a46b35199').type("User{enter}");
        cy.get('#4306b2fb-183c-7b2f-9d16-a0c9b28e62c4').type("pwd{enter}");
        cy.get('#login').click();
        cy.get('#loginstatus')
            .invoke('text')
            .then(texto => {
                console.log(texto)
            })
    })
})