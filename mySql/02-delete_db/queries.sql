CREATE DATABASE users

-- Deleting a database 
-- And we can not create multiple database at a time with the same name 

-- Remove a specific record
DELETE FROM users 
WHERE id = 5;

-- Remove all rows (leaves table structure intact, auto-increment continues from last ID)
DELETE FROM users;


-- Instantly remove all records and reset table stats
TRUNCATE TABLE users;


-- Delete the table structure and all data permanently
DROP TABLE users;

-- Prevent errors if table doesn't exist
DROP TABLE IF EXISTS users;