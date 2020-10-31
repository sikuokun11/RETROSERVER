CREATE DATABASE sprintretroapp;

CREATE TABLE account(
    user_id SERIAL PRIMARY KEY,
    firstname varchar(255),
    lastname varchar(255),
    username TEXT,
		email varchar(255),
		address TEXT,
		password varchar(255),
		facebook_id varchar(255),
    facebook_token varchar(255)
);

CREATE TABLE board(
	board_id SERIAL PRIMARY KEY,
	name varchar(255),
	createdate TIMESTAMP,
	url varchar(255),
	user_id int,
	CONSTRAINT fk_user_board FOREIGN KEY(user_id) REFERENCES account(user_id)
);

CREATE TABLE collum(
	collum_id SERIAL PRIMARY KEY,
	name varchar(255),
	board_id int,
	CONSTRAINT fk_board_collum FOREIGN KEY(board_id) REFERENCES board(board_id)
);

CREATE TABLE card(
	card_id SERIAL PRIMARY KEY,
	name varchar(255),
	collum_id int,
	CONSTRAINT fk_collum_card FOREIGN KEY(collum_id) REFERENCES collum(collum_id)
);

BEGIN;
SELECT setval(pg_get_serial_sequence('"account"','user_id'), coalesce(max("user_id"), 1), max("user_id") IS NOT null) FROM account;
COMMIT;


INSERT INTO account VALUES (1,'TAI','TAN','user01','fxqtai@gmail.com','TANBINH','1234','','');
INSERT INTO account VALUES (2,'TRINH','TAI','user02','fxqtai2@gmail.com','TANBINH','4321','','');

INSERT INTO board VALUES (1,'Board1','2020-10-25','www.google.com',1);
INSERT INTO board VALUES (2,'Board2','2020-10-25','www.google.com',2);
INSERT INTO board VALUES (3,'Board3','2020-10-25','www.google.com',1);
INSERT INTO board VALUES (4,'Board4','2020-10-25','www.google.com',1);

INSERT INTO collum VALUES (1,'Went Well',1);
INSERT INTO collum VALUES (2,'To Imporve',1);
INSERT INTO collum VALUES (3,'Action items',1);

INSERT INTO card VALUES (1,'TEST1',1);
INSERT INTO card VALUES (2,'TEST2',2);
INSERT INTO card VALUES (3,'TEST3',1);
INSERT INTO card VALUES (4,'TEST4',3);