export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/50 transition-all">
      <div className="text-center">
        <img className="max-h-24 block mx-auto" src="/pizza.png" alt="" />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </p>
      <button className="bg-primary text-white rounded-full mt-4 px-6 py-2">
        Add to cart $12
      </button>
    </div>
  );
}
