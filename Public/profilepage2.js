
document.addEventListener("DOMContentLoaded", function() {


const Username= document.getElementById("username");
const Password= document.getElementById("password");
const Likes= document.getElementById("likes");
const articles= document.getElementById("articlesr");
const bio=document.getElementById("biography");
const bioo=document.getElementById("bioo");
const submit=document.getElementById("mysub");


class User{
    constructor(username,password,likes,articlesr,interests){
        this.username=username;
        this.password=password;
        this.likes=likes;
        this.articlesr=articlesr;
        this.interests=interests;


    }

}
user1= new User("MichaelScott1", "**********",5,"Music");

Username.textContent=`${user1.username}`;
Password.textContent=` ${user1.password}`;
Likes.textContent=` ${user1.likes}`;
articles.textContent=` ${user1.articlesr}`;


submit.onclick=function(){
    bioo.textContent=bio.value;
}




document.querySelectorAll(".CategoryButton").forEach(button =>{
    
        // Your event listener setup here
    
    
    button.addEventListener("click",function(){
        console.log('button clicked');
        var category= this.getAttribute("data-category");
        var categoryImageURL="something";
        var categoryLinkURL="something";

        switch(category){
            case "music":
                categoryImageURL= "/musicar.jpg";
                categoryLinkURL="musicar1.html";
                break;

            case "politics":
                categoryImageURL="/politicsar.jpg";
                categoryLinkURL="par.html";
                break;
            case "tech":
                categoryImageURL="/techar.png";
                categoryLinkURL="par.html";


        }
        document.getElementById('categoryImage').src = categoryImageURL;

        document.getElementById('categoryLink').href=categoryLinkURL;


        document.getElementById('articleLinkContainer').classList.remove("hidden");
    });
});
});