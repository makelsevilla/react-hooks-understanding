function useReducerReplica(reducer, initialVal) {
  const state = initialVal; // Pointer/Reference
  function dispatch(action) {
    state = reducer(state, action);

    // Invokes the Updating phase
  }

  return [state, dispatch];
}

function useStateReplica(initialVal) {
  const state = initialVal;
  function setState(val) {
    if (typeof val === "function") {
      state = val(state);
    } else {
      state = val;
    }

    // Invokes the Updating phase
  }

  return [state, setState];
}
