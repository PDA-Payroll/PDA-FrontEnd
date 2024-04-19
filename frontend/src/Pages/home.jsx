import '../Styles/home.css';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="bg-blue-500 text-white p-4 mb-4">
        <h1 className="text-2xl">Welcome to PDA Home Page</h1>
      </header>

      <main className="p-4">
        <p className="text-lg">
          This is a simple home page for a React application. You can replace
          this content with your own.
        </p>
        <p className="text-lg">
          Edit <code className="bg-gray-200 p-1">src/Pages/Home.jsx</code> and save to see changes.
        </p>
      </main>

      <footer className="bg-blue-500 text-white p-4 mt-4">
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

export default Home;
