import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './styles.css';


const Country = ({ country, classes, open, handleClose }) => {
  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      position: 'fixed',
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
 
  const languages = country.languages.map((language, index) => {
    return (
      <li key={index}>{language.name}</li>
    )
  });

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <div><img src={country.flag} alt="country flag" className="flag" /></div>
              <Typography gutterBottom variant="h5" component="h2">
                {country.name}
              </Typography>
              <div className="details">
                <span><h3>Population</h3>: {country.population}</span>
                <span><h3>Area</h3>: {country.area}</span>
                <span><h3>Alpha2Code</h3>: {country.alpha2Code}</span>
                <span><h3>Region</h3>: {country.region}</span>
                <span><h3>Capital</h3>: {country.capital}</span>
                <span><h3>Timezones</h3>: {country.timezones.length}</span>
                <span className="languages">
                  <h3>Languages</h3>
                  <ul>{languages}</ul>
                </span>

              </div>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClose}>
              Close
            </Button>
          </CardActions>
        </Card>
      </div>
    </Modal>
  )
}


export default Country;
