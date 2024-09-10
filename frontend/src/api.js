import React, { useState, useEffect } from 'react';
import ReactFlow from 'react-flow-renderer';
import { fetchWorkflows, saveWorkflow } from './api';

const elements = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Step 1' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Step 2' }, position: { x: 400, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' }
];

function App() {
  const [workflowElements, setWorkflowElements] = useState([]);

  useEffect(() => {
    const loadWorkflows = async () => {
      try {
        const workflows = await fetchWorkflows();
        setWorkflowElements(workflows);
      } catch (error) {
        console.error('Error loading workflows:', error);
      }
    };

    loadWorkflows();
  }, []);

  const handleSaveWorkflow = async () => {
    try {
      const newWorkflow = { /* Your workflow data */ };
      await saveWorkflow(newWorkflow);
    } catch (error) {
      console.error('Error saving workflow:', error);
    }
  };

  return (
    <div>
      <h1>Md Saiful Islam</h1>
      <h2>BRAC University, Bangladesh</h2>
      <h3>Department: CSE</h3>
      <h3>Currently working at Zenov BPO as Associate</h3>
      
      <div style={{ height: 400 }}>
        <ReactFlow elements={workflowElements} />
      </div>
      <button onClick={handleSaveWorkflow}>Save Workflow</button>
    </div>
  );
}

export default App;
