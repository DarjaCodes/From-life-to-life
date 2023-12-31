import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import '../Exhibitions/exhibition.css';

interface ExhibitionProps {
  location: string;
  dateFrom: string;
  dateTo: string;
  link: string;
  details: Document;
}
export const Exhibition: React.FC<ExhibitionProps> = ({
  location,
  dateFrom,
  dateTo,
  link,
  details,
}) => {
  return (
    <div className="container__exhibition">
      <div className="location">{location}</div>
      <p className="date date-from">{dateFrom}</p>
      <p className="date date-to">{dateTo}</p>
      <p className="link">{link}</p>
      <div className="details">{documentToReactComponents(details)}</div>
    </div>
  );
};
