import Image from "next/image";
import Right from "@/components/icons/Right";

export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="uppercase flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-semibold">
            Order now
            <Right></Right>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-500 font-semibold">
            Learn more
            <Right></Right>
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt=""
          layout={"fill"}
          objectFit={"contain"}
        ></Image>
      </div>
    </section>
  );
}
