import { addNewContact,
        getContacts,
        getContactWithID,
        updateContact,
        deleteContact
} from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .get((request, response, next) => {
            //middleware
            console.log(`Request from: ${request.originalUrl}`)
            console.log(`Rquest type: ${request.method}`)
            next();
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)
        
        // Updating specific conatct
        .put(updateContact)

        //deleting a specific contact
        .delete(deleteContact);
}

export default routes;