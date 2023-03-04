const loddder=()=>{
    let url=` https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res=>res.json())
    .then(data=>display(data.data.tools))
}


const display=hub=>{
  console.log(hub)
let container=document.getElementById('container')
 let x= hub[0].features[0]
 let y= hub[1].features[1]
 let z= hub[2].features[2]
 let w= hub[3].features[3]
// console.log(x)










for ( let user of hub){
// console.log(user.name)
let div=document.createElement('div')
div.classList.add('col')
div.innerHTML=`

<div class="card h-100">
            <img src="${user.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">${user.description}</p>
            </div>
            <div class="card-footer">
              <h3>features</h3>
              <ol>
              <li>${x}</li>
              <li>${y}</li>
              <li>${z}</li>
              <li>${w}</li>
              </ol>

              <div class="d-flex justify-content-between">
              <div>${user.published_in}</div>
              <div><button class="btn btn-info">details</button></div>
              </div>
            </div>
</div>

` 
container.appendChild(div)

}
}

loddder()