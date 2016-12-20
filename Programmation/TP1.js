    var mysql = require('mysql');

    var pool = mysql.createPool({
        host: 'localhost',
        user: 'acharland',
        password: '',
        database: 'Agence_de_Location'
    });

var createTable = 'INSERT INTO Liste_Clients(Prenom,Nom,Adresse,Ville,Permit) VALUE(?,?,?,?,?)';

var readTable = 'SELECT * FROM Liste_Clients';

var updateRecord = 'UPDATE Liste_Clients SET salary = ? WHERE name=?';

var deleteRecord = 'DELETE FROM Liste_Clients WHERE name=?';


pool.getConnection(function (err, connection) {
    //cree le client.
    connection.query(createTable, ['?','?','?','?','?'], function (err) {
        if (err) throw err;
        else {
            console.log('Le client a ete ajouter');
        }
        });

    //Read table.
    connection.query(readTable, function (err, rows) {
        if (err) throw err;
        console.log(rows);

    });

    //Update a record.
    connection.query(updateRecord, ['?','?','?','?','?'], function (err, res) {
        if (err) throw err;
        else {
            console.log('Le client a ete modifier');
        }
    });

    //Delete a record.
    connection.query(deleteRecord, ['?'], function (err, res) {
        if (err) throw err;
        else {
            console.log('Le client a ete supprimer.');
        }
    });


    connection.release();//release the connection
});