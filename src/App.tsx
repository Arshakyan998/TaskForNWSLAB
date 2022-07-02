import React from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "./components";
import Navigation from "./navigation/Navigation";
import { getCategorys } from "./redux/getCategorys/getCategorys";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();

  const [loaderAnimation, setLoaderAnimation] = React.useState<boolean>(true);

  const isLoading = useAppSelector((state) => state.categorys.isLoading);
  const error = useAppSelector((state) => state.categorys.error);

  const navigation = useNavigate();

  React.useEffect(() => {
    dispatch(getCategorys());
    navigation("/");
  }, []);

  React.useEffect(() => {
    if (isLoading) {
      let time = setTimeout(() => {
        setLoaderAnimation(false);
      }, 1000);
    }
  }, [isLoading]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="App">
      {loaderAnimation ? (
        <Loading finishAnimation={isLoading} />
      ) : (
        <Navigation />
      )}
    </div>
  );
}

export default App;
