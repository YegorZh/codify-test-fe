import IssueCardPage from "./app/card/issue/IssueCardPage";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="max-w-xl">
        <IssueCardPage />
      </main>
    </div>
  );
};

export default App;
