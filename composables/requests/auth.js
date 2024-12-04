import {baseURL} from "@/composables/config"

// export const login = async(payload)=>{
//     const data = await fetch(`${baseURL}/login`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//     }).then(res => res.json());
//     return data
// }

export const login = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // console.error('Login failed:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};