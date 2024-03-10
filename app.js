let projectـsource = [
  {
    name:"Music Player App React",
    src:"./img/music.png",
    link1:"https://github.com/amirhosein06/Music-Player-App-React",
    link2:"https://amirhosein06.github.io/Music-Player-App-React/"
  },
  {
    name:"Java Script Calculator",
    src:"./img/calculator.png",
    link1:"https://github.com/amirhosein06/Java-Script-Calculator",
    link2:"https://amirhosein06.github.io/Java-Script-Calculator/"
  },
  {
    name:"Space Tourism Website",
    src:"./img/space.png",
    link1:"https://github.com/amirhosein06/space-tourism-website",
    link2:"https://amirhosein06.github.io/space-tourism-website/"
  },
  {
    name:"Age Aalculator App",
    src:"./img/age.png",
    link1:"https://github.com/amirhosein06/Age-calculator-app",
    link2:"https://amirhosein06.github.io/Age-calculator-app/"
  },
  {
    name:"Password Generator",
    src:"./img/pass.png",
    link1:"https://github.com/amirhosein06/React-js-password-generator",
    link2:"https://amirhosein06.github.io/React-js-password-generator/"
  }
];

let list = projectـsource;

window.onload = uplist();

const inputbox = document.querySelector(".inputbox input");
inputbox.addEventListener("input",(e)=>{
    const val = e.target.value;

    let updatedList = [...projectـsource];
    updatedList = updatedList.filter((user) =>
    user.name.toLowerCase().includes(val.toLowerCase()));
    list = updatedList;
    uplist();
});

function uplist() {
    const arraymaping =  list.map(val=>{
        return {
            name:val.name,
            src:val.src,
            link1:val.link1,
            link2:val.link2
        }
    })
    let text = "";
    
    const p_content = document.querySelector(".project_content");
    for(let i =0;i<list.length;i++){
        text += 
        `<div class="p_databox">
            <span class="top">
              <div class="img_f"><img src="${arraymaping[i].src}"/>
              <span class="like_btn" data-num="">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
              </span>
              <span class="share_btn" data-shlink=${arraymaping[i].link1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
        </svg></span></div>
            </span>
        
            <span class="bottom">
            <h3>${arraymaping[i].name}</h3>
            </span>
            <span class="project_data">
              <button class="git_btn" data-glink=${arraymaping[i].link1}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
        </svg>View on GitHub</button>
              <button class="preview_btn"  data-llink=${arraymaping[i].link2}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        </svg>Watch live</button>
        </span>
          </div>`
    
    }
    if (list.length === 0) {
      p_content.innerHTML = `<span style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><img src="/img/not fuond.png" style="width:50%;"/></span>`;
    }else{
    p_content.innerHTML = text;
    };
}

// events
const f_btn = document.querySelector(".f_btn");
f_btn.addEventListener("click",()=>{
    window.location.assign("https://github.com/amirhosein06");
});

const git_btn = document.querySelectorAll(".git_btn");
git_btn.forEach(item=>{
    item.addEventListener("click",(e)=>{
        window.location.assign(e.target.dataset.glink);
    });
});

const preview_btn = document.querySelectorAll(".preview_btn");
preview_btn.forEach(item=>{
    item.addEventListener("click",(e)=>{
        window.location.assign(e.target.dataset.llink);
    });
});

const like_btn = document.querySelectorAll(".like_btn");
like_btn.forEach(item=>{
item.addEventListener("click",(e)=>{
      e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
    </svg>`;

});
});

const share_btn = document.querySelectorAll(".share_btn");
share_btn.forEach(item=>{
item.addEventListener("click",(e)=>{
        window.navigator.clipboard.writeText(e.target.dataset.shlink);
    e.target.style.width = "200px";
    e.target.innerHTML = "link was copied";
    setTimeout(() => {
      e.target.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
    </svg>`;
      e.target.style.width = "32px";
    }, 1500);
});
});