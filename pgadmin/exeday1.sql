CREATE TABLE customers (
  customer_id   SERIAL PRIMARY KEY,
  full_name     VARCHAR(100) NOT NULL,
  email         VARCHAR(150) UNIQUE
);

CREATE TABLE items (
  item_id SERIAL PRIMARY KEY,
  item_name VARCHAR(100) NOT NULL,
  item_price NUMERIC(10,2) NOT NULL CHECK (item_price >= 0)
);
INSERT INTO customers (full_name, email)
VALUES ('Alice Green','alice@example.com'),('Bob Blue','bob@example.com');
INSERT INTO items (item_name, item_price)
VALUES ('Keyboard',129.90),('Mouse',79.00),('Monitor',899.00);
SELECT * FROM customers;
SELECT * FROM items;
SELECT * FROM items WHERE item_price >= 80;
SELECT * FROM items WHERE item_price <= 300;
SELECT * FROM customers WHERE full_name ILIKE '%Green%' ;
SELECT * FROM customers WHERE NOT full_name ILIKE '%Green%' ;