import React from 'react';
import './App.css';
import {Editor} from "./components/editor/Editor";
import {Tree} from "./components/tree/Tree";
import {ErrorOutput} from "./components/erroroutput/ErrorOutput";
import {Help} from "./components/help/Help";


function App() {
  return (
      <main id="app" className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-8 m-8">

        <div className="flex flex-col h-full sm:h-full md:w-2/3 lg:md:w-2/3 gap-8">
          <Editor></Editor>
          <Tree></Tree>
        </div>

        <div className="flex flex-col h-full sm:h-full md:w-1/3 lg:w-1/3 gap-8">
          <ErrorOutput className="min-h-52"></ErrorOutput>
          <Help></Help>
        </div>
      </main>
  )
}

export default App;
