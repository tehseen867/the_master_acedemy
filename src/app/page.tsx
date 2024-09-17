import HeroSection from "./components/heroSection";
import FeaturedCources from "./components/featuredCources";
import WhyChooseUs from "./components/whyChooseUs";
import ScrollingCards from "./components/scrollingCards";
import UpcomingCourses from "./components/upcomingCourses";
import Instructors from "./components/instructors";
import Footer from "./components/footer";


export default function Home() {
  return (
   <>
   <main className="min-h-screen antialiased  bg-black bg-grid-white/[0.02]">
   
<HeroSection/>
<FeaturedCources/>
<WhyChooseUs/>
<ScrollingCards/>
<UpcomingCourses/>
<Instructors/>
<Footer/>

   </main>
   </>
  );
}
