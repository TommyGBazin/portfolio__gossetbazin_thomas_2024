'use client';

export default function HomePage() {
  return (
    <section className="grid grid-rows-3">
      <div className="col-span-2 grid grid-cols-2 items-center">
        <h2 className="text-sm text-gray-300 tracking-widest">{'('} <span className="px-2">designer</span> {')'}</h2>
        <h2 className="text-sm text-gray-300 tracking-widest">{'('} <span className="px-2">developer</span> {')'}</h2>
      </div>
      <div className="col-span-2 flex flex-row w-fit items-center text-base">
        <h1>
          <span>thomas</span>
          <span>gosset</span>
          <span>bazin</span>
        </h1>
        <span>@gmail.com</span>
      </div>
      <div>
        <h3 className="text-sm text-gray-300 tracking-widest">{'('} <span className="px-2">Lyon, France</span> {')'}</h3>
      </div>
    </section>
  );
}
