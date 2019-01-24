var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});
console.log("Connected as Id:" + connection.threadId);

// function which prompts the user for what action they should take
function start() {
  // read database for products and id
  var products = [
    "Guitars",
    "Amps",
    "Strings",
    "Picks",
    "Cases",
    "Cables",
    "Tuners",
    "Gig Bags",
    "T-Shirts",
    "Effects"
  ];
  console.log(products);
  // console.log this

  //
  inquirer
    .prompt(
      {
        name: "item id",
        type: "input",
        message: "What Product Would you like? "
      },
      {
        name: "createProduct",
        type: "input",
        message: "How many PRODUCT ID would you like? "
      }
    )
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.createProduct === "PRODUCT ID") {
        postProduct();
      } else {
        connection.end();
      }
    });

  function postProduct() {
    console.log("...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        item: "Guitar",
        productName: "",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );

    // logs the actual query being run
    console.log(query.sql);
  }

  function updateProduct() {
    console.log("Updating all Guitar quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          quantity: 50
        },
        {
          quantity: "Guitar"
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );

    // logs the actual query being run
    console.log(query.sql);
  }

  function deleteProduct() {
    console.log("Deleting all Guitar...\n");
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        item: "Guitar"
      },
      function(err, res) {
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }

  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
}
