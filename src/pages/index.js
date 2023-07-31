import Image from "next/image";
import Button from "../../components/button/Button";

export default function Home() {
  return (
    <main className="pt-10 sm:pt-0 ">
      <div className="relative ">
        <div className="  grid grid-cols-12 ">
          <Image
            src={"/images/dashimg1.png"}
            alt="dash-imege1"
            className="  md:col-span-6 col-span-12  "
            height={500}
            width={500}
          />
          <Image
            src={"/images/dashimg2.png"}
            alt="dash-imege1"
            className=" col-span-12  md:col-span-6"
            height={500}
            width={500}
          />
        </div>
        <div className="absolute sm:top-[40vh] top-[30vh] w-full bg-red-700  ">
          <div className="text-center text-white font-extrabold text-base tracking-wide">
            <h1 className="text-5xl font-bold mb-3">The New Tree Flyer 2</h1>
            <p>With more grip, more go, and even lighter carbon footprint.</p>
          </div>
          <div className="flex justify-center  mt-36">
            <Button onClick={console.log("shop men")} name={"SHOP MEN"} />
            <Button onClick={console.log("shop women")} name={"SHOP WOMEN"} />
          </div>
        </div>
      </div>
    </main>
  );
}
