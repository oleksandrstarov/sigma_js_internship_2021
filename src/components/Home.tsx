import apiService from '../api';

const Home = () => {
  apiService.getSearchList('batman');

  console.log(apiService.apiResponse);

  return (
    <div>
      <h1>Home Page.</h1>
    </div>
  );
};

export default Home;
