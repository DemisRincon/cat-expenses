import CatWalkingAnimation from "./components/ui/cat-walking-animation";
import ExpenseTracker from "./components/expense-tracker";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center bg-white ">
      <header className="h-16 w-full flex justify-center items-center md:h-1/12 z-1">
        <h1 className="text-3xl font-bold md:text-5xl">Cat Expenses Web</h1>
      </header>
      <main className="flex-grow w-full overflow-y-scroll md:h-11/12 z-1">
        <ExpenseTracker />
      </main>
      <div className="absolute top-0 left-0 h-screen w-full overflow-x-hidden z-0">
        <CatWalkingAnimation flip duration={20} startX={-100} />
        <CatWalkingAnimation duration={12} />
        <CatWalkingAnimation flip duration={25} />
        <CatWalkingAnimation duration={10} />
        <CatWalkingAnimation flip duration={15} />
        <CatWalkingAnimation duration={30} startX={-200} />
        <CatWalkingAnimation flip duration={30} startX={-50} />
        <CatWalkingAnimation flip duration={10} startX={-200} />
        <CatWalkingAnimation duration={30} startX={-50} />
      </div>
    </div>
  );
};

export default App;
