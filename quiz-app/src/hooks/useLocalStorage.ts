import { useState, useEffect } from "react"


const useLocalStoragae =<T> (key: string, initialValue: T) => {
  const [value, setValue] = useState(() => {
    if (typeof window === undefined) return initialValue;

    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) as T : initialValue
    } catch (error){
      console.log("Error reading localstorage", error)
      return initialValue
    }
  })
  
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStoragae