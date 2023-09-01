import Image from 'next/image';
import styles from './ImageCard.module.css';
import image from '@/assets/test.jpg';

const ImageCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={image} alt="" />
      </div>

      <div className={styles.download_button}>
        <button>Download</button>
      </div>
    </div>
  );
};

export default ImageCard;
