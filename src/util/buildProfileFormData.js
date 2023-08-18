const buildProfileFormData = (profileInfo, INITIAL_FORM_STATE) => {
  const {
    aboutMe,
    image,
    name,
    lastname,
    email,
    country,
    address,
    city,
    province,
    postal_code,
    wantNotifications,
  } = profileInfo;

  const formData = new FormData();

  if (aboutMe) formData.append('aboutMe', aboutMe);
  if (name) formData.append('name', name);
  if (lastname) formData.append('lastname', lastname);
  if (email) formData.append('email', email);
  if (country) formData.append('country', country);
  if (address) formData.append('address', address);
  if (city) formData.append('city', city);
  if (province) formData.append('province', province);
  if (postal_code)
    formData.append('postalCode', parseInt(postal_code, 10).toString()); // Convertir a entero y luego a cadena
  if (wantNotifications !== INITIAL_FORM_STATE.wantNotifications)
    formData.append('wantNotifications', wantNotifications.toString());
  if (image instanceof File) formData.append('image', image);

  return formData;
};

export default buildProfileFormData;
