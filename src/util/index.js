const buildFormData = (bookInfo) => {
  const {
    title,
    author,
    publication_year,
    editorial,
    editorial_collection,
    genres,
    synopsis,
    pages,
    language,
    size,
    price,
    images: { cover, extra },
  } = bookInfo;

  const formData = new FormData();

  formData.append('title', title);
  formData.append('author', author);
  formData.append('publication_year', publication_year);
  formData.append('editorial', editorial);
  formData.append('editorial_collection', editorial_collection);
  formData.append('genres', JSON.stringify(genres));
  formData.append('synopsis', synopsis);
  formData.append('pages', pages);
  formData.append('language', language);
  formData.append('size', size);
  formData.append('price', price);

  if (cover instanceof File) {
    formData.append('cover', cover);
  }

  if (Array.isArray(extra) && extra.length > 0) {
    extra.forEach((file, index) => {
      if (file instanceof File) {
        formData.append(`extra[${index}]`, file);
      }
    });
  }
  console.log(formData);
  return formData;
};

export default buildFormData;