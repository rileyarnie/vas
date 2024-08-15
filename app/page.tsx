import stations from "@/constants/stations";
import DriverTable from "./components/DriverTable";
import QuickMenu from "./components/QuickMenu";
import Station from "./components/Station";
import BottomMenu from "./components/BottomMenu";

export default function Home() {
  return (
    <div className="bg-black grid grid-cols-4 max-md:grid-cols-1">
      {/* <div className="bg-blue-400"></div> */}
      <div className="bg-black col-span-1 border-r ">
        <div className="h-[60vh] ">
          <DriverTable />
        </div>
        <QuickMenu />
      </div>
      <div className="bg-black col-span-3">
        {stations.map((station) => (
          <div key={station.id} className="px-4 pt-4">
            <h4 className="px-2 py-1 mb-12 bg-red-500 w-fit text-white">
              {station.name}
            </h4>
            <div className=" grid overflow-x-auto  pt-4 pb-16 ">
              <div className="w-[93.75rem] ">
                <div className="">
                  <Station station={station} />
                </div>
              </div>
            </div>
          </div>
        ))}
        <BottomMenu />
      </div>
    </div>
  );
}
