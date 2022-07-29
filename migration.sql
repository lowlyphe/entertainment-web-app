DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
   id serial, 
   title        VARCHAR(21) NOT NULL,
   thumbnail    VARCHAR(60) NOT NULL,
   year         INTEGER  NOT NULL,
   category     VARCHAR(9) NOT NULL,
   rating       VARCHAR(3) NOT NULL,
   isBookmarked BOOLEAN  NOT NULL,
   isTrending   BOOLEAN  NOT NULL
);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Beyond Earth','./assets/thumbnails/beyond-earth/trending/large.jpg',2019,'Movie','PG',false,true);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Bottom Gear','./assets/thumbnails/bottom-gear/trending/large.jpg',2021,'Movie','PG',false,true);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Undiscovered Cities','./assets/thumbnails/undiscovered-cities/trending/large.jpg',2019,'TV Series','E',false,true);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('1998','./assets/thumbnails/1998/trending/large.jpg',2021,'Movie','18+',false,true);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Dark Side of the Moon','./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg',2018,'TV Series','PG',true,true);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('The Great Lands','./assets/thumbnails/the-great-lands/regular/large.jpg',2019,'Movie','E',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('The Diary','./assets/thumbnails/the-diary/regular/large.jpg',2019,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Earths Untouched','./assets/thumbnails/earths-untouched/regular/large.jpg',2017,'Movie','18+',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('No Land Beyond','./assets/thumbnails/no-land-beyond/regular/large.jpg',2019,'Movie','E',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('During the Hunt','./assets/thumbnails/during-the-hunt/regular/large.jpg',2016,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Autosport the Series','./assets/thumbnails/autosport-the-series/regular/large.jpg',2016,'TV Series','18+',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Same Answer II','./assets/thumbnails/same-answer-2/regular/large.jpg',2017,'Movie','E',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Below Echo','./assets/thumbnails/below-echo/regular/large.jpg',2016,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('The Rockies','./assets/thumbnails/the-rockies/regular/large.jpg',2015,'TV Series','E',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Relentless','./assets/thumbnails/relentless/regular/large.jpg',2017,'Movie','PG',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Community of Ours','./assets/thumbnails/community-of-ours/regular/large.jpg',2018,'TV Series','18+',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Van Life','./assets/thumbnails/van-life/regular/large.jpg',2015,'Movie','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('The Heiress','./assets/thumbnails/the-heiress/regular/large.jpg',2021,'Movie','PG',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Off the Track','./assets/thumbnails/off-the-track/regular/large.jpg',2017,'Movie','18+',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Whispering Hill','./assets/thumbnails/whispering-hill/regular/large.jpg',2017,'Movie','E',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('112','./assets/thumbnails/112/regular/large.jpg',2013,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Lone Heart','./assets/thumbnails/lone-heart/regular/large.jpg',2017,'Movie','E',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Production Line','./assets/thumbnails/production-line/regular/large.jpg',2018,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Dogs','./assets/thumbnails/dogs/regular/large.jpg',2016,'TV Series','E',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Asia in 24 Days','./assets/thumbnails/asia-in-24-days/regular/large.jpg',2020,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('The Tasty Tour','./assets/thumbnails/the-tasty-tour/regular/large.jpg',2016,'TV Series','PG',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Darker','./assets/thumbnails/darker/regular/large.jpg',2017,'Movie','18+',true,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Unresolved Cases','./assets/thumbnails/unresolved-cases/regular/large.jpg',2018,'TV Series','18+',false,false);
INSERT INTO movies(title,thumbnail,year,category,rating,isBookmarked,isTrending) VALUES ('Mission: Saturn','./assets/thumbnails/mission-saturn/regular/large.jpg',2017,'Movie','PG',true,false);
 