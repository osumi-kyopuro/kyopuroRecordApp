create table record(
    record_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(200) NOT NULL,
    category  varchar(200) NOT NULL,
    question_number varchar(200) NOT NULL,
    question_name varchar(200) NOT NULL,
    code_link varchar(200) NOT NULL,
    memo varchar(200),
    ac_day date,    
    PRIMARY KEY (record_id)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;