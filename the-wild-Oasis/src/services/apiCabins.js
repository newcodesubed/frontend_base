import supabase, { supabaseUrl } from "./supabase";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }
}

export async function createCabins(newCabin) {
  console.log("newCabin", newCabin);
  //https://yksnbttnwxvbrzbaxmmf.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;
  //1.Create cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  //2.upload image
  const { error: StorageError } = await supabase.storage
    .from("cabin-image")
    .upload(imageName, newCabin.image);

  //3.Prevent from error while uploading image
  if (StorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(StorageError);
    throw new Error(
      "Cabins could not be uploaded and the cabin was not uploaded"
    );
  }

  return data;
}
