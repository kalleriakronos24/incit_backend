import database from '../../core/models/index';


class Model {
    /**
     * @description Users | User Model
     */
    user() {
        return database.User
    }

    auth() {
        return database.Auth
    }

}

export default Model;