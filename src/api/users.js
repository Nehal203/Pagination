const users = [{"id":1,"fullName":"Louie Grgic","fullMobileNo":"+63 788 286 2945","email":"lgrgic0@amazon.co.uk","signupDate":"2024-04-24"},
    {"id":2,"fullName":"Ellsworth Chin","fullMobileNo":"+51 591 178 1908","email":"echin1@fema.gov","signupDate":"2023-12-25"},
    {"id":3,"fullName":"Zachery Boldra","fullMobileNo":"+86 616 356 3727","email":"zboldra2@smh.com.au","signupDate":"2024-02-27"},
    {"id":4,"fullName":"Ludovico Charpling","fullMobileNo":"+98 204 104 3457","email":"lcharpling3@yellowpages.com","signupDate":"2024-07-09"},
    {"id":5,"fullName":"Quincey De la croix","fullMobileNo":"+63 805 103 1049","email":"qde4@spotify.com","signupDate":"2024-05-23"},
    {"id":6,"fullName":"Janice Vicent","fullMobileNo":"+7 769 752 1499","email":"jvicent5@nydailynews.com","signupDate":"2024-09-05"},
    {"id":7,"fullName":"Ringo Sandeland","fullMobileNo":"+55 765 806 8698","email":"rsandeland6@bandcamp.com","signupDate":"2024-09-28"},
    {"id":8,"fullName":"Verney Storch","fullMobileNo":"+62 570 717 4228","email":"vstorch7@fema.gov","signupDate":"2024-07-14"},
    {"id":9,"fullName":"Wyn Rankling","fullMobileNo":"+994 940 817 3378","email":"wrankling8@list-manage.com","signupDate":"2024-10-05"},
    {"id":10,"fullName":"Berke Cordeau]","fullMobileNo":"+351 331 503 8639","email":"bcordeau9@vkontakte.ru","signupDate":"2024-06-19"},
    {"id":11,"fullName":"Emory Mouatt","fullMobileNo":"+48 870 444 4276","email":"emouatta@example.com","signupDate":"2024-01-04"},
    {"id":12,"fullName":"Gregg Reams","fullMobileNo":"+33 453 695 2514","email":"greamsb@kickstarter.com","signupDate":"2024-02-22"},
    {"id":13,"fullName":"Albrecht Hoyer","fullMobileNo":"+86 650 521 0500","email":"ahoyerc@histats.com","signupDate":"2024-03-30"},
    {"id":14,"fullName":"Garek Gadie","fullMobileNo":"+46 546 709 2219","email":"ggadied@tumblr.com","signupDate":"2023-12-31"},
    {"id":15,"fullName":"Shelton Castanone","fullMobileNo":"+81 965 900 2326","email":"scastanonee@123-reg.co.uk","signupDate":"2024-11-19"},
    {"id":16,"fullName":"Adriane Diano","fullMobileNo":"+62 823 760 5355","email":"adianof@mail.ru","signupDate":"2023-12-15"},
    {"id":17,"fullName":"Gaylene MacLardie","fullMobileNo":"+374 497 388 0293","email":"gmaclardieg@pbs.org","signupDate":"2024-07-19"},
    {"id":18,"fullName":"Ermin O'Donoghue","fullMobileNo":"+54 847 912 4563","email":"eodonoghueh@instagram.com","signupDate":"2023-12-24"},
    {"id":19,"fullName":"Erika Patroni","fullMobileNo":"+92 852 438 3026","email":"epatronii@psu.edu","signupDate":"2024-03-15"},
    {"id":20,"fullName":"Marj Franzke","fullMobileNo":"+86 563 176 7936","email":"mfranzkej@nyu.edu","signupDate":"2024-09-19"},
    {"id":21,"fullName":"Honor Anglim","fullMobileNo":"+374 701 774 2815","email":"hanglimk@paypal.com","signupDate":"2024-11-04"},
    {"id":22,"fullName":"Paquito Corston","fullMobileNo":"+33 757 856 1334","email":"pcorstonl@wufoo.com","signupDate":"2024-01-05"},
    {"id":23,"fullName":"Sanderson Jessett","fullMobileNo":"+380 787 690 2298","email":"sjessettm@hexun.com","signupDate":"2024-04-25"},
    {"id":24,"fullName":"Lilly Blatherwick","fullMobileNo":"+86 628 954 8992","email":"lblatherwickn@studiopress.com","signupDate":"2024-10-11"},
    {"id":25,"fullName":"Persis Fidge","fullMobileNo":"+86 534 589 2651","email":"pfidgeo@tinyurl.com","signupDate":"2024-07-05"},
    {"id":26,"fullName":"Helen-elizabeth Lebang","fullMobileNo":"+351 504 518 2740","email":"hlebangp@constantcontact.com","signupDate":"2024-09-14"},
    {"id":27,"fullName":"Grady Issakov","fullMobileNo":"+86 609 551 7388","email":"gissakovq@infoseek.co.jp","signupDate":"2024-03-03"},
    {"id":28,"fullName":"Caspar Crawshaw","fullMobileNo":"+86 318 896 1172","email":"ccrawshawr@google.es","signupDate":"2023-11-27"},
    {"id":29,"fullName":"Cindelyn Innerstone","fullMobileNo":"+86 105 538 5883","email":"cinnerstones@vk.com","signupDate":"2024-10-30"},
    {"id":30,"fullName":"Kelcie McConigal","fullMobileNo":"+48 924 647 5212","email":"kmcconigalt@woothemes.com","signupDate":"2024-09-27"},
    {"id":31,"fullName":"Kelcey Sibbering","fullMobileNo":"+64 338 593 5385","email":"ksibberingu@altervista.org","signupDate":"2024-01-01"},
    {"id":32,"fullName":"Nikola Renad","fullMobileNo":"+63 123 193 7127","email":"nrenadv@hud.gov","signupDate":"2024-10-21"},
    {"id":33,"fullName":"Carlen Leibold","fullMobileNo":"+1 226 610 6342","email":"cleiboldw@loc.gov","signupDate":"2024-03-24"},
    {"id":34,"fullName":"Kirk Waud","fullMobileNo":"+54 495 303 4562","email":"kwaudx@sciencedirect.com","signupDate":"2023-12-24"},
    {"id":35,"fullName":"Gareth Greatbatch","fullMobileNo":"+86 625 135 1594","email":"ggreatbatchy@studiopress.com","signupDate":"2024-05-06"},
    {"id":36,"fullName":"Carmelita Pleace","fullMobileNo":"+33 274 340 7446","email":"cpleacez@wunderground.com","signupDate":"2024-05-20"},
    {"id":37,"fullName":"Rozanne Shakesby","fullMobileNo":"+962 379 256 4476","email":"rshakesby10@apple.com","signupDate":"2024-07-27"},
    {"id":38,"fullName":"Baxter Ould","fullMobileNo":"+963 331 907 7311","email":"bould11@theatlantic.com","signupDate":"2024-10-21"},
    {"id":39,"fullName":"Letizia Brisley","fullMobileNo":"+57 370 292 3199","email":"lbrisley12@zimbio.com","signupDate":"2023-12-23"},
    {"id":40,"fullName":"Crista Keppe","fullMobileNo":"+62 309 812 7694","email":"ckeppe13@sun.com","signupDate":"2024-08-09"},
    {"id":41,"fullName":"Maggi Iceton","fullMobileNo":"+86 946 150 4170","email":"miceton14@simplemachines.org","signupDate":"2024-04-13"},
    {"id":42,"fullName":"Naoma Pillifant","fullMobileNo":"+93 373 496 0367","email":"npillifant15@is.gd","signupDate":"2023-12-01"},
    {"id":43,"fullName":"Rudiger Edmeades","fullMobileNo":"+266 927 779 4566","email":"redmeades16@nasa.gov","signupDate":"2024-02-25"},
    {"id":44,"fullName":"Curran Sayer","fullMobileNo":"+63 816 772 3512","email":"csayer17@e-recht24.de","signupDate":"2024-07-27"},
    {"id":45,"fullName":"Monroe Conradsen","fullMobileNo":"+62 181 520 3885","email":"mconradsen18@xing.com","signupDate":"2024-10-28"},
    {"id":46,"fullName":"Mano Hanscombe","fullMobileNo":"+7 998 896 6228","email":"mhanscombe19@google.co.uk","signupDate":"2024-03-07"},
    {"id":47,"fullName":"Drucill Krugmann","fullMobileNo":"+31 185 748 0250","email":"dkrugmann1a@prnewswire.com","signupDate":"2024-06-30"},
    {"id":48,"fullName":"Jacquelynn Galgey","fullMobileNo":"+86 597 655 7578","email":"jgalgey1b@reuters.com","signupDate":"2024-11-08"},
    {"id":49,"fullName":"Mei Hakey","fullMobileNo":"+62 688 615 5784","email":"mhakey1c@seesaa.net","signupDate":"2024-10-09"},
    {"id":50,"fullName":"Howie Ledwitch","fullMobileNo":"+86 696 913 9923","email":"hledwitch1d@facebook.com","signupDate":"2024-05-28"}]


    export const getUsers=function(page, limit){
        let array=[];
        for(let i=(page-1)*limit;i<(page*limit)&&users[i];i++){
            array.push(users[i]);
        }
        return array;
    }

    export const getLength=function(){
        return users.length;
    }