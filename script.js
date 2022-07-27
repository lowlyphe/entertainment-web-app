
const $trendingContainer = $('.trending-container')
const $trending = $('.trending')


$(document).ready(() => {
    $trendingContainer.empty()
    for (let i = 0; i < data.length; i++) {
        if (data[i].isTrending) {
            const bgUrl = data[i].thumbnail.trending.large
            $showContainer = $('<div></div>').addClass(`flex flex-col justify-between ml-4 md:ml-0 w-3/4 md:w-1/3 md:max-w-md h-36 md:h-56 rounded-md brightness-75 bg-[url('${bgUrl}')] bg-center bg-cover hover:brightness-50`)
            $trendingContainer.append($showContainer)
        }
    }
    

    //
})

// <div class="flex overflow-x-auto trending-container">
{/* <div
class="flex flex-col justify-between ml-4 md:ml-0 w-3/4 md:w-1/3 md:max-w-md h-36 md:h-56 rounded-md brightness-75 bg-[url('/assets/thumbnails/beyond-earth/trending/large.jpg')] bg-center bg-cover hover:brightness-50"
>
<!-- <img
  src="/assets/thumbnails/beyond-earth/trending/large.jpg"
  alt=""
  class="rounded-md w-full h-auto brightness-75 hover:brightness-50"
/> -->
<div
  class="flex justify-center w-10 h-10 md:w-7 md:h-7 bg-black rounded-full opacity-75 my-2 ml-auto mr-4 p-1"
>
  <button>
    <img src="assets/icon-bookmark-empty.svg" alt="" />
  </button>
</div>
<div class="hidden md:flex mx-auto">
  <a
    href="#"
    class="trending flex justify-between align-middle bg-gray-500/50 rounded-full w-28 pl-2 py-2 pr-4"
    ><img src="assets/icon-play.svg" alt="" />
    <p class="text-white text-xl font-light">Play</p></a
  >
</div>
<div class="flex flex-col w-1/2 ml-4 mb-4">
  <div class="flex text-xs justify-between w-3/4 text-white">
    <p>2019</p>
    <p>&#x2022;</p>
    <div class="flex justify-between">
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        class="fill-white"
      >
        <path
          d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
        />
      </svg>
    </div>
    <p>Movie</p>
    <p>&#x2022;</p>
    <p>PG</p>
  </div>
  <div class><p class="text-2xl text-white">Beyond Earth</p></div>
</div>
</div>
</div> */}