import React, { useState } from 'react';

//create your forceUpdate hook
export function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}
