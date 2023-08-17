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
INSERT INTO `facility` VALUES (1,'여자화장실(TR-0)','편의시설',2),(2,'남자화장실(TR-0)','편의시설',2),(3,'쓰레기통(RF-4)','편의시설',2),(4,'KELLY(RF-8)','식음료',2),(5,'짝태시대(RF-8)','식음료',2),(6,'리얼키친홍(LF-9)','식음료',2),(7,'KELLY(LF-8)','식음료',2),(8,'여자화장실(LF-7)','편의시설',2),(9,'남자화장실(LF-6)','편의시설',2),(10,'남자화장실(LF-5)','편의시설',2),(11,'여자화장실(LF-4)','편의시설',2),(12,'쓰레기통(LF-2)','편의시설',2),(13,'리얼키친홍(Food Street)','식음료',2),(14,'쓰레기통(Food Street)','편의시설',2),(15,'파파존스피자(Food Street)','식음료',2),(16,'짝태시대(Food Street)','식음료',2),(17,'CU(Food Street)','식음료',2),(18,'해피치즈스마일(Food Street)','식음료',2),(19,'여자화장실(Food Street)','편의시설',2),(20,'남자화장실(Food Street)','편의시설',2),(21,'여자화장실(3-12)','편의시설',3),(22,'포토카드(3-11)','편의시설',3),(23,'여자화장실(3-10)','편의시설',3),(24,'남자장애인화장실(3-9)','편의시설',3),(25,'남자화장실(3-8)','편의시설',3),(26,'쓰레기통(3-8)','편의시설',3),(27,'남자화장실(3-7)','편의시설',3),(28,'여자장애인화장실(3-6)','편의시설',3),(29,'땅땅치킨(3-6)','식음료',3),(30,'여자화장실(3-6)','편의시설',3),(31,'대왕유부초밥(3-5)','식음료',3),(32,'전설꼬치(3-5)','식음료',3),(33,'해피치즈스마일(3-5)','식음료',3),(34,'버터우드(3-5)','식음료',3),(35,'쓰레기통(3-3)','편의시설',3),(36,'여자화장실(3-3)','편의시설',3),(37,'알통떡강정(3-1)','식음료',3),(38,'리얼피그(3-1)','식음료',3),(39,'짝태시대(T3-3)','식음료',3),(40,'5직떡볶이(T3-3)','식음료',3),(41,'쓰레기통(T3-3)','편의시설',3),(42,'여자화장실(T3-3)','편의시설',3),(43,'버터우드(T3-2)','식음료',3),(44,'남자장애인화장실(T3-1)','편의시설',3),(45,'남자화장실(T3-1)','편의시설',3),(46,'족발슈퍼(T3-1)','식음료',3),(47,'한만두(T3-1)','식음료',3),(48,'여자장애인화장실(T3-1)','편의시설',3),(49,'여자화장실(T3-1)','편의시설',3),(50,'수유실(T3-1)','편의시설',3),(51,'블루샷(T3-1)','편의시설',3),(52,'남자화장실(T1-1)','편의시설',3),(53,'여자화장실(T1-1)','편의시설',3),(54,'짝태시대(T1-1)','식음료',3),(55,'5직떡볶이(T1-2)','식음료',3),(56,'여자화장실(T1-2)','편의시설',3),(57,'여자장애인화장실(T1-2)','편의시설',3),(58,'쓰레기통(T1-2)','편의시설',3),(59,'흡연실(1-2)','편의시설',3),(60,'CU(1-2)','식음료',3),(61,'땅땅치킨(1-3)','식음료',3),(62,'쓰레기통(1-4)','편의시설',3),(63,'남자화장실(1-4)','편의시설',3),(64,'남자장애인화장실(1-5)','편의시설',3),(65,'여자화장실(1-5)','편의시설',3),(66,'KELLY(1-7)','식음료',3),(67,'리얼키친홍(1-7)','식음료',3),(68,'남자화장실(16Gate)','편의시설',5),(69,'여자화장실(15Gate)','편의시설',5),(70,'쓰레기통(14Gate)','편의시설',5),(71,'CU(14Gate)','식음료',5),(72,'여자화장실(13Gate)','편의시설',5),(73,'여자화장실(12Gate)','편의시설',5),(74,'남자화장실(12Gate)','편의시설',5),(75,'여자화장실(11Gate)','편의시설',5),(76,'쓰레기통(11Gate)','편의시설',5),(77,'알통떡강정(11Gate)','식음료',5),(78,'리얼피그(10Gate)','식음료',5),(79,'해피치즈스마일(10Gate)','식음료',5),(80,'KELLY(10Gate)','식음료',5),(81,'여자화장실(10Gate)','편의시설',5),(82,'남자화장실(09Gate)','편의시설',5),(83,'쓰레기통(08Gate)','편의시설',5),(84,'여자화장실(08Gate)','편의시설',5),(85,'5직떡볶이(07Gate)','식음료',5),(86,'알통떡강정(06Gate)','식음료',5),(87,'여자화장실(05Gate)','편의시설',5),(88,'남자화장실(04Gate)','편의시설',5),(89,'쓰레기통(04Gate)','편의시설',5),(90,'여자화장실(04Gate)','편의시설',5),(91,'KELLY(03Gate)','식음료',5),(92,'5직떡볶이(03Gate)','식음료',5),(93,'짝태시대(03Gate)','식음료',5),(94,'여자화장실(02Gate)','편의시설',5),(95,'남자화장실(01Gate)','편의시설',5),(96,'흡연실(01Gate)','편의시설',5);
/*!40000 ALTER TABLE `facility` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 10:46:58
