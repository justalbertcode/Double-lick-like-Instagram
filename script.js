const post = document.querySelector(".post");
const likesEl = document.querySelector(".likes");
const heart = document.querySelector(".heart-icon");

likesEl.innerHTML = "Doesn't have any like.";

let counter = 0;

post.addEventListener('dblclick', () => {
  counter++;
  console.log(counter)
  if(counter === 1) {
    likesEl.innerText = "❤" + counter + " like";
  } else {
    likesEl.innerHTML = "❤" + counter + " likes";
  }
  
  heart.classList.add('animate-like');
  setTimeout(() => {
   heart.classList.remove('animate-like'); 
  }, 800)
});