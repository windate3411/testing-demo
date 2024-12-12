import MyDialog from './MyDialog';

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <MyDialog
          title="Dialog Title"
          description="Dialog Description"
          onClose={() => {}}
        />
      </div>
    </>
  );
}

export default App;
