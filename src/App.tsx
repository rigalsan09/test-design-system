import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center', 
        fontFamily: 'system-ui, sans-serif' 
      }}>
        <h1>Claris UI Design System</h1>
        <p>Components extracted from Figma using MCP server</p>
        <p>
          <strong>To view and interact with components:</strong><br />
          Run <code>npm run storybook</code> to open Storybook
        </p>
      </div>
    </div>
  );
}

export default App;
