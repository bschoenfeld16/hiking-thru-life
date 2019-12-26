import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import PackBuilder from "./containers/PackBuilder/PackBuilder";

function App() {
  return (
      <div>
          <Layout>
              <PackBuilder />
          </Layout>
      </div>
  );
}

export default App;
