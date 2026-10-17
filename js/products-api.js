// Read-only published product library API, for future dynamic catalog integration.
window.InnovalProducts = {
 async list(){
  const c=window.INNOVAL_CONFIG;
  const url=c.supabaseUrl+'/rest/v1/products?select=slug,name_ar,name_en,description_ar,description_en,pack_size,image_path&published=eq.true&order=name_en.asc';
  const response=await fetch(url,{headers:{apikey:c.supabasePublishableKey}});
  if(!response.ok)throw new Error('Product library unavailable: '+response.status);
  return response.json();
 },
 imageUrl(path){
  if(!path)return null;
  const c=window.INNOVAL_CONFIG;
  return c.supabaseUrl+'/storage/v1/object/public/product-assets/'+path.split('/').map(encodeURIComponent).join('/');
 }
};
