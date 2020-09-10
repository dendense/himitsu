import React from "react"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import himitsuImage1 from "../assets/himitsu-news.png"
import himitsuImage2 from "../assets/himitsu-news2.png"

export default function Hero() {
  const DataNews = [
    { title: "news1", img: himitsuImage1, alt: "Himitsu News", link: "#" },
    { title: "news2", img: himitsuImage2, alt: "Himitsu News", link: "#" },
  ]
  return (
    <div className="container-fluid">
      <Carousel interval={2500}>
        {DataNews.map((x, i) => {
          return (
            <Carousel.Item key={i}>
              <Link to={x.link}>
                <img className="d-block w-100" src={x.img} alt={x.alt} />
              </Link>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}
