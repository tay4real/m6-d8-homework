                                                                                                                                                                                                                                                   

CREATE TABLE IF NOT EXISTS 

    authors (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(50) NOT NULL,

        lastName VARCHAR(50) NOT NULL,

        img VARCHAR(50) 

    );


CREATE TABLE IF NOT EXISTS 

    categories (

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        name VARCHAR(50) NOT NULL,

        img VARCHAR(50) NOT NULL

    );


CREATE TABLE  IF NOT EXISTS 

    reviews(

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, /* AUTO GENERATED ID */

        comment VARCHAR (100) NOT NULL, 

        rate INTEGER

    );


CREATE TABLE  IF NOT EXISTS 

    articles(

        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,

        headLine VARCHAR (50) NOT NULL,

        subHead VARCHAR(50) NOT NULL,

        content VARCHAR(200),

        cover VARCHAR(50) NOT NULL,

        authorId INTEGER NOT NULL,

        categoryId INTEGER NOT NULL,

        reviewId INTEGER NOT NULL,

        FOREIGN KEY (authorId) REFERENCES authors,
        FOREIGN KEY (categoryId) REFERENCES categories,
        FOREIGN KEY (reviewId) REFERENCES reviews
     
    );








