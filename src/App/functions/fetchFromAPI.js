/* global fetch */

module.exports = (method, body) => {
    let defaultPrefix = 'http://localhost:3000/posts/';
    const defaultObject = {
        headers: {
            'Content-type': 'application/json',
        },
        method,
    };

    switch (method) {
    case 'POST':
        defaultObject.body = JSON.stringify(body);
        break;

    case 'DELETE':
        defaultPrefix = `${defaultPrefix}${body.id}`;
        break;

    case 'GET':
        break;

    default:
        throw new Error('Bad method sent to API');
    }

    return fetch(
        defaultPrefix,
        defaultObject,
    ).then(response => response.json())
        .then(json => json);
};
