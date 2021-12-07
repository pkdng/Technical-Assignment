CREATE DATABASE skilvulmusicstreaming;

USE skilvulmusicstreaming;

CREATE TABLE user (
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50),
    `email` VARCHAR(50),
    `password` VARCHAR(50)
);

CREATE TABLE singer (
    `singer_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50) 
);

CREATE TABLE album (
    `album_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(50),
    `singer_id` INT NOT NULL,
    CONSTRAINT fk_singer_album FOREIGN KEY (`singer_id`) REFERENCES singer(`singer_id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE playlist (
    `playlist_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    tracks VARCHAR(50),
    CONSTRAINT fk_user_playlist FOREIGN KEY (`user_id`) REFERENCES user(`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE track (
    `track_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(50),
    `singer_id` INT NOT NULL,
    `album_id` INT NOT NULL,
    CONSTRAINT fk_singer_track FOREIGN KEY (`singer_id`) REFERENCES singer(`singer_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_album_track FOREIGN KEY (`album_id`) REFERENCES album(`album_id`) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE conjunction (
    `playlist_id` INT NOT NULL,
    `track_id` INT NOT NULL,
    CONSTRAINT fk_playlist_conj FOREIGN KEY (`playlist_id`) REFERENCES playlist(`playlist_id`) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_track_conj FOREIGN KEY (`track_id`) REFERENCES track(`track_id`) ON UPDATE CASCADE ON DELETE CASCADE
);
