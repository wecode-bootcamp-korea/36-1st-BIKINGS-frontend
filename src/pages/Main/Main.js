import Inner from './Inner/Inner';
import ImageSlide from './ImageSlide/ImageSlide';
import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <ImageSlide />
      <Inner />
    </main>
  );
};

export default Main;
