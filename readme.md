# INSTALLING
Add files to make it work

* Include css style file: simpleCart.min.css

* (We use ui-kit framework (http://getuikit.com/) to style checkout panel.)

* Include fontawesome (http://fontawesome.io) css file link or add it localy

* Include jquery (http://jquery.com) file link or add it localy

* Include js file simpleCart.min.js (ONLY AFTER ALL PAGE CONTENT)

# CONFIGURATION

All config data can be found in file: simpleCart.json

#### ADDING HTML TO PAGE
- Basket
```html
<div class="simpleCartBasket items-added">
    <span class="simpleCart_quantity">0</span>
</div>
```
- Items to sell
```html
<div class="simpleCart_shelfItem">  <!-- main block if item to sell -->
    <h2 class="item_name">Товар 1</h2> <!-- "item_name" is reserved name you need to use-->
        <select class="item_code" hidden> <!-- "item_code" is reserved select block to care item identificator, it must be hidden -->
            <option value="pr01"></option> <!-- value = put here the "id" of item to identify it on checkout page -->
        </select>
        <!-- options changin and selected is in development -->
        <select class="item_color"> <!-- As example here we got one parameter to choose "color" -->
            <option value="red">red</option>
             <option value="green">green</option>
        </select>
        <!-- options changin and selected is in development -->
        <span class="item_price">150</span> <!-- "item_price" = cost of item without currency-->
    <a href="javascript:void(0);" class="item_add">Buy</a> <!-- "item_add" buttton to add item in cart -->
</div>
```
- Checkout panel
(It's build with ui-kit framework (http://getuikit.com/), so we recommend not to change html of it)
```html
<div id='simpleCartPanel'>
    <div class="uk-grid">
        <div class="uk-width-1-1">
            <div class="uk-panel uk-panel-header">
                <div class="uk-panel-badge  simpleCartPanel-exit">
                    <i class="uk-close uk-close-alt"></i>
                </div>
                <h3 class="uk-panel-title"><i class="uk-icon-shopping-cart"></i> Shopping cart</h3>
            </div>
        </div>
        <div class="uk-width-1-1">
            <div class="simpleCart_items"></div>
            <div class="simpleCart_info">No items selected</div>
        </div>
        <div class="uk-width-1-1"><div class="simpleCart_totalInfo uk-float-right">Total: <b>
        <span class="simpleCart_total"></span></b></div></div>
        <div class="uk-width-1-1  uk-text-center">
            <a href="javascript:;" class="uk-button uk-button-primary uk-width-1-1 simpleCart_checkout">
            Procced to order
            </a>
        </div>
    </div>
</div>
```
# PROCESSEING DATA
##### All data from shopping cart goes to simpleCartOrder.php file (as default in settings)
This file returns array in $order variable. This structure of it:
```sh
$order['items'] = array of items selected to buy;
    Each item has structure like so:
        $item["name"] = Name of item
        $item["id"] = Item identifire
        $item['count'] = Total items in cart
        $item['price'] = Total price of order
        $item['options'] = $params;
$order['count'] = total items count
$order['total'] = total price of order
$order['order'] = order number you need to generate yourself basing on your needs
```
# STYLINE
if it need you can style busket and panel simpleCart.jpg is used ad background image in floating basket.

```css
/*Floating busket*/
.simpleCartBasket{}
/*Counter of items in floating busket*/
.simpleCart_quantity{}
/*Item block*/
.simpleCart_shelfItem{}
/*Shopping cart*/
#simpleCartPanel{}
/*Items list*/
#simpleCartPanel .simpleCart_items{}
/*Empty cart message*/
#simpleCartPanel .simpleCart_info{}
/*Total block text*/
#simpleCartPanel .simpleCart_totalInfo{}
/*Total block price amount*/
#simpleCartPanel .simpleCart_total{}
/*Proceed to order form button*/
#simpleCartPanel.simpleCart_checkout{}
```