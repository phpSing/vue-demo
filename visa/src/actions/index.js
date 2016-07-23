import * as todos from './todos'
import * as emails from './emails'
import store from '../store'

module.exports = {

    ...todos,
    ...emails,

};
