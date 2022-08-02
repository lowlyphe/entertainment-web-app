const $main = $('main')
const $trendingContainer = $('.trending-container')
const $trendingText = $('.trending-text')
const $recommendedText = $('.recommended-text')
const $trending = $('.trending')
const $recommended = $('.recommended')
const $movies = $('.movies')
const $tv = $('.tv')
const $all = $('.all')
const $bookmarkContainer = $('.bookmarkContainer')
const $bookmark = $('.bookmark')

//all page 
$all.click(() => {
  console.log('click')
  $main.empty()
  $main.removeClass('flex flex-col').append($trendingText).append($trendingContainer).append($recommendedText).append($recommended)

})

//movies page
$movies.click(() => {
  $main.empty()
  $main.addClass('flex flex-col')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Movies')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/movies', (data) => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let rating = data[i].rating;
      let thumbnail = data[i].thumbnail.slice(1);
      let title = data[i].title;
      let year = data[i].year;
      $recommendedShow = $('<div></div>').addClass('flex fex-col').html(`<div class="flex flex-col">
      <div>
        <img
          class="rounded-md hover:brightness-75"
          src="${thumbnail}"
          alt=""
        />
      </div>
      <div class="flex justify-start text-white font-extralight">
        <span class="w-full"> ${year} &#x2022; ${category} &#x2022; ${rating} </span>
      </div>
      <div>
        <h3 class="text-white">${title}</h3>
      </div>
    </div>`).appendTo($movieContainer)
    }
  })
})

// tv page
$tv.click(() => {
  $main.empty()
  $main.addClass('flex flex-col')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('TV Shows')
  $main.append($text)
  $tvContainer = $('<div></div>').addClass('grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/tv', (data) => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let rating = data[i].rating;
      let thumbnail = data[i].thumbnail.slice(1);
      let title = data[i].title;
      let year = data[i].year;
      $recommendedShow = $('<div></div>').addClass('flex fex-col').html(`<div class="flex flex-col">
      <div>
        <img
          class="rounded-md hover:brightness-75"
          src="${thumbnail}"
          alt=""
        />
      </div>
      <div class="flex justify-start text-white font-extralight">
        <span class="w-full"> ${year} &#x2022; ${category} &#x2022; ${rating} </span>
      </div>
      <div>
        <h3 class="text-white">${title}</h3>
      </div>
    </div>`).appendTo($tvContainer)
    }
  })
})


let full = 'assets/icon-bookmark-full.svg'
let empty = 'assets/icon-bookmark-empty.svg'
let svg = empty;

$(document).ready(() => {
  $.get('/api/trending', (data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let rating = data[i].rating;
      let thumbnail = data[i].thumbnail.slice(1);
      let title = data[i].title;
      let year = data[i].year;
      $showContainer = $('<div></div>').addClass('relative flex flex-col justify-between ml-4 md:ml-0 w-96 md:w-96 md:max-w-1/3 space-x-6 h-36 md:h-96 rounded-md brightness-75 ').html(`<img class="-z-10 absolute top-0 bottom-0 max-h-fit max-w-fit" src="${thumbnail}" alt=""/><div class="flex justify-center w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1"><button><img src="assets/icon-bookmark-empty.svg" alt="" /></button></div><div class="flex flex-col w-1/2 ml-4 mb-4"><div class="flex text-xs justify-between w-3/4 text-white"><p>${year}</p><p>&#x2022;</p><div class="flex justify-between"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="fill-white"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/></svg></div><p>${category}</p><p>&#x2022;</p><p>${rating}</p></div><div class><p class="text-2xl text-white">${title}</p></div></div>`).appendTo($trendingContainer)
      
    }
  })
  $.get('/api/recommended', (data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;
      let rating = data[i].rating;
      let thumbnail = data[i].thumbnail.slice(1);
      let title = data[i].title;
      let year = data[i].year;
      let isBookmarked = data[i].isbookmarked;
      console.log(isBookmarked)
      if (isBookmarked) {
        svg = full;
      } else {
        svg = empty;
      }
      $recommendedShow = $('<div></div>').addClass('flex fex-col relative').html(`
      <div class="flex flex-col">
      <div class="relative">
        <img
          class="rounded-md hover:brightness-75"
          src="${thumbnail}"
          alt=""
        />
       
      </div>
      <div class="flex justify-start text-white font-extralight">
        <span class="w-full"> ${year} &#x2022; ${category} &#x2022; ${rating} </span>
      </div>
      <div>
        <h3 class="text-white">${title}</h3>
      </div>
    </div>`).appendTo($recommended)
    let $bookmarkContainer = $('<div></div>').addClass('absolute top-0 right-0 z-10 w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1').appendTo($recommendedShow);
    let $bookmark = $(`<img class="bookmark pl-1 pt-1" src=${svg} />`).appendTo($bookmarkContainer).click(() => {
      console.log($bookmark.src)
      $bookmark.attr('src', full)
    })
    }
  })
})

//  <div class="absolute top-0 right-0 z-10 w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1 bookmarkContainer"><img class="bookmark pl-1 pt-1" src=${svg} /></div>

// update bookmark