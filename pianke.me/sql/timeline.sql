/*
SQLyog Enterprise v12.09 (64 bit)
MySQL - 5.5.20-log : Database - pianke
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`pianke` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `pianke`;

/*Table structure for table `timeline` */

DROP TABLE IF EXISTS `timeline`;

CREATE TABLE `timeline` (
  `u_tel` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户电话',
  `u_content` varchar(140) NOT NULL COMMENT '发布内容',
  `u_photo` varchar(30) NOT NULL COMMENT '发布图片',
  `u_img` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`u_tel`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `timeline` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
