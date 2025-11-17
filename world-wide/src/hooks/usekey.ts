import { useEffect } from 'react';

type useKeyProps = {
  key: string;
  action: () => void;
};

const useKey = ({ key, action }: useKeyProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code.toLocaleLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [key, action]);
};

export default useKey;
