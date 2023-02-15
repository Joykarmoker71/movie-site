const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickcounter=0;
  arrow.addEventListener("click", () => {
          const ratio = Math.floor(window.innerWidth/270);
                clickcounter++;
      if(itemNumber - (4 + clickcounter) + (4 - ratio) >= 0){
    movieLists[i].style.transform = 'translateX(${
       movieLists[i].computedStyleMap().get("transform")[0].x.value -300
      }px)';
}else{
 movielists[i].style.transform="translateX(0)"; 
                         clickcounter=0;
}
    });
console.log(Math.floor(window.innerWidth/270));
});


//TOGGLE//

const ball =document.querySelector(".toggle-ball");
const items =document.querySelectorAll(".container,.movie-list-title,.navabr-container,.sidebar,.left-menu-icon,.toggle");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})