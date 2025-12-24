import HomeHero from "../components/HomeHero";
  import AwardsTimeline from "../components/AwardsTimeline";
  import HomeAbout from "../components/HomeAbout";

function Home() {
  return (
    <>
      <HomeHero />
        <AwardsTimeline />
        <HomeAbout />
    </>
  );
}

export default Home;
