export function convertKeysToCamelCase(obj) {
  const camelCaseObj = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const camelKey = key.replace(/([-_][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace('-', '').replace('_', '');
      });

      camelCaseObj[camelKey] = obj[key];
    }
  }

  return camelCaseObj;
}

const buildFormData = (bookInfo) => {
  const {
    title,
    author,
    publication_year,
    editorial_id,
    editorial_name,
    images: { cover, extra },
  } = bookInfo;

  const formData = new FormData();

  formData.append('title', title);
  formData.append('author', author);
  formData.append('publication_year', publication_year);
  formData.append('editorial_id', editorial_id);
  formData.append('editorial_name', editorial_name);

  if (cover instanceof File) {
    formData.append('cover', cover);
  }

  if (Array.isArray(extra) && extra.length > 0) {
    extra.forEach((file) => {
      if (file instanceof File) {
        formData.append(`extra`, file);
      }
    });
  }
  return formData;
};

export default buildFormData;
