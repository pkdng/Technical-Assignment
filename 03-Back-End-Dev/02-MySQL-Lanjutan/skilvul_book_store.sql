CREATE DATABASE skilvulbookstore;

USE skilvulbookstore;

CREATE TABLE penerbit (
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(50) NULL,
    `kota` VARCHAR(50) NULL
);

CREATE TABLE penulis (
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nama` VARCHAR(50) NULL,
    `kota` VARCHAR(50) NULL
);

CREATE TABLE buku (
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `ISBN` VARCHAR(50) NULL,
    `judul` VARCHAR(50) NULL,
    `penulis` INT(10) NULL,
    `penerbit` INT(10) NULL,
    `harga` INT(10) NULL,
    `stock` INT(10) NULL,
    CONSTRAINT fk_penulis FOREIGN KEY (`penulis`) REFERENCES penulis(`id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_penerbit FOREIGN KEY (`penerbit`) REFERENCES penerbit(`id`) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO penerbit VALUES
    (NULL, 'Andi Publisher' , 'Yogyakarta'),
    (NULL, 'Gagas Media' , 'Jakarta'),
    (NULL, 'Grasindo' , 'Jakarta'),
    (NULL, 'Gramedia' , 'Jakarta'),
    (NULL, 'Erlangga' , 'Jakarta')
;

INSERT INTO penulis VALUES
    (NULL, 'Eka Kurniawan' , 'Tasikmalaya'),
    (NULL, 'Tsaniah Moon' , 'Yogyakarta'),
    (NULL, 'Lisa Ann' , 'Bantul'),
    (NULL, 'Budi Yono' , 'Bandung'),
    (NULL, 'Siswanto' , 'Surabaya')
;

INSERT INTO buku VALUES
    (NULL, '817263744-0' , 'Debu' , 2 , 1 , 767800 , 10),
    (NULL, '774289101-8' , 'Angin' , 3 , 3 , 80000 , 100),
    (NULL, '842398490-1' , 'Matahari' , 1 , 2 , 85000 , 5),
    (NULL, '554261842-4' , 'Awan' , 5 , 4 , 97200 , 43),
    (NULL, '774381641-6' , 'Tanah' , 4 , 2 , 88800 , 98)
;

SELECT * FROM buku INNER JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT * FROM buku LEFT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT * FROM buku RIGHT JOIN penerbit ON buku.penerbit = penerbit.id;

SELECT id, ISBN, judul, penulis, penerbit, MAX(harga) AS harga, stock FROM buku WHERE stock < 10;

SELECT id, ISBN, judul, penulis, penerbit, MIN(harga) AS harga, stock FROM buku;

SELECT COUNT(*) AS Buku_di_bawah_100k FROM buku WHERE harga < 100000;
