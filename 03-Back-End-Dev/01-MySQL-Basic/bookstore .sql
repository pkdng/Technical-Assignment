SHOW DATABASES;

CREATE DATABASE bookstore;

USE bookstore;

SHOW TABLES;

CREATE TABLE `books` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `author1` VARCHAR(100) NOT NULL,
    `author2` VARCHAR(100),
    `author3` VARCHAR(100),
    `title` VARCHAR(100),
    `description` text,
    `place_sell` CHAR(3),
    `stock` INT DEFAULT 0,
    `creation_date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE books
    ADD `price` INT DEFAULT 0,
    ADD `status` ENUM('available','out of stock','limited'),
    DROP place_sell;

INSERT INTO books VALUE
    (NULL,'bagas','hendi','mila','Belajar Hidup Hemat','Buku ini berisi tentang tips hidup hemat',200,DEFAULT,78250,'available'),
    (NULL,'bambang','anang','heru','Egosentris','Buku ini merupakan novel yang tema besarnya seputar psikologi',0,DEFAULT,102000,'out of stock'),
    (NULL,'yuni','yaya','yono','Kamu','Buku ini mengisahkan tentang seorang manusia bernama Kamu yang hidup bersama temannya di sebuah kota indah',1,DEFAULT,87000,'limited');

SELECT * FROM books;

SELECT id AS ID, author1 AS A1, author2 AS A2, author3 AS A3 FROM books;

SELECT * FROM books WHERE id = 1;

SELECT * FROM books WHERE stock > 10 AND price < 90000;

SELECT * FROM books WHERE status = 'limited' OR stock < 5;

SELECT * FROM books WHERE NOT stock < 5;

SELECT * FROM books ORDER BY id;

SELECT * FROM books LIMIT 2;

UPDATE books SET author1 = 'yanto', price = 85000 WHERE id = 3;

DELETE FROM books WHERE id = 1;