import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import DjangoImgSrc from '../../assets/images/django-logo-negative.png';
import { creators } from '../store/rest_check';

const Home = () => {
  const dispatch = useDispatch();
  const restCheck = useSelector((state) => state.restCheck);
  useEffect(() => {
    const action = creators.fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  const [showBugComponent, setShowBugComponent] = useState(false);

  return (
    <>
      <div id="django-background">
        <h1>Hello, this is my project.</h1>
      </div>
      <div>{restCheck.result}</div>
      <Button variant="outline-dark" onClick={() => setShowBugComponent(true)}>
        Click to test if Sentry is capturing frontend errors! (Should only work in Production)
      </Button>
      {showBugComponent && showBugComponent.field.notexist}
    </>
  );
};

export default Home;
