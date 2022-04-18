
 let api="https://api.allcoaching.in/api/v1/admin/blog/all"


function fetchData(page){
    // fetch(`${api}/${page}/2`)
    fetch(`${api}/0/5`)
    .then((response) => {
        
        if (!response.ok) {
                    throw Error("ERROR");
                 }
            return response.json();
    })
    .then((data)=>{
        // console.log(data);

        const html=data.map((index)=>{
            // console.log(index);
            let blogid=index.id
            // console.log(blogid);
            let trimtext=index.blogBody.substring(0, 131)+"..."
            // console.log(trimtext);
            return `
                <div class="blog">
                <div class="blog-img" >
                <img src="${index.blogFeatureImage}"   onerror="this.src='./assets/images/cardimg.jpg'"/>
                </div>
                <div class="blog-text">
                <h1> ${index.title} </h1>
                <p> ${trimtext}   </p>
                <a    onClick="idparser(${index.id})">Read More </a>
                </div>
                  </div>
                `;
        })
        .join('');
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

    })
} 
let page=0
fetchData(page)
function inc(){
    // document.getElementById("#app").reload(true);
    console.log("next");
    page++; 
    fetchData(page)
    console.log(page);
     }
     function dec(){
        // document.getElementById("app1").contentWindow.location.reload(true);
        console.log("prev");
        if(page>0){

            page=page-1;
        } 
        fetchData(page)
         }  
 function idparser(id){
     const nonecards=document.getElementById("blog-page")
     nonecards.classList.toggle("none")
    //  document.getElementById("blogopen-page-toggle").classList.toggle("revert-none")
    document.getElementById("blogopen-page-toggle").classList.remove("remove-blogopen")
     demo=id;
     console.log(id); 
     fetchOpen(id)
     function fetchOpen(id){
    console.log(id);
    fetch(`https://api.allcoaching.in/api/v1/admin/blog/byId/${id}`)
    .then((response) => {
        if (!response.ok) {
                    throw Error("ERROR");
                 }
            return response.json();
    })
    .then((data)=>{
        console.log(data);

        
         
        document.querySelector("#blog-opened").innerHTML = 
        `<h1>${data.title}</h1>
        <img src="${data.featureImage}" onerror="this.src='./assets/images/cardimg.jpg'"  />
        <p>${data.blogBody}</p>
        `
        ;

    })
} 
 } 


 function closeBlogOpen(){
     document.getElementById("blogopen-page-toggle").classList.toggle("remove-blogopen")
    document.getElementById("blog-page").classList.remove("none")
 }