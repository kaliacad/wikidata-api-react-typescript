
type Props = {
   label: string;
   descrition: string;
   url: string;
}

const Card = ({label, descrition, url}: Props) => {
   return (
      <div>
         <h1>{label}</h1>
         <p>{descrition}</p>
         <img src={url} alt={label} />
      </div>
   );
};

export default Card;