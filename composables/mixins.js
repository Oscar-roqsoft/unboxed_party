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
  return parts[0]+'upload/c_fit,w_'+w+parts[1]
}


// date are formatted in this form (24th Nov 2023)
export const formatDate = (dat) =>{
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(dat);
  // Extract the date components
  const year = date.getFullYear();
  const monthindex = date.getMonth(); // Months are zero-indexed
  const day = date.getDate();

  // Format the date components into a desired format, for example:
  const formattedDate = `${day.toString().padStart(2, '0')}th ${months[monthindex]}. ${year} `;

  return formattedDate;
}



//set expiration date 
export function addMinutes(minutesToAdd) {
 
  return new Date(new Date().getTime() + minutesToAdd * 60000);
}