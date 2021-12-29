alter table mydatabase.user_notification
add check(user_id<3);

truncate table mydatabase.coin;

delete from mydatabase.user_notification
where user_id = 1;

update mydatabase.user_notification
set content = 'good bye' where user_id = 0