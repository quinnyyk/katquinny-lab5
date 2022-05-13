const { user } = require("pg/lib/defaults");
const { getUser } = require("../../../server/controller/userController");
const { createUser } = require("../../../server/model/user");

var post= document.getElementById("post");
var username = getUser.username;

document.write("Hello " + username);

post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("comment-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});