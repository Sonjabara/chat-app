DROP TABLE IF EXISTS message;
CREATE TABLE message(
  id serial PRIMARY KEY,
  username VARCHAR(255),
  text VARCHAR(255),
  created_at timestamptz
);