function fetchOpen(id){
    console.log(id);
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
         
        <p>${data.blogBody}</p>
        `
        ;

    })
}
fetchOpen()