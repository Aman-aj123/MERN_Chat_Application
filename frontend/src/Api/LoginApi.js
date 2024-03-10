const LoginApi = async (email, password) => {
     const BASE_URL = process.env.REACT_APP_API_BASE_URL;
     const options = {
          method: "POST",
          body: { email, password }
     }
     const data = await fetch(BASE_URL, options);
     const response = await data.json();

     return response;
};


export default LoginApi;