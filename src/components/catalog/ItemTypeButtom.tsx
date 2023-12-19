export default function ItemTypeButton({children}:{children: string;}){
return(
    <button className="text-white text-lg text-center
    rounded-md max-h-[100%] py-1
    hover:bg-white hover:bg-opacity-10"
    >
    {children} 
    </button>
);
}