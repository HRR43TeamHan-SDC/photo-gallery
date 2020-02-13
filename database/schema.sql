DROP DATABASE IF EXISTS photoGallery;

CREATE DATABASE photoGallery;

USE photoGallery;

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `image0` varchar(128),
  `image1` varchar(128),
  `image2` varchar(128),
  `image3` varchar(128),
  `image4` varchar(128),
  `image5` varchar(128),
  `image6` varchar(128),
  `image7` varchar(128),
  `image8` varchar(128),
  `image9` varchar(128),
  `image10` varchar(128),
  `image11` varchar(128),
  `image12` varchar(128),
  `image13` varchar(128),
  `image14` varchar(128),
  `date` varchar(25) NOT NULL
);
