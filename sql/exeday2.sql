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


SELECT * FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film AS f
INNER JOIN language AS l
ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language AS l
LEFT JOIN film AS f
ON f.language_id = l.language_id;


CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name)
VALUES ('Inception'),
       ('Avatar'),
       ('The Matrix'),
       ('Interstellar'),
       ('Titanic');

SELECT * FROM new_film;


-- אם יש כבר טבלה בשם הזה – תמחק כדי להתחיל נקי (לא חובה)
DROP TABLE IF EXISTS customer_review;

-- טבלת ביקורות פשוטה
CREATE TABLE customer_review (
  review_id   SERIAL PRIMARY KEY,                                -- מזהה רץ
  film_id     INTEGER  NOT NULL REFERENCES new_film(id)          -- סרט -> מפנה ל-new_film(id)
                           ON DELETE CASCADE,                    -- אם מוחקים סרט – גם הביקורות שלו יימחקו
  language_id SMALLINT NOT NULL REFERENCES language(language_id),-- שפה -> מטבלת language
  title       VARCHAR(100) NOT NULL,                             -- כותרת הביקורת
  score       SMALLINT NOT NULL CHECK (score BETWEEN 1 AND 10),  -- ציון 1-10
  review_text TEXT,                                              -- טקסט חופשי
  last_update TIMESTAMPTZ NOT NULL DEFAULT NOW()                 -- זמן עדכון (ברירת מחדל: עכשיו)
);

-- דוגמת הוספה (נניח שיש ב-new_film סרט עם id=1 וב-language שפה עם language_id=1)
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Great movie', 9, 'Loved it!');



