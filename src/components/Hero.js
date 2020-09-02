import React from "react"
import { Carousel } from "react-bootstrap"
import himitsuImage from "../assets/himitsu-news.png"

export default function Hero() {
  const DataNews = [
    { title: "news1", img: himitsuImage, alt: "Himitsu News" },
    { title: "news2", img: himitsuImage, alt: "Himitsu News" },
    { title: "news3", img: himitsuImage, alt: "Himitsu News" },
  ]
  return (
    <div className="container-fluid">
      <Carousel interval={2500}>
        {DataNews.map((x, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={x.img} alt={x.alt} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
