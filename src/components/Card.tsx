
type Props = {
   label: string;
   descrition: string;
   url: string;
}

const Card = ({ label, descrition, url }: Props) => {
   return (
      <div className="border border-gray-300 p-4 mb-2 text-slate-700">
         <h1 className="text-center font-extrabold text-2xl">{label}</h1>
         <div className="flex gap-6 mt-4">
            <img
               src={url}
               className="h-12 w-12"   
            />
            <p>{descrition}</p>
         </div>
      </div>
   );
};

export default Card;