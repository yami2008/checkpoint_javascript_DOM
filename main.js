let products = document.getElementsByClassName('product') ;
let totalQuantity = document.getElementById('total-quantity');
let totalPrice = document.getElementById('total-price') ;

for (const product of products) {

    // Get the quantity & price of each product.
    let quantity = product.querySelector('.product-quantity-count');
    let price = product.querySelector('.product-price');

    // Attribuer l'evenement click au bouton (+).
    let btnPlus = product.querySelector('.btn.product-quantity-add');
    btnPlus.onclick = function (){
        // Incrémenter la quantité ainsi que la quantité globale & le prix total.
        quantity.innerText = parseInt(quantity.innerText) + 1 ;
        totalQuantity.innerText = parseInt(totalQuantity.innerText) + 1 ;
        totalPrice.innerText = parseInt(totalPrice.innerText) + parseInt(price.innerText) ;
        // Si la quantité est > 0, rendre le bouton (-) ainsi que e bouton (Retirer l'article) cliquable.
        if (quantity.innerText > 0){
            btnMoins.disabled = false ;
            removeArticle.disabled = false ;
        }
    }

    // Attribuer l'evenement click au bouton (-), qui par défault n'est pas cliquable.
    let btnMoins = product.querySelector('.btn.product-quantity-remove');
    btnMoins.disabled = true ;
    btnMoins.onclick = function (){
        // Vérifier que le quantité est >= 1.
        if (quantity.innerText >= 1){
            quantity.innerText = parseInt(quantity.innerText) - 1 ;
            totalQuantity.innerText = parseInt(totalQuantity.innerText) - 1 ;
            totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(price.innerText) ;
            // rendre le bouton (Retirer l'artcile) cliquable
            removeArticle.disabled = false ;
            // Si la quantité ==  0 ==> rendre les boutons (-) et (Retirer l'article) NON cliquable
            if (quantity.innerText == 0){
                btnMoins.disabled = true ;
                removeArticle.disabled = true ;
            }
        }
        else{
            alert("Vous en pouvez pas avoir une quantité < 0")
        }
    }

    // Attribuer l'evenement click au bouton (Retirer l'article), qui par défault n'est pas cliquable.
    let removeArticle = product.querySelector('.btn.remove-from-card');
    removeArticle.disabled = true ;
    removeArticle.onclick = function (){
        // Si la quanité >= 1, mettre la quantité à 0 , retirer ce qu'il faut de la quantité et le prix global et rendre les boutons (-) et (Retirer l'article) NON cliquable.
        if (quantity.innerText >= 1){
            totalQuantity.innerText = parseInt(totalQuantity.innerText) - parseInt(quantity.innerText) ;
            totalPrice.innerText = parseInt(totalPrice.innerText) - parseInt(price.innerText) * parseInt(quantity.innerText) ;
            quantity.innerText = 0 ;
            btnMoins.disabled = true ;
            removeArticle.disabled = true ;
        }
        else{
            alert("Vous devez avoir une quantité > à 0 pour pouvoir le retirer du card");
        }
    }

    // Attribuer l'evenement du like/dislike des produits.
    let btnLike = product.querySelector('.btn.btn-like');
    let i = 0 ;
    btnLike.onclick = function (){
        // L'état du produit se traduit par la variable i, entre Likes/Disliked et None
        if (i % 2 === 0){
            btnLike.innerHTML = "<i style=\"color: red; font-size: 30px\" class=\"bi bi-suit-heart-fill\"></i>" ;
        }
        else{
            btnLike.innerHTML = "<i style=\"color: red; font-size: 30px\" class=\"bi bi-suit-heart\"></i>";
        }
        i++ ;
    }






}























