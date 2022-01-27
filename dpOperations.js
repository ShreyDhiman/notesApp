const connection = require('./connection.js')
const { title } = require('process')

const insertData = (title, note) => {
    console.log(title, note)
    var parameters = [title, note]
    var query = "INSERT INTO new_table(title, note) value(?,?)"
    try {
        connection.query(query, parameters, (err, response) => {
            console.log(response)
        })
    } catch (e) {
        return {
            message: "Exception Occured",
            data: e
        }
    }
}

fetchData = () => {
    var query = "SELECT * FROM new_table;"
    try {
        connection.query(query, (err, response) => {
            const dataJSON = JSON.stringify(response)
            console.log(dataJSON)
        })
    } catch (e) {
        return {
            message: "exception occured",
            data: e
        }
    }
}

updateData = (title, note, oldTitle) => {
    var query = "UPDATE new_table SET title = '" + title + "',  note = '" + note + "' WHERE title = '" + oldTitle + "';"
    try {
        connection.query(query, (err, response) => {
            console.log(response)
        })
    } catch (e) {
        return {
            message: "exception",
            data: e
        }
    }
}

deleteData = (title) => {
    var query = "DELETE FROM new_table WHERE title = '" + title + "'; "
    try {
        connection.query(query, (err, response) => {
            console.log(response)
        })
    } catch (e) {
        return {
            message: "exceptional",
            data: e
        }
    }
}

module.exports = {
    insertData: insertData,
    fetchData: fetchData,
    updateData: updateData,
    deleteData: deleteData
}

// (async()=>{
//     await insertData("sey", "asdfghjk")
//     updateData("shy","cvbnm","shey")
// })()