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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-17 10:46:54
