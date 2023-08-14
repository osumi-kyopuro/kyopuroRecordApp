/* ユーザー情報テーブル作成 */
create table user_info(
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(20) NOT NULL,
    user_password varchar(30),
    PRIMARY KEY (user_id)
);