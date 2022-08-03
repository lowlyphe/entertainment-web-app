DROP TABLE IF EXISTS movies;
CREATE TABLE movies(
    id                          SERIAL
  ,url                         text NOT NULL
  ,name                        text NOT NULL
  ,language                    text NOT NULL
  ,genres0                     text  
  ,genres1                     text
  ,genres2                     text
  ,premiered                   DATE  NOT NULL
  ,ratingaverage               NUMERIC(3,1)
  ,imageoriginal               text NOT NULL
  ,summary                     text NOT NULL
  ,isbookmarked boolean
  ,istrending boolean

);

