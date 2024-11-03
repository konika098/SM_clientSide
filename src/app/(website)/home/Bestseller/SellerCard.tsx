import Image, { StaticImageData } from 'next/image';

type ISellerProps ={
    img: StaticImageData;
    altname: string;
    name: string;
    price: number;
    d_price:number;
}

const SellerCard : React.FC<ISellerProps>= ({img,altname,name,price,d_price}) => {
    return (
        <div>
            <Image src={img} alt={altname} />
            <h1>{name}</h1>
            <div className='flex items-center gap-1'>
                <h1>${price}</h1>
                <h1>${d_price}</h1>

            </div>
        </div>
    );
};

export default SellerCard;