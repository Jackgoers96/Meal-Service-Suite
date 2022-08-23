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

