/* ユーザー情報テーブル作成 */
create table user_info(user_id int,user_name varchar(20),user_password varchar(30));

/* ユーザー情報テーブルの中身を確認 */
select * from user_info;

/* ユーザー情報にデータ追加 */
insert into user_info values(1,'osumi','pppp');
insert into user_info values(2,'yuuki','aaaaa');
insert into user_info values(3,'atcoder','bbbbb');