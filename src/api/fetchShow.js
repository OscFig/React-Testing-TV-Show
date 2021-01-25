import axios from 'axios';

export const fetchShow = async () => {

  return  axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          console.log(res, 'RES FROM FETCHSHOW')
          return res;
        // setShow(res.data);
        // setSeasons(formatSeasons(res.data._embedded.episodes));
      })
      .catch(err => {
          return err;
      });
  };