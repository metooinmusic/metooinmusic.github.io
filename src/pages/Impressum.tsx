import Datenschutz from '../assets/Datenschutz.pdf';
import { useState, useEffect } from 'react';
import { Card, Container } from '@mui/material';
import Theme from '../constants/Theme';
import useResizer from '../utils/useResizer';

function Impressum() {
  const [show, setShow] = useState(false);
  const screenDimensions = useResizer();

  const styles = {
    parent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      maxWidth: 'unset !important',
      margin: '0px',
      padding: '0px',
      backgroundColor: Theme.light.background
    },
    show: {
      opacity: '1.0',
      transition: '1s'
    },
    hide: {
      opacity: '0.0',
      transition: '1s'
    },
    header: {
      width: '100%'
    },
    card: {
      padding: '1em 20px',
      textAlign: 'left',
      maxWidth: screenDimensions.isMobile ? '300px' : '600px',
      maxHeight: 'calc(100vh - 200px)',
      overflow: 'auto',
      marginTop: screenDimensions.isMobile ? '100px' : '100px',
      backgroundColor: Theme.light.background,
      border: 'none',
      '& p': {
        fontSize: '9px',
        color: Theme.light.secondaryText,
      },
      '& a': {
        color: Theme.light.tertiary,
        textDecorationColor: Theme.light.tertiary,
        fontWeight: 600
      }
    },
  };

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Container sx={show ? { ...styles.parent, ...styles.show } : { ...styles.parent, ...styles.hide }}>
        <Card sx={styles.card}>
            <h5>Impressum</h5>
            <p>
                Elisabeth Treydte<br />
                Fußhain 14<br />
                61197 Florstadt <br />
                </p>
            <h5>Kontakt</h5>
                <p>
                E-mail: info@mappingmetooinmusic.de <br />
                </p>
            <h5>Datenschutzerklärung</h5>
                <p><a href={Datenschutz} target='_blank'>Herunterladen</a></p>
            <br />
        </Card>
      </Container>
    </>
  );
}

export default Impressum;
