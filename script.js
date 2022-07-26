
const $trendingContainer = $('.trending-container')
const $trending = $('.trending')

const data = [
    {
      "title": "Beyond Earth",
      "thumbnail": {
        "trending": {
          "small": "/assets/thumbnails/beyond-earth/trending/small.jpg",
          "large": "/assets/thumbnails/beyond-earth/trending/large.jpg"
        },
        "regular": {
          "small": "/assets/thumbnails/beyond-earth/regular/small.jpg",
          "medium": "/assets/thumbnails/beyond-earth/regular/medium.jpg",
          "large": "/assets/thumbnails/beyond-earth/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "title": "Bottom Gear",
      "thumbnail": {
        "trending": {
          "small": "/assets/thumbnails/bottom-gear/trending/small.jpg",
          "large": "/assets/thumbnails/bottom-gear/trending/large.jpg"
        },
        "regular": {
          "small": "/assets/thumbnails/bottom-gear/regular/small.jpg",
          "medium": "/assets/thumbnails/bottom-gear/regular/medium.jpg",
          "large": "/assets/thumbnails/bottom-gear/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "title": "Undiscovered Cities",
      "thumbnail": {
        "trending": {
          "small": "/assets/thumbnails/undiscovered-cities/trending/small.jpg",
          "large": "/assets/thumbnails/undiscovered-cities/trending/large.jpg"
        },
        "regular": {
          "small": "/assets/thumbnails/undiscovered-cities/regular/small.jpg",
          "medium": "/assets/thumbnails/undiscovered-cities/regular/medium.jpg",
          "large": "/assets/thumbnails/undiscovered-cities/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "title": "1998",
      "thumbnail": {
        "trending": {
          "small": "/assets/thumbnails/1998/trending/small.jpg",
          "large": "/assets/thumbnails/1998/trending/large.jpg"
        },
        "regular": {
          "small": "/assets/thumbnails/1998/regular/small.jpg",
          "medium": "/assets/thumbnails/1998/regular/medium.jpg",
          "large": "/assets/thumbnails/1998/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": true
    },
    {
      "title": "Dark Side of the Moon",
      "thumbnail": {
        "trending": {
          "small": "/assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
          "large": "/assets/thumbnails/dark-side-of-the-moon/trending/large.jpg"
        },
        "regular": {
          "small": "/assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
          "medium": "/assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
          "large": "/assets/thumbnails/dark-side-of-the-moon/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": true
    },
    {
      "title": "The Great Lands",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/the-great-lands/regular/small.jpg",
          "medium": "/assets/thumbnails/the-great-lands/regular/medium.jpg",
          "large": "/assets/thumbnails/the-great-lands/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "The Diary",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/the-diary/regular/small.jpg",
          "medium": "/assets/thumbnails/the-diary/regular/medium.jpg",
          "large": "/assets/thumbnails/the-diary/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Earth’s Untouched",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/earths-untouched/regular/small.jpg",
          "medium": "/assets/thumbnails/earths-untouched/regular/medium.jpg",
          "large": "/assets/thumbnails/earths-untouched/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "No Land Beyond",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/no-land-beyond/regular/small.jpg",
          "medium": "/assets/thumbnails/no-land-beyond/regular/medium.jpg",
          "large": "/assets/thumbnails/no-land-beyond/regular/large.jpg"
        }
      },
      "year": 2019,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "During the Hunt",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/during-the-hunt/regular/small.jpg",
          "medium": "/assets/thumbnails/during-the-hunt/regular/medium.jpg",
          "large": "/assets/thumbnails/during-the-hunt/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Autosport the Series",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/autosport-the-series/regular/small.jpg",
          "medium": "/assets/thumbnails/autosport-the-series/regular/medium.jpg",
          "large": "/assets/thumbnails/autosport-the-series/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Same Answer II",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/same-answer-2/regular/small.jpg",
          "medium": "/assets/thumbnails/same-answer-2/regular/medium.jpg",
          "large": "/assets/thumbnails/same-answer-2/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Below Echo",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/below-echo/regular/small.jpg",
          "medium": "/assets/thumbnails/below-echo/regular/medium.jpg",
          "large": "/assets/thumbnails/below-echo/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "The Rockies",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/the-rockies/regular/small.jpg",
          "medium": "/assets/thumbnails/the-rockies/regular/medium.jpg",
          "large": "/assets/thumbnails/the-rockies/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Relentless",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/relentless/regular/small.jpg",
          "medium": "/assets/thumbnails/relentless/regular/medium.jpg",
          "large": "/assets/thumbnails/relentless/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Community of Ours",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/community-of-ours/regular/small.jpg",
          "medium": "/assets/thumbnails/community-of-ours/regular/medium.jpg",
          "large": "/assets/thumbnails/community-of-ours/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Van Life",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/van-life/regular/small.jpg",
          "medium": "/assets/thumbnails/van-life/regular/medium.jpg",
          "large": "/assets/thumbnails/van-life/regular/large.jpg"
        }
      },
      "year": 2015,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "The Heiress",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/the-heiress/regular/small.jpg",
          "medium": "/assets/thumbnails/the-heiress/regular/medium.jpg",
          "large": "/assets/thumbnails/the-heiress/regular/large.jpg"
        }
      },
      "year": 2021,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Off the Track",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/off-the-track/regular/small.jpg",
          "medium": "/assets/thumbnails/off-the-track/regular/medium.jpg",
          "large": "/assets/thumbnails/off-the-track/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Whispering Hill",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/whispering-hill/regular/small.jpg",
          "medium": "/assets/thumbnails/whispering-hill/regular/medium.jpg",
          "large": "/assets/thumbnails/whispering-hill/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "112",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/112/regular/small.jpg",
          "medium": "/assets/thumbnails/112/regular/medium.jpg",
          "large": "/assets/thumbnails/112/regular/large.jpg"
        }
      },
      "year": 2013,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Lone Heart",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/lone-heart/regular/small.jpg",
          "medium": "/assets/thumbnails/lone-heart/regular/medium.jpg",
          "large": "/assets/thumbnails/lone-heart/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Production Line",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/production-line/regular/small.jpg",
          "medium": "/assets/thumbnails/production-line/regular/medium.jpg",
          "large": "/assets/thumbnails/production-line/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Dogs",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/dogs/regular/small.jpg",
          "medium": "/assets/thumbnails/dogs/regular/medium.jpg",
          "large": "/assets/thumbnails/dogs/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "E",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Asia in 24 Days",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/asia-in-24-days/regular/small.jpg",
          "medium": "/assets/thumbnails/asia-in-24-days/regular/medium.jpg",
          "large": "/assets/thumbnails/asia-in-24-days/regular/large.jpg"
        }
      },
      "year": 2020,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "The Tasty Tour",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/the-tasty-tour/regular/small.jpg",
          "medium": "/assets/thumbnails/the-tasty-tour/regular/medium.jpg",
          "large": "/assets/thumbnails/the-tasty-tour/regular/large.jpg"
        }
      },
      "year": 2016,
      "category": "TV Series",
      "rating": "PG",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Darker",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/darker/regular/small.jpg",
          "medium": "/assets/thumbnails/darker/regular/medium.jpg",
          "large": "/assets/thumbnails/darker/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "18+",
      "isBookmarked": true,
      "isTrending": false
    },
    {
      "title": "Unresolved Cases",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/unresolved-cases/regular/small.jpg",
          "medium": "/assets/thumbnails/unresolved-cases/regular/medium.jpg",
          "large": "/assets/thumbnails/unresolved-cases/regular/large.jpg"
        }
      },
      "year": 2018,
      "category": "TV Series",
      "rating": "18+",
      "isBookmarked": false,
      "isTrending": false
    },
    {
      "title": "Mission: Saturn",
      "thumbnail": {
        "regular": {
          "small": "/assets/thumbnails/mission-saturn/regular/small.jpg",
          "medium": "/assets/thumbnails/mission-saturn/regular/medium.jpg",
          "large": "/assets/thumbnails/mission-saturn/regular/large.jpg"
        }
      },
      "year": 2017,
      "category": "Movie",
      "rating": "PG",
      "isBookmarked": true,
      "isTrending": false
    }
  ]

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