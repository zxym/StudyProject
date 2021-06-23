
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  post     : '3306',
  database : 'dtcmsdb4'
});
 
connection.connect();
 
connection.query('SELECT  * from `dt_article`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  console.log(results);
});