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



export const imageFilter = (imageUrl,w,h)=>{
  const parts = imageUrl.split("upload/");
  return parts[0]+'upload/c_fit,w_'+w+parts[1]
}