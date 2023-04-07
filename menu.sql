-----------/// Create a database named "menu" ///--------------

----- Drop Table Commands -----
DROP TABLE "recipe_ingredients";
DROP TABLE "recipe_price";
DROP TABLE "ingredients";
DROP TABLE "recipes";
----- Drop Table Commands -----



-------------------------------/// Table Setup ///----------------------------------
CREATE TABLE "recipes" (
  "id" serial primary key,
  "name" varchar(100),
  "price" numeric(7,2)
);

CREATE TABLE "ingredients" (
  "id" serial primary key,
  "name" varchar(100),
  "bulk_price" numeric(7,2),
  "quanity" numeric(6,2),
  "quantity_unit" varchar(100)
);

CREATE TABLE "recipe_ingredients" (
  "id" serial primary key,
  "recipe_id" int references "recipes" ON DELETE CASCADE ON UPDATE CASCADE, 
  "ingredient_id" int references "ingredients" ON DELETE CASCADE ON UPDATE CASCADE,
  "ingredient_amount" numeric(6,2),
  "ingredient_unit" varchar(100) 
);

CREATE TABLE "recipe_price" (
"id" serial primary key,
"recipe_id" int references "recipes" ON DELETE CASCADE ON UPDATE CASCADE, 
"price" numeric(7,2),
"date" date not null
);
------------------------------/// Table Setup ///-----------------------------------



------------------------------/// Test Data ///-----------------------------
INSERT INTO "recipes"("name","price")
VALUES
('Chicken, mmmh',20),
('Steak Dinner',24),
('Salmon Platter',21),
('Sea bass, babyy',23),
('Vegan Delight',22);

INSERT INTO "ingredients"("name","bulk_price","quanity","quantity_unit")
VALUES
('Chicken',20,10,'lbs'),
('Steak',50,10,'lbs'),
('Salmon',100,10,'lbs'),
('Sea Bass',50,10,'lbs'),
('Yukon Potatoes',10,10,'lbs'),
('Quinoa',8,10,'lbs'),
('Asparagus',30,10,'lbs'),
('Brussel Sprouts',25,10,'lbs'),
('Brocoli',20,10,'lbs');

INSERT INTO "recipe_ingredients"("recipe_id","ingredient_id","ingredient_amount","ingredient_unit")
VALUES
(1,1,10,'oz'),
(1,5,10,'oz'),
(1,7,10,'oz'),
(2,2,10,'oz'),
(2,6,10,'oz'),
(2,8,10,'oz'),
(3,3,10,'oz'),
(3,5,10,'oz'),
(3,9,10,'oz'),
(4,4,10,'oz'),
(4,6,10,'oz'),
(4,8,10,'oz'),
(5,5,10,'oz'),
(5,7,10,'oz'),
(5,9,10,'oz');
------------------------------/// END Test Data ///-----------------------------

------------------------------/// SQL QUERIES ///-----------------------------------

-- update ingredient
UPDATE ingredients
SET "name" = 'Chicken', "bulk_price" = 20, "quanity" = 10, "quantity_unit" = 'lbs'
WHERE id = 1;

-- delete ingredient from DB
DELETE FROM ingredients
WHERE id = 1;

-- delete recipe from DB
DELETE FROM recipes
WHERE id = 1;

-- update price in recipes table 
UPDATE recipes
SET "name" = 'food', "price" = 12
WHERE id = 1;

-- GET * from recipes + recipe ingredients (returns multiple rows)
SELECT recipes.name AS "Menu Item", recipes.price, ingredients.name AS "ingredient"
FROM recipes
JOIN recipe_ingredients ON recipes.id = recipe_ingredients.recipe_id
JOIN ingredients ON recipe_ingredients.ingredient_id = ingredients.id
WHERE recipes.id = 2
;