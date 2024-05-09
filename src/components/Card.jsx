import React from "react";

const SingleCard = ({ imgSrc, title, description }) => (
  <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
    <img src={imgSrc} className="w-7 h-7 text-gray-500 mb-3" alt={title} />
    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
      {title}
    </h5>
    <p className="mb-3 font-normal text-gray-500">{description}</p>
  </div>
);

const Card = () => {
  const cards = [
    {
      imgSrc:
        "https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Monitor Company Info on LinkedIn",
      description:
        "Monitor a company's details on LinkedIn and get an alert when their details or employees list change",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/3f8263b4-20b1-44c8-89a2-9785609315d7_producthunt%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Products from ProductHunt",
      description:
        "Scrape the list of products on Product Hunt for a specific keywword and/or category. Download it as a spreadsheet or monitor it for changes over time",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/2daf46ae-9627-4cf0-a7b0-29472b6afd2f_lndeed%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Jobs Listings from Indeed US",
      description:
        "Extract a list of all jobs posted on Indeed in the US for a specific role and city or state",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job listings information from LinkedIn",
      description:
        "With this Prebuilt Robot, you can extract job listings from LinkedIn for a job position & location",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/1a728169-4e64-4efd-8ff1-039f8f467148_google%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Apps list from Google Workspace Marketplace",
      description: "Extract Apps list from Google Workspace Marketplace",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/9d57fa64-3a46-4601-a80d-b7b6c950ada5_zapier%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Apps list from Zapier",
      description: "Scrape the list of Apps from Zapier",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/9d57fa64-3a46-4601-a80d-b7b6c950ada5_zapier%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Apps details from Zapier",
      description:
        "With this prebuilt robot you can extract an App details from Zapier",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/a808715f-dc0b-4219-aee0-7b1401b235eb_Yelp%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract list of services from Yelp",
      description:
        "With this prebuilt robot you can extract data from Yelp.com with just a few clicks download it as a spreadsheet, and save it on Google Sheets or Airtable.",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/a808715f-dc0b-4219-aee0-7b1401b235eb_Yelp%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract service details from Yelp",
      description:
        "With a few clicks, this prebuilt robot can extract service page from Yelp.com. You can download business details, the services they provide, and their top reviews",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/f78843a4-2b56-41ca-b93c-1635e9a7b57e_Redfin%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract list of properties from Redfin",
      description:
        "This prebuilt robot extract properties list from Redfin with just a few clicks. You can download the data as a spreadsheet or integrate your robot with Airtable, Google Sheets, Zapier & 5,000 + apps",
    },
    {
      imgSrc:
        "https://images.prismic.io/browseai/f78843a4-2b56-41ca-b93c-1635e9a7b57e_Redfin%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract property details from Redfin",
      description:
        "This prebuild robot is optimized to extarct from a property listed on Redfin",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ac09dc4f-b22a-4652-b5bc-825747352139_Monster%40full.png?auto=compress,format&rect=0,0,600,600&w=40&h=40",
      title: "Extract Job postings List from Monster.com",
      description: "Extract job postings list from Monster.com and download it as spreadsheet",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ac09dc4f-b22a-4652-b5bc-825747352139_Monster%40full.png?auto=compress,format&rect=0,0,600,600&w=40&h=40",
      title: "Extract job posting details from Monster.com",
      description: "This prebuilt robot will extract details from a job posting on Monster.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d3ad6504-992f-40f3-b164-935add8ebe88_Glassdoor%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings list from Glassdoor",
      description: "This prebuilt robot helps you to extract data from list of jobs in Glassdoor and download it as a spreadsheet without writing a single line of codes in only 2 minutes",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d3ad6504-992f-40f3-b164-935add8ebe88_Glassdoor%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings details from Glassdoor",
      description: "This prebuilt robot enables you to extract details from a job posting on Glassdoor",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ecb3e293-583a-4349-b7ff-a3c86e17c79f_upwork%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings list from Upwork",
      description: "This prebuilt robot will extract list of job postings from an Upwork search URL",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ecb3e293-583a-4349-b7ff-a3c86e17c79f_upwork%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract details from an Upwork job posting",
      description: "Extract data from a job details page on UpWork and download it as a spreadsheed, save it on Google Sheets or Airtable or flow the data to Zapier to create custom workflows",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e71653c5-9354-46d3-835f-9ca0ec50e214_Flexjobs%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings list from FlexJobs",
      description: "With this prebuilt robot, you can extract a list of job postings by just providing a search URL from Flexjobs and download the data without the need to write custom code",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e71653c5-9354-46d3-835f-9ca0ec50e214_Flexjobs%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job posting details from FlexJobs",
      description: "This prebuilt robot enables you to download data from a job posting on FlexJobs and download it as a spreadsheet or save it in Google Sheets or Airtable alongside our other integrations",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/0cf2cd81-ce56-4170-a2e5-b919ee4c4c48_SEEK%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings list from SEEK",
      description: "Extract job postings list from Seek.com and automate your workflow.",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/0cf2cd81-ce56-4170-a2e5-b919ee4c4c48_SEEK%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job posting details from Seek.com",
      description: "This prebuilt robot extracts job posting details from Seek.com automatically",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/b2eb6e8e-5c21-4013-b6ba-9f47f105304a_RemoteOK%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings list from RemoteOK",
      description: "Extract jobs list from a RemoteOK search page with No-Code",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/b2eb6e8e-5c21-4013-b6ba-9f47f105304a_RemoteOK%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job postings details from RemoteOK",
      description: "This prebuilt robot extracts job posting details from a job posting URL on RemoteOK. You can download this data as a spreadsheet or save it on Google Sheets or Airtable",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1213108f-8cd0-490d-8fdd-e74f8b9babab_Clutch%40full.png?auto=compress,format&rect=0,0,400,400&w=40&h=40",
      title: "Extract Companies Info from Clutch",
      description: "This prebuilt robot extracts list of companies from a category page on Clutch.co",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ca296955-e2d5-4269-b0c2-2c479473fdc3_Capterra%40full.png?auto=compress,format&rect=0,0,500,500&w=40&h=40",
      title: "Extract Software list from Capterra.ca",
      description: "This prebuilt robot enables you to extract software list from a Capterra category without writing a single line of code",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/afe6cd4d-6a63-4252-ad90-0295cdcbda3d_ebay%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Products list from eBay",
      description: "This prebuilt robot extracts products list from eBay with only few clicks without writing a single line of code",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/dd655796-93a3-4982-8f07-6ebc2023551f_tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png?auto=compress,format&rect=0,0,300,300&w=40&h=40",
      title: "Extract TikTok Video information and comments",
      description: "This prebuilt robot extracts data like description, author, comments & more from a video on TikTok",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/dd655796-93a3-4982-8f07-6ebc2023551f_tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png?auto=compress,format&rect=0,0,300,300&w=40&h=40",
      title: "Extract account info and videos from a TikTok Account",
      description: "This prebuilt robot extracts account info and videos from a TikTok account",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/a746d0a0-e31e-4f4a-95ac-10c43a23b7d1_642-6422341_kami-for-chrome-google-chrome-store-logo.png?auto=compress,format&rect=50,0,996,996&w=40&h=40",
      title: "Extract Extension info from Chrome Web Store",
      description: "This prebuilt robot will extract infpormation from an extension page on Chrome Web Store",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/a746d0a0-e31e-4f4a-95ac-10c43a23b7d1_642-6422341_kami-for-chrome-google-chrome-store-logo.png?auto=compress,format&rect=50,0,996,996&w=40&h=40",
      title: "Extract Extension reviews from Chrome Web Store",
      description: "This prebuilt robot will extract reviews from an extension's page on Chrome Web Store",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/dd655796-93a3-4982-8f07-6ebc2023551f_tiktok-app-icon-logo-0F5AD7AE01-seeklogo.com.png?auto=compress,format&rect=0,0,300,300&w=40&h=40",
      title: "Extract TikTok videos from a hashtag",
      description: "This prebuilt robot extracts videos from TikTok based a hashtag",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1a728169-4e64-4efd-8ff1-039f8f467148_google%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Google Search results  by country",
      description: "This prebuild robot extracts Google search results for a keyword from a selected country",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/aa946e63-bc79-4046-ad78-9850f631797f_reddit%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract posts from Reddit search",
      description: "This prebuilt robot searches for a specific keyword on Reddit and extracts the related posts",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/b69e12d2-857f-4d0a-af98-e354fbc26556_Google_Translate_logo.svg.png?auto=compress,format&rect=0,0,400,400&w=40&h=40",
      title: "Translate Text using Google Trabslate",
      description: "This prebuilt robot enables you to automatically and send translated text to your Google Sheet or receive it using Browse AP API & Webhooks",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/6ee19214-3bc0-40e9-b3c2-002dd0c2ecb8_Screenshot+2023-04-06+at+8.06.23+PM.png?auto=compress,format&rect=0,0,522,522&w=40&h=40",
      title: "Extract products list from AppSumo",
      description: "This prebuilt robot extracts products from AppSumo collection or category link",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/6ee19214-3bc0-40e9-b3c2-002dd0c2ecb8_Screenshot+2023-04-06+at+8.06.23+PM.png?auto=compress,format&rect=0,0,522,522&w=40&h=40",
      title: "Extract product reviews from AppSumo",
      description: "This prebuilt robot extracts product reviews from an app listed on AppSumo",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/2daf46ae-9627-4cf0-a7b0-29472b6afd2f_lndeed%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job posting details from a job URL on Indeed",
      description: "This prebuilt robot extracts job posting details from a URL on Indeed.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1a728169-4e64-4efd-8ff1-039f8f467148_google%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract related search keywords by doing search on Google",
      description: "This prebuilt robot searches for your primary keyword on Google and extracts related searches listed at the bottom of the page",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract list of job postings from a LinkedIn search URL",
      description: "With this Prebuilt Robot, you can extract job listings from a job search URL on LinkedIn",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/2daf46ae-9627-4cf0-a7b0-29472b6afd2f_lndeed%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract list of job postings from a search URL on Indeed",
      description: "Extract list of job postings from a search URL on Indeed.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/4aaed1c8-d412-42bd-a5bc-6c3aff9779f0_DuckDuckGo%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract DuckDuckGo Search Results",
      description: "Search anything from DuckDuckGo without and extract the data",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract job posting details from a LinkedIn",
      description: "With this Prebuilt Robot, yo can extract job posting details from LinkedIn",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ca296955-e2d5-4269-b0c2-2c479473fdc3_Capterra%40full.png?auto=compress,format&rect=0,0,500,500&w=40&h=40",
      title: "Extract software list from a Capterra.com category",
      description: "This prebuilt robot extracts software list from a category on Capterra.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/977bbbd5-f3ff-4c8d-be95-bee9f4849388_zoominfo%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Overview & Competitors from ZoomInfo",
      description: "This prebuilt robot extracts a company information from ZoomInfo",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/aa946e63-bc79-4046-ad78-9850f631797f_reddit%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Comments from Reddit Search Results",
      description: "Unlock valuable insights from Reddit discussions with this prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/71b8ea2e-71f7-4fb8-9550-3e8d388ef0bf_eventbrite%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Eventbrite online events",
      description: "Eventbrite does not have a public Events API. This automation lets you scrape Eventbrite online events for a specific keyword",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/7b70eda7-db3e-45bd-a90e-6a228366b685_WordPress-logotype-wmark.png?auto=compress,format&rect=0,0,1000,1000&w=40&h=40",
      title: "Extract Search Results for Plugins on WordPress.org",
      description: "extract plugin information from the Wordpress.org plugin repository without a single line of code",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/c348518a-f0c2-41b7-82d1-4080f40e9a44_Fiverr%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract sellers and services from Fiverr search results",
      description: "With this Prebuilt Robot, you can extract sellers & their serviices from Fiverr search results",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/aa946e63-bc79-4046-ad78-9850f631797f_reddit%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract posts list on the Reddit homepage or a Subreddit",
      description: "Scrape the list of recent posts in a subreddit or on Reddit homepage",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9d394486-137f-4ac8-a65a-049c6e932bf8_IndieHackers%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Top Posts from Indie Hackers",
      description: "Browse AI Prebuilt Robots let you set a monitor on Indie Hackers to receive emails at a preferred time with top posts or articles to keep up with the community",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/aa946e63-bc79-4046-ad78-9850f631797f_reddit%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Users from Reddit Search Results",
      description: "Extract users from Reddit search results in no time",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/4aed1c6c-a98c-4448-9108-f0ebd1499944_amazon%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Amazon US search results",
      description: "Extract Amazon US organic and paid search results for specific keywords and filters and download them as a spreadsheet or send them to Google Sheets, Airtable, or Zapier",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/5bb95076-7344-42be-9911-598b3188842e_google-maps%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Search Results from Google Maps",
      description: "Scrape Google Maps and extract all the available data about every place found for a search query",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1a728169-4e64-4efd-8ff1-039f8f467148_google%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Get Google search results",
      description: "Extract Google search results (organic and paid) for a keyword. download them as a spreadsheet",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/0f942303-6026-4fb6-9966-c501d6a1627a_linkedin%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Scrape company info on LinkedIn",
      description: "Starting from a list of companies, find all their information on LinkedIn and download them as a spreadsheet or send it to other tools with Zapier",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/da431af4-50ab-4d6d-ba2a-b77cacad9705_meetup%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Search Meetup for events near a location",
      description: "Meetup does not have a location-based API. This Prebuilt Robot lets you scrape Meetup for events near a location",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/4aed1c6c-a98c-4448-9108-f0ebd1499944_amazon%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Monitor Amazon Canada Search Results",
      description: "Monitor Amazon Canada organic and paid search results for specific keywords and filters",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9d394486-137f-4ac8-a65a-049c6e932bf8_IndieHackers%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Group Posts from Indie Hackers",
      description: "Extract Group Posts from Indie Hackers and turn that data to an API or send it to 5,000+ Zapier",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/51e68467-d480-440a-80d0-8c262f9190de_GoogleTrends%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Monitor Country Trends on Google Trends",
      description: "Monitor search trends in a country to be the first to find out when a new trend is emerging",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/74650cf2-f7e1-4463-91b0-40cd14c500b8_booking%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract hotel data, reviews, listings and prices from Booking.com",
      description: "Extract Booking.com search results and download them as a spreadsheet",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/74650cf2-f7e1-4463-91b0-40cd14c500b8_booking%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract specific hotel data from Booking.com",
      description: "Extarct specific hotel data from Booking.com and download it as a spreadsheet",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/fc0a6567-6d80-4431-9b20-ebbf11b8803d_ThemeForest%40full.png?auto=compress,format&rect=0,0,600,600&w=40&h=40",
      title: "Extract Search Results from ThemeForest",
      description: "Extract Search Results from ThemeForest and download it as a spreadsheet or send it to Google Sheets or Airtable",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/ebbc2026-d5d4-406a-89d8-983b0a2a97c7_coinmarketcap-logo-4378FC5465-seeklogo.com.png?auto=compress,format&rect=0,0,295,295&w=40&h=40",
      title: "Extract the CoinMarketCapCoins list & prices",
      description: "With this Prebuilt Robot you can extract latest coins list & pricing data from CoinMasterCap",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/8a40f6dc-cbc8-4870-a611-473926157ac1_zillow-logo-739BA794BF-seeklogo.com.png?auto=compress,format&rect=0,0,300,300&w=40&h=40",
      title: "Extract a list of properties from Zillow",
      description: "Extract properties from a Zillow search query and download the data as a spreadsheet or send it to Google Sheets or Airtable",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/8a40f6dc-cbc8-4870-a611-473926157ac1_zillow-logo-739BA794BF-seeklogo.com.png?auto=compress,format&rect=0,0,300,300&w=40&h=40",
      title: "Extract property details from Zillow",
      description: "With this Prebuid Robot, you can download all of the property information as a spreadsheet or send it to a Google Sheet or Airtable",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/22aa4201-b8ae-4a13-ac72-fc4f61f20445_AngelList%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract company details from AngelList",
      description: "Use this automation to download company details from AngelList to enrich your data or find new prospects for you business",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract videos from a YouTube channel",
      description: "With this Prebuilt Robot, you can download a list of all uploaded videos on a channel on YouTube",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9a229bf0-b6b7-4e3a-8df8-2447965d9691_craigslist%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Craigslist search results page",
      description: "With this Prebuilt Robot, you can extract the Craigslist search results page and download it as a spreadsheet or send the data to Google Sheets or Airtable",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/b9f8716b-ab13-4f44-877e-19ecf36623c9_GoogleScholar%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract search results from Google Scholar",
      description: "Scrape search results from Google Scholar and monitor a search keyword for changes",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e17e1d56-3a72-479a-a163-1058700bc90f_Medium%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Top Posts from Medium",
      description: "Scrape the list of top posts from Medium",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/630e6444-b45a-4d78-9f65-1ee867e5e632_GoogleTravel%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract a hotel price from Google Hotel",
      description: "Extract hotel prices from Google Hotel and find the best booking price in your desired date",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/74650cf2-f7e1-4463-91b0-40cd14c500b8_booking%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract hotel reviews from Booking.com",
      description: "This prebuilt robot extracts hotel revies from a hotel on Booking.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Video Search Results from YouTube",
      description: "This prebuilt robot performs a search on YouTube and extracts videos for you",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/4aed1c6c-a98c-4448-9108-f0ebd1499944_amazon%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract products from Amazon search ressults via URL",
      description: "The Amazon robot extracts valuable data from any Amazon list, worldwide",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/8aa7164b-0dc4-4146-bc1d-8fa8dcc8ef03_%E2%80%8CBing%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Bing US search results",
      description: "This prebuilt robot extracts search results from Bing US with a few clicks",
    },
    {
      imgSrc: "data:image/png;base64,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",
      title: "Extract HTML code and full Screenshot from a Webpage",
      description: "This prebuilt robot extracts the HTML and a full screenshot from any webpage",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Video Transcript from YouTube",
      description: "With this prebuilt robot you can extract the transcript from any video on YouTube",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/98d3923a-9b33-47cc-929c-562756e12827_%E2%80%8CBestbuy%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract the Product List from Best Buy",
      description: "This prebuild robot extracts product list from a search URL from Best Buy",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Channel Lists and their Information from the YouTube US Search Page",
      description: "Scrape the list of channels along with their information from a YouTube search page",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Comments from a Video on YouTube",
      description: "With this prebuilt robot you can extract the list of comments on any YouTube video",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e0c37b6d-b6d2-4c77-9752-ae77304dfb44_Freelancer%40full.png?auto=compress,format&rect=0,0,1080,1080&w=40&h=40",
      title: "Extract Freelance Proects list from Freelancer.com",
      description: "With Prebuilt robot you can scrape the list of Freelance Projects from Freelancer.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e0c37b6d-b6d2-4c77-9752-ae77304dfb44_Freelancer%40full.png?auto=compress,format&rect=0,0,1080,1080&w=40&h=40",
      title: "Extract Project Details from Freelancer.com",
      description: "This prebuilt robot is optimized to extract a Project Detail from Freelancer.com , along with the list of bidders",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9e224c67-9286-4815-a53e-294614499145_GooglePlay%40full.png?auto=compress,format&rect=0,0,1000,1000&w=40&h=40",
      title: "Extract Apps & Games Lists from Google Play",
      description: "With this prebuilt robot you can exract Apps & Games lists from Google Play",
    },
    {
      imgSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAACUCAMAAADcWPdGAAAAZlBMVEX///8AAACNjY3w8PBVVVXExMTi4uL5+fn8/PwEBATp6en09PTMzMzHx8fT09M5OTmysrKUlJRDQ0NMTEwnJycxMTEQEBBbW1sbGxu9vb1mZmZ3d3eFhYWcnJza2togICCoqKhvb2/HqqAvAAAGe0lEQVR4nO1caXerIBAli4pxiUs0m6bm///JBzMuiNj29URRD/e9D8lI27kwzIIAIQYGBgYGBgYGBgYGBgYGBgYGBgZTgbJ/zUeHgdL2QfdkbeCK05Md+lZUlXEcl1Vk+aF9oGTFpIgdRPE7ve1EfB2fZeSfdKv238BROEXPa7ZT4/wo7oe67SrGDNUM3snXCCPEJSl81nglpBi8EobI/YYTPMvu3kpmF7XLHNR2+X9Efkara763z7Jo+bOL9bpdnbvhQBLutQrgQ1imvQccKae17NGi0bE1u/MZP13KEzmBhFHe4yjuks6HPCzdWn8P+5m3I1AFX0Aqsxz2AGTsg3fHx0lQJq3P2C/WBpkJ3ZPGtFLrQB4wJO6LP2xIsUYBDuWeHKKs8RhpuFQTPBStW2A6khK/nLjb7kaKffHh8y1ibaLWdZTO8mhxva+1E0i5uiQEf3HzMW61I8VAIrDRo81/rmqM8HnQTEEG7+Kw1u6rBG/mPeFbVSex7UhxeHuwuhgyXHvf+Aub0CWNFVPGqh156hOcXjc+ud5N94ukKLGP/OElhC/OvXaEbGItiBXncEHFCj6F2PfTA5y630yUPikSQZL7rOfR613HgEWxIkGOXqziavNJZCHFtoFEilyhvV1T9moTvNkadB+DX/d0G0W9I8Sibu735hQDBuNj+726YChYSsCiqLGL0wmBA1V1jWRSBN1/NzJsYnFW56WwOmFCl4Sd6Mit6yKUFRIpSk5u3z6JhbPyvQzPfkDnfWk4YVRiOpfCtB+QYkPFRiYTBuYO9Zcbe7Np/g0wc8g726MkBlJinw/Mj4TwU5WQRmBMzqPpVf4RAZrNXdCOZpxUIeY9MilaD/CjM1Fad0+m2wVCHMUeF3CHKPQSRU3pIbZqIlkH9OwPT28WCJbGk4EosFr4EEsTURRE0MwSRRVPJPKi1yqTvaYWhG399BmAT8x1ekBmJOlnOdVFc6GvDMGCbwqw8KCPFE1+VvBPeGtcDsTIkh57SLgwT/pCNNO+7Aplby7/OG+Y6VuL8aC+SF/eQYB356omfl8IoXZ3OvSEFs8h8rDfMoDCrNCWV2ARVUnSis/2h6QUBl/JpA6gv98XOhCsxERyVjgFDlRf6oG0kNoO0ySOK6aIffhAtdI0p14wUfaiiNe8PMXoZxhkjBSsVTzkdaQ3b3rVVINEvJ/PkvWQF1fpIluPmlSglPIsy5WtciawjNQF59sHuISznBOoSWFGKLflgcLd7bXYn80q8KGdEcjyUlkjNSkK0oFPiHlvZXLjWQAl+0WuEyjUD2+5sZoUAZ8wKKDAgncvWTwDKMzy60D8HHgPjhFSD2VjAjWw7BVnAHUuir9MiZMoO3+EFBQug44hT3jZoyFTOoCagyrVUU+TEVJQKH4NfjcuRmlI1S1VjsBiL+ZDsniElF9rr2ytYVKB5aQDMXrpQeY2Quo10jNqG54eD1U2RGs1B61HSKkDFXHeagcyOW7qzgSDug2mwwgpL1dOTIwLQwcyOUBLOZehGHuzQesxUhd0K7IBRmrbnhrOyFwGdZKBeIyUqvggtRdKZnd+MBvyQT7Bqino41+mSRjVgsFv96HQnH1RCRxCXuwlxPDiNytlOa63y9L9HszvHQ+ac1LzvwHB+nxSnGdff56D1OzR15D6I6nZzW+TjmKTLn2TwfezaZIMTWnSTwmthJUktMrSg6y89CjVFrLuInGD5TydZeFlbqiXyJrIc5ebr2OJjNK9UqFVL2Y2y87y7PnEsrO2FbKJXxC4ml4QTPkqx9X1KmeTL93q16OxKPrh9ajc+Qt8PfqpF9kSVb0vske2HET/teXAlaspqnfLwTY3h2xxG88mN1xtcmvcFJsYEQXReugjrI8Yfgrwm256N9xvcmPwVFu4dcPC0+TdZnv6x832ZCmb7Tm2eCxicICFbOEAyyaPGn3uUNhuQYfCPnV8j0uWw2mTBy2ZPxCOxGL9+8cjsQs6as406Q4v0/86vEyWengZWDTHzG/xr46Z71THzJc0UOTbCwGclV4IgBi7ukEkxT+PXt2wQIxdsgEeTTA/f1WXbJDfX4firuU6FABcXFPj9xfXLHaQAL+8Yshd1xVDpHcZVFvny5dB7ZrLoM4ruAyKgwrXdo0sXrj1k/N6ru369QVr4ZouWNvgVXgCtnRpoYjtXS8pXwQqiFdMysDAwMDAwMDAwMDAwMDAwMDAYOn4B2Dcaxacuc16AAAAAElFTkSuQmCC",
      title: "Extract Headings, Paragraphs, and Images from a Webpage",
      description: "Extract headings, paragraphs, and images from any webpage with ease using this prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/10494d64-259b-4310-9863-99d7a5890d05_tripadvisor%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Hotels List info from Tripadvisor",
      description: "Scrape the list of hotels from Tripadvisor and automate your workflow",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9fcb22cc-1843-4a31-a9da-387880d98367_Airbnb%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract List of Placees in Search Result from Airbnb",
      description: "Umlock valuable insights from Airbnb hotels with this prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1bbc3bae-dd28-409f-91c5-e7ac82049aad_Expedia%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Hotels List info from Expedia",
      description: "Discover the Perfect Accomendations with this prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/f932895a-18ee-4c71-abe7-429f447a7c17_Yellowpages%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Service list from Yellow Pages",
      description: "This prebuilt robot is optimized to extract Services from Yellow Pages",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/98d3923a-9b33-47cc-929c-562756e12827_%E2%80%8CBestbuy%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Product Details Info from Bestbuy.com",
      description: "With a few clicks you can extract product details info from Bestbuy.com",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/508f0f7a-4077-4a21-ba63-d226ce0e5e8d_LoopNet%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract List of Properties from LoopNet",
      description: "Unluck valuable insights from LoopNet properly listing with the prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/5bb95076-7344-42be-9911-598b3188842e_google-maps%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Details Info of a Place on Google Maps",
      description: "Unlock valuable insights from Google Maps locations",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Channel Playlists from YouTube",
      description: "Unlock In-Depth Insights from YouTube Channel Playlists with this prebuilt robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Channel Shorts from YouTube",
      description: "Scrape the list of Shots on any Youtube Channel",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/178cd379-e056-4f17-a40b-2a77ed476d5f_Etsy%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract List of Products from Etsy",
      description: "Unlock valuable insights from Esty products",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d73cd244-2713-4af5-ad27-ef9f48855d12_pinterest%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract the Pin list from Pinterest",
      description: "Unlock Rich Insights from Pinterest Pins with the Prebuilt Robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/178cd379-e056-4f17-a40b-2a77ed476d5f_Etsy%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Details and Reviews of a Product from Etsy",
      description: "Unlock Comprehensive Insights from Esty Products with the Prebuilt Robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1bbc3bae-dd28-409f-91c5-e7ac82049aad_Expedia%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Cars List info from Expedia",
      description: "Unlock Comprehensive Car Rental Insights",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Channel Lives from YouTube",
      description: "Get insights from any YouTube channel's live videos to make data-driven descisions",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d8b288c9-93b3-43fa-9a50-f2691a9d7329_youtube%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Channel Information from YouTube",
      description: "Empower Your YouTube Strategy with In-Depth Channel Analytics",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/14059269-aafd-4d1e-8543-74d2ac9f3b21_Binance%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Coins List Info from Binance",
      description: "Unlock In-Depth Cryptocurrency Insights with the Prebuilt Robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/e17e1d56-3a72-479a-a163-1058700bc90f_Medium%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Posts from Search Results on Medium",
      description: "Unlock Deep Insights from Medium Search Results",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/1bbc3bae-dd28-409f-91c5-e7ac82049aad_Expedia%40full.png?auto=compress,format&rect=0,0,512,512&w=40&h=40",
      title: "Extract Flights List info from Expedia",
      description: "Unlock Comprehensive Flight Details this this Prebuilt Robot",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/d73cd244-2713-4af5-ad27-ef9f48855d12_pinterest%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "EXtract Profile from Pinterest",
      description: "Gain insightful information from any Pinterest Profile",
    },
    {
      imgSrc: "https://images.prismic.io/browseai/9e08ead7-a063-4439-994f-319f98cbb7a8_ycombinator%40full.png?auto=compress,format&rect=0,0,800,800&w=40&h=40",
      title: "Extract Companies from the YC Startup Directory",
      description: "Extract Companies from the startup directory, sorted by Launch Date (most recent first)",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 105",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 106",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 107",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 108",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 109",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 110",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 111",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 112",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 113",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 114",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 115",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 116",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 117",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 118",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 119",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 120",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 121",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 122",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 123",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 124",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 125",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 126",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 127",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 128",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 129",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 130",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 131",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 132",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 133",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 134",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 135",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 136",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 137",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 138",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 139",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 140",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 141",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 142",
      description: "This is the description for card 8.",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-2">
      {cards.map((card, index) => (
        <div className="hover:cursor-pointer">
            <SingleCard key={index} {...card} />
        </div>
      ))}
    </div>
  );
};

export default Card;
