const BASE_URL = "http://localhost:3000";

// all users
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json();
    console.log(json)
    return json;
}

//single user
export const getUser = async (userid) => {
    const response = await fetch(`${BASE_URL}/api/users/${userid}`);
    const json = await response.json();
  
    if (json) return json;
  
    return {};
  };
  
  //posting a new user
  export const postUser = async (formData) => {
    try {
      const Options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      const response = await fetch(`${BASE_URL}/api/users`, Options);
      const json = await response.json();
  
      return json;
    } catch (error) {
      return error;
    }
  };
  
  //update a user
  export const updateUser = async (userid, formData) => {
      try {
        const Options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };
        const response = await fetch(`${BASE_URL}/api/users/${userid}`, Options);
        const json = await response.json();
    
        return json;
      } catch (error) {
        return error;
      }
    };
  
    //delete a user
  export const deleteUser = async (userid) => {
      try {
        const Options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }
        };
        const response = await fetch(`${BASE_URL}/api/users/${userid}`, Options);
        const json = await response.json();
    
        return json;
      } catch (error) {
        return error;
      }
    };