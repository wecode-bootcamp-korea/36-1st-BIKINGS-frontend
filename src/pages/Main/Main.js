import Inner from './Inner/Inner';
import ImageSlide from './ImageSlide/ImageSlide';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <ImageSlide />
      <Inner />
    </div>
  );
};

export default Main;
