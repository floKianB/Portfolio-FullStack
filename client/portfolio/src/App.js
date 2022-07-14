import styles from './App.module.css';

import Constants from './components/constants';
import Banner from './components/banner';
import Navigator from './components/navigator';

function App() {
  return (
      <>
      <div className={styles.App}>
        <Constants />
        <Banner />
        <Navigator />
      </div>
      </>

  );
}

export default App;
