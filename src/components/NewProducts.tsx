import { IProduct } from "@/types";
import ProductCard from "./ProductCard";


const NewProducts =({ productsData }: {productsData: IProduct[] | undefined})  => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData?.map((item: IProduct) => (
            <ProductCard
              key={item?.id}
              img={item.images[0]}
              title={item.brand}
              desc={item.description}
              rating={5}
              price={String(item.priceO)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;