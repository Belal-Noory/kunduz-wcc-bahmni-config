insert into openmrs.user_role(user_id, role)
values (@provider_id, 'Admin-App'),
       (@provider_id, 'Appointments:FullAccess'),
       (@provider_id, 'Clinical-App'),
       (@provider_id, 'Privilege Level: Full'),
       (@provider_id, 'Registration-App'),
       (@provider_id, 'Reports-App'),
       (@provider_id, 'SuperAdmin'),
       (@provider_id, 'System Developer');

