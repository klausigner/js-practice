let myBio = {
    name: "Adeolu",
    sex: "Male",
    role: "Frontend Developer",
    otherRole: "Product Designer",
    message: function(){
        alert("Don't give up! Keep going!");
    },
}

document.getElementById("button").onclick = myBio.message;
