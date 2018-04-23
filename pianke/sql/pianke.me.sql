/*
SQLyog Ultimate v12.09 (64 bit)
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

/*Table structure for table `indexradio` */

DROP TABLE IF EXISTS `indexradio`;

CREATE TABLE `indexradio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) DEFAULT NULL,
  `imgsrc` varchar(1000) DEFAULT NULL,
  `anchor` varchar(1000) DEFAULT NULL,
  `original` varchar(1000) DEFAULT NULL,
  `playsrc` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `indexradio` */

insert  into `indexradio`(`id`,`title`,`imgsrc`,`anchor`,`original`,`playsrc`) values (1,'那份笨拙的爱，是心底最柔软的刺','http://hpimg.pianke.com/b932337326b53587ab49a16d5661619b20180129.jpg?imageView2/2/w/300/format/jpg','你好南望','小萘','http://hpimg.pianke.com/bf06e3c7600c81890a93bcb14c7ad7b620180129.mp3'),(2,'“我从来不想独身，却有预感晚婚”','http://hpimg.pianke.com/44a9f10c70efce7b773c17c054ef8e3c20180120.png?imageView2/2/w/300/format/jpg','树茵','树茵','http://hpimg.pianke.com/b6587edc1f8573abcf10346852a565a320180120.mp3'),(3,'老人｜卡瓦菲斯','http://hpimg.pianke.com/0bf77448922fc99dede2466d71430ddd20180130.jpeg?imageView2/2/w/300/format/jpg','许邻','许邻','http://hpimg.pianke.com/9cea6992914bd59a46827fd35b0431fb20180130.mp3');

/*Table structure for table `indexread` */

DROP TABLE IF EXISTS `indexread`;

CREATE TABLE `indexread` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `other` varchar(100) DEFAULT NULL,
  `otherimg` varchar(1000) DEFAULT NULL,
  `num` varchar(100) DEFAULT NULL,
  `src` varchar(1000) DEFAULT NULL,
  `text1` varchar(1000) DEFAULT NULL,
  `text2` varchar(1000) DEFAULT NULL,
  `commentsrc` varchar(1000) DEFAULT NULL,
  `commentname` varchar(1000) DEFAULT NULL,
  `commenttext` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `indexread` */

insert  into `indexread`(`id`,`title`,`other`,`otherimg`,`num`,`src`,`text1`,`text2`,`commentsrc`,`commentname`,`commenttext`) values (1,'毕业三年，写给自己的25句忠告','苏陌年','http://pkicon.image.alimmdn.com/icon/706/1586706/142ca770017ae06f3a9d2c2fedd90874_180','7.1','http://hpimg.pianke.com/da9429077466dba68e3a084f32c11b8f20170807.jpeg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://hpimg.pianke.com/b5bf64b364c3b7ca52cf87ed7199906f20170804.jpg?imageView2/2/w/90/format/jpg','飞飞x','12. 花很长时间和那些你喜欢的人待在一起。\n25.身体应该听从于脑袋，而不应该反过来。'),(3,'暗恋这条路，道阻且长','陈若鱼','http://pkicdn.image.alimmdn.com/old/icon/000/1122603/492ec65bc5523696d2d5fbd973a489e6','75.8','http://pkimg.image.alimmdn.com/upload/20160308/12854bda42a80b90171754025266da3c.jpeg@640w_85Q.jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://pkicon.image.alimmdn.com/icon/111257/2b0c967b996664629f53422c76649986_180','奈良有鹿','她是他的爱而不得，她是你的爱而不得，适时的放下，转身之瞬或许天开地阔'),(4,'喜欢《悟空传》的燃，是因为《西游记》太丧','于 心','http://pkicon.image.alimmdn.com/icon/20160402/df916be980a1c9cbc9b4e54ee7a3f88e.jpg@90w_90h_1e_1c_85Q.jpg','75.8','http://hpimg.pianke.me/314695cb71c907d0083295189228c61a20170719.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://thirdwx.qlogo.cn/mmopen/vi_32/UA5SKtlyH7w6lQAlqERrstUH4W9B4gF0DzQMgz0xRv9VicULYzhicsKouQgYJnDRpbNv7MxP1yUUUssVia91YrgBQ/132','4738282','你想想社会中的每个人不都是孙悟空吗？打又打不过，斗又斗不过，不都得妥协然后苟且偷生？'),(5,'这样锻炼，你才会掌握说话的力量','陈慕妤','http://hpimg.pianke.com/4363907217ac230a7977e97955303ea820170726.png?imageView2/2/w/90/format/jpg','75.8','http://hpimg.pianke.me/435968512b3f5b390f0903bc431795d620170313.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://hpimg.pianke.com/527c81bcd888dbd7f100048022c3581f20170613.png?imageView2/2/w/90/format/jpg','红心猫耳在暖房','我对自己常常不自信 每当我想怼回别人的时候我都不知道说什么 只有自己生闷气 好无奈 我也不敢上台做任何阐述 越来越意识到说话的艺术 唉'),(6,'坚持绘画147天，这些意想不到的事情发生了','萌薇','http://hpimg.pianke.com/c22e2863ff9135df4089234788eaddb320180201.png?imageView2/2/w/90/format/jpg','75.8','http://hpimg.pianke.com/e59f57359340845fd5caf80e5575f3ca20170803.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://tva4.sinaimg.cn/crop.0.0.996.996.50/0060zzBVjw8f12qpk32cmj30ro0roac0.jpg','4736917','好喜欢哦，我也想了解，零基础的怎么学画画，从哪里开始学习呢，希望能等到你的答案'),(7,'年华','盗梦的益安','http://pkimg.image.alimmdn.com/upload/20170320/20fbf87d064f02f2ad9c3cb5358e5f11.png@90w_90h_1e_1c_85Q.jpg','75.8','http://hpimg.pianke.com/e59f57359340845fd5caf80e5575f3ca20170803.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://hpimg.pianke.me/6315de78e6bd7a2874f448edc1c3dda420170201.png?imageView2/2/w/90/format/jpg','白日蝴蝶梦','所以孩子是C先生的，上司的，而且上司也有家庭，这些情感混乱的感情.......越理越乱'),(8,'偷心','子夜晨星','http://hpimg.pianke.com/4506b68dd6bb7848472ca1554e83696420170717.jpg','75.8','http://hpimg.pianke.com/e59f57359340845fd5caf80e5575f3ca20170803.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://tva2.sinaimg.cn/crop.36.35.110.110.50/e6f2aaactw1epoakgwwtpj2054052dfy.jpg','讲故事的小姐姐','初中毕业家里一无所有，父母送我去县城学蒸馒头，馒头店老板女儿不丑。她酒涡浅浅眉间淡淡的忧。那个雨夜我把她的胸部当面揉，\n她的碎花裙子在颤抖，仰起脖子说不要解我的纽扣，不要拽我的衣袖。我说我只想吃馒头。她喘息着张开了樱桃小口，口水顺着脖颈流。老板听见叫喊当夜赶我走。'),(9,'友人集|与风眠，与你告别和重逢','南逢酒馆','http://pkicon.image.alimmdn.com/icon/802/b01a14031f447c717c55e145318f2709@90w_90h_1e_1c_85Q.jpg','75.8','http://hpimg.pianke.com/1aaba7a9769d62f9e1b9c42464272b3b20171120.jpg?imageView2/2/w/640/format/jpg','与大多数人不同不代表不正确，只要不伤害别人的利益，尽可能坚持自己的选择，同时尊重每一种生活方式与价值取向。','学会控制自己的情绪，坏消息从来不是最可怕的，最可拍的是它会影响你的情绪，指引你做出坏的决策。不要让它得逞。','http://hpimg.pianke.com/3e8f13139e9cabc31fb41c6d3bbce8b120180203.jpg?imageView2/2/w/90/format/jpg','巴涂山','喜欢');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `u_email` text,
  `u_pwd` text,
  `u_tel` text,
  `u_img` text,
  `u_name` text,
  `u_sex` text,
  `u_xinxi` text,
  `status` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`u_email`,`u_pwd`,`u_tel`,`u_img`,`u_name`,`u_sex`,`u_xinxi`,`status`) values (1,'111','111','111','http://localhost:8888/1524040328133-QQ图片20180104105643.jpg','66666666','2','3333','1');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
