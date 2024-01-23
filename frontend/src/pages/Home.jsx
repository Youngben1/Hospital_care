import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png"
import heroImg02 from "../assets/images/hero-img02.png"
import heroImg03 from "../assets/images/hero-img03.png"
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import featureImg from "../assets/images/feature-img.png"
import {BsArrowRight} from "react-icons/bs"
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";

const Home = () => {
  return (
    <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col items-center justify-between lg:flex-row gap-[90px]">
              <div>
                <div className="lg:w-[470px]">
                  <h1 className="text-[36px] text-headingColor leading-[46px] font-[800] md:text-[60px] md:leading-[70px] ">
                    We help patients live a healthy, longer and better Sexual
                    Life.
                  </h1>

                  <p className="text_para">
                    If you are having difficulty with breathing or you have been
                    having issues satisfying your woman, we have just the right
                    answer for you. Stop by our office and get immediate
                    treatment.
                  </p>

                  <button className="btn sm:items-center">Request an Appointment</button>
                </div>

                <div className="flex flex-col mt-[30px] lg:items-center gap-5 lg:gap-[30px] lg:mt-[70px] lg:flex-row ">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor lg:leading-[54px] ">
                      37+
                    </h2>
                    <span className="w-[100px] h-2 rounded-full block mt-[-14px] bg-yellowColor "></span>
                    <p className="text_para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor lg:leading-[54px] ">
                      12+
                    </h2>
                    <span className="w-[100px] h-2 rounded-full block mt-[-14px] bg-purpleColor "></span>
                    <p className="text_para">Clinic Locations</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-[700] text-headingColor lg:leading-[54px] ">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 rounded-full block mt-[-14px] bg-irisBlueColor "></span>
                    <p className="text_para">Natural enlargement</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-[30px] ">
                <div>
                  <img className="w-full" src={heroImg01} alt="hero" />
                </div>
                <div className="mt-[30px]">
                  <img src={heroImg02} alt="pic" className="w-full mb-[30px]" />
                  <img src={heroImg03} alt="pic" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="mx-auto lg:w-[470px]">
              <h2 className="heading text-center">Providing the best Penile solutions for you</h2>
              <p className="text-center text_para">He who wants to do anything must do it early before the night comes and he is fucked</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-center leading-9 text-[26px] ">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor  ">
                    We provide world class care for everybody and also we have the best health facilities and up to date machines for correcting all issues. From the lab to the clinic.
                  </p>

                  <Link to="/doctors" className="w-[44px] h-[44px] justify-center mx-auto rounded-full border border-solid mt-[30px] hover:border-none border-[#181A1E] group hover:bg-primaryColor items-center flex">
                    <BsArrowRight className="h-5 w-6 group-hover:text-white"/>
                  </Link>
                </div>
              </div>

              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon02} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-center leading-9 text-[26px] ">
                    Pick a Location
                  </h2>
                  <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor  ">
                    You can pick from any of our choicest hospitals across the country, epending on your location and the facility closest to you. After confirming your location you can book an Appointment.
                  </p>

                  <Link to="/doctors" className="w-[44px] h-[44px] justify-center mx-auto rounded-full border border-solid mt-[30px] hover:border-none border-[#181A1E] group hover:bg-primaryColor items-center flex">
                    <BsArrowRight className="h-5 w-6 group-hover:text-white"/>
                  </Link>
                </div>
              </div>

              <div className="px-5 py-[30px]">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>

                <div className="mt-[30px]">
                  <h2 className="text-headingColor font-[700] text-center leading-9 text-[26px] ">
                    Book an Appointment
                  </h2>
                  <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-textColor  ">
                    After you have found a doctor and selected a location, you can set appointment with the doctor and schedule the perfect day and time to be attended to.
                  </p>

                  <Link to="/doctors" className="w-[44px] h-[44px] justify-center mx-auto rounded-full border border-solid mt-[30px] hover:border-none border-[#181A1E] group hover:bg-primaryColor items-center flex">
                    <BsArrowRight className="h-5 w-6 group-hover:text-white"/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <About />

        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our Medical Services</h2>
              <p className="text_para text-center">Top class care for every patient. Our health care system is unmatched</p>
            </div>

            <ServiceList />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <div className="xl:w-[670px]">
                <h2 className="heading">
                  Get delulu treatment <br /> Any damn day
                </h2>

                <ul className="pl-4">
                  <li className="text_para">
                    1. Schedule a mental appointment.
                  </li>
                  <li className="text_para">
                    2. Search for a docki docki and buzz the office.
                  </li>
                  <li className="text_para">
                    3. See who de accept new patient then try bribe am if e go see you sharpely.
                  </li>
                </ul>
                <Link to="/"><button className="btn">Learn More</button></Link>
              </div>

              <div className="relative z-10 flex justify-end mt-[50px] xl:w-[770px] lg:mt-0 ">
                <img src={featureImg} className="w-3/4" alt="" />

                <div className="absolute bg-white bottom-[50px] left-0 w-[150px] lg:w-[248px] md:bottom-[100px] md:left-5 z-20 p-20 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[6px] lg:gap-3">
                      <p className="text-[10px] leading-[10px]lg:text-[14px] lg:leading-[5px] text-headingColor font-[600]">Tue, 23</p>
                      <p className="text-[10px] leading-[10px]lg:text-[14px] lg:leading-[5px] text-textColor font-[400]">10:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
