'use client';

import Image from 'next/image';
import styles from './page.module.css';
import logoImage from '@/assets/react.svg';
import ImageCard from '@/components/imageCard/ImageCard';
import illustration from '@/assets/illustration.svg';
import { FormEvent, useState } from 'react';
import image from '@/assets/test.jpg';
import Loader from '@/components/loader/Loader';
import { useGenerateImages } from '@/hooks/useGenerateImages';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [amount, setAmount] = useState('1');
  const [size, setSize] = useState('256');

  // console.log(prompt);

  const { mutate, isLoading, data } = useGenerateImages();

  // console.log(isLoading);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (prompt === '') {
      alert('Please enter a prompt');
      return;
    }

    // console.log({
    //   prompt,
    //   amount,
    //   size,
    // });

    await mutate({
      prompt,
      amount,
      size,
    });
  };

  // console.log(process.env.API_URL);
  // console.log(process.env.NEXT_PUBLIC_API_URL);

  return (
    <>
      {isLoading && <Loader />}
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.header_container}>
          <div className={styles.logo}>
            <div className={styles.logo_image}>
              <Image src={logoImage} alt="logo" />
            </div>

            <div className={styles.logo_text}>
              <h1>ImaginateAI</h1>
              <span>Turn your prompt into images</span>
            </div>
          </div>
        </div>
      </header>
      {/* MAIN */}
      <main className={styles.main}>
        <div className={styles.main_container}>
          <form className={styles.options} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.options_prompt}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter a prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div className={styles.options_config}>
              {/* NUMBER OF IMAGES */}
              <select
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              >
                <option value="1">1 image</option>
                <option value="2">2 images</option>
                <option value="3">3 images</option>
                <option value="4">4 images</option>
              </select>

              {/* SIZE */}
              <select
                name="size"
                id="size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="256">256 x 256</option>
                <option value="512">512 x 512</option>
                <option value="1024">1024 x 1024</option>
              </select>

              <button className={styles.submit_button}>Generate</button>
            </div>
          </form>

          {data.length === 0 && (
            <div className={styles.empty_output}>
              <div className={styles.empty_output_image}>
                <Image src={illustration} alt="" />
              </div>
              <span>No generated images</span>
            </div>
          )}

          {data.length > 0 && (
            <div className={styles.output}>
              {data.map((item, index) => (
                <ImageCard imageSrc={item.url} key={index} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
