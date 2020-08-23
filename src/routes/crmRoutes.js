import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((request, response, next) => {
            //middleware
            console.log(`Request from: ${request.originalUrl}`)
            console.log(`Rquest type: ${request.method}`)
            next();
        }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactWithID)

        .put(updateContact)

        .delete((request, response) => 
        response.send('DELETE request successful!'));
}

export default routes;