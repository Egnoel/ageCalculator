import "./App.css";
import arrow from "./assets/icon-arrow.svg";

function App() {
  return (
    <div className="bg-[#F0F0F0] sm:min-h-screen h-screen flex items-center justify-center">
      <div className="w-[90%] bg-white h-[70%] flex items-center justify-center rounded-t-[24px] rounded-bl-[24px] rounded-br-[100px]">
        <div className="w-[90%] h-[85%] flex flex-col justify-between">
          <div className="flex flex-row w-full gap-2">
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Day</span>
              <input
                type="number"
                name="day"
                id="day"
                placeholder="DD"
                className="w-[90%] h-8 rounded-md border font-bold text-black"
              />
            </div>
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Month</span>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                className="w-[90%] h-8 rounded-md border font-bold text-black"
              />
            </div>
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Year</span>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="YYYY"
                className="w-[90%] h-8 rounded-md border font-bold text-black"
              />
            </div>
          </div>
          <div className="flex flex-row items-center w-full">
            <hr className="border-t border-solid h-[1px] w-[40%] border-[#DCDCDC]" />
            <button
              type="button"
              className="rounded-full w-[20%] h-16 bg-[#854DFF] flex items-center justify-center hover:bg-[#151515]"
            >
              <img src={arrow} alt="Arrow" className="w-1/2 h-1/2" />
            </button>
            <hr className="border-t border-solid h-[1px] w-[40%] border-[#DCDCDC]" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl italic">38</span>
              <span className="text-6xl italic">years</span>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl">3</span>
              <span className="text-6xl italic">months</span>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl italic">26</span>
              <span className="text-6xl italic">days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
