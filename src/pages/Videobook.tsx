import Carousel from 'react-multi-carousel';
import YouTube, { YouTubeEvent } from 'react-youtube';
import 'react-multi-carousel/lib/styles.css';

const VIDEO_IDS = [
  'evGSCoYF6Xk',
  '97GXyM5OcwE',
  '48GlsV0RHKo',
  'SdjIB3aoUBU',
  'H9FiLHAkpvU',
  'F82iYN0Samw',
  'CoxuP6doUVk',
  '3nZl1O1_0ZA',
  '9Zcml8BGerg',
  'fVjrWTn3rBw',
  'U7PrRXcDmZo'
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const opts = {
  height: '450',
  width: '800',
  playerVars: {
    autoplay: 0,
  },
};

const optsMobile = {
  height: '200',
  width: '360',
  playerVars: {
    autoplay: 0,
  },
};

export function Videobook() {
  return (
    <div className="min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-bold text-center animate-fadeIn mb-12">VIDEOBOOKS</h1>
      <div className="hidden md:flex">
        <Carousel
          swipeable
          draggable
          showDots
          responsive={responsive}
          infinite
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["mobile"]}
        >
          {VIDEO_IDS.map(videoId => (
            <div key={videoId} className="flex items-center justify-center w-full">
              <YouTube videoId={videoId} opts={opts} onReady={(event: YouTubeEvent) => event.target.pauseVideo()} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col md:hidden gap-6">
        {VIDEO_IDS.map(videoId => (
          <div key={videoId} className="flex items-center justify-center w-full">
            <YouTube videoId={videoId} opts={optsMobile} onReady={(event: YouTubeEvent) => event.target.pauseVideo()} />
          </div>
        ))}
      </div>
    </div>
  )
}