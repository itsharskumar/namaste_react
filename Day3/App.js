import React from "react"
import ReactDOM from "react-dom/client"

const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/w_300,h_200,c_fill/";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
            </div>

            <div className="nav-items">

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const ResturantCard =({resName,cousine,rating,deleiveryTime})=>{ //we can also destructre like this
const ResturantCard =(props)=>{
    const {resObj}=props;

    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resObj?.info;
    const { deliveryTime } = sla;
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            {/* <img className="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg"></img> */}
            <img
  className="res-logo"
  src={CDN_URL + cloudinaryImageId}
  alt={resObj.info.name}
/>
            <div className="res-info">
  <h3>{name}</h3>
  <h4>{cuisines.join(" , ")}</h4>
  <h4>
     <span className="rating">{avgRating}</span>
  </h4>
  <h4>{deliveryTime} mins</h4>
</div>
        </div>
    )
}
const resList= [
{
"info": {
"id": "377798",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/c6e1a486-2104-4098-9624-2cbd95297fac_377798.JPG",
"locality": "Noida World One",
"areaName": "Noida Expressway",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.4,
"parentId": "721",
"avgRatingString": "4.4",
"totalRatingsString": "4.5K+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 9.9,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "9.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "438"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/pizza-hut-noida-world-one-noida-expressway-rest377798",
"type": "WEBLINK"
}
},
{
"info": {
"id": "78041",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/15802be3-6bb4-4c92-b094-0ffb69658b40_78041.jpg",
"locality": "Gamma Shopping Mall",
"areaName": "Gamma 1",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "24K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 8.5,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "8.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/burger-king-gamma-shopping-mall-gamma-1-rest78041",
"type": "WEBLINK"
}
},
{
"info": {
"id": "584332",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/8802b44e-9dd3-4545-a54d-9ec1b7c48e3d_584332.JPG",
"locality": "Gamma 1",
"areaName": "Greater Noida",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4,
"parentId": "547",
"avgRatingString": "4.0",
"totalRatingsString": "4.1K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 8.4,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "8.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/kfc-gamma-1-greater-noida-rest584332",
"type": "WEBLINK"
}
},
{
"info": {
"id": "580001",
"name": "Grameen Kulfi",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/c0785b63-3d7a-467b-a96a-afa690e82cf4_580001.JPG",
"locality": "Sector 1",
"areaName": "M S Plaza",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.7,
"veg": true,
"parentId": "12175",
"avgRatingString": "4.7",
"totalRatingsString": "183",
"sla": {
"deliveryTime": 32,
"lastMileTravel": 6.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "6.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "v1695133679/badges/Pure_Veg111.png",
"description": "pureveg"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "pureveg",
"imageId": "v1695133679/badges/Pure_Veg111.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹148"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/grameen-kulfi-sector-1-m-s-plaza-rest580001",
"type": "WEBLINK"
}
},
{
"info": {
"id": "253985",
"name": "McDonald's",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/f3507e7a-f122-4696-8e44-6f98b30473fa_253985.JPG",
"locality": "Ansal Plaza Mall",
"areaName": "Knowledge Park",
"costForTwo": "₹400 for two",
"cuisines": [
"American"
],
"avgRating": 4.4,
"parentId": "630",
"avgRatingString": "4.4",
"totalRatingsString": "17K+",
"sla": {
"deliveryTime": 43,
"lastMileTravel": 10.1,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "10.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 22:45:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹49"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/mcdonalds-ansal-plaza-mall-knowledge-park-rest253985",
"type": "WEBLINK"
}
},
{
"info": {
"id": "619679",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "n8z10pn06a4ks3ej5das",
"locality": "Sector 2",
"areaName": "G B Nagar",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 3.8,
"parentId": "4961",
"avgRatingString": "3.8",
"totalRatingsString": "5.4K+",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 8.3,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "8.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹60"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-2-g-b-nagar-rest619679",
"type": "WEBLINK"
}
},
{
"info": {
"id": "628113",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/2bd3c02d-9e1f-41ef-a363-fdc6e318dcae_628113.jpg",
"locality": "Commercial Belt",
"areaName": "Sunrise Tower",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.2,
"parentId": "2",
"avgRatingString": "4.2",
"totalRatingsString": "3.1K+",
"sla": {
"deliveryTime": 47,
"lastMileTravel": 10.6,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "10.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/subway-commercial-belt-sunrise-tower-rest628113",
"type": "WEBLINK"
}
},
{
"info": {
"id": "303249",
"name": "Theobroma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/1f47bf6d-15b3-49ed-ab96-3405363d68db_303249.JPG",
"locality": "Alpha 2",
"areaName": "Alpha 2",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.5,
"parentId": "1040",
"avgRatingString": "4.5",
"totalRatingsString": "3.7K+",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 10.5,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "10.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
},
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
},
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "81"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/theobroma-alpha-2-rest303249",
"type": "WEBLINK"
}
},
{
"info": {
"id": "699612",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/7b7aa0a2-e27a-47d2-8669-43df0cad5e91_699612.jpg",
"locality": "Alpha 1",
"areaName": "Gautam Buddha Nagar",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream"
],
"avgRating": 4.6,
"parentId": "2233",
"avgRatingString": "4.6",
"totalRatingsString": "1.7K+",
"sla": {
"deliveryTime": 41,
"lastMileTravel": 10.6,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "10.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.5",
"ratingCount": "190"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/the-belgian-waffle-co-alpha-1-gautam-buddha-nagar-rest699612",
"type": "WEBLINK"
}
},
{
"info": {
"id": "595300",
"name": "Wow! Momo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/30/e8491864-1115-489c-865f-3e94b9d06263_595300.jpg",
"locality": "Alpha 1",
"areaName": "Alpha 1",
"costForTwo": "₹300 for two",
"cuisines": [
"Momos",
"Chinese",
"fastfood",
"Asian",
"Beverages"
],
"avgRating": 4.1,
"parentId": "1776",
"avgRatingString": "4.1",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 40,
"lastMileTravel": 10.6,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "10.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 02:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Ratnesh_Badges/Rx_Awards_2025/Momo.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.7",
"ratingCount": "270"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/wow-momo-alpha-1-rest595300",
"type": "WEBLINK"
}
},
{
"info": {
"id": "353956",
"name": "Bakingo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/2/93c5844a-8f57-4708-b92b-38bb1eb39bd7_353956.JPG",
"locality": "A Block",
"areaName": "Sector 83",
"costForTwo": "₹300 for two",
"cuisines": [
"Bakery",
"Desserts",
"Beverages",
"Snacks"
],
"avgRating": 4.7,
"parentId": "3818",
"avgRatingString": "4.7",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 10.9,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "10.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Desserts.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Desserts.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹175 OFF",
"subHeader": "ABOVE ₹849",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/bakingo-a-block-sector-83-rest353956",
"type": "WEBLINK"
}
},
{
"info": {
"id": "413001",
"name": "Biryani Blues",
"cloudinaryImageId": "97377e54937c079fe269d744aa66274a",
"areaName": "Sector 110",
"costForTwo": "₹400 for two",
"cuisines": [
"Biryani",
"Hyderabadi",
"Lucknowi",
"Kebabs",
"Desserts",
"Beverages"
],
"avgRating": 4.4,
"parentId": "13813",
"avgRatingString": "4.4",
"totalRatingsString": "5.3K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 8.9,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "8.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 04:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/biryani-blues-sector-110-rest413001",
"type": "WEBLINK"
}
},
{
"info": {
"id": "580000",
"name": "NIC Ice Creams",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/18/f412b376-a002-461f-afc3-87b50f75af13_580000.JPG",
"locality": "Gautam Buddha Nagar",
"areaName": "Amrapali Leisure Valley",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"avgRating": 4.7,
"veg": true,
"parentId": "6249",
"avgRatingString": "4.7",
"totalRatingsString": "1.2K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 6.6,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "6.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/nic-ice-creams-gautam-buddha-nagar-amrapali-leisure-valley-rest580000",
"type": "WEBLINK"
}
},
{
"info": {
"id": "234763",
"name": "Chaayos Chai+Snacks=Relax",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_234763.JPG",
"locality": "Sector 142",
"areaName": "Sector 142",
"costForTwo": "₹250 for two",
"cuisines": [
"Bakery",
"Beverages",
"Chaat",
"Desserts",
"Home Food",
"Italian",
"Maharashtrian",
"Snacks",
"Street Food",
"Sweets"
],
"avgRating": 4.7,
"parentId": "281782",
"avgRatingString": "4.7",
"totalRatingsString": "7.5K+",
"sla": {
"deliveryTime": 39,
"lastMileTravel": 11.8,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "11.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 05:29:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "338"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/chaayos-chai-snacks-relax-sector-142-rest234763",
"type": "WEBLINK"
}
},
{
"info": {
"id": "351486",
"name": "Wendy's Burgers",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/ec8887cb-021f-4a61-9412-0815d51c4f64_351486.JPG",
"locality": "B Block",
"areaName": "Sector 83",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"American",
"Fast Food",
"Snacks"
],
"avgRating": 4.1,
"parentId": "972",
"avgRatingString": "4.1",
"totalRatingsString": "3.2K+",
"sla": {
"deliveryTime": 43,
"lastMileTravel": 10.7,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "10.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/wendys-burgers-b-block-sector-83-rest351486",
"type": "WEBLINK"
}
},
{
"info": {
"id": "203621",
"name": "Faasos - Wraps, Rolls & Shawarma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/7660ba72-237c-4309-bdf1-c36e9fe35156_203621.JPG",
"locality": "B Block",
"areaName": "Sector 83",
"costForTwo": "₹500 for two",
"cuisines": [
"Kebabs",
"Fast Food",
"Snacks",
"American",
"Healthy Food",
"Desserts",
"Beverages"
],
"avgRating": 4.1,
"parentId": "21809",
"avgRatingString": "4.1",
"totalRatingsString": "5.9K+",
"sla": {
"deliveryTime": 46,
"lastMileTravel": 10.7,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "10.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Rolls.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹29"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/faasos-wraps-rolls-and-shawarma-b-block-sector-83-rest203621",
"type": "WEBLINK"
}
},
{
"info": {
"id": "838642",
"name": "The Cinnamon Kitchen",
"cloudinaryImageId": "7a6b27d6782fd80a1d395bf01f84017b",
"locality": "Sector 65",
"areaName": "Sector 64",
"costForTwo": "₹398 for two",
"cuisines": [
"Bakery",
"Desserts",
"Snacks"
],
"avgRating": 4.7,
"veg": true,
"parentId": "207003",
"avgRatingString": "4.7",
"totalRatingsString": "273",
"sla": {
"deliveryTime": 44,
"lastMileTravel": 7.8,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "7.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 21:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹80 OFF",
"subHeader": "ABOVE ₹249",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/the-cinnamon-kitchen-sector-65-sector-64-rest838642",
"type": "WEBLINK"
}
},
{
"info": {
"id": "462273",
"name": "Cheesecake & Co.",
"cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
"locality": "Delta 1",
"areaName": "Greater Noida",
"costForTwo": "₹400 for two",
"cuisines": [
"Bakery",
"Desserts"
],
"avgRating": 4.6,
"parentId": "387417",
"avgRatingString": "4.6",
"totalRatingsString": "2.0K+",
"sla": {
"deliveryTime": 42,
"lastMileTravel": 12.2,
"serviceability": "SERVICEABLE",
"slaString": "40-45 mins",
"lastMileTravelString": "12.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-23 00:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹225 OFF",
"subHeader": "ABOVE ₹899",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/cheesecake-and-co-delta-1-greater-noida-rest462273",
"type": "WEBLINK"
}
},
{
"info": {
"id": "386173",
"name": "Chinese Daily",
"cloudinaryImageId": "fcdc89cb181db991b3db418c53d3e585",
"locality": "2nd Alpha",
"areaName": "Gautam Buddha Nagar",
"costForTwo": "₹500 for two",
"cuisines": [
"Pan-Asian",
"Chinese",
"Thai",
"Seafood",
"Oriental"
],
"avgRating": 4.3,
"parentId": "9712",
"avgRatingString": "4.3",
"totalRatingsString": "3.4K+",
"sla": {
"deliveryTime": 46,
"lastMileTravel": 11.3,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "11.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 23:30:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹125 OFF",
"subHeader": "ABOVE ₹299",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/chinese-daily-2nd-alpha-gautam-buddha-nagar-rest386173",
"type": "WEBLINK"
}
},
{
"info": {
"id": "482697",
"name": "Roastery Coffee House",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/20/e10294a1-4f4c-4ff1-95a8-48d0091980de_482697.jpg",
"locality": "Sector 144",
"areaName": "Noida Expressway",
"costForTwo": "₹600 for two",
"cuisines": [
"American",
"European",
"Italian"
],
"avgRating": 4.5,
"parentId": "170319",
"avgRatingString": "4.5",
"totalRatingsString": "1.0K+",
"sla": {
"deliveryTime": 49,
"lastMileTravel": 11.3,
"serviceability": "SERVICEABLE",
"slaString": "45-50 mins",
"lastMileTravelString": "11.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-01-22 22:30:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "newg.png",
"description": "Gourmet"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Gourmet",
"imageId": "newg.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "2.8K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-7cbf0fec-6b2b-4a57-86f7-b56a57046bb9"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/roastery-coffee-house-sector-144-noida-expressway-rest482697",
"type": "WEBLINK"
}
}
]
const Body =()=>{
    return (
        <div className="body">

            <div className="search">Search</div>
            <div className="res-container">
                {/* <ResturantCard resName="Charcoal Eats - Biryani & Beyond" 
                cousine="Biryani, North Indian, Rolls & Wraps" rating="4.1 ⭐"
                deliveryTime="45 Minutes"></ResturantCard> */}
                {/* <ResturantCard resObj={resList[0]}></ResturantCard> */}
                {/* <ResturantCard resObj={resList[1]}></ResturantCard>
                <ResturantCard resObj={resList[2]}></ResturantCard> */}
               {resList.map((resturant)=>(
                    <ResturantCard key={resturant.info.id}resObj={resturant}></ResturantCard>
               ))}
            </div>
        </div>
    )
}




const AppLayout =()=>{
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)



