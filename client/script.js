const $trendingContainer = $('.trending-container')
const $trending = $('.trending')




// $(document).ready(() => {
//     $trendingContainer.empty()
//     $.get(url, (data) => {
//       console.log(data)
//       for (let i = 0; i < 10; i++) {
//         let year = (data.results[i].first_air_date)
//       year = year.slice(0,4)
//       let title = data.results[i].name;
//       const bgUrl = `${baseUrl}original${data.results[i].backdrop_path}`  
//       $showContainer = $('<div></div>').addClass(`flex flex-col justify-between ml-4 md:ml-0 w-3/4 md:w-1/3 md:max-w-md h-36 md:h-56 rounded-md brightness-75 bg-[url('${bgUrl}')] bg-center bg-cover hover:brightness-50`).html(`<div class="flex justify-center w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1"><button><img src="assets/icon-bookmark-empty.svg" alt="" /></button></div><div class="flex flex-col w-1/2 ml-4 mb-4"><div class="flex text-xs justify-between w-3/4 text-white"><p>${year}</p><p>&#x2022;</p><div class="flex justify-between"><svg width="20" height="20"xmlns="http://www.w3.org/2000/svg" class="fill-white"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/></svg></div><p>Movie</p><p>&#x2022;</p><p>PG</p></div><div class><p class="text-2xl text-white">${title}</p></div></div>`).appendTo($trendingContainer)
//       }
      
      
//     })
// })

$(document).ready(() => {
  $.get('/api/trending', (data) => {
    //console.log(data)
    for (let i = 1; i < data.length; i++) {
      let category = data[i].category;
      let rating = data[i].rating;
      let thumbnail = data[i].thumbnail.slice(1);
      console.log(thumbnail, '/assets/thumbnails/beyond-earth/trending/large.jpg')

      let title = data[i].title;
      let year = data[i].year;
      $showContainer = $('<div></div>').addClass(`flex flex-col justify-between ml-4 md:ml-0 w-3/4 md:w-1/3 md:max-w-md h-36 md:h-56 rounded-md brightness-75 bg-[url('${thumbnail}')] bg-center bg-cover hover:brightness-50`).html(`<div class="flex justify-center w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1"><button><img src="assets/icon-bookmark-empty.svg" alt="" /></button></div><div class="flex flex-col w-1/2 ml-4 mb-4"><div class="flex text-xs justify-between w-3/4 text-white"><p>${year}</p><p>&#x2022;</p><div class="flex justify-between"><svg width="20" height="20"xmlns="http://www.w3.org/2000/svg" class="fill-white"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/></svg></div><p>Movie</p><p>&#x2022;</p><p>PG</p></div><div class><p class="text-2xl text-white">${title}</p></div></div>`).appendTo($trendingContainer)
    }
  })
})

// ('./client${thumbnail}')
