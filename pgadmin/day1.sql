INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Matt','Damon','1970-10-08', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('George','Clooney','1961-05-06', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Or','Kessler','1987-09-06', 1);


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('David','Ash','2000-09-01', 1), ('Ron','mele','1999-02-04', 1);
SELECT * FROM actors;
UPDATE actors SET first_name='maty' WHERE first_name='Matt' AND last_name='Damon';
TRUNCATE TABLE actors RESTART IDENTITY CASCADE;

UPDATE actors SET age='1970-01-01' WHERE first_name='Matt' AND last_name='Damon';
UPDATE actors 
SET age='1970-01-01' 
WHERE first_name='Matt' AND last_name='Damon'
RETURNING 
    actor_id,
    first_name, 
    last_name,
    age;
DELETE FROM actors WHERE actor_id=4


RETURNING actor_id, first_name, last_name, number_oscars;
ALTER TABLE actors ADD COLUMN birth_place VARCHAR(50);
ALTER TABLE actors DROP COLUMN birth_place;
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 4;
SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC;
SELECT * FROM actors ORDER BY actor_id ASC LIMIT 4;
SELECT * FROM actors ORDER BY last_name DESC, first_name DESC LIMIT 4;
SELECT * FROM actors WHERE first_name ILIKE '%e%';
SELECT * FROM actors WHERE number_oscars >= 0;

