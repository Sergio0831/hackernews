import { useQuery } from '@apollo/client';
import { FEED_QUERY } from '../queries';
import { LinkType } from '../types/LinkType';
import Link from './Link';

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data &&
        data.feed.links.map((link: LinkType) => (
          <Link key={link.id} link={link} />
        ))}
    </div>
  );
};
export default LinkList;
