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
  `x` int DEFAULT NULL,
  `y` int DEFAULT NULL,
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
INSERT INTO `stair` VALUES (201,2,1,'RF-1 근처 계단',363,144),(222,2,22,'LF-1  근처 계단',49,139),(227,2,27,'Food Street 내부 계단',15,199),(304,3,4,'3-10 기둥 근처 계단',15,199),(310,3,10,'3층 3-5 기둥 근처 계단',51,327),(319,3,19,'T3-1 기둥 근처 계단',110,382),(327,3,27,'T1-3 기둥 근처 계단',316,368),(334,3,34,'1-2 기둥 근처 계단',369,318),(343,3,43,'1-12 근처 계단',363,144),(344,3,44,'3-12 기둥 근처 계단',49,139),(503,5,3,'5층 15번 게이트 근처 계단',15,199),(506,5,6,'5층 12번 게이트 근처 계단',51,327),(511,5,11,'5층 9번 게이트 근처 계단',110,382),(517,5,17,'5층 3번 게이트 근처 계단',316,368),(520,5,20,'5층 2번 게이트 근처 계단',369,318);
/*!40000 ALTER TABLE `stair` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 10:46:55
