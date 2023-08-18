
create database if not exists car_rental;

use car_rental;

create table users (
	id int not null auto_increment,
    firstname varchar(30) not null,
    lastname varchar(30) not null,
    telephone varchar(50) not null,
    email text not null,
    password text not null,
    primary key (id)
);

create table cars (
	id int not null auto_increment,
    photo1 text not null,
    photo2 text not null,
    brand varchar(30) not null,
    model smallint not null,
    fuel_type varchar(15) not null,
    price float not null,
    gearbox varchar(15) not null,
    available boolean not null,
    primary key (id)
);

create table rentals (
	id int not null auto_increment,
    rental_date date not null,
    return_date date not null,
    price float not null,
    user_id int,
    car_id int,
    primary key (id),
    foreign key (user_id) references users(id),
    foreign key (car_id) references cars(id)
);

insert into cars (photo1, photo2, brand, model, fuel_type, price, gearbox, available) values 
('https://cdn.24.co.za/files/Cms/General/d/3089/b1cf3fb0a479438fabf174b092301c29.jpg',
'https://img.autotrader.co.za/17873025',
'Renault Clio', 2019, 'diesel', 30, 'manuel', 0),

('https://www.razaoautomovel.com/wp-content/uploads/2021/11/Dacia-Duster-4x4-6-scaled_925x520_acf_cropped.jpg',
'https://www.topgear.com/sites/default/files/2022/12/Dacia-Duster-on-road-058.jpg',
'Dacia Duster', 2021, 'diesel', 80, 'automatic', 1),

('https://location-voiture.ma/uploads/images/cars/slider/572416_ve%CC%81hicule-utilitaire-multispace-berlingo-7-places.jpg',
'https://thumbs.img-sprzedajemy.pl/1000x901c/ad/92/ef/citroen-berlingo-xtr-ledy-klimatronik-lift-115-berlingo-560193777.jpg',
'Citroen Berlingo', 2019, 'petrol', 60, 'manuel', 1),

('https://www.journalofnomads.com/wp-content/uploads/2019/12/Renting-a-Car-in-Morocco-and-Driving-in-Morocco-e1649421213271.jpg',
'https://www.locationvoiture-agadir.fr/timg/phpThumb.php?src=../admin/media/img_vehicule/7c66c06e43509490ea500222f2c7e6e4_001.jpg&w=555&h=331&far=C&bg=FFFFFF&f=png&hash=1787e1341c517d3b249a83bdd1f0eefa',
'Dacia Logan', 2019, 'petrol', 40, 'manuel', 1),

('https://sf1.auto-moto.com/wp-content/uploads/sites/9/2016/07/dacia-dokker-1024x768.jpg',
'https://www.autoscout24.be/cms-content-assets/1pwJ7zcnchpk3d9ZtAYcDu-4e28845edb0deae0b3d47d4584817b6b-Dacia-Dokker-2013-1280-01-1100.jpg',
'Dacia Dokker', 2016, 'petrol', 40, 'manuel', 0),

('https://www.oneclickdrive.com/car-for-rent/slider-desktop/Mercedes-Benz_Mayback-S500_2020_10864_10864_3100348325-5_small.jpg?vr=3',
'https://img.gocar.be/v7/_cloud_wordpress_/2019/06/mercedes-maybach_s_650_24.jpg',
'Mercedes Benz', 2019, 'petrol', 80, 'automatic', 1);
