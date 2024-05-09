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
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 44",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 45",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 46",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 47",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 48",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 49",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 50",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 51",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 52",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 53",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 54",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 55",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 56",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 57",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 58",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 59",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 60",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 61",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 62",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 63",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 64",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 65",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 66",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 67",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 68",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 69",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 70",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 71",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 72",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 73",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 74",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 75",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 76",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 77",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 78",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 79",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 80",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 81",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 82",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 83",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 84",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 85",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 86",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 87",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 88",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 89",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 90",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 91",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 92",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 93",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 94",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 95",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 96",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 97",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 98",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 99",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 100",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 101",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 102",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 103",
      description: "This is the description for card 8.",
    },
    {
      imgSrc: "https://via.placeholder.com/150", // Placeholder image
      title: "Card 104",
      description: "This is the description for card 8.",
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
