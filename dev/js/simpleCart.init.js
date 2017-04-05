
var simpleCartConfig = {};
    $.ajax({
        url: "./simpleCart.json",
        async: false,
        dataType: 'json',
        success: function(data) {
            simpleCartConfig = data;
        }
    });


simpleCart.currency({ 
    code: "RUB" ,
    name: "Rubbles" ,
    symbol: " <i class='uk-icon-rub'></i>",
     delimiter: "" , 
    decimal: "." , 
    after: true 
});

simpleCart({
    checkout: { 
        type: "SendForm" , 
        url: simpleCartConfig.orderpage 
    },
    currency: "RUB",
    cartStyle: "div", 
    cartColumns: [
        { attr: "name" , label: "Наименование" } ,
        { attr: "price" , label: "Цена", view: 'currency' } ,
        { view: "decrement" , label: false , text: "<i class='uk-icon-minus-square-o'></i>" } ,
        { attr: "quantity" , label: "Количество", text: "шт."} ,  
        { view: "increment" , label: false , text: "<i class='uk-icon-plus-square-o'></i>" } ,
        { attr: "total" , label: "Сумма", view: 'currency' } ,
        { view: "remove" , text: "<i class='uk-icon-trash-o'></i>" , label: false }
    ]
});


$(document).ready(function(){
///////////////////////////////////////////////
///////////////////////////////////////////////
$('#simpleCartPanel').sliiide(
{
            toggle: simpleCartConfig.paneltoggle, 
            exit_selector: simpleCartConfig.exitselector, 
            animation_duration: "0.5s",
            place: simpleCartConfig.panelside, 
            animation_curve: simpleCartConfig.animtype, 
            body_slide: simpleCartConfig.bodyslide, 
            no_scroll: simpleCartConfig.noscroll 
}); 
///////////////////////////////////////////////
///////////////////////////////////////////////
$('#simpleCartPanel').css('display','block');
var cart = $(simpleCartConfig.paneltoggle)
///////////////////////////////////////////////
///////////////////////////////////////////////
if(simpleCart.total()>0){
   $(simpleCartConfig.paneltoggle).show();
}else{
    $(simpleCartConfig.paneltoggle).hide();
}
///////////////////////////////////////////////
///////////////////////////////////////////////
simpleCart.bind( 'update' , function(){

    if($('#simpleCartPanel').css('visibility')=='visible'){
        console.log('visible')
        $('.simpleCartBasket').hide()
    }else{
        $('.simpleCartBasket').show()
    }


    if(simpleCart.total()>0){
            $('.simpleCart_items').show();
            $('.simpleCart_checkout').show();
            $('.simpleCart_totalInfo').show();
            $('.simpleCart_info').hide();
    }else{
            $('.simpleCartBasket').trigger('click');
            $('.simpleCart_items').hide();
            $('.simpleCart_checkout').hide();
            $('.simpleCart_info').show();
            $('.simpleCart_totalInfo').hide();
    }
});
///////////////////////////////////////////////
///////////////////////////////////////////////
$('.simpleCart_shelfItem .item_add').click(function(){
    ( !cart.hasClass('items-added') ) && cart.addClass('items-added'); 
        var cartItems = cart.find('span'),
        text = parseInt(cartItems.text()) + 1;
        cartItems.text(text);
        $(simpleCartConfig.paneltoggle).show();
})  
///////////////////////////////////////////////
///////////////////////////////////////////////
$(simpleCartConfig.paneltoggle).click(function(event) {
    $(this).hide();
       
});
///////////////////////////////////////////////
///////////////////////////////////////////////
$(simpleCartConfig.exitselector).click(function(event) {
    if($('.simpleCart_quantity').text()!='0'){
        setTimeout(function() {
        $(simpleCartConfig.paneltoggle).show()
     }, 600)    
    }
});
///////////////////////////////////////////////
///////////////////////////////////////////////
});
  

