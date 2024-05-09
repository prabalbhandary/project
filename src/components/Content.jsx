import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import Subscribe from "./Subscribe";
import Subscribe2 from "./Subscribe2";

const Content = () => {
  return (
    <div className="flex bg-gray-100 p-6">
      <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Prebuilts Robots</h1>
        
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Type</h2>
            <div className="ml-4">
              <p className="hover:underline hover:text-sky-500 cursor-pointer">Extract Data</p>
              <p className="hover:underline hover:text-sky-500 cursor-pointer">Monitor</p>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Category</h2>
            <div className="ml-4">
              {["Automations", "Competitive Intelligence", "E-Commerce Monitoring", "Education", "News", "Real Estate", "Recruiting", "Search Engine", "SEO", "Social Media Marketing", "Technology"].map(
                (category, index) => (
                  <p key={index} className="hover:underline hover:text-sky-500 cursor-pointer">
                    {category}
                  </p>
                )
              )}
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold">Site</h2>
            <div className="ml-4">
              {[
                "Airbnb",
                "Amazon",
                "AngelList",
                "AppSumo",
                "Best Buy",
                "Binance",
                "Bing",
                "Booking",
                "Capterra",
                "Chrome Web Store",
                "Clutch",
                "CoinMarketCap",
                "Craigslist",
                "DuckDuckGo",
                "eBay",
                "Etsy",
                "Eventbrite",
                "Expedia",
                "Fiverr",
                "FlexJobs",
                "Freelancer.com",
                "Glassdoor.com",
                "Google",
                "Google Maps",
                "Google News",
                "Google Play",
                "Google Scholar",
                "Google Translate",
                "Google Travel Hotels",
                "Google Trends",
                "Google Workspace",
                "Indeed",
                "Indie Hackers",
                "LinkedIn",
                "LoopNet",
                "Medium",
                "Meetup",
                "Monster.com",
                "Pinterest",
                "ProductHunt",
                "Reddit",
                "Redfin",
                "Remoteok.com",
                "Seek.com.au",
                "Theme Forest",
                "TikTok",
                "Trip Advisor",
                "UpWork",
                "WordPress",
                "Y Combinator",
                "Yellow Pages",
                "Yelp",
                "Youtube",
                "Zapier",
                "Zillow",
                "ZoomInfo",
              ].map((site, index) => (
                  <p key={index} className="hover:underline hover:text-sky-500 cursor-pointer">
                    {site}
                  </p>
                ))}
            </div>
          </div>

          <div>
            <p className="hover:underline hover:text-sky-500 cursor-pointer">
              Didn't find what you're looking for?
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-start items-start ml-8">
        <Card />
        <Subscribe />
        <Banner />
        <Subscribe2 />
      </div>
    </div>
  );
};

export default Content;
