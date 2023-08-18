-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
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
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `block_to_gate`
--

LOCK TABLES `block_to_gate` WRITE;
/*!40000 ALTER TABLE `block_to_gate` DISABLE KEYS */;
INSERT INTO `block_to_gate` VALUES (1,'3-12',301),(2,'3-11',302),(3,'3-10',303),(4,'3-9',305),(5,'3-8',306),(6,'3E-3',306),(7,'3E-2',306),(8,'3E-1',306),(9,'3-7',307),(10,'3-6',308),(11,'3-5',309),(12,'3-4',311),(13,'3-3',312),(14,'3-2',313),(15,'3-1',314),(16,'T3-4',316),(17,'T3-3',317),(18,'T3-2',318),(19,'T3-1',320),(20,'TC-3',321),(21,'VIP3',321),(22,'TC-2',322),(23,'VIP2',322),(24,'TC-1',323),(25,'VIP1',323),(26,'T1-1',324),(27,'T1-2',325),(28,'T1-3',326),(29,'T1-4',328),(30,'1-1',330),(31,'1-2',331),(32,'1-3',332),(33,'1-4',333),(34,'1-5',335),(35,'1-6',336),(36,'1E-1',336),(37,'1-7',337),(38,'1E-2',337),(39,'1-8',338),(40,'잔디석',338),(41,'1E-3',338),(42,'1-9',339),(43,'1-10',340),(44,'1-11',341),(45,'1-12',342),(46,'TR-1',202),(47,'RF-1',202),(48,'MR-1',202),(49,'TR-2',203),(50,'RF-2',203),(51,'MR-2',203),(52,'F-1',203),(53,'TR-3',204),(54,'RF-3',204),(55,'MR-3',204),(56,'TR-4',205),(57,'RF-4',205),(58,'MR-4',205),(59,'TR-5',206),(60,'RF-5',206),(61,'MR-5',206),(62,'F-2',206),(63,'TR-6',207),(64,'RF-6',207),(65,'MR-6',207),(66,'TR-7',208),(67,'RF-7',208),(68,'MR-7',208),(69,'TR-8',209),(70,'RF-8',209),(71,'MR-8',209),(72,'RF-9',210),(73,'MR-9',210),(74,'TR-10',211),(75,'RF-10',211),(76,'MR-10',211),(77,'TL-9',212),(78,'LF-10',212),(79,'ML-10',212),(80,'LF-9',213),(81,'LF-8',214),(82,'ML-8',214),(83,'LF-7',215),(84,'ML-7',215),(85,'루프탑',215),(86,'LF-6',216),(87,'ML-6',216),(88,'LF-5',217),(89,'ML-5',217),(90,'LF-4',218),(91,'ML-4',218),(92,'LF-3',219),(93,'ML-3',219),(94,'LF-2',220),(95,'ML-2',220),(96,'LF-1',221),(97,'ML-1',221),(98,'U-31',501),(99,'U-30',501),(100,'U-30',502),(101,'U-29',502),(102,'U-28',502),(103,'U-28',504),(104,'U-27',504),(105,'U-26',504),(106,'U-26',505),(107,'U-25',505),(108,'U-24',505),(109,'U-24',507),(110,'U-23',507),(111,'U-22',507),(112,'U-22',508),(113,'U-21',508),(114,'U-20',508),(115,'U-20',509),(116,'U-19',509),(117,'U-18',509),(118,'U-18',510),(119,'U-17',510),(120,'U-16',510),(121,'U-16',512),(122,'U-15',512),(123,'U-14',512),(124,'U-14',513),(125,'U-13',513),(126,'U-12',513),(127,'U-12',514),(128,'U-11',514),(129,'U-10',514),(130,'U-10',515),(131,'U-9',515),(132,'U-8',515),(133,'U-8',516),(134,'U-7',516),(135,'U-6',516),(136,'U-6',518),(137,'U-5',518),(138,'U-4',518),(139,'U-4',519),(140,'U-3',519),(141,'U-2',519),(142,'U-2',521),(143,'U-1',521),(144,'yogibo',513),(145,'TL-0',228),(146,'TR-0',229),(147,'yogibo',514);
/*!40000 ALTER TABLE `block_to_gate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 10:46:53
