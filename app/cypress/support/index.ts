import './commands'

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            loginMFA(username: string, password: string): Chainable<void>
            loginNoMFA(username: string, password: string): Chainable<void>
        }
    }
}
