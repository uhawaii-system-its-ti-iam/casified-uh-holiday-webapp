 ***********************************************
 This example commands.ts shows you how to
 create various custom commands and overwrite
 existing commands.

 For more comprehensive examples of custom
 commands please read more here:
 https://on.cypress.io/custom-commands
 ***********************************************


 -- Parent command --\
A command that starts the chain of commands.
```typescript
Cypress.Commands.add('login', (username, password) => {
    cy.session(
        user,
        () => {
            cy.visit('/login')
            cy.get('input[name=email]').type(user.email)
            cy.get('input[name=password]').type(user.password)
            cy.click('button#login')
            cy.get('h1').contains(`Welcome back ${user.name}!`)
        },
        {
            validate: () => {
                cy.getCookie('auth_key').should('exist')
            },
        }
    )
});
```



 -- This is a child command --\
A command that can only be chained off of another command.
```typescript
Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
```


 -- This is a dual command --\
A command that is both a parent and child command.
```typescript
Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
```


 -- This will overwrite an existing command --\
Lets you overwrite existing Cypress commands.
```typescript
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
```

This adds the custom commands to the Cypress namespace.\
```typescript
 declare global {
   namespace Cypress {
     interface Chainable {
       login(email: string, password: string): Chainable<void>
       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
     }
   }
 }
```
