

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INTEGER(30) AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INTEGER (10) NULL,
  stock_quantity INTEGER (10) NULL,

  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Guitar', 'Instrument', 1000, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Amps', 'Instrument', 500, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Strings', 'Accesories', 10, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Guitar Picks', 'Accesories', 1, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Guitar Cases', 'Gear', 100, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Cables', 'Gear', 100, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Gig Bags', 'Gear', 25, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('T-Shirts', 'Gear', 15, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Tuners', 'Accesories', 10, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Effect Pedals', 'Accesories', 50, 100);




-- CREATE TABLE orders (
--   order_id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   item_id INTEGER(11) NOT NULL,
--   product_name VARCHAR(100) NOT NULL,
--   quantity INTEGER(11) NOT NULL,
--   total_price INTEGER(11) NOT NULL,
--   remaining_stock INTEGER(11) NOT NULL,
--   PRIMARY KEY (order_id)
-- );

-- CREATE TABLE inventory_log (
--   log_id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   item_id INTEGER(11) NOT NULL,
--   product_name VARCHAR(100) NOT NULL,
--   current_stock INTEGER(11) NOT NULL,
--   quantity_added INTEGER(11) NOT NULL,
--   updated_stock INTEGER(11) NOT NULL,
--   PRIMARY KEY (log_id)