// async function x(){
//     let data =await fetch("https://fakestoreapi.com/products")
//     console.log(data);
//     let finalData= await data.json();
//     console.log(finalData);
//     finalData.map((x)=>{
//         let body= document.body
//         let section=document.createElement("section")
//         section.innerHTML+=`
//         <div class="card">
//         <img src=${x.image} height="300px" width: "300px">
//         <p class="title">${x.title}</p>
       
//         <p class="des">${x.description}Rs</p>
//         <i class="fa-solid fa-cart-shopping"></i>
//        <p></p>
//         </div>`
//         body.appendChild(section)
//     })
//     }
//     x()