import Image from 'next/image';
import styles from './page.module.css';
import logoImage from '@/assets/react.svg';
import ImageCard from '@/components/imageCard/ImageCard';
import illustration from '@/assets/illustration.svg';

export default function Home() {
  return (
    <>
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
          <form className={styles.options}>
            <div className={styles.options_prompt}>
              <input type="text" name="" id="" placeholder="Enter a prompt" />
            </div>

            <div className={styles.options_config}>
              {/* NUMBER OF IMAGES */}
              <select name="amount" id="amount">
                <option value="1">1 image</option>
                <option value="2">2 images</option>
                <option value="3">3 images</option>
                <option value="4">4 images</option>
              </select>

              {/* SIZE */}
              <select name="size" id="size">
                <option value="256">256 x 256</option>
                <option value="512">512 x 512</option>
                <option value="1024">1024 x 1024</option>
              </select>

              <button className={styles.submit_button}>Generate</button>
            </div>
          </form>

          <div className={styles.empty_output}>
            <div className={styles.empty_output_image}>
              <Image src={illustration} alt="" />
            </div>
            <span>No generated images</span>
          </div>

          {/* <div className={styles.output}>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div> */}
        </div>
      </main>
    </>
  );
}
