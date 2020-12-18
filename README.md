# Welcome to Pizza Shack ! 

## Planning 

I have created a interactive pizza ordering website. Unfortunately you can't order an REAL pizza through my application but you can get a feel for some of my abilties creating front-end websites that users will enjoy. 

I started off by creating wireframes on whimsical to make sure the application had a concise UI flow . 
Those can be found here -> https://whimsical.com/pizza-application-7wPBDpe1Qq5uo25bbkEhmM

This application we created using React.js and styled with styled-components, CSS and the MaterialUI library. 

## Deployed Site

You can find the link for the deployed site here -> https://pizzashack.netlify.app/

You will be pushed to my landing page for the site.

<img src="pizza-shack\src\gifs\landing.gif" width = "400" />


##  Site Features  

### Login & Register Forms
Features on this site included a login and register page so if a back-end was created user's could have functionality to save pizza orders and get rewards. Both forms included validation using Yup and the password input included a hide password icon. 

[<img src="pizza-shack\src\gifs\login.gif" width = "400" />]

### About Us and FAQs

Located in the footer there are links for a About us and FAQ page

[<img src="pizza-shack\src\gifs\aboutUsFAQs.gif" width = "400" />]


### Menu Pages

Each type of menu item recieved its own page. These can be accessed through the menu button on the navigation bar and on the landing page. 

[<img src="pizza-shack\src\gifs\menuPages.gif" width = "400" />]

### Location 

The Pizza Shack locator page can be found in the dropdown menu or on the landing page. This page displays a map that I created using Google Maps with markers shaped like a pizza to show a Pizza Shack at a given location. Below this map are all the locations for Pizza Shacks. The search bar will update the map with you type in a Zip Code or City,State. Additionally the search will update to Pizza Shack's that  match this location. 

[<img src="pizza-shack\src\gifs\location.gif" width = "400" />]

### Adding to Cart

Each item that has a ' Add to Cart ' button when clicked will this this item to the cart and you will see the number update in the upper right corner of the navigation bar.

[<img src="pizza-shack\src\gifs\pizzaAdd.gif" width = "400" />]

### Create Your Own Pizza

This is my favorite feature of the website. There is a Create your own pizza area where I have create a form that will update the pizza based on your selection on the right. This pizza was styled with CSS. I hand styled each element that appears on the pizza. At the bottom of the form you will see the total is also updated based on the toppings you include. 

[<img src="pizza-shack\src\gifs\pizzaCreator.gif" width = "400" />]

### Shopping Cart 

When you click on the stopping cart button you are directed to the shopping cart page that will reflect all the the items that you have added to your cart. Each item includes a remove link that will remove the item from the list.

[<img src="pizza-shack\src\gifs\cart.gif" width = "400" />]


## Future Features 

Some addtionals I would implement when continuing on this project would be 

- Adding back-end database to make login/register and cart checkout functional. This would also allow all of the data shown throughout the application to be more dynamic. All data is stored in the repo. 

- If a user could login I would then implement a full profile page where you could save orders and track rewards you have earned
