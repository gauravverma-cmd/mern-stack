-- Create the USERS table
CREATE TABLE USERS (
    user_id VARCHAR(50) PRIMARY KEY, -- Unique ID for the user
    user_name TEXT NOT NULL,         -- User's name (required)
    user_age INTEGER NOT NULL        -- User's age (required)
);

-- Add sample rows into the table
INSERT INTO USERS VALUES ("u1234yrte", "Alice", 23);
INSERT INTO USERS VALUES ("u464hfgb", "Abio", 22);
INSERT INTO USERS VALUES ("u8575hf", "Garima", 33);

-- Get all columns for users who are younger than 25
SELECT * FROM USERS WHERE user_age < 25;