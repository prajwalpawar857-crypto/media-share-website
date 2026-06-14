function uploadContent(){

let text =
document.getElementById("textInput").value;

let file =
document.getElementById("mediaInput").files[0];

let post =
document.createElement("div");

post.className="post";

if(text){
post.innerHTML+=`<p>${text}</p>`;
}

if(file){

let url =
URL.createObjectURL(file);

if(file.type.startsWith("video")){

post.innerHTML+=`
<video controls>
<source src="${url}">
</video>
`;

}

else if(
file.type.startsWith("audio")
){

post.innerHTML+=`
<audio controls>
<source src="${url}">
</audio>
`;

}

}

document
.getElementById("posts")
.prepend(post);

}