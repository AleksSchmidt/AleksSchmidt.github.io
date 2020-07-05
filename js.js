

mensa=[];
mensaID=[];
var FavouriteMensaID;
function listMensa()
{    
var counter=0;
db.collection('Mensa').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
            console.log(doc.id+"    ==========>     "+doc.data().name);
            mensa[counter++]=doc.data().name;
            mensaID[counter]=doc.data().id;
      });
    });

  };


  
function getFavouriteMesa()
{    
var counter=0;
db.collection('FavouriteMensa').get().then(snapshot => {
      snapshot.docs.forEach(doc => {
            console.log("Favourite Mensa     ============>     "+doc.data().MensaID);
            FavouriteMensaID=doc.data().MensaID;
      });
    });

  };
