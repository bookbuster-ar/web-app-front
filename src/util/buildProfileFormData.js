const buildProfileFormData = (profileInfo) => {
  const formData = new FormData();

  if (profileInfo.name) formData.append('name', profileInfo.name);
  if (profileInfo.lastName) formData.append('lastname', profileInfo.lastName);
  if (profileInfo.email) formData.append('email', profileInfo.email);
  if (profileInfo.about) formData.append('aboutMe', profileInfo.about);

  if (profileInfo.country) formData.append('country', profileInfo.country);

  if (profileInfo.address) formData.append('address', profileInfo.address);

  if (profileInfo.city) formData.append('city', profileInfo.city);

  if (profileInfo.province) formData.append('province', profileInfo.province);

  if (profileInfo.postalCode)
    formData.append(
      'postalCode',
      parseInt(profileInfo.postalCode, 10).toString()
    );

  if (profileInfo.image && profileInfo.image instanceof File)
    formData.append('image', profileInfo.image);

  return formData;
};

export default buildProfileFormData;
