import { UserIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const ProfilePicUpload = ({ value, onChange, maxFileSize, name }) => {
  const [error, setError] = useState(null);

  const formatSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
      return '0 Byte';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
  };

  return (
    <div className="relative mb-7">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-14 w-14 flex-shrink-0 rounded-full bg-muted">
          {value ? (
            <img
              src={
                typeof value === 'string' ? value : URL.createObjectURL(value)
              }
              alt={'Profile Pic'}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/80 ">
              <UserIcon className="h-10 w-10" />
            </div>
          )}
        </div>
        <div>
          <h4 className="text-lg font-medium leading-6 text-heading">{name}</h4>
          <p>Max file size is {formatSize(maxFileSize)}</p>
        </div>
      </div>
      <div className="relative cursor-pointer">
        <input
          className="inside-0 absolute cursor-pointer opacity-0 file:cursor-pointer"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file.size > maxFileSize) {
              setError(
                `File size is too large. Max file size is ${formatSize(
                  maxFileSize
                )}`
              );
            }
            onChange(file);
          }}
        />
        <div className="flex">
          <div className="form-input w-full flex-1 rounded-l-ms border border-border bg-body-bg px-5 py-2.5 font-medium text-heading transition duration-150 placeholder:font-medium placeholder:text-heading focus:border-primary focus:ring-0">
            Change Photo
          </div>
          <div className="flex items-center justify-center rounded-r-ms bg-primary px-4 font-medium text-white">
            Upload
          </div>
        </div>
      </div>
      <span className="absolute bottom-0.5 -mb-5 block text-xs text-danger">
        {error}
      </span>
    </div>
  );
};

export default ProfilePicUpload;
