set timezone to 'Europe/Berlin';
select now();
INSERT INTO message(created_at, username, text) VALUES(now(), 'user_1', 'Hello');