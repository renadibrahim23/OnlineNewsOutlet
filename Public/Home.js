window.onscroll = function() {scrollFunction()};
         // JavaScript to shrink navbar on scroll
        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("navbar").style.padding = "10px 10px";
                document.getElementById("navbar").style.fontSize = "20px";
            } else {
                document.getElementById("navbar").style.padding = "15px";
                document.getElementById("navbar").style.fontSize = "24px";
            }
        }

     // subscription message
const subscribeMessage = `
<div id="subscribeMessage" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; border: 1px solid black; padding: 20px; z-index: 1000;">
  <p>You've read 3 articles. Please subscribe for unlimited access!</p>
  <a href="/subscribe"><button>Subscribe</button></a>
  <button onclick="closeSubscribeMessage()">OK</button>
</div>
`;



document.body.insertAdjacentHTML("beforeend", subscribeMessage);

function closeSubscribeMessage() {
  document.getElementById("subscribeMessage").style.display = "none";
}

let articleCount = 0;

function readArticle(articleElement) {
  // Check if the article has already been read
  const isRead = articleElement.getAttribute("isRead") === "true";
  if (isRead) {
      // If the article is already read, do nothing
      return;
  }

  // Mark the article as read
  articleElement.setAttribute("data-is-read", "true");
  articleCount++; // Increment the read count

  if (articleCount >= 3) {
      // Show subscription message
      document.getElementById("subscribeMessage").style.display = "block";
      // Disable further reading
      disableArticleReading();
  }
}
function disableArticleReading() {
const articles = document.querySelectorAll(".article");
articles.forEach(article => {
    article.removeEventListener("click", readArticle);
    article.style.cursor = "not-allowed"; // Change cursor to indicate no interaction
    article.style.opacity = 0.5; // Change style to indicate it's disabled
});
}

