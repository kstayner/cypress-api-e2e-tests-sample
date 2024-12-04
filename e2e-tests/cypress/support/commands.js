Cypress.Commands.add('postUser', function (user) {
    cy.api({
        url: '/users',
        method: 'POST',
        body: user,
        failOnStatusCode: false
    }).then(response => { return response })

})

Cypress.Commands.add('postSession', function (user) {
    cy.api({
        url: '/sessions',
        method: 'POST',
        body: { email: user.email, password: user.password },
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('postTask', function (task, token) {
    cy.api({
        url: '/tasks',
        method: 'POST',
        body: task,
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('getTasks', function (token) {
    cy.api({
        url: '/tasks/',
        method: 'GET',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('getUniqueTask', function (taskId, token) {
    cy.api({
        url: `/tasks/${taskId}`,
        method: 'GET',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('deleteTask', function (taskId, token) {
    cy.api({
        url: `/tasks/${taskId}`,
        method: 'DELETE',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('putTaskDone', function (taskId, token) {
    cy.api({
        url: `/tasks/${taskId}/done`,
        method: 'PUT',
        headers: {
            authorization: token
        },
        failOnStatusCode: false
    }).then(response => { return response })
})