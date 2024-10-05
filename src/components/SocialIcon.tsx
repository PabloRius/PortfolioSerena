import { IconType } from 'react-icons';

interface SocialIconProps {
  redirect: string;
  Icon: IconType;
}

export function SocialIcon({ redirect, Icon }: SocialIconProps) {
  return (
    <a href={redirect} target="_blank" rel="noopener noreferrer">
      <Icon size={30} />
    </a>
  );
}
