let ADD=()=>{
    var dish=document.getElementById('item')
    var price=document.getElementById('price')
    var catogery=document.getElementById('catogery')
    var image=document.getElementById('image')
    var delivery=document.getElementById('type')
    var data={
        items :dish,
        Price :price,
        catogery :catogery,
        deliverytype :delivery,
    }
    var firebase=firebase.database();
    var ref= database.ref("user");
    ref.push(data);
      
}