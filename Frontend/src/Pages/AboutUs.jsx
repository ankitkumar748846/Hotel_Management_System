import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/hotel.svg";
import apj from "../Assets/Images/hotel.svg";
import billGates from "../Assets/Images/hotel.svg";
import einstein from "../Assets/Images/hotel.svg";
import nelsonMandela from "../Assets/Images/hotel.svg";
import steveJobs from "../Assets/Images/hotel.svg";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              Affordable and quality hotel
            </h1>
            <p className="text-xl text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis consequatur totam labore possimus nihil voluptatem,
              cumque ullam quam quos temporibus. Quasi dicta placeat iste magni
              accusamus est non odio adipisci, in architecto repellat neque
              reprehenderit quod ipsam aliquid dolorum, quia et necessitatibus!
              Esse, vitae sunt.
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              style={{ filter: "drop-shadow(0px 10px 10px rgb(0,0,0));" }}
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        <div className="carousel w-1/2 my-16 m-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={apj}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Don't take rest after your first victory because if you fail in"
                }
              </p>
              <h3 className="text-2xl font-semibold">Ankit Kumar</h3>
              <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide5" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={nelsonMandela}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Don't take rest after your first victory because if you fail in"
                }
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={einstein}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Don't take rest after your first victory because if you fail in"
                }
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={billGates}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Don't take rest after your first victory because if you fail in"
                }
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              <img
                src={steveJobs}
                className="w-40 rounded-full border-2 border-gray-400"
              />
              <p className="text-xl text-gray-200">
                {
                  "Don't take rest after your first victory because if you fail in"
                }
              </p>
              <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
export default AboutUs;
