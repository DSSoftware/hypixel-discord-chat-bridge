const config = require("../../../config.json");
const { ImgurClient } = require("imgur");

const imgurClient = new ImgurClient({
  accessToken: config.minecraft.API.imgurAPIkey,
});

async function uploadImage(image) {
  const response = await imgurClient.upload({
    image: image.toString("base64"),
  });

  if (response.success === false) {
    console.log(response);
    // eslint-disable-next-line no-throw-literal
    throw "An error occured while uploading the image. Please try again later.";
  }

  return response;
}

module.exports = { uploadImage };
