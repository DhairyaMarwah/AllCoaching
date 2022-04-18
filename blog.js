// let api = "https://api.allcoaching.in/api/v1/admin/blog/all";
// const searchBar = document.getElementById('search');
// function fetchData(page) { 
//   fetch(`${api}/0/5`)
//     .then((response) => {
//       if (!response.ok) {
//         throw Error("ERROR");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const html = data
//         .map((index) => {
//             console.log(index);
//           let blogid = index.id;
//           let trimtext = index.blogBody.substring(0, 131) + "...";
//           return `
//                 <div class="blog">
//                 <div class="blog-img" >
//                 <img src="https://api.allcoaching.in/${index.blogFeatureImage}"   onerror="this.src='./assets/images/cardimg.jpg'"/>
//                 </div>
//                 <div class="blog-text">
//                 <h1> ${index.title} </h1>
//                 <p> ${trimtext}   </p>
//                 <a    onClick="idparser(${index.id})">Read More </a>
//                 </div>
//                   </div>
//                 `;
//         })
//         .join("");
//       document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
//     });
// }

const searchBar = document.getElementById('search');
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredBlogs = ourblogs.filter((blog) => {
        return (
            blog.title.toLowerCase().includes(searchString) 
        );
    });
    displayBlog(filteredBlogs);
});
let ourblogs = [];
const loadBlog = async (page) => {
    try {
        console.log(page);
        const res = await fetch(`https://api.allcoaching.in/api/v1/admin/blog/all/${page}/3`);
        ourblogs = await res.json();
        console.log(ourblogs);
        displayBlog(ourblogs);
    } catch (err) {
        console.error(err);
    }
};
let page=0
loadBlog(page)
function inc() { 
    page++; 
    console.log(page);
    loadBlog(page)
  }
  function dec() {  
    if (page > 0) {
      page = page - 1;
    } 
    console.log(page);
    loadBlog(page)
  }
const displayBlog = (blogs) => {
    const htmlString = blogs
        .map((blog) => { 
            let trimtext = blog.blogBody.substring(0, 131) + "...";
            return `
            <div class="blog">
           <div class="blog-img" >
            <img src="https://api.allcoaching.in/${blog.blogFeatureImage}"   onerror="this.src='./assets/images/cardimg.jpg'"/>
                </div>
          <div class="blog-text">
                <h1> ${blog.title} </h1>
              <p> ${trimtext}   </p>
              <a    onClick="idparser(${blog.id})">Read More </a>
              </div>
                </div>
        `;
        })
        .join('');
        document.querySelector("#app").innerHTML = htmlString;
};



















 

function idparser(id) {
  const nonecards = document.getElementById("blog-page");
  nonecards.classList.toggle("none");
  //  document.getElementById("blogopen-page-toggle").classList.toggle("revert-none")
  document
    .getElementById("blogopen-page-toggle")
    .classList.remove("remove-blogopen");
  demo = id;
  console.log(id);
  fetchOpen(id);
  function fetchOpen(id) {
    console.log(id);
    fetch(`https://api.allcoaching.in/api/v1/admin/blog/byId/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        document.querySelector(
          "#blog-opened"
        ).innerHTML = `<h1>${data.title}</h1>
        <img src="${data.featureImage}" onerror="this.src='./assets/images/cardimg.jpg'"  />
        <p>${data.blogBody}</p>
        `;
      });
  }
}

function closeBlogOpen() {
  document
    .getElementById("blogopen-page-toggle")
    .classList.toggle("remove-blogopen");
  document.getElementById("blog-page").classList.remove("none");
}
// const searchUser = document.querySelector("#search"); 
// document.getElementById("search").addEventListener("input", () => {
//   console.log(document.getElementById("search").value);
// });
