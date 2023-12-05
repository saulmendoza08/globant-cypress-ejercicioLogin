context('Login',()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    
    //login
    it('Test #1',()=>{
        cy.get('input[name="UserName"]').type("User{enter}");
        cy.get('input[name="Password"]').type("pwd{enter}");
        cy.get('#login').click();
        
        cy.get('#loginstatus')
            .invoke('text')
            .then(texto => {
                if (texto=="Welcome, User!") {
                    console.log("Contraseña correcta!")
                }else{
                    console.log("Contraseña incorrecta!")
                }
            })
        
    })
})