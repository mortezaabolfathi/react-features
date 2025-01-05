import React, { useState, useDeferredValue, useMemo, useEffect } from 'react';

const largeDataSet = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filteredItems = useMemo(() => {
    return largeDataSet.filter(item => item.toLowerCase().includes(deferredQuery.toLowerCase()));
  }, [deferredQuery]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
      />
      <p>Searching for: {deferredQuery}</p>
      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
