import { addNewContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((request, response, next) => {
            //middleware
            console.log(`Request from: ${request.originalUrl}`)
            console.log(`Rquest type: ${request.method}`)
            next();
        }, (request, response, next) => {
            response.send('GET request successful!')
        })

        .post(addNewContact);

    app.route('/contact/:contactID')
        .put((request, response) => 
        response.send('PUT request successful!'))

        .delete((request, response) => 
        response.send('DELETE request successful!'));
}

export default routes;