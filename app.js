let total = 350;
let approved = 234;
let rejectedcount=0;
let skills = [];
let rejectedskills=[];
let approvedskills=[];
let create = document.querySelector(".create-skill button");
let skillModal = document.querySelector(".skill-modal");
let skillInput = document.querySelector(".skill-input");
let approvedCard = document.querySelector(".approved-skills");
let added = document.querySelector("#addedskills .skills-container");
let approvedList = document.querySelector("#approvedskills .skills-container");
let rejectedList=document.getElementById("rejectedskills");
let btn = document.getElementById("add-skill");
let initial=350;
let app = document.getElementById("app-skills");
let iniapp=234;
let pen=document.getElementById("pipeline-pending");
let pen_card=document.getElementById("pending");
let feedbackskillModal = document.querySelector(".feedback-modal");
let feedBtn = document.getElementById("feedback-btn");
let feedmodal=document.getElementById("add-feedback");
let approval_pipeline=document.getElementById("approve-pipeline");
let rej_btn=document.getElementById("reject-skills");
let rejected=document.getElementById("rejected");
let rej_pipeline=document.getElementById("rejected-pipeline")
feedBtn.addEventListener("click", function() {
    feedbackskillModal.style.display = "flex";
});

create.onclick = function () {
    skillModal.style.display = "flex";
};

feedmodal.addEventListener("click",function(){
    feedbackskillModal.style.display = "none";
})

document.querySelector(".skill-modal .close").onclick = function () {
    skillModal.style.display = "none";
};


btn.addEventListener("click", function () {
    let skills1=document.getElementById("totalSkills");
    let skillname=skillInput.value.trim();
    skills.push(skillname);
    console.log(skills);
    initial++;
    skills1.innerText=initial;
    showSkills();
    skillModal.style.display = "none";
    // skillInput.value="";
});

// DISPLAY SKILLS
function showSkills() {
    added.innerHTML = "";
    skills.forEach(function (name) {
        let div = document.createElement("div");
        div.innerText = name;
        added.appendChild(div);

    });
}

app.addEventListener("click", function () {
    if(skillInput.value.trim()==""){
        alert("Enter a skill to approve or reject")
    }else{
        approvedList.innerHTML = "";
        approvedskills.push(skillInput.value.trim());
        approvedskills.forEach(function (name) {
            let div = document.createElement("div");
            div.innerText = name;
            approvedList.appendChild(div);
        });
        iniapp++;
        let count=document.getElementById("approved-skills");
        approval_pipeline.innerHTML = `Approved <b>${iniapp}</b>`;
        count.innerText=iniapp;
        let currentcount=initial-iniapp;
        pen.innerHTML = `Pending <b>${currentcount}</b>`;
        pen_card.innerText=currentcount;
        alert("Skills approved")
    }
   
});

rej_btn.addEventListener("click",function(){
    if(skillInput.value.trim()==""){
        alert("Enter a skill to approve or reject")
    }else{
        rejectedskills.push(skillInput.value.trim());
        rejectedskills.forEach(list=>{
            let div=document.createElement("div");
            div.innerText=list;
            rejectedList.appendChild(div);
        })
        rejectedcount++;
        rejected.innerText=rejectedcount;
        rej_pipeline.innerText=rejectedcount;
        rejectedskills.push(skillInput.value.trim());
        console.log(rejectedskills);
    }
})