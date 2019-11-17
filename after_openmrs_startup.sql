set @user_id = null;
select user_id into @user_id from users where system_id = 'SUPERMAN';

insert into openmrs.user_role(user_id, role)
values (@user_id, 'Admin-App'),
       (@user_id, 'Appointments:FullAccess'),
       (@user_id, 'Clinical-App'),
       (@user_id, 'Privilege Level: Full'),
       (@user_id, 'Registration-App'),
       (@user_id, 'Reports-App'),
       (@user_id, 'SuperAdmin'),
       (@user_id, 'System Developer');

