INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES 
 ('Matt','Damon','1970-10-08', 5),
 ('George','Clooney','1961-05-06', 2),
 ('Or','Kessler','1987-09-06', 1),
 ('David','Ash','2000-09-01', 1),
 ('Ron','mele','1999-02-04', 1);

-- דוגמאות SELECT מהשיעור
SELECT * FROM actors;
SELECT * FROM actors ORDER BY actor_id ASC LIMIT 4;
SELECT * FROM actors ORDER BY last_name DESC, first_name DESC LIMIT 4;
SELECT * FROM actors WHERE first_name ILIKE '%e%';
SELECT * FROM actors WHERE number_oscars >= 0;
SELECT * FROM actors WHERE age > '1960-01-01' ORDER BY first_name ASC;
SELECT * FROM actors WHERE age > '1960-01-01' LIMIT 3 OFFSET 4;

-- UPDATE (מריץ רק כשהכוונה לעדכן!)
UPDATE actors
SET first_name='Maty'
WHERE first_name='Matt' AND last_name='Damon'
RETURNING *;

-- שינוי תאריך לידה + RETURNING (שורה אחת תקינה)
UPDATE actors
SET age='1970-01-01'
WHERE first_name='Matt' AND last_name='Damon'
RETURNING actor_id, first_name, last_name, age;

-- DELETE עם RETURNING (חשוב באותה פקודה, לא עם רווח באמצע)
DELETE FROM actors
WHERE actor_id=4
RETURNING actor_id, first_name, last_name, number_oscars;

-- דוגמאות ALTER
ALTER TABLE actors ADD COLUMN birth_place VARCHAR(50);
ALTER TABLE actors DROP COLUMN birth_place;
