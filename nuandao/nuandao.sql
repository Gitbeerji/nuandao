SET NAMES UTF8;

#创建nuandao数据库
DROP DATABASE IF EXISTS nundao;
CREATE DATABASE nuandao CHARSET=UTF8;
USE nuandao;

#创建用户表
CREATE TABLE nuandao_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(64)
);

#创建产品系列表单
CREATE TABLE nuandao_series(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	sno INT ,
	sname VARCHAR(32),
	stitle VARCHAR(64),
	sinfo VARCHAR(64),
	sdate BIGINT
);

#创建产品详情表
CREATE TABLE nuandao_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	pno INT,
	pname VARCHAR(128),
	pinfo VARCHAR(512),
	price FLOAT(10,4),
	picCount INT,
	picDetailCount INT,
	pcount INT,
	pseries INT
);
#创建用户购物车表
CREATE TABLE nuandao_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	userId INT
);
#创建购物车详情表
CREATE TABLE nuandao_cart_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	cartId INT,
	productId INT,
	count INT
);
#系列9527
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9527,
	'Molisii茉莉絲',
	'Molisii茉莉絲独立设计产品',
	'温暖着给你重返初心的勇气',
	1477875024919
);
#插入产品数据
INSERT INTO nuandao_product VALUES(
	null,
	95270,
	'原创设计【Molisii茉莉絲】大虎鲸 睡眠抱枕 创意礼物',
	'一只名叫Alice的鲸鱼，它孤身游荡，满腹爱意的歌唱，却从未得到爱的回应，因为它的频率一直是错的。我们的世界，擦肩而过，嘈杂中的孤独，自己的声音，又有多少人听得到。我只想等待能听见我的ta。 听到了吗？ 我的声音.',
	299,
	5,
	5,
	20,
	9527
);
INSERT INTO nuandao_product VALUES(
	null,
	95271,
	'原创设计【Molisii茉莉絲】海豹枕 清凉/温暖枕 靠垫创意礼物',
	'那年仲夏，躺椅上爸爸的大肚腩，一起一伏，把头躺在上面，凉凉的，软软的，耳边老四合院内梧桐树上的蝉鸣声，小憩片刻，梦中，水池里冰镇的西瓜，咬上一口，满满夏天的味道~',
	299,
	5,
	5,
	30,
	9527
);
INSERT INTO nuandao_product VALUES(
	null,
	95272,
	'【Molisii茉莉絲】美味垫子系列-滚肠君',
	'美味垫子系列—神奇的「滚肠君」腰靠拥有凹凸有致的身材，完美贴合您的腰部，帮您缓解腰部的疲劳酸痛。而且，「滚肠君」的手脚超级可爱哟！今天抓到一只超美味の滚肠君！',
	166,
	5,
	5,
	25,
	9527
);
INSERT INTO nuandao_product VALUES(
	null,
	95273,
	'【Molisii茉莉絲】美味垫子系列-吐胖司',
	'美味垫子系列—丰满的「吐胖司」新鲜出炉，松软的可以弹起来哟，把您的后背交给「吐胖司」绝对舒适贴心！让任何沙发都变成VIP级美味!优质的填充棉与独特的版型，长时间倚靠也舒适如初！「吐胖司」任何时刻都是您后背最值得信任的伙伴！',
	176,
	5,
	5,
	14,
	9527
);
INSERT INTO nuandao_product VALUES(
	null,
	95274,
	'【Molisii茉莉絲】美味垫子系列-屁蛋君',
	'美味垫子系列—无论在家还是学校，办公室，请把屁股放在屁蛋君上。超柔软的蛋黄超级舒服，蛋白和手脚不仅有趣，更让蛋黄不易乱跑，随时贴紧您的屁屁，您可以随意扭动屁屁，缓解长时间坐姿导致的不适。宇宙最舒适的美食坐垫—屁蛋君！',
	299,
	5,
	5,
	20,
	9527
);
INSERT INTO nuandao_product VALUES(
	null,
	95275,
	'Molisii茉莉絲】正気系列抱枕 - 元気小熊',
	'【Molisii茉莉絲-暖居屋】正気系列抱枕-元気小熊：“ 無論做什麼都要元気滿滿，老闆，請給我一碗超大份拉麺！”',
	158,
	5,
	5,
	11,
	9527
);

#系列9528
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9528,
	'The Beard Man',
	'手工创意毛线织品',
	'复兴手工针织艺术',
	1477875024919
);
INSERT INTO nuandao_product VALUES(
	null,
	95280,
	'The Beard Man 卑鄙的我 小黄人毛线帽（黄色帽单眼）',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	89,
	1,
	7,
	22,
	9528
);
INSERT INTO nuandao_product VALUES(
	null,
	95281,
	'The Beard Man 卑鄙的我 小黄人毛线帽（黄色帽双眼）1',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	99,
	1,
	7,
	12,
	9528
);
INSERT INTO nuandao_product VALUES(
	null,
	95282,
	'The Beard Man 卑鄙的我 小黄人毛线帽（蓝色帽单眼）',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	89,
	1,
	7,
	16,
	9528
);
INSERT INTO nuandao_product VALUES(
	null,
	95283,
	'The Beard Man 卑鄙的我 小黄人毛线帽（蓝色帽双眼）',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	99,
	1,
	7,
	16,
	9528
);
INSERT INTO nuandao_product VALUES(
	null,
	95284,
	'The Beard Man恐龙胡子帽（绿灰条纹）',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	99,
	2,
	2,
	36,
	9528
);

INSERT INTO nuandao_product VALUES(
	null,
	95285,
	'The Beard Man手工针织大话西游至尊宝孙悟空毛线帽（浅咖色）',
	'The Beard Man 以复兴手工针织艺术并融入潮流元素为主旨，每个产品均由丫痞的妈妈及妈妈团精心手工钩织，且不说含着多少爱心与温暖，光是由于纯手工制作的特殊性，在全世界范围内您几乎不太可能找到完全一样的另一只手造帽子。纯手工制作耗费的精力与心血是机器流水线制作不能同日而语的。材料为毛线，洗涤时请注意不要用热水，不要用力拧干，最好阴干。',
	89,
	4,
	3,
	6,
	9528
);
#系列9529
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9529,
	'INFLATION',
	'INFLATION潮流品牌',
	'玩转不平凡的潮牌',
	1477875024919
);

#系列9530
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9530,
	'duga多加',
	'duga多加时尚包系列',
	'极简风格，舒适生活',
	1477875024919
);

#系列9531
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9531,
	'“超人掌”',
	'“超人掌”趣味家居原创设计品',
	'随意揉捏的自然界',
	1477875024919
);

#系列9532
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9532,
	'袜子集锦',
	'袜子集锦',
	'冬季应该穿什么样的袜子？',
	1477875024919
);

#系列9533
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9533,
	'Goodmans唱片机',
	'Goodmans唱片机',
	'收藏心中的美好年代',
	1477875024919
);

#系列9534
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9534,
	'“地球是圆的”',
	'“地球是圆的”独立设计产品',
	'复古先生的品质生活',
	1477875024919
);

#系列9535
#插入系列数据
INSERT INTO nuandao_series VALUES(
	null,
	9535,
	'“安妮陈”',
	'“安妮陈”文艺女装全系列',
	'展现洒脱与激情的时尚气质',
	1477875024919
);
