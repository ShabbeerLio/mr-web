import { IoLogoAndroid } from "react-icons/io";
import { LuMonitorStop } from "react-icons/lu";
import { MdDraw } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { AiOutlineSolution } from "react-icons/ai";
import { PiMegaphone } from "react-icons/pi";

const IndustryData = [
    {
        id: 1,
        title: "Healthcare",
        cover: <IoLogoAndroid />,
        color: "white",
        desc: "this is description of the services of "
    },
    {
        id: 2,
        title: "Real State",
        cover: <LuMonitorStop />,
        color: "#ededed",
        desc: "this is description of the services"
    },
    {
        id: 3,
        title: "E-Commerce",
        cover: <MdDraw />,
        color: "white",
        desc: "this is description of the services"
    },
    {
        id: 4,
        title: "Finance",
        cover: <TbBulb />,
        color: "#ededed",
        desc: "this is description of the services"
    },
    {
        id: 5,
        title: "Manufacturing",
        cover: <AiOutlineSolution />,
        color: "white",
        desc: "this is description of the services"
    },
    {
        id: 6,
        title: "Education",
        cover: <PiMegaphone />,
        color: "#ededed",
        desc: "this is description of the services"
    },
]

export default IndustryData