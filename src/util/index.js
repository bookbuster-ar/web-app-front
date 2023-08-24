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
  const { title, author, publicationYear, editorialName } = bookInfo;

  const formData = new FormData();

  formData.append('title', title);
  formData.append('author', author);
  formData.append('publicationYear', publicationYear);
  formData.append('editorialName', editorialName);

  if (bookInfo.images?.cover) {
    formData.append('cover', bookInfo.images.cover);
  }

  if (bookInfo.images?.backCover) {
    formData.append('backCover', bookInfo.images.backCover);
  }

  if (bookInfo.images?.spine) {
    formData.append('spine', bookInfo.images.spine);
  }

  if (bookInfo.images?.inHalf) {
    formData.append('inHalf', bookInfo.images.inHalf);
  }

  return formData;
};

export default buildFormData;
