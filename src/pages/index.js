import HomeBgImage from "../../components/HomeBgImage";
import Link from "next/link";
import { TabsCard } from "../../components/card/TabsCard";
import Image from "next/image";
export default function Home() {
  return (
    <main className="pt-10 sm:pt-0 ">
      <div>
        <HomeBgImage></HomeBgImage>
        <div className="bg-white">
          <div className="bg-deepBlue h-11 text-center flex justify-center items-center py-6 text-[12px] ">
            <p className="text-white font-[700] lg:text-base text-xs mx-1">
              <b>Discover Your Perfect Pair </b> Try our Style Quiz to find the
              best pair for you.{" "}
              <Link href="/">
                <u>Take the Style Quiz</u>
              </Link>
            </p>
          </div>
          {/* ------------------FAVOURITES CARD------------------ */}
          <TabsCard />

          {/* -_-_-_-_-_-_-_-_-_-_-_-_-_BANNER IMAGE-_-_-_-_-_-_-_-_-_-_-_-_-_ */}

          <div>
            <div className=" mt-32 bg-red-500  ">
              <Image
                className="md:hidden md:max-h-[500px] max-h-[350px] max-w-full min-w-full"
                src="/images/banarA1.jpg"
                height={1000}
                width={1000}
                alt="bann1"
              />
              <Image
                className="hidden md:block lg:max-h-[550px] max-h-[430px] max-w-full min-w-full"
                src="/images/banar1.jpg"
                height={1000}
                width={1000}
                alt="bann1"
              />
            </div>
            <div>botton text</div>
          </div>
        </div>

        <div>Vishal</div>
      </div>
    </main>
  );
}
