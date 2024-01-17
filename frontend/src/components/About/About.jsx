import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] xl:gap-[0] lg:gap-[130px] flex-col lg:flex-row'>

                <div className='relative w-[75%] lg:w-[50%] xl:w-[770px] z-10 order-2 lg:order-1 '>
                    <img src={aboutImg} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                <div className="w-full order-1 lg:order-2 lg:w-1/2 xl:w-[670px]">
                    <h2 className="heading">Proud to be among the World's best Doctors</h2>
                    <p className="text_para">For over 27 years, the News networks in Nigeria and West Africa as a whole have recognised our efforts and given us awards as one of the leading companies in the Region and Number 1 in Jos, Nigeria.</p>

                    <p className="text_para mt-[30px]">Doing our best is what we strive to do each and everyday of the week. Not looking back on what we have accomplished but striving to do even better by providing the best services.</p>

                    <Link to="/"><button className="btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About