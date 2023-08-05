/* ユーザー情報テーブル作成 */
create table user_info(
    user_id int NOT NULL AUTO_INCREMENT,
    user_name varchar(20) NOT NULL,
    user_password varchar(30),
    PRIMARY KEY (user_id)
);

/* ユーザー情報テーブルの中身を確認 */
select * from user_info;

/* ユーザー情報にデータ追加 */
insert into user_info(user_name,user_password) values('osumi','pppp');
insert into user_info(user_name,user_password) values('yuuki','aaaaa');
insert into user_info(user_name,user_password) values('atcoder','bbbbb');