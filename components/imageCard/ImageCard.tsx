import Image from 'next/image';
import styles from './ImageCard.module.css';
import image from '@/assets/test.jpg';
import saveAs from 'file-saver';
import { FiDownload } from 'react-icons/fi';

interface Props {
  imageSrc: any;
}

const ImageCard: React.FC<Props> = ({ imageSrc }) => {
  const downloadImage = () => {
    saveAs(imageSrc, 'imaginateAI_image.jpg');
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <Image src={imageSrc} alt="" width={300} height={300} />
        {/* <Image src={image} alt="" /> */}
      </div>

      <div className={styles.download_button}>
        <button onClick={downloadImage}>
          <FiDownload />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
