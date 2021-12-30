alter table mydatabase.user_notification
add check(user_id<3);

truncate table mydatabase.coin;

delete from mydatabase.user_notification
where user_id = 1;

update mydatabase.user_notification
set content = 'good bye', create_date='2021-12-30' where user_id <1;

select content, title, user_id from mydatabase.user_notification 
inner join mydatabase.user
where user_notification.user_id = user.id and user_id<3
order by user_id desc;