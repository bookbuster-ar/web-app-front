import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUser,
  updateProfile,
  selectUser,
  selectUpdateStatus,
  setUpdateStatus,
} from '../store/user/userSlice';
import buildProfileFormData from '../util/buildProfileFormData';
import { useEffect } from 'react';

import Loader from '../icons/Loader/Loader';

const INITIAL_FORM_STATE = {
  about: '',
  image: '',
  name: '',
  lastName: '',
  email: '',
  country: '',
  address: '',
  city: '',
  province: '',
  postalCode: '',
  wantNotifications: false,
};

const FormProfile = () => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const updateStatus = useSelector(selectUpdateStatus);

  const [isChecked, setIsChecked] = useState(user.wantNotifications || false);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  useEffect(() => {
    setForm({ ...user });
  }, [user]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setForm({ ...form, image: file });
    event.target.value = '';
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setForm({ ...form, wantNotifications: isChecked });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = buildProfileFormData(form);
    dispatch(updateProfile(formData));
    setForm(INITIAL_FORM_STATE);
  };

  if (updateStatus === 'loading') {
    return (
      <div className='h-screen flex items-center justify-center'>
        <Loader />
      </div>
    );
  }

  if (updateStatus === 'succeeded') {
    return (
      <div className='fixed z-10 inset-0 overflow-y-auto'>
        <div className='flex items-center justify-center min-h-screen'>
          <div className='bg-white rounded-lg shadow-lg p-6 animate__animated animate__zoomIn'>
            <div className='flex items-center justify-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-green-300 mr-2'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M17.707,4.293c0.391,0.391,0.391,1.023,0,1.414l-9,9c-0.391,0.391-1.023,0.391-1.414,0l-5-5c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L8,12.586l8.293-8.293C16.684,3.902,17.316,3.902,17.707,4.293z'
                />
              </svg>
              <h2 className='text-lg font-medium text-gray-900'>
                ¡Actualización exitosa!
              </h2>
            </div>
            <p className='text-sm text-gray-500 mb-4'>
              La información del usuario ha sido actualizada correctamente.
            </p>
            <div className='flex justify-center'>
              <button
                className='bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
                onClick={() => dispatch(setUpdateStatus('idle'))}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='bg-gray-100 max-w-2xl rounded-3xl ring-1 ring-gray-200 m-10 p-12 '>
        <Link to='/user'>
          <button className='bg-bluebook text-white font-semibold py-2 px-4 mb-2 rounded-lg'>
            Volver
          </button>
        </Link>
        <form onSubmit={submitHandler}>
          <div className='space-y-12'>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Mi perfil
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Esta información se mostrará en tu perfil.
              </p>

              <div className='mt-10 grid grid-cols-1  gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='col-span-full  mx-auto'>
                  <label
                    htmlFor='photo'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Foto de perfil
                  </label>
                  <div className='mt-2 flex items-center gap-x-3'>
                    {!form.image && form.image === user.image ? (
                      <>
                        <svg
                          className='h-12 w-12 text-gray-300'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <img
                          className='h-12 w-12 rounded-full object-cover'
                          src={
                            form.image instanceof File
                              ? URL.createObjectURL(form.image)
                              : form.image
                          }
                          alt='User Profile Picture'
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='cover-photo'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Subir
                  </label>
                  <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                    <div className='text-center'>
                      {form.image === user.image || !form.image ? (
                        <>
                          <svg
                            className='mx-auto h-12 w-12 text-gray-300'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            aria-hidden='true'
                          >
                            <path
                              fillRule='evenodd'
                              d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          <img
                            src={
                              form.image instanceof File
                                ? URL.createObjectURL(form.image)
                                : form.image
                            }
                            alt='User Profile Picture'
                          />
                        </>
                      )}
                      <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                        <label
                          htmlFor='file-upload'
                          className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                        >
                          <span>Subi una foto</span>
                          <input
                            id='file-upload'
                            name='file-upload'
                            type='file'
                            className='sr-only'
                            onChange={(e) => handleUpload(e)}
                          />
                        </label>
                        <p className='pl-1'>o arrastrala hasta acá</p>
                      </div>
                      <p className='text-xs leading-5 text-gray-600'>
                        PNG, JPG, GIF hasta 5 MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Información personal
              </h2>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Nombre
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Juan'
                      name='name'
                      value={form.name || ''}
                      id='first-name'
                      autoComplete='given-name'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Apellido
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Pérez'
                      name='lastName'
                      value={form.lastName || ''}
                      id='last-name'
                      autoComplete='family-name'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Correo electrónico
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      placeholder='Ej: juan_perez@mail.com'
                      name='email'
                      value={form.email || ''}
                      type='email'
                      autoComplete='email'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    País
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Argentina'
                      name='country'
                      value={form.country || ''}
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Calle, altura
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Av. Corrientes, 1234'
                      name='address'
                      value={form.address || ''}
                      id='address'
                      autoComplete='street-address'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2 sm:col-start-1'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Ciudad
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Ciudad de Buenos Aires'
                      name='city'
                      value={form.city || ''}
                      id='city'
                      autoComplete='address-level2'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='region'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Provincia
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      placeholder='Ej: Buenos Aires'
                      name='province'
                      value={form.province || ''}
                      id='region'
                      autoComplete='address-level1'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='postal_code'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Código Postal
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='postalCode'
                      value={form.postalCode || ''}
                      placeholder='Ej: C1043AAZ'
                      id='postal_code'
                      autoComplete='postal_code'
                      onChange={changeHandler}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Notificaciones
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                Siempre te informaremos de los cambios importantes, pero vos
                elegís de qué más queres enterarte.
              </p>

              <div className='mt-10 space-y-10'>
                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-gray-900'>
                    Por correo electrónico
                  </legend>
                  <div className='mt-6 space-y-6'>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          id='notifications'
                          name='notifications'
                          value={form.wantNotifications}
                          type='checkbox'
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                          className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='notifications'
                          className='font-medium text-gray-900'
                        >
                          Comentarios
                        </label>
                        <p className='text-gray-500'>
                          Notificarme cuando alguien comente mi reseña o
                          reaccione a mi comentario.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <Link to='/user'>
              <button
                type='button'
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                Cancelar
              </button>
            </Link>
            <button
              type='submit'
              className='rounded-md bg-bluebook px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormProfile;
