import Image from "next/image";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]  ">
      <div className="flex justify-between items-center flex-col p-10 ">
        <div className=" flex items-center mx-auto overflow-x-scroll mt-6 ">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="py-3 px-6 ">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Customer
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Adress
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all ">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center ">
                  <span>63107f5559...</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  <span>Yunus Malkoç</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  Bahçelievler
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                  $20
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full mt-10 p-10 bg-primary max-w-[1000px] ">
          <div className="relative">
            <Image src="/images/paid.png" alt="" width={40} height={40} />
            <span className="">Payment</span>
          </div>
          <div className="relative animate-pulse ">
            <Image src="/images/bake.png" alt="" width={40} height={40} />
            <span>Preparing</span>
          </div>
          <div className="relative">
            <Image src="/images/bike.png" alt="" width={40} height={40} />
            <span>On the way</span>
          </div>
          <div className="relative flex flex-col ">
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
