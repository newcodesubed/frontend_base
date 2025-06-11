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

export async function createEditCabins(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //https://yksnbttnwxvbrzbaxmmf.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-image/${imageName}`;

  //1.Create/Edit cabin
  let query = supabase.from("cabins");
  //A) create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //B)edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  //2.upload image
  if (hasImagePath) return data;
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
