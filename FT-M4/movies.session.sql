SELECT *
FROM movies
WHERE cardinality(actors) = 1;