export const loadingStarted = namespace => {
    return {
      type: `${namespace}/startLoading`,
    };
  };
  export const showModal = namespace => {
    return {
      type: `${namespace}/showModal`,
    };
  };
  
  export const loadingStopped = namespace => {
    return {
      type: `${namespace}/stopLoading`,
    };
  };
  