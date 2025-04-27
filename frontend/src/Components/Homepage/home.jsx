import Footer from "../footer";
import Nav from "../nav";
import Turf from "./ourTurfs";

export default function Home() {
  return (
   
      <div className="bg-[url(../src/assets/img1.png)] bg-no-repeat object-cover bg-center bg-fixed bg-cover ">
        <Nav />
        <div className="h-[100vh] pb-[20vh] flex flex-col justify-end">
          <div className="flex flex-col ml-[10%] mb-6">
            <span className="text-white font-extrabold text-4xl">
              Book Premier Turf <br /> Fields With Ease
            </span>
            <br />
            <span className="py-2 text-white text-3xl">
              Schedule your perfect game time on world-class fields. <br />
              Easy booking, top-quality turf, and exceptional playing experience.
            </span>
          </div>
          <div className="flex flex-row gap-4 ml-[10%]">
            <button className="text-white text-2xl bg-green-400/90 w-[200px] rounded-lg py-2">
              Book now
            </button>
            <button className="text-white text-2xl bg-white/50 border-2 rounded-lg w-[200px] py-2">
              Explore facilities
            </button>
          </div>
        </div>

    
 <Turf/>
 <Footer/>
 </div>
  )
}