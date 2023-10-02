import { useState } from "react";
import "./App.css";
import arrow from "./assets/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [formError, setFormError] = useState("");
  const [yearsDifference, setYearsDifference] = useState("");
  const [monthsDifference, setMonthsDifference] = useState("");
  const [daysDifference, setDaysDifference] = useState("");

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  const handleButtonClick = () => {
    // Limpa mensagens de erro anteriores
    setDayError("");
    setMonthError("");
    setYearError("");
    setFormError("");

    // Validação dos campos
    if (!day || !month || !year) {
      setDayError("This field is required");
      setMonthError("This field is required");
      setYearError("This field is required");
    } else {
      const parsedDay = parseInt(day);
      const parsedMonth = parseInt(month);
      const parsedYear = parseInt(year);

      if (parsedYear > currentYear) {
        setYearError("Year must be in the past.");
      } else if (
        parsedMonth < 1 ||
        parsedMonth > 12 ||
        parsedDay < 1 ||
        parsedDay > 31
      ) {
        setMonthError("Must be a valid month.");
        setDayError("Must be a valid day.");
      } else if (
        (parsedMonth === 4 ||
          parsedMonth === 6 ||
          parsedMonth === 9 ||
          parsedMonth === 11) &&
        parsedDay > 30
      ) {
        setDayError("Must be a valid date.");
      } else if (parsedMonth === 2) {
        // Fevereiro tem 28 ou 29 dias
        if (
          (parsedYear % 4 === 0 && parsedYear % 100 !== 0) ||
          parsedYear % 400 === 0
        ) {
          // É um ano bissexto
          if (parsedDay > 29) {
            setDayError("Must be a valid date.");
          }
        } else if (parsedDay > 28) {
          setDayError("Must be a valid date.");
        }
      }

      // Se tudo estiver válido, você pode prosseguir com os cálculos ou outras ações.
      let yearsDiff = currentYear - parsedYear;
      let monthsDiff = currentMonth - parsedMonth;
      let daysDiff = currentDay - parsedDay;

      if (daysDiff < 0) {
        // Corrigindo dias negativos
        monthsDiff--;
        const daysInLastMonth = new Date(
          currentYear,
          currentMonth - 1,
          0
        ).getDate();
        daysDiff = daysInLastMonth + daysDiff;
      }

      if (monthsDiff < 0) {
        // Corrigindo meses negativos
        yearsDiff--;
        monthsDiff = 12 + monthsDiff;
      }

      setYearsDifference(yearsDiff);
      setMonthsDifference(monthsDiff);
      setDaysDifference(daysDiff);
    }
  };

  return (
    <div className="bg-[#F0F0F0] sm:min-h-screen h-screen flex items-center justify-center">
      <div className="w-[90%] bg-white h-[70%] flex items-center justify-center rounded-t-[24px] rounded-bl-[24px] rounded-br-[100px]">
        <div className="w-[90%] h-[85%] flex flex-col justify-between">
          <div className="flex flex-row w-full sm:w-[80%] gap-2">
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Day</span>
              <input
                type="number"
                name="day"
                id="day"
                placeholder="DD"
                min={1}
                max={31}
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className={`w-[90%] h-8 rounded-md border font-bold text-black focus:border-[#854DFF] focus:outline-none px-2 ${
                  dayError ? "border-red-500" : ""
                }`}
              />
              {dayError && <p className="text-red-500 text-xs">{dayError}</p>}
            </div>
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Month</span>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                min={1}
                max={12}
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className={`w-[90%] h-8 rounded-md border font-bold text-black focus:border-[#854DFF] focus:outline-none px-2 ${
                  monthError ? "border-red-500" : ""
                }`}
              />
              {monthError && (
                <p className="text-red-500 text-xs">{monthError}</p>
              )}
            </div>
            <div className="flex flex-col w-1/3 gap-1">
              <span className="text-[#DCDCDC] text-lg">Year</span>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="YYYY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className={`w-[90%] h-8 rounded-md border font-bold text-black focus:border-[#854DFF] focus:outline-none px-2 ${
                  yearError ? "border-red-500" : ""
                }`}
              />
              {yearError && <p className="text-red-500 text-xs">{yearError}</p>}
            </div>
          </div>
          <div className="flex flex-row items-center w-full sm:relative">
            <hr className="border-t border-solid h-[1px] w-[40%] sm:w-[50%] border-[#DCDCDC]" />
            <button
              type="button"
              onClick={handleButtonClick}
              className="rounded-full w-[20%] sm:w-14 sm:h-14 h-16 bg-[#854DFF] flex items-center justify-center hover:bg-[#151515] sm:right-0 sm:absolute"
            >
              <img src={arrow} alt="Arrow" className="w-1/2 h-1/2" />
            </button>
            <hr className="border-t border-solid h-[1px] w-[40%] sm:w-[50%] border-[#DCDCDC]" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl italic sm:text-2xl">
                {yearsDifference ? yearsDifference : "--"}
              </span>
              <span className="text-6xl italic sm:text-2xl">years</span>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl sm:text-2xl">
                {monthsDifference ? monthsDifference : "--"}
              </span>
              <span className="text-6xl italic sm:text-2xl">months</span>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-[#854DFF] text-6xl italic sm:text-2xl">
                {daysDifference ? daysDifference : "--"}
              </span>
              <span className="text-6xl italic sm:text-2xl">days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
