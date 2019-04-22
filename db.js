const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    estudiantes:store.collection('estudiantes'),
    universidades:store.collection('universidades')
}