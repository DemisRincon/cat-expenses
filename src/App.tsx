import CatWalkingAnimation from "./components/cat-walking-animation";
import ExpensesTable from "./components/expenses-table";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <header className="h-16 w-full flex justify-center items-center md:h-1/12">
        <h1 className="text-3xl font-bold md:text-5xl">Cat Expenses Web</h1>
      </header>
      <main className="flex-grow w-full">
        <ExpensesTable />
      </main>
      <footer className="h-20 w-full overflow-hidden md:h-1/12">
        <CatWalkingAnimation />
      </footer>
    </div>
  );
};

export default App;
