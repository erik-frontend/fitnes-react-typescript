import { homePageText } from "@/assets/image"
import { ActionBtn } from "@/utils/actionBtn"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="w-5/6 mx-auto md:flex md:h-5/6 items-center justify-center">
        <div className="z-10 mt-32 md:basis-3/5 ">
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-(--content-evolvetext)">
                <img src={homePageText} alt="home-page" />
              </div>
            </div>
            <p className="mt-8 text-sm">Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of.. Get Your Dream Body Now.</p>
            <div className="mt-8 flex items-center gap-8">
              <ActionBtn to="contact">Join Now</ActionBtn>
              <button className="animate rounded-md bg-primary-500 px-10 py-2 hover:bg-secondary-500 cursor-pointer hover:text-white">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home