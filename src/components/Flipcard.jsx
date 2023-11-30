import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Flipcard = () => {
  const images = [
    "https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg",
    "https://hips.hearstapps.com/hmg-prod/images/8%E6%9C%AC%E5%AE%B6bornga%E9%9F%93%E5%BC%8F%E7%87%92%E8%82%89-%E5%B0%87%E7%83%A4%E5%A5%BD%E7%9A%84%E8%82%89%E7%89%87%E5%8A%A0%E4%B8%8A%E7%94%9F%E8%8F%9C%E8%88%87-%E6%9C%AC%E5%AE%B6%E7%89%B9%E8%A3%BD%E6%B5%B7%E9%AE%AE%E5%8C%85%E9%86%AC-%E4%B8%80%E5%90%8C%E4%BA%AB%E7%94%A8-%E6%98%AF%E5%93%81%E5%9A%90%E6%9C%AC%E5%AE%B6%E9%A2%A8%E5%91%B3%E7%9A%84%E7%8D%A8%E6%9C%89%E5%90%83%E6%B3%95-1669200745.jpg",
    "https://safood.tw/wp-content/uploads/2015/06/18827319625_da4b4d2b1e_b.jpg",
  ];
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
    ],
    customPaging: (i) => {
      return (
        <a href="#">
          <Image src={images[i]} width={500} height={500} />
        </a>
      );
    },
  };

  return (
    <Slider {...settings} className="my-custom-slider flex justify-between">
      {images.map((image, index) => (
        <div key={index} className="mb-[150px]">
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[500px] "
            width={500}
            height={500}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Flipcard;

// const productlink = [
//   {
//     title: "早餐店",
//     subTitle: 233,
//     frontImg:
//       "https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg",
//   },
//   {
//     title: "韓韓國廚神「本家BORNGA韓式燒肉」插旗台灣!",
//     subTitle: "正宗韓式燒肉現在台北大安區就吃得到！",
//     frontImg:
//       "https://hips.hearstapps.com/hmg-prod/images/8%E6%9C%AC%E5%AE%B6bornga%E9%9F%93%E5%BC%8F%E7%87%92%E8%82%89-%E5%B0%87%E7%83%A4%E5%A5%BD%E7%9A%84%E8%82%89%E7%89%87%E5%8A%A0%E4%B8%8A%E7%94%9F%E8%8F%9C%E8%88%87-%E6%9C%AC%E5%AE%B6%E7%89%B9%E8%A3%BD%E6%B5%B7%E9%AE%AE%E5%8C%85%E9%86%AC-%E4%B8%80%E5%90%8C%E4%BA%AB%E7%94%A8-%E6%98%AF%E5%93%81%E5%9A%90%E6%9C%AC%E5%AE%B6%E9%A2%A8%E5%91%B3%E7%9A%84%E7%8D%A8%E6%9C%89%E5%90%83%E6%B3%95-1669200745.jpg",
//   },
//   {
//     title: "剎有其食×高品之屋",
//     subTitle: "造型壽司DIY 自己做的最好吃！",
//     frontImg:
//       "https://safood.tw/wp-content/uploads/2015/06/18827319625_da4b4d2b1e_b.jpg",
//   },
// ];
// <div className="container">
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
//     {productlink.map((item) => (
//       <div key={item.title} className="col gap-3">
//         <div className="group relative">
//           <div className="w-full h-60 bg-white rounded-md overflow-hidden shadow-md transform transition-transform group-hover:-translate-y-1 group-hover:shadow-lg">
//             <Image
//               src={item.frontImg}
//               alt="frontImg"
//               className="w-full h-full object-cover"
//               width={1024}
//               height={1024}
//             />
//             <div className="inner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
//               <h1 className="text-2xl font-bold">{item.title}</h1>
//               <p className="text-sm">{item.subTitle}</p>
//             </div>
//           </div>
//           <div className="absolute top-0 left-0 w-full h-full bg-white rounded-md overflow-hidden shadow-md transform transition-transform -translate-y-full group-hover:translate-y-0">
//             <a href="#" className="block w-full h-full">
//               <Image
//                 src={item.img}
//                 alt="Avatar"
//                 className="w-full h-full object-cover"
//                 width={1024}
//                 height={1024}
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>;
