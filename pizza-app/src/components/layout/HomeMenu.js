import Image from "next/image";
import MenuItem from "@/components/menu/MenuItem";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0">
        <div className="absolute left-0 -top-[70px] -z-10">
          <Image src={"/sallad1.png"} alt="" width={109} height={189}></Image>
        </div>
        <div className="absolute right-0 -top-[100px] -z-10">
          <Image src={"/sallad2.png"} alt="" width={107} height={195}></Image>
        </div>
      </div>
      <div className="text-center">
        <SectionHeaders
          subHeader={"Check out"}
          mainHeader={"Menu"}
        ></SectionHeaders>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </div>
    </section>
  );
}
