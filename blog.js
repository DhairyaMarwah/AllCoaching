
function fetchData(){
    fetch("https://api.allcoaching.in/api/v1/admin/blog/all/0/4")
    .then((response) => {
        if (!response.ok) {
                    throw Error("ERROR");
                 }
            return response.json();
    })
    .then((data)=>{
        console.log(data);

        const html=data.map((index)=>{
            console.log(index);
            let trimtext=index.blogBody.substring(0, 131)+"..."
            console.log(trimtext);
            return `
                <div class="blog">
                <div class="blog-img" >
                <img src="${index.blogFeatureImage}"   onerror="this.src='./assets/images/cardimg.jpg'"/>
                </div>
                <div class="blog-text">
                <h1> ${index.title} </h1>
                <p> ${trimtext}   </p>
                <a href="blogopen.html">Read More</a>
                </div>
                  </div>
                `;
        })
        .join('');
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);

    })
}
fetchData()
 