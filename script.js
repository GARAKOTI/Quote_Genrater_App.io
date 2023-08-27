const api_url = "https://api.quotable.io/random";
const newQuoteBtn = document.querySelector(".btn1");
const shareBtn = document.querySelector(".twitterlogo");

async function getquote(url){
   const response = await fetch(url);
   var data = await response.json();
   console.log(data);

   document.querySelector("#quote").innerHTML = data.content;
   document.querySelector("span").innerHTML = data.authorSlug;

}
getquote(api_url);

newQuoteBtn.addEventListener("click", ()=>{
    getquote(api_url);
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +  document.querySelector("#quote").innerHTML +"----by " + document.querySelector("span").innerHTML,"Tweet window", "width = 600", "height = 300");
}
shareBtn.addEventListener("click",()=>{
    tweet();
})