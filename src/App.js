import { useMousePosition } from "./hooks/useMousePosition";

function App() {
  const { position } = useMousePosition();

  return (
    <>
      {position.x}
      <br />
      {position.y}
    </>
  );
}

export default App;
