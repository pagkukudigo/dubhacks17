function GetMap()
 {
   var map = new Microsoft.Maps.Map('#map', {
     credentials: 'Av3xH_roBTVysTGJ4wiUFWTJrrcoImteHpoWopVXubmrXEn59pILgkO7jrUSaX5j'
     center: new Microsoft.Maps.Location(51.50632, -0.12714),
     mapTypeId: Microsoft.Maps.MapTypeId.aerial,
     zoom: 10
   });

   //Add your post map load code here.
 }
