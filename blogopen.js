function fetchData(){
    fetch("https://api.allcoaching.in/api/v1/admin/blog/byId/1592")
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
fetchData()