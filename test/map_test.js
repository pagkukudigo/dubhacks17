      function GetMap() {
          var map = new Microsoft.Maps.Map('#map',
          {
              credentials: 'Av3xH_roBTVysTGJ4wiUFWTJrrcoImteHpoWopVXubmrXEn59pILgkO7jrUSaX5j'
          });

          map.setView({
              mapTypeId: Microsoft.Maps.MapTypeId.aerial,
              center: new Microsoft.Maps.Location(47.6062, 122.3321),
              zoom: 15
          });

      }
