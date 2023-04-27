var shop = [
    {
      title: 'Collar',
      image: './img/collar.jpg',
      price: '8.00',
      description: "Sizes: XXS - 3XL"
    },
    {
      title: 'Leash',
      image: './img/leash.jpg',
      price: '10.00 - 20.00',
      description: "Materials: nylon, faux leather, and leather"
    },
    {
      title: 'Food Bowl',
      image: './img/dogbowl2.jpg',
      price: '5.00',
      description: "Materials: Metal or Plastic"
    },
    {
      title: 'Pet Carrier',
      image: './img/carrier2.jpg',
      price: '30.00',
      description:"Sizes: Small - XL"
    },
    
    ]
    
    var postHTML = " "
  
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="col-lg-3 col-md-3' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img img src="' + shop[i].image + '"/>'
        var price = '<p> $' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-primary"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML

    const addCSS = css => document.head.appendChild(document.createElement('style')).innerHTML=css;

addCSS("img{width:250px; height:250px; border:solid 2px #004040; margin-top: 10px; margin-bottom:15px;   },  " )


