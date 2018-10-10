function plusBorder(){ // Une bordure de 3px rouge apparait à l'activation de cette fonction (passage de al souris sur l'image)
  document.getElementById('image1').style.border = 'red 3px solid';
}
function noBorder(){ //La bordure disparait une fois que la souris n'est plus sur l'image
  document.getElementById('image1').style.border = null;
}
