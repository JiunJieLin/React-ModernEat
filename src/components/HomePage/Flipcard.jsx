import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Flipcard = () => {
  return (
    <div className="w-64 carousel rounded-box">
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      <div className="carousel-item w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
    </div>
  );
};

export default Flipcard;
// const Flipcard = () => {
//   const images = [
//     "https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg",
//     "https://hips.hearstapps.com/hmg-prod/images/8%E6%9C%AC%E5%AE%B6bornga%E9%9F%93%E5%BC%8F%E7%87%92%E8%82%89-%E5%B0%87%E7%83%A4%E5%A5%BD%E7%9A%84%E8%82%89%E7%89%87%E5%8A%A0%E4%B8%8A%E7%94%9F%E8%8F%9C%E8%88%87-%E6%9C%AC%E5%AE%B6%E7%89%B9%E8%A3%BD%E6%B5%B7%E9%AE%AE%E5%8C%85%E9%86%AC-%E4%B8%80%E5%90%8C%E4%BA%AB%E7%94%A8-%E6%98%AF%E5%93%81%E5%9A%90%E6%9C%AC%E5%AE%B6%E9%A2%A8%E5%91%B3%E7%9A%84%E7%8D%A8%E6%9C%89%E5%90%83%E6%B3%95-1669200745.jpg",
//     "https://safood.tw/wp-content/uploads/2015/06/18827319625_da4b4d2b1e_b.jpg",
//   ];
//   const settings = {
//     dots: true,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,

//     customPaging: (i) => {
//       return (
//         <a href="#">
//           <Image
//             priority={true}
//             src={images[i]}
//             alt="homeIcon"
//             width={500}
//             height={500}
//           />
//         </a>
//       );
//     },
//   };

//   return (
//     <div className="mb-[200px]">
//       <Slider {...settings} className="">
//         {images.map((image, index) => (
//           <div key={index} className="mb-[100px]">
//             <Image
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-[500px] "
//               width={500}
//               height={500}
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Flipcard;

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

// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AfroStyles from "./afroStyles";

// const NextArrow = ({ className, style, onClick }) => (
//   <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
//       <div className="next-slick-arrow">
//           <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
//       </div>
//   </div>
// );

// const PrevArrow = ({ className, style, onClick }) => (
//   <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
//       <div className="next-slick-arrow rotate-180">
//           <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
//       </div>
//   </div>
// );

// const App = () => {
//   const [nav1, setNav1] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slider1, setSlider1] = useState(null);

//   useEffect(() => {
//     setNav1(slider1);
//   }, [slider1]);

//   const goToSlide = useCallback((idx) => {
//     slider1?.slickGoTo(idx);
//   }, [slider1]);

//   const settings = useMemo(() => ({
//     dots: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: true,
//     autoplay: false,
//     onReInit: () => {
//       const innerSlider = slider1?.innerSlider;
//       if (innerSlider && innerSlider.state) {
//         setCurrentSlide(innerSlider.state.currentSlide);
//       }
//     },
//     autoplaySpeed: 1000,
//     lazyLoad: false,
//     asNavFor: nav1,
//     focusOnSelect: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 }
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1 }
//       }
//     ]
//   }), [slider1, nav1]);

//   return (
//     <div className="content">
//       <h1 className="header">Afro Styles Fashion Store</h1>
//       <div className="container">
//         <Slider {...settings} asNavFor={nav1} ref={setSlider1}>
//           {AfroStyles.map((item) => (
//             <div key={item.id}>
//               <div className="img-body">
//                 <img src={item.src} alt={item.alt} />
//                 <p>{item.title}</p>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//         <div className="thumb-wrapper">
//           {AfroStyles.map((item, idx) => (
//             <div
//               key={item.id}
//               className={`thumb ${currentSlide === idx ? "active" : ""}`}
//               onClick={() => goToSlide(idx)}
//             >
//               <img src={item.src} alt={item.alt} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
