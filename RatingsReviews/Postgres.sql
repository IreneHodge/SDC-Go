DROP SCHEMA ratingsReviews CASCADE;

CREATE SCHEMA ratingsReviews;

CREATE TABLE products (
id SERIAL PRIMARY KEY,
product INT,
count INT,
);

CREATE TABLE reviews (
review_id SERIAL PRIMARY KEY,
rating INT CHECK (rating >= 0 AND rating <=5),
summary VARCHAR(60),
recommended BOOLEAN,
response VARCHAR,
body VARCHAR(1000),
date DATE,
reviewer_name VARCHAR(20),
helpfulness INT,
photos_id INT,
FOREIGN KEY (products_id)
);

CREATE TABLE photos (
id SERIAL PRIMARY KEY,
url VARCHAR
PRIMARY KEY (ID)
FOREIGN KEY (review_id)
);