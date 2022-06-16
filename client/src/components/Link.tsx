import { LinkType } from '../types/LinkType';

type LinkProps = {
  link: LinkType;
};

const Link = ({ link }: LinkProps) => {
  return (
    <div>
      {link.description} ({link.url})
    </div>
  );
};
export default Link;
