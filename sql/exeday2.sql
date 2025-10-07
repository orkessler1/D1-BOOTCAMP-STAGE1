SELECT * FROM customer;
SELECT first_name || ' ' || last_name AS full_name
FROM customer;
SELECT create_date FROM customer;
SELECT * FROM customer ORDER BY first_name ;
SELECT * FROM film WHERE film_id IN (15, 150);
SELECT * FROM film WHERE title = 'Alien Center';
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Al%';
SELECT * FROM payment ORDER BY amount DESC LIMIT 10;-- 10 הזולים הראשונים:

SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC, title ASC
LIMIT 10 OFFSET 10;
SELECT
  c.customer_id,
  c.first_name,
  c.last_name,
  p.amount,
  p.payment_date
FROM customer AS c
JOIN payment  AS p
  ON p.customer_id = c.customer_id
ORDER BY c.customer_id ASC, p.payment_date ASC;


