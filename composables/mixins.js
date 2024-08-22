export const cloudinaryURL = "https://api.cloudinary.com/v1_1/payhospi/upload";
export const cloudinaryAPIKey = "PSlZAFo_ZYa2zBrnfu1KceD64rw";



export const handleFileChange = async (event, selectedFile ,profileImg=null)=>{
    const file = event.target.files[0];
    if(!file) return;
    selectedFile.value = file

    if(file?.type=="image/png" && profileImg){
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImg.value.src = event.target.result;
        };

        reader.readAsDataURL(file);
    }
}



export const asyncRequest = async (url, options, json = true) => {
    return fetch(url, options)
      .then((response) => (json ? response.json() : response.text()))
      .then((data) => {
        return data;
      })


      .catch((error) => {
        return error;
      });
  };


export const uploadToCloudinary = async ( file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "laioclwf");
    data.append("resource_type", "auto");
    data.append("api_key", cloudinaryAPIKey);
    data.append("folder", `/Gallery`);
  
    return await asyncRequest(cloudinaryURL, {
      method: "POST",
      body: data,
    });
};



export const imageFilter = (imageUrl,w)=>{
  const parts = imageUrl.split("upload/");
  return parts[0]+'upload/c_fit,w_'+w+'/'+parts[1]
}


// date are formatted in this form (24th Nov 2023)
export const formatDate = (dat) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(dat);
  // Extract the date components
  const year = date.getFullYear();
  const monthIndex = date.getMonth(); // Months are zero-indexed
  const day = date.getDate();

  // Format the date components into a desired format
  let formattedDate = `${day}`;
  if (day % 10 === 1 && day !== 11) {
    formattedDate += "st ";
  } else if (day % 10 === 2 && day !== 12) {
    formattedDate += "nd ";
  } else if (day % 10 === 3 && day !== 13) {
    formattedDate += "rd ";
  } else {
    formattedDate += "th ";
  }

  formattedDate += `${months[monthIndex]}. ${year}`;

  return formattedDate;
};




export const textFommatter = (value,endnum)=>{
  if(value.length > 15){
    value.substring(0,endnum)
  }
}


//set expiration date 
export function addMinutes(minutesToAdd) {
 
  return new Date(new Date().getTime() + minutesToAdd * 60000);
}




export const numberWithCommas = (number) =>{
  // Convert the number to a string
  let numStr = number.toString();

  // Split the string into integer and fractional parts
  let [integerPart, fractionalPart] = numStr.split('.');

  // Use a regular expression to add commas to the integer part
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Reconstruct the number with the modified integer part and the original fractional part
  return fractionalPart ? `${integerPart}.${fractionalPart}` : integerPart;
}
