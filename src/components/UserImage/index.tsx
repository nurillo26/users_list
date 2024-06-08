import React from 'react';

interface IUserImageProps {
  image: string;
}

const UserImage: React.FC<IUserImageProps> = ({ image }) => {
  return <img style={{ width: 64, height: 64, borderRadius: '50%' }} src={image} alt="avatar" />;
};

export default UserImage;
