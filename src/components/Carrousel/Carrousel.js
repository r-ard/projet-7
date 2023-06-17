import { useState } from 'react';
import styles from './Carrousel.module.css';
import SvgIconComponent from '../SvgIcon/SvgIcon';

import { ReactComponent as LeftLogo } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as RightLogo } from '../../assets/icons/right-arrow.svg';

export default function CarrouselComponent({
    images
}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onNextImage = () => setSelectedIndex((!images || selectedIndex >= images.length-1) ? 0 : selectedIndex + 1);
    const onPreviousImage = () => setSelectedIndex(images ? (!selectedIndex ? images.length-1 : selectedIndex - 1) : 0);

    return (
        <ul className={styles.carrousel}>
            <>
                <span className={`${styles.arrow} ${styles.left}`}>
                    <SvgIconComponent 
                        Icon={LeftLogo} 
                        width="45px"
                        onClick={onPreviousImage} 
                    />
                </span>
                <span className={`${styles.arrow} ${styles.right}`}>
                    <SvgIconComponent 
                        Icon={RightLogo} 
                        width="45px"
                        onClick={onNextImage}
                    />
                </span>
            </>
            {
                images && images.map((image, index) => (
                    <span 
                        key={`carrousel-item-${index}`}
                        className={styles.item}
                        style={{ 
                            backgroundImage: `url(${image})`,
                            zIndex: index,
                            transform: `translateX(${index <= selectedIndex ? '0' : '100%'})`
                        }}
                    >
                    </span>
                ))
            }
        </ul>
    );
};