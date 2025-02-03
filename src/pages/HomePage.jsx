import { FaPhoneFlip } from "react-icons/fa6";


const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => {
    return (
        <>
          <div style={styles.container}>
            <h1 style={styles.title}>Phonebook App <FaPhoneFlip /></h1><p>Simple application for React education</p>
          </div>
        </>
    )
};

export default HomePage;