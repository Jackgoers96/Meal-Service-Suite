-----------/// Create a database named "menu" ///--------------

CREATE TABLE "recipes" (
  "id" serial primary key,
  "name" varchar(100),
  "price" decimal(3,2) 
);

CREATE TABLE "ingredients" (
  "id" serial primary key,
  "name" varchar(100),
  "bulk_price" decimal(3,2),
  "quanity" decimal(3,2),
  "quantity_unit" varchar(100)
);

-- This is the join table linking the many-to-many relationship between recipes and ingredients.
CREATE TABLE "recipe_ingredients" (
  "id" serial primary key,
  "recipe_id" int references "recipes", 
  "ingredient_id" int references "ingredients",
  "ingredient_amount" decimal(3,2),
  "ingredient_unit" varchar(100) 
);