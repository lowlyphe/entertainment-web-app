const $main = $('main')
const $trendingContainer = $('.trending-container')
const $trendingText = $('.trending-text')
const $recommendedText = $('.recommended-text')
const $trending = $('.trending')
const $recommended = $('.recommended')
const $drama = $('.drama')
const $comedy = $('.comedy')
const $action = $('.action')
const $scifi = $('.scifi')
const $all = $('.all')
const $bookmarkbtn = $('.bookmarkbtn')
const $search = $('.search')
const $searchbtn = $('.searchbtn')

//all page 
$all.click(() => {
  console.log('click')
  $main.empty()
  $main.removeClass('flex flex-col').append($trendingText).append($trendingContainer).append($recommendedText).append($recommended)

})

let full =  'assets/icon-bookmark-full.svg'
let empty = 'assets/icon-bookmark-empty.svg'
let svg = empty;

//builder for genre pages
const buildPage = (data) => {
  console.log(data)

    for (let i = 0; i < data.length; i++) {
      let id = data[i].id;
      let category = data[i].genres0;
      let category1 = data[i].genres1;
      let category2 = data[i].genres2;
      let rating = data[i].ratingaverage;
      if (rating === null) {
        continue;
      }
      let thumbnail = data[i].imageoriginal;
      let title = data[i].name;
      let year = data[i].premiered
      year = year.slice(0,4)
      let isBookmarked = data[i].isbookmarked;
      if (isBookmarked) {
        svg = full;
      } else {
        svg = empty;
      }
      $show = $('<div></div>').addClass('flex fex-col relative').html(`<div class="flex flex-col">
      <div>
        <img
          class="rounded-md hover:brightness-75"
          src="${thumbnail}"
          alt=""
        />
      </div>
      <div class="flex justify-start text-white font-extralight">
        <span class="w-full"> ${year} &#x2022; ${category} &#x2022; ${category1} &#x2022; ${category2} &#x2022; ${rating} </span>
      </div>
      <div>
        <h3 class="text-white">${title}</h3>
      </div>
    </div>`).appendTo($movieContainer)
    let $bookmarkContainer = $('<div></div>').addClass('absolute top-0 right-0 z-10 w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1').appendTo($show);
    let $bookmark = $(`<img class="bookmark pl-1 pt-1" src=${svg} />`).appendTo($bookmarkContainer).click(() => {
      $.get(`/api/bookmark/${id}`, (data) => {
        if (data[0].isbookmarked) {
          $.ajax({
            type: "PATCH",
            url: `/api/bookmark/${id}`,

          })
          $bookmark.attr('src', empty)
          console.log(data.isbookmarked, {after :$bookmark.attr('src')})
        } else {
          $.ajax({
            type: "PATCH",
            url: `/api/bookmark/${id}`,

          })
          $bookmark.attr('src', full)
        }
      })
    })
  }
}

//drama page
$drama.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Drama')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/drama', (data) => {
    buildPage(data);
  })
})

// bookmark page
$bookmarkbtn.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Bookmarks')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/bookmark', (data) => {
    buildPage(data);
  })
})

//action page
$action.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Action')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/action', (data) => {
    buildPage(data);
  })
  
})

//scifi page
$scifi.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Sci-Fi')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/scifi', (data) => {
    buildPage(data);
  })
})

// comedy page
$comedy.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Comedy')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/comedy', (data) => {
    buildPage(data);
  })
})


//all

$(document).ready(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Trending Shows')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/recommended', (data) => {
    buildPage(data);
  })
})
$all.click(() => {
  $main.empty()
  $main.addClass('flex flex-col mx-4')
  $text = $('<p></p>').addClass('text-white text-2xl font-thin mb-4').text('Trending Shows')
  $main.append($text)
  $movieContainer = $('<div></div>').addClass('flex flex-col md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get('/api/recommended', (data) => {
    buildPage(data);
  })
})


//search function
$searchbtn.click(() => {
  let search = $search.val();
  $main.empty();
  const $searchBox = $('<div></div>').addClass('flex flex-col mx-4 md:mx-0 md:grid gap-4 grid-cols-4 grid-rows-6').appendTo($main)
  $.get(`/api/search/${search}`, (data) => {
    console.log(data)

    for (let i = 0; i < data.length; i++) {
      let category = data[i].genres0;
      let category1 = data[i].genres1;
      let category2 = data[i].genres2;
      let rating = data[i].ratingaverage;
      if (rating === null) {
        continue;
      }
      let thumbnail = data[i].imageoriginal;
      let title = data[i].name;
      let year = data[i].premiered
      year = year.slice(0,4)
      $recommendedShow = $('<div></div>').addClass('flex fex-col').html(`<div class="flex flex-col">
      <div>
        <img
          class="rounded-md hover:brightness-75"
          src="${thumbnail}"
          alt=""
        />
      </div>
      <div class="flex justify-start text-white font-extralight">
        <span class="w-full"> ${year} &#x2022; ${category} &#x2022; ${category1} &#x2022; ${category2} &#x2022; ${rating} </span>
      </div>
      <div>
        <h3 class="text-white">${title}</h3>
      </div>
    </div>`).appendTo($searchBox)
    }
    
  })
})
