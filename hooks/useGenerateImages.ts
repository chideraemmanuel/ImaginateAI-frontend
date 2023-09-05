import axios from 'axios';
import { useState } from 'react';

interface payload {
  prompt: string;
  amount: string;
  size: string;
}

interface ResultTypes {
  url: string;
}

export const useGenerateImages = () => {
  const [data, setData] = useState<ResultTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (payload: payload) => {
    setIsLoading(true);

    try {
      // const { prompt, amount, size} = payload

      //   const response = await axios.post(
      //     'http://localhost:5000/generate-image',
      //     payload
      //   );

      //   console.log(response.data);
      // console.log(process.env.API_URL);
      console.log(process.env.NEXT_PUBLIC_API_URL);

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // console.log(response);

      if (!response.ok) {
        setIsLoading(false);
        throw Error('The image could not be generated');
      }

      const result: ResultTypes[] = await response.json();
      // console.log(result);

      setData(result);

      setIsLoading(false);
    } catch (error) {
      // console.log(error);
      setIsLoading(false);
      // @ts-ignore
      alert(error.message);
    }
  };

  return { mutate, isLoading, data };
};
