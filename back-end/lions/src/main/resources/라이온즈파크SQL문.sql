CREATE DATABASE  IF NOT EXISTS `samsung` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `samsung`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: i9E207.p.ssafy.io    Database: samsung
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `area`
--

DROP TABLE IF EXISTS `area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area` (
  `area_id` int NOT NULL AUTO_INCREMENT,
  `area_num` int NOT NULL,
  `block_id` varchar(45) NOT NULL,
  PRIMARY KEY (`area_id`),
  KEY `block_to_area_idx` (`block_id`),
  CONSTRAINT `block_to_area` FOREIGN KEY (`block_id`) REFERENCES `block` (`block_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area`
--

LOCK TABLES `area` WRITE;
/*!40000 ALTER TABLE `area` DISABLE KEYS */;
INSERT INTO `area` VALUES (1,1,'3-1'),(2,2,'3-1'),(3,3,'3-1'),(4,4,'3-1'),(5,1,'3-2'),(6,2,'3-2'),(7,3,'3-2'),(8,4,'3-2'),(9,1,'3-3'),(10,2,'3-3'),(11,3,'3-3'),(12,1,'3-4'),(13,2,'3-4'),(14,3,'3-4'),(15,1,'3-5'),(16,2,'3-5'),(17,3,'3-5'),(18,4,'3-5'),(19,1,'3-6'),(20,2,'3-6'),(21,3,'3-6'),(22,4,'3-6'),(23,1,'3-7'),(24,2,'3-7'),(25,3,'3-7'),(26,4,'3-7'),(27,1,'3-8'),(28,2,'3-8'),(29,3,'3-8'),(30,4,'3-8'),(31,1,'3-9'),(32,2,'3-9'),(33,3,'3-9'),(34,4,'3-9'),(35,1,'3-10'),(36,2,'3-10'),(37,3,'3-10'),(38,1,'3-11'),(39,2,'3-11'),(40,1,'3-12'),(41,2,'3-12'),(42,1,'3E-1'),(43,1,'3E-2'),(44,1,'3E-3'),(45,1,'T3-1'),(46,2,'T3-1'),(47,3,'T3-1'),(48,1,'T3-2'),(49,2,'T3-2'),(50,3,'T3-2'),(51,4,'T3-2'),(52,1,'T3-3'),(53,2,'T3-3'),(54,3,'T3-3'),(55,4,'T3-3'),(56,1,'T3-4'),(57,2,'T3-4'),(58,3,'T3-4'),(59,1,'TC-1'),(60,2,'TC-1'),(61,3,'TC-1'),(62,1,'TC-2'),(63,2,'TC-2'),(64,3,'TC-2'),(65,1,'TC-3'),(66,2,'TC-3'),(67,3,'TC-3'),(68,1,'VIP1'),(69,2,'VIP2'),(70,3,'VIP3'),(71,1,'T1-1'),(72,2,'T1-1'),(73,3,'T1-1'),(74,1,'T1-2'),(75,2,'T1-2'),(76,3,'T1-2'),(77,4,'T1-2'),(78,1,'T1-3'),(79,2,'T1-3'),(80,3,'T1-3'),(81,4,'T1-3'),(82,1,'T1-4'),(83,2,'T1-4'),(84,3,'T1-4'),(85,4,'T1-4'),(86,1,'1-1'),(87,2,'1-1'),(88,3,'1-1'),(89,4,'1-1'),(90,1,'1-2'),(91,2,'1-2'),(92,3,'1-2'),(93,4,'1-2'),(94,1,'1-3'),(95,2,'1-3'),(96,3,'1-3'),(97,4,'1-3'),(98,1,'1-4'),(99,2,'1-4'),(100,3,'1-4'),(101,4,'1-4'),(102,1,'1-5'),(103,2,'1-5'),(104,3,'1-5'),(105,4,'1-5'),(106,1,'1E-1'),(107,1,'1E-2'),(108,1,'1E-3'),(109,1,'1-6'),(110,2,'1-6'),(111,3,'1-6'),(112,1,'1-7'),(113,2,'1-7'),(114,3,'1-7'),(115,1,'1-8'),(116,2,'1-8'),(117,3,'1-8'),(118,1,'1-9'),(119,2,'1-9'),(120,3,'1-9'),(121,1,'1-10'),(122,2,'1-10'),(123,1,'1-11'),(124,1,'1-12'),(125,1,'잔디석'),(126,2,'잔디석'),(127,3,'잔디석'),(128,1,'TR-0'),(129,2,'TR-0'),(130,1,'TR-1'),(131,1,'TR-2'),(132,1,'TR-3'),(133,1,'TR-4'),(134,1,'TR-5'),(135,1,'TR-6'),(136,1,'TR-7'),(137,1,'TR-8'),(138,1,'TR-9'),(139,1,'TR-10'),(140,1,'TL-9'),(141,1,'RF-1'),(142,1,'RF-2'),(143,1,'RF-3'),(144,1,'RF-4'),(145,1,'RF-5'),(146,1,'RF-6'),(147,1,'RF-7'),(148,1,'RF-8'),(149,1,'RF-9'),(150,1,'RF-10'),(151,1,'MR-1'),(152,1,'MR-2'),(153,1,'MR-3'),(154,1,'MR-4'),(155,1,'MR-5'),(156,1,'MR-6'),(157,1,'MR-7'),(158,1,'MR-8'),(159,1,'MR-9'),(160,1,'MR-10'),(161,1,'F-1'),(162,1,'F-2'),(163,1,'TL-0'),(164,2,'TL-0'),(165,1,'LF-1'),(166,1,'LF-2'),(167,1,'LF-3'),(168,1,'LF-4'),(169,1,'LF-5'),(170,1,'LF-6'),(171,1,'LF-7'),(172,1,'LF-8'),(173,1,'LF-9'),(174,1,'LF-10'),(175,1,'ML-1'),(176,1,'ML-2'),(177,1,'ML-3'),(178,1,'ML-4'),(179,1,'ML-5'),(180,1,'ML-6'),(181,1,'ML-7'),(182,1,'ML-8'),(183,1,'ML-9'),(184,1,'ML-10'),(185,1,'루프탑'),(186,2,'루프탑'),(187,3,'루프탑'),(188,1,'파티플로어석'),(189,1,'U-1'),(190,1,'U-2'),(191,1,'U-3'),(192,1,'U-4'),(193,1,'U-5'),(194,1,'U-6'),(195,1,'U-7'),(196,1,'U-8'),(197,1,'U-9'),(198,1,'U-10'),(199,1,'U-11'),(200,1,'U-12'),(201,1,'U-13'),(202,1,'U-14'),(203,1,'U-15'),(204,1,'U-16'),(205,1,'U-17'),(206,1,'U-18'),(207,1,'U-19'),(208,1,'U-20'),(209,1,'U-21'),(210,1,'U-22'),(211,1,'U-23'),(212,1,'U-24'),(213,1,'U-25'),(214,1,'U-26'),(215,1,'U-27'),(216,1,'U-28'),(217,1,'U-29'),(218,1,'U-30'),(219,1,'U-31'),(220,1,'SKY자유석1'),(221,2,'SKY자유석1'),(222,3,'SKY자유석1'),(223,4,'SKY자유석1'),(224,5,'SKY자유석1'),(225,6,'SKY자유석1'),(226,7,'SKY자유석1'),(227,1,'SKY자유석2'),(228,2,'SKY자유석2'),(229,3,'SKY자유석2'),(230,4,'SKY자유석2'),(231,5,'SKY자유석2'),(232,1,'SKY자유석3'),(233,2,'SKY자유석3'),(234,3,'SKY자유석3'),(235,4,'SKY자유석3'),(236,5,'SKY자유석3'),(237,1,'SKY자유석4'),(238,2,'SKY자유석4'),(239,3,'SKY자유석4'),(240,4,'SKY자유석4'),(241,5,'SKY자유석4'),(242,1,'SKY자유석5'),(243,2,'SKY자유석5'),(244,3,'SKY자유석5'),(245,4,'SKY자유석5'),(246,1,'SKY자유석6'),(247,2,'SKY자유석6'),(248,3,'SKY자유석6'),(249,4,'SKY자유석6'),(250,5,'SKY자유석6'),(251,1,'yogibo'),(252,2,'yogibo');
/*!40000 ALTER TABLE `area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block`
--

DROP TABLE IF EXISTS `block`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block` (
  `block_id` varchar(45) NOT NULL,
  `block_type` varchar(45) NOT NULL,
  PRIMARY KEY (`block_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block`
--

LOCK TABLES `block` WRITE;
/*!40000 ALTER TABLE `block` DISABLE KEYS */;
INSERT INTO `block` VALUES ('1-1','원정응원석'),('1-10','1루 내야지정석'),('1-11','1루 내야지정석'),('1-12','1루 내야지정석'),('1-2','원정응원석'),('1-3','원정응원석'),('1-4','원정응원석'),('1-5','원정응원석'),('1-6','1루 내야지정석'),('1-7','1루 내야지정석'),('1-8','1루 내야지정석'),('1-9','1루 내야지정석'),('1E-1','1루익사이팅석'),('1E-2','1루익사이팅석'),('1E-3','1루익사이팅석'),('3-1','블루존'),('3-10','3루 내야지정석'),('3-11','3루 내야지정석'),('3-12','3루 내야지정석'),('3-2','블루존'),('3-3','블루존'),('3-4','블루존'),('3-5','블루존'),('3-6','블루존'),('3-7','블루존'),('3-8','3루 내야지정석'),('3-9','3루 내야지정석'),('342','1-12'),('3E-1','3루 익사이팅석'),('3E-2','3루 익사이팅석'),('3E-3','3루 익사이팅석'),('F-1','외야패밀리석'),('F-2','외야패밀리석'),('LF-1','외야지정석'),('LF-10','외야지정석'),('LF-2','외야지정석'),('LF-3','외야지정석'),('LF-4','외야지정석'),('LF-5','외야지정석'),('LF-6','외야지정석'),('LF-7','외야지정석'),('LF-8','외야지정석'),('LF-9','외야지정석'),('ML-1','외야미니테이블석(2인)'),('ML-10','외야미니테이블석(2인)'),('ML-2','외야미니테이블석(2인)'),('ML-3','외야미니테이블석(2인)'),('ML-4','외야미니테이블석(2인)'),('ML-5','외야미니테이블석(2인)'),('ML-6','외야미니테이블석(2인)'),('ML-7','외야미니테이블석(2인)'),('ML-8','외야미니테이블석(2인)'),('ML-9','외야미니테이블석(2인)'),('MR-1','외야미니테이블석(2인)'),('MR-10','외야미니테이블석(2인)'),('MR-2','외야미니테이블석(2인)'),('MR-3','외야미니테이블석(2인)'),('MR-4','외야미니테이블석(2인)'),('MR-5','외야미니테이블석(2인)'),('MR-6','외야미니테이블석(2인)'),('MR-7','외야미니테이블석(2인)'),('MR-8','외야미니테이블석(2인)'),('MR-9','외야미니테이블석(2인)'),('RF-1','외야테이블석'),('RF-10','외야테이블석'),('RF-2','외야테이블석'),('RF-3','외야테이블석'),('RF-4','외야테이블석'),('RF-5','외야테이블석'),('RF-6','외야테이블석'),('RF-7','외야테이블석'),('RF-8','외야테이블석'),('RF-9','외야테이블석'),('SKY자유석1','SKY자유석'),('SKY자유석2','SKY자유석'),('SKY자유석3','SKY자유석'),('SKY자유석4','SKY자유석'),('SKY자유석5','SKY자유석'),('SKY자유석6','SKY자유석'),('T1-1','대구는 지브로존'),('T1-2','대구는 지브로존'),('T1-3','대구는 지브로존'),('T1-4','대구는 지브로존'),('T3-1','지브로(ZBRO.KR)존'),('T3-2','지브로(ZBRO.KR)존'),('T3-3','지브로(ZBRO.KR)존'),('T3-4','지브로(ZBRO.KR)존'),('TC-1','으뜸병원 중앙테이블석'),('TC-2','으뜸병원 중앙테이블석'),('TC-3','으뜸병원 중앙테이블석'),('TL-0','외야테이블석'),('TL-9','외야테이블석'),('TR-0','외야테이블석'),('TR-1','외야테이블석'),('TR-10','외야테이블석'),('TR-2','외야테이블석'),('TR-3','외야테이블석'),('TR-4','외야테이블석'),('TR-5','외야테이블석'),('TR-6','외야테이블석'),('TR-7','외야테이블석'),('TR-8','외야테이블석'),('TR-9','외야테이블석'),('U-1','SKY지정석'),('U-10','SKY지정석'),('U-11','SKY지정석'),('U-12','SKY지정석'),('U-13','SKY지정석'),('U-14','SKY지정석'),('U-15','SKY지정석'),('U-16','SKY지정석'),('U-17','SKY지정석'),('U-18','SKY지정석'),('U-19','SKY지정석'),('U-2','SKY지정석'),('U-20','SKY지정석'),('U-21','SKY지정석'),('U-22','SKY지정석'),('U-23','SKY지정석'),('U-24','SKY지정석'),('U-25','SKY지정석'),('U-26','SKY지정석'),('U-27','SKY지정석'),('U-28','SKY지정석'),('U-29','SKY지정석'),('U-3','SKY지정석'),('U-30','SKY지정석'),('U-31','SKY지정석'),('U-4','SKY지정석'),('U-5','SKY지정석'),('U-6','SKY지정석'),('U-7','SKY지정석'),('U-8','SKY지정석'),('U-9','SKY지정석'),('VIP1','VIP석'),('VIP2','VIP석'),('VIP3','VIP석'),('yogibo','SKY요기보존'),('루프탑','땅땅치킨루프탑'),('잔디석','잔디석'),('파티플로어석','파티플로어석');
/*!40000 ALTER TABLE `block` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `block_to_gate`
--

DROP TABLE IF EXISTS `block_to_gate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `block_to_gate` (
  `connect_id` int NOT NULL AUTO_INCREMENT,
  `block_id` varchar(45) DEFAULT NULL,
  `gate_id` int DEFAULT NULL,
  PRIMARY KEY (`connect_id`),
  KEY `block_to_gate_idx` (`block_id`),
  KEY `block_close_gate_idx` (`gate_id`),
  CONSTRAINT `block_close_gate` FOREIGN KEY (`gate_id`) REFERENCES `gate` (`gate_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `block_to_gate` FOREIGN KEY (`block_id`) REFERENCES `block` (`block_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_to_gate`
--

LOCK TABLES `block_to_gate` WRITE;
/*!40000 ALTER TABLE `block_to_gate` DISABLE KEYS */;
INSERT INTO `block_to_gate` VALUES (1,'3-12',301),(2,'3-11',302),(3,'3-10',303),(4,'3-9',305),(5,'3-8',306),(6,'3E-3',306),(7,'3E-2',306),(8,'3E-1',306),(9,'3-7',307),(10,'3-6',308),(11,'3-5',309),(12,'3-4',311),(13,'3-3',312),(14,'3-2',313),(15,'3-1',314),(16,'T3-4',316),(17,'T3-3',317),(18,'T3-2',318),(19,'T3-1',320),(20,'TC-3',321),(21,'VIP3',321),(22,'TC-2',322),(23,'VIP2',322),(24,'TC-1',323),(25,'VIP1',323),(26,'T1-1',324),(27,'T1-2',325),(28,'T1-3',326),(29,'T1-4',328),(30,'1-1',330),(31,'1-2',331),(32,'1-3',333),(33,'1-4',334),(34,'1-5',335),(35,'1-6',336),(36,'1E-1',336),(37,'1-7',337),(38,'1E-2',337),(39,'1-8',338),(40,'잔디석',338),(41,'1E-3',338),(42,'1-9',339),(43,'1-10',340),(44,'1-11',341),(45,'1-12',342),(46,'TR-1',202),(47,'RF-1',202),(48,'MR-1',202),(49,'TR-2',203),(50,'RF-2',203),(51,'MR-2',203),(52,'F-1',203),(53,'TR-3',204),(54,'RF-3',204),(55,'MR-3',204),(56,'TR-4',205),(57,'RF-4',205),(58,'MR-4',205),(59,'TR-5',206),(60,'RF-5',206),(61,'MR-5',206),(62,'F-2',206),(63,'TR-6',207),(64,'RF-6',207),(65,'MR-6',207),(66,'TR-7',208),(67,'RF-7',208),(68,'MR-7',208),(69,'TR-8',209),(70,'RF-8',209),(71,'MR-8',209),(72,'RF-9',210),(73,'MR-9',210),(74,'TR-10',211),(75,'RF-10',211),(76,'MR-10',211),(77,'TL-9',212),(78,'LF-10',212),(79,'ML-10',212),(80,'LF-9',213),(81,'LF-8',214),(82,'ML-8',214),(83,'LF-7',215),(84,'ML-7',215),(85,'루프탑',215),(86,'LF-6',216),(87,'ML-6',216),(88,'LF-5',217),(89,'ML-5',217),(90,'LF-4',218),(91,'ML-4',218),(92,'LF-3',219),(93,'ML-3',219),(94,'LF-2',220),(95,'ML-2',220),(96,'LF-1',221),(97,'ML-1',221),(98,'U-31',501),(99,'U-30',501),(100,'U-30',502),(101,'U-29',502),(102,'U-28',502),(103,'U-28',504),(104,'U-27',504),(105,'U-26',504),(106,'U-26',505),(107,'U-25',505),(108,'U-24',505),(109,'U-24',507),(110,'U-23',507),(111,'U-22',507),(112,'U-22',508),(113,'U-21',508),(114,'U-20',508),(115,'U-20',509),(116,'U-19',509),(117,'U-18',509),(118,'U-18',510),(119,'U-17',510),(120,'U-16',510),(121,'U-16',512),(122,'U-15',512),(123,'U-14',512),(124,'U-14',513),(125,'U-13',513),(126,'U-12',513),(127,'U-12',514),(128,'U-11',514),(129,'U-10',514),(130,'U-10',515),(131,'U-9',515),(132,'U-8',515),(133,'U-8',516),(134,'U-7',516),(135,'U-6',516),(136,'U-6',518),(137,'U-5',518),(138,'U-4',518),(139,'U-4',519),(140,'U-3',519),(141,'U-2',519),(142,'U-2',521),(143,'U-1',521);
/*!40000 ALTER TABLE `block_to_gate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entrance`
--

DROP TABLE IF EXISTS `entrance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entrance` (
  `entrance_id` int NOT NULL,
  `floor` int NOT NULL,
  `label` int NOT NULL,
  `entrance_name` varchar(45) NOT NULL,
  PRIMARY KEY (`entrance_id`),
  KEY `floor_to_exit_idx` (`floor`),
  CONSTRAINT `floor_to_exit` FOREIGN KEY (`floor`) REFERENCES `floor` (`floor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrance`
--

LOCK TABLES `entrance` WRITE;
/*!40000 ALTER TABLE `entrance` DISABLE KEYS */;
INSERT INTO `entrance` VALUES (315,3,15,'3루 출입구'),(329,3,29,'1루 출입구');
/*!40000 ALTER TABLE `entrance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility`
--

DROP TABLE IF EXISTS `facility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility` (
  `facility_id` int NOT NULL AUTO_INCREMENT,
  `facility_name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `floor` int NOT NULL,
  PRIMARY KEY (`facility_id`),
  KEY `facility_to_floor_idx` (`floor`),
  CONSTRAINT `facility_to_floor` FOREIGN KEY (`floor`) REFERENCES `floor` (`floor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility`
--

LOCK TABLES `facility` WRITE;
/*!40000 ALTER TABLE `facility` DISABLE KEYS */;
INSERT INTO `facility` VALUES (1,'여자화장실(RF-1)','편의시설',2),(2,'남자화장실(RF-1)','편의시설',2),(3,'쓰레기통(RF-4)','편의시설',2),(4,'KELLY(RF-8)','식음료',2),(5,'짝태시대(RF-8)','식음료',2),(6,'리얼키친홍(LF-9)','식음료',2),(7,'KELLY(LF-8)','식음료',2),(8,'여자화장실(LF-7)','편의시설',2),(9,'남자화장실(LF-6)','편의시설',2),(10,'남자화장실(LF-5)','편의시설',2),(11,'여자화장실(LF-4)','편의시설',2),(12,'쓰레기통(LF-2)','편의시설',2),(13,'리얼키친홍(Food Street)','식음료',2),(14,'쓰레기통(Food Street)','편의시설',2),(15,'파파존스피자(Food Street)','식음료',2),(16,'짝태시대(Food Street)','식음료',2),(17,'CU(Food Street)','식음료',2),(18,'해피치즈스마일(Food Street)','식음료',2),(19,'여자화장실(Food Street)','편의시설',2),(20,'남자화장실(Food Street)','편의시설',2),(21,'여자화장실(3-12)','편의시설',3),(22,'포토카드(3-11)','편의시설',3),(23,'여자화장실(3-10)','편의시설',3),(24,'남자장애인화장실(3-9)','편의시설',3),(25,'남자화장실(3-8)','편의시설',3),(26,'쓰레기통(3-8)','편의시설',3),(27,'남자화장실(3-7)','편의시설',3),(28,'여자장애인화장실(3-6)','편의시설',3),(29,'땅땅치킨(3-6)','식음료',3),(30,'여자화장실(3-6)','편의시설',3),(31,'대왕유부초밥(3-5)','식음료',3),(32,'전설꼬치(3-5)','식음료',3),(33,'해피치즈스마일(3-5)','식음료',3),(34,'버터우드(3-5)','식음료',3),(35,'쓰레기통(3-3)','편의시설',3),(36,'여자화장실(3-3)','편의시설',3),(37,'알통닭강정(3-1)','식음료',3),(38,'리얼피그(3-1)','식음료',3),(39,'짝태시대(T3-3)','식음료',3),(40,'5직떡볶이(T3-3)','식음료',3),(41,'쓰레기통(T3-3)','편의시설',3),(42,'여자화장실(T3-3)','편의시설',3),(43,'버터우드(T3-2)','식음료',3),(44,'남자장애인화장실(T3-1)','편의시설',3),(45,'남자화장실(T3-1)','편의시설',3),(46,'족발슈퍼(T3-1)','식음료',3),(47,'한만두(T3-1)','식음료',3),(48,'여자장애인화장실(T3-1)','편의시설',3),(49,'여자화장실(T3-1)','편의시설',3),(50,'수유실(T3-1)','편의시설',3),(51,'블루샷(T3-1)','편의시설',3),(52,'남자화장실(T1-1)','편의시설',3),(53,'여자화장실(T1-1)','편의시설',3),(54,'짝태시대(T1-1)','식음료',3),(55,'5직떡볶이(T1-2)','식음료',3),(56,'여자화장실(T1-2)','편의시설',3),(57,'여자장애인화장실(T1-2)','편의시설',3),(58,'쓰레기통(T1-2)','편의시설',3),(59,'흡연장(1-2)','편의시설',3),(60,'CU(1-2)','식음료',3),(61,'땅땅치킨(1-3)','식음료',3),(62,'쓰레기통(1-4)','편의시설',3),(63,'남자화장실(1-4)','편의시설',3),(64,'남자장애인화장실(1-5)','편의시설',3),(65,'여자화장실(1-5)','편의시설',3),(66,'KELLY(1-7)','식음료',3),(67,'리얼키친홍(1-7)','식음료',3),(68,'남자화장실(16Gate)','편의시설',5),(69,'여자화장실(15Gate)','편의시설',5),(70,'쓰레기통(14Gate)','편의시설',5),(71,'CU(14Gate)','식음료',5),(72,'여자화장실(13Gate)','편의시설',5),(73,'여자화장실(12Gate)','편의시설',5),(74,'남자화장실(12Gate)','편의시설',5),(75,'여자화장실(11Gate)','편의시설',5),(76,'쓰레기통(11Gate)','편의시설',5),(77,'알통닭강정(11Gate)','식음료',5),(78,'리얼피그(10Gate)','식음료',5),(79,'해피치즈스마일(10Gate)','식음료',5),(80,'KELLY(10Gate)','식음료',5),(81,'여자화장실(10Gate)','편의시설',5),(82,'남자화장실(09Gate)','편의시설',5),(83,'쓰레기통(08Gate)','편의시설',5),(84,'여자화장실(08Gate)','편의시설',5),(85,'5직떡볶이(07Gate)','식음료',5),(86,'알통닭강정(06Gate)','식음료',5),(87,'여자화장실(05Gate)','편의시설',5),(88,'남자화장실(04Gate)','편의시설',5),(89,'쓰레기통(04Gate)','편의시설',5),(90,'여자화장실(04Gate)','편의시설',5),(91,'KELLY(03Gate)','식음료',5),(92,'5직떡볶이(03Gate)','식음료',5),(93,'짝태시대(03Gate)','식음료',5),(94,'여자화장실(02Gate)','편의시설',5),(95,'남자화장실(01Gate)','편의시설',5),(96,'흡연장(01Gate)','편의시설',5);
/*!40000 ALTER TABLE `facility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_close_gate`
--

DROP TABLE IF EXISTS `facility_close_gate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_close_gate` (
  `close_info_id` int NOT NULL AUTO_INCREMENT,
  `facility_id` int DEFAULT NULL,
  `gate_id` int DEFAULT NULL,
  PRIMARY KEY (`close_info_id`),
  KEY `facility_idx` (`facility_id`),
  KEY `gate_idx` (`gate_id`),
  CONSTRAINT `facility` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`facility_id`),
  CONSTRAINT `gate` FOREIGN KEY (`gate_id`) REFERENCES `gate` (`gate_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_close_gate`
--

LOCK TABLES `facility_close_gate` WRITE;
/*!40000 ALTER TABLE `facility_close_gate` DISABLE KEYS */;
INSERT INTO `facility_close_gate` VALUES (1,1,202),(2,2,202),(3,3,205),(4,4,209),(5,5,209),(6,6,210),(7,7,214),(8,8,215),(9,9,216),(10,10,217),(11,11,218),(12,12,220),(13,13,223),(14,14,223),(15,15,224),(16,16,224),(17,17,225),(18,18,225),(19,19,226),(20,20,226),(21,21,301),(22,22,302),(23,23,303),(24,24,305),(25,25,306),(26,26,306),(27,27,307),(28,28,308),(29,29,308),(30,30,308),(31,31,309),(32,32,309),(33,33,309),(34,34,309),(35,35,312),(36,36,312),(37,37,314),(38,38,314),(39,39,317),(40,40,317),(41,41,317),(42,42,317),(43,43,318),(44,44,320),(45,45,320),(46,46,320),(47,47,320),(48,48,320),(49,49,320),(50,50,320),(51,51,320),(52,52,324),(53,53,324),(54,54,324),(55,55,325),(56,56,325),(57,57,325),(58,58,325),(59,59,325),(60,60,325),(61,61,333),(62,62,334),(63,63,334),(64,64,335),(65,65,335),(66,66,337),(67,67,337),(68,68,501),(69,69,502),(70,70,504),(71,71,504),(72,72,505),(73,73,507),(74,74,507),(75,75,508),(76,76,508),(77,77,508),(78,78,509),(79,79,509),(80,80,509),(81,81,509),(82,82,510),(83,83,512),(84,84,512),(85,85,513),(86,86,514),(87,87,515),(88,88,516),(89,89,516),(90,90,516),(91,91,518),(92,92,518),(93,93,518),(94,94,519),(95,95,521),(96,96,521);
/*!40000 ALTER TABLE `facility_close_gate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floor`
--

DROP TABLE IF EXISTS `floor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floor` (
  `floor_id` int NOT NULL,
  PRIMARY KEY (`floor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floor`
--

LOCK TABLES `floor` WRITE;
/*!40000 ALTER TABLE `floor` DISABLE KEYS */;
INSERT INTO `floor` VALUES (1),(2),(3),(4),(5);
/*!40000 ALTER TABLE `floor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gate`
--

DROP TABLE IF EXISTS `gate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gate` (
  `gate_id` int NOT NULL,
  `floor` int DEFAULT NULL,
  `label` int DEFAULT NULL,
  `gate_num` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`gate_id`),
  KEY `gate_to_floor_idx` (`floor`),
  CONSTRAINT `gate_floor` FOREIGN KEY (`floor`) REFERENCES `floor` (`floor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gate`
--

LOCK TABLES `gate` WRITE;
/*!40000 ALTER TABLE `gate` DISABLE KEYS */;
INSERT INTO `gate` VALUES (202,2,2,'RF-1'),(203,2,3,'RF-2'),(204,2,4,'RF-3'),(205,2,5,'RF-4'),(206,2,6,'RF-5'),(207,2,7,'RF-6'),(208,2,8,'RF-7'),(209,2,9,'RF-8'),(210,2,10,'RF-9'),(211,2,11,'RF-10'),(212,2,12,'LF-10'),(213,2,13,'LF-9'),(214,2,14,'LF-8'),(215,2,15,'LF-7'),(216,2,16,'LF-6'),(217,2,17,'LF-5'),(218,2,18,'LF-4'),(219,2,19,'LF-3'),(220,2,20,'LF-2'),(221,2,21,'LF-1'),(223,2,23,'2층 게이트1'),(224,2,24,'2층 게이트2'),(225,2,25,'2층 게이트3'),(226,2,26,'2층 게이트4'),(301,3,1,'3-12'),(302,3,2,'3-11'),(303,3,3,'3-10'),(305,3,5,'3-9'),(306,3,6,'3-8'),(307,3,7,'3-7'),(308,3,8,'3-6'),(309,3,8,'3-5'),(311,3,11,'3-4'),(312,3,12,'3-3'),(313,3,13,'3-2'),(314,3,12,'3-1'),(316,3,13,'T3-4'),(317,3,14,'T3-3'),(318,3,15,'T3-2'),(320,3,16,'T3-1'),(321,3,17,'TC-3'),(322,3,18,'TC-2'),(323,3,19,'TC-1'),(324,3,24,'T1-1'),(325,3,25,'T1-2'),(326,3,26,'T1-3'),(328,3,28,'T1-4'),(330,3,30,'1-1'),(331,3,31,'1-2'),(333,3,33,'1-3'),(334,3,34,'1-4'),(335,3,35,'1-5'),(336,3,36,'1-6'),(337,3,37,'1-7'),(338,3,38,'1-8'),(339,3,39,'1-9'),(340,3,40,'1-10'),(341,3,41,'1-11'),(342,3,42,'1-12'),(501,5,1,'5층 16번게이트'),(502,5,2,'5층 15번게이트'),(504,5,4,'5층 14번게이트'),(505,5,5,'5층 13번게이트'),(507,5,7,'5층 12번게이트'),(508,5,8,'5층 11번게이트'),(509,5,9,'5층 10번게이트'),(510,5,10,'5층 9번게이트'),(512,5,12,'5층 8번게이트'),(513,5,13,'5층 7번게이트'),(514,5,14,'5층 6번게이트'),(515,5,15,'5층 5번게이트'),(516,5,16,'5층 4번게이트'),(518,5,18,'5층 3번게이트'),(519,5,19,'5층 2번게이트'),(521,5,21,'5층 1번게이트');
/*!40000 ALTER TABLE `gate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gate_to_gate_exit_stair`
--

DROP TABLE IF EXISTS `gate_to_gate_exit_stair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gate_to_gate_exit_stair` (
  `connect_id` int NOT NULL AUTO_INCREMENT,
  `gate_id` int DEFAULT NULL,
  `connected_gate_id` int DEFAULT NULL,
  `connected_exit_id` int DEFAULT NULL,
  `connected_stair_id` int DEFAULT NULL,
  PRIMARY KEY (`connect_id`),
  KEY `gate_to_gate_exit_stair_idx` (`gate_id`),
  CONSTRAINT `gate_to_gate_exit_stair` FOREIGN KEY (`gate_id`) REFERENCES `gate` (`gate_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gate_to_gate_exit_stair`
--

LOCK TABLES `gate_to_gate_exit_stair` WRITE;
/*!40000 ALTER TABLE `gate_to_gate_exit_stair` DISABLE KEYS */;
INSERT INTO `gate_to_gate_exit_stair` VALUES (1,301,NULL,NULL,344),(2,301,302,NULL,NULL),(3,302,301,NULL,NULL),(4,302,303,NULL,NULL),(5,303,302,NULL,NULL),(6,303,305,NULL,NULL),(7,303,NULL,NULL,304),(8,305,NULL,NULL,304),(9,305,303,NULL,NULL),(10,305,306,NULL,NULL),(11,306,305,NULL,NULL),(12,306,307,NULL,NULL),(13,307,306,NULL,NULL),(14,307,308,NULL,NULL),(15,308,307,NULL,NULL),(16,308,309,NULL,NULL),(17,309,308,NULL,NULL),(18,309,311,NULL,NULL),(19,309,NULL,NULL,310),(20,311,NULL,NULL,310),(21,311,309,NULL,NULL),(22,311,312,NULL,NULL),(23,312,311,NULL,NULL),(24,312,313,NULL,NULL),(25,313,312,NULL,NULL),(26,313,314,NULL,NULL),(27,314,313,NULL,NULL),(28,314,315,NULL,NULL),(29,314,NULL,315,NULL),(30,316,NULL,315,NULL),(31,316,314,NULL,NULL),(32,316,317,NULL,NULL),(33,317,316,NULL,NULL),(34,317,318,NULL,NULL),(35,318,317,NULL,NULL),(36,318,320,NULL,NULL),(37,318,NULL,NULL,319),(38,320,NULL,NULL,319),(39,320,318,NULL,NULL),(40,320,321,NULL,NULL),(41,321,320,NULL,NULL),(42,321,322,NULL,NULL),(43,322,321,NULL,NULL),(44,322,323,NULL,NULL),(45,323,322,NULL,NULL),(46,323,324,NULL,NULL),(47,324,323,NULL,NULL),(48,324,325,NULL,NULL),(49,325,324,NULL,NULL),(50,325,326,NULL,NULL),(51,326,325,NULL,NULL),(52,326,328,NULL,NULL),(53,326,NULL,NULL,327),(54,328,NULL,NULL,327),(55,328,326,NULL,NULL),(56,328,330,NULL,NULL),(57,328,NULL,329,NULL),(58,330,NULL,329,NULL),(59,330,328,NULL,NULL),(60,330,331,NULL,NULL),(61,331,330,NULL,NULL),(62,331,333,NULL,NULL),(63,331,NULL,NULL,332),(64,333,NULL,NULL,332),(65,333,331,NULL,NULL),(66,333,334,NULL,NULL),(67,334,333,NULL,NULL),(68,334,335,NULL,NULL),(69,335,334,NULL,NULL),(70,335,336,NULL,NULL),(71,336,335,NULL,NULL),(72,336,337,NULL,NULL),(73,337,336,NULL,NULL),(74,337,338,NULL,NULL),(75,338,337,NULL,NULL),(76,338,339,NULL,NULL),(77,339,338,NULL,NULL),(78,339,340,NULL,NULL),(79,340,339,NULL,NULL),(80,340,341,NULL,NULL),(81,341,340,NULL,NULL),(82,341,342,NULL,NULL),(83,342,341,NULL,NULL),(84,342,NULL,NULL,343),(85,202,NULL,NULL,201),(86,202,203,NULL,NULL),(87,203,202,NULL,NULL),(88,203,202,NULL,NULL),(89,203,204,NULL,NULL),(90,204,203,NULL,NULL),(91,204,205,NULL,NULL),(92,205,204,NULL,NULL),(93,205,206,NULL,NULL),(94,206,205,NULL,NULL),(95,206,207,NULL,NULL),(96,207,206,NULL,NULL),(97,207,208,NULL,NULL),(98,208,207,NULL,NULL),(99,208,209,NULL,NULL),(100,209,208,NULL,NULL),(101,209,210,NULL,NULL),(102,210,209,NULL,NULL),(103,210,211,NULL,NULL),(104,211,210,NULL,NULL),(105,211,212,NULL,NULL),(106,212,211,NULL,NULL),(107,212,213,NULL,NULL),(108,213,212,NULL,NULL),(109,213,214,NULL,NULL),(110,214,213,NULL,NULL),(111,214,215,NULL,NULL),(112,215,214,NULL,NULL),(113,215,216,NULL,NULL),(114,216,215,NULL,NULL),(115,216,217,NULL,NULL),(116,217,216,NULL,NULL),(117,217,218,NULL,NULL),(118,218,217,NULL,NULL),(119,218,219,NULL,NULL),(120,219,218,NULL,NULL),(121,219,220,NULL,NULL),(122,220,219,NULL,NULL),(123,220,221,NULL,NULL),(124,221,220,NULL,NULL),(125,221,NULL,NULL,222),(126,221,223,NULL,NULL),(127,223,221,NULL,NULL),(128,223,224,NULL,NULL),(129,224,223,NULL,NULL),(130,224,225,NULL,NULL),(131,225,224,NULL,NULL),(132,225,NULL,NULL,227),(133,225,226,NULL,NULL),(134,226,225,NULL,NULL),(135,226,NULL,NULL,227),(136,501,502,NULL,NULL),(137,502,501,NULL,NULL),(138,502,NULL,NULL,503),(139,502,504,NULL,NULL),(140,504,502,NULL,NULL),(141,504,505,NULL,NULL),(142,505,504,NULL,NULL),(143,505,507,NULL,NULL),(144,507,505,NULL,NULL),(145,507,NULL,NULL,506),(146,507,508,NULL,NULL),(147,508,507,NULL,NULL),(148,508,509,NULL,NULL),(149,509,508,NULL,NULL),(150,509,510,NULL,NULL),(151,510,509,NULL,NULL),(152,510,NULL,NULL,511),(153,510,512,NULL,NULL),(154,512,510,NULL,NULL),(155,512,513,NULL,NULL),(156,513,512,NULL,NULL),(157,513,514,NULL,NULL),(158,514,513,NULL,NULL),(159,514,515,NULL,NULL),(160,515,514,NULL,NULL),(161,515,516,NULL,NULL),(162,516,515,NULL,NULL),(163,516,NULL,NULL,517),(164,516,518,NULL,NULL),(165,518,516,NULL,NULL),(166,518,NULL,NULL,517),(167,518,519,NULL,NULL),(168,519,518,NULL,NULL),(169,519,NULL,NULL,520),(170,519,521,NULL,NULL),(171,521,519,NULL,NULL),(172,521,NULL,NULL,520);
/*!40000 ALTER TABLE `gate_to_gate_exit_stair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item` (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `item_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `facility_id` int NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `facility_menu_idx` (`facility_id`),
  CONSTRAINT `facility_menu` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`facility_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item`
--

LOCK TABLES `item` WRITE;
/*!40000 ALTER TABLE `item` DISABLE KEYS */;
INSERT INTO `item` VALUES (1,'맥주1',1000,4),(2,'맥주2',2000,4),(3,'맥주3',3000,4),(4,'피자1',10000,15),(5,'피자2',20000,15),(6,'피자3',30000,15),(7,'피자4',40000,15);
/*!40000 ALTER TABLE `item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stair`
--

DROP TABLE IF EXISTS `stair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stair` (
  `stair_id` int NOT NULL AUTO_INCREMENT,
  `floor` int NOT NULL,
  `label` int NOT NULL,
  `stair_name` varchar(45) NOT NULL,
  PRIMARY KEY (`stair_id`),
  KEY `floor_to_stair_idx` (`floor`),
  CONSTRAINT `floor_to_stair` FOREIGN KEY (`floor`) REFERENCES `floor` (`floor_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=521 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stair`
--

LOCK TABLES `stair` WRITE;
/*!40000 ALTER TABLE `stair` DISABLE KEYS */;
INSERT INTO `stair` VALUES (201,2,1,'RF-1 근처 계단'),(222,2,22,'LF-1  근처 계단'),(227,2,27,'Food Street 내부 계단'),(304,3,4,'3-10 기둥 근처 계단'),(310,3,10,'3층 3-5 기둥 근처 계단'),(319,3,19,'T3-1 기둥 근처 계단'),(327,3,27,'T1-3 기둥 근처 계단'),(332,3,32,'1-2 기둥 근처 계단'),(343,3,43,'1-12 근처 계단'),(344,3,44,'3-12 기둥 근처 계단'),(503,5,3,'5층 15번 게이트 근처 계단'),(506,5,6,'5층 12번 게이트 근처 계단'),(511,5,11,'5층 9번 게이트 근처 계단'),(517,5,17,'5층 3번 게이트 근처 계단'),(520,5,20,'5층 2번 기둥 근처 계단');
/*!40000 ALTER TABLE `stair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stair_to_stair`
--

DROP TABLE IF EXISTS `stair_to_stair`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stair_to_stair` (
  `connect_id` int NOT NULL AUTO_INCREMENT,
  `stair_id` int NOT NULL,
  `connected_stair_id` int NOT NULL,
  PRIMARY KEY (`connect_id`),
  KEY `stair_to_stair_idx` (`stair_id`),
  CONSTRAINT `stair_to_stair` FOREIGN KEY (`stair_id`) REFERENCES `stair` (`stair_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stair_to_stair`
--

LOCK TABLES `stair_to_stair` WRITE;
/*!40000 ALTER TABLE `stair_to_stair` DISABLE KEYS */;
INSERT INTO `stair_to_stair` VALUES (1,227,304),(2,304,227),(3,304,503),(4,503,304),(5,310,506),(6,506,310),(7,319,511),(8,511,319),(9,327,517),(10,517,327),(11,332,520),(12,520,332),(13,222,344),(14,344,222),(15,201,343),(16,343,201);
/*!40000 ALTER TABLE `stair_to_stair` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_initial` varchar(10) NOT NULL,
  `team_emblem` varchar(100) NOT NULL,
  `team_symbol` varchar(100) NOT NULL,
  `team_name` varchar(45) NOT NULL,
  PRIMARY KEY (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,'G','lotte_em.png','lotte_sy.png','롯데 자이언츠'),(2,'T','lg_em.png','lg_sy.png','LG 트윈스'),(3,'L\'s','ssg_em.png','ssg_sy.png','SSG 랜더스'),(4,'D','doosan_em.png','doosan_sy.png','두산 베어스'),(5,'D','nc_em.png','nc_sy.png','NC 다이노스'),(6,'KW','kt_em.png','kt_sy.png','KT 위즈'),(7,'T','kia_em.png','kia_sy.png','KIA 타이거즈'),(8,'E','hanhwa_em.png','hanhwa_sy.png','한화 이글스'),(9,'K','kiwoom_em.png','kiwoom_sy.png','키움 히어로즈'),(10,'SL','samsung_em.png','samsung_sy.png','삼성 라이온즈');
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'samsung'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-02 15:54:43
