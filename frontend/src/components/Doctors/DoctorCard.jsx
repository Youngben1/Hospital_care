import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import starIcon from "../../assets/images/Star.png"

const DoctorCard = ({doctor}) => {

    const {name, avgRating, totalRating, photo, specialization, totalPatients, hospital} = doctor

  return (
    <div className="p-3 lg:p-5">
        <div>
            <img src={photo} className="w-full" />
        </div>
        <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5 ">{name}</h2>

        <div className="flex items-center justify-between mt-2 lg:mt-4">
            <span className="bg-[#CCF0F3] py-1 px-2 text-irisBlueColor lg:py-2 lg:px-6 font-semibold text-[12px] leading-4 lg:text-[16px] lg:leading-7 rounded">
                {specialization}
            </span>

            <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor "><img src={starIcon} alt="" />{avgRating}
                </span>
                <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[700] text-textColor ">({totalRating})
                </span>
            </div>
        </div>

        <div className="flex items-center justify-between mt-[18px] lg:mt-5">
            <div>
                <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-headingColor ">+ {totalPatients} patients</h3>
                <p className="leading-6 text-[14px] font-[450] text-textColor ">At {hospital}</p>
            </div>

            <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] justify-center rounded-full border border-solid hover:border-none border-[#181A1E] group hover:bg-primaryColor items-center flex"
                >
                  <BsArrowRight className="h-5 w-6 group-hover:text-white" />
                </Link>
        </div>
    </div>
  )
}

export default DoctorCard