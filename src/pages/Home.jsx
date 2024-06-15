import { Hero, FlashSale, Categories, BestSelling, Banner, Explore, NewArrivals  } from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlashSale />
      <Categories />
      <BestSelling />
      <Banner />
      <Explore />
      <NewArrivals />
    </div>
  )
}
export default Home