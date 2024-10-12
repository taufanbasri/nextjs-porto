import Image, { StaticImageData } from 'next/image';

interface InfoCardProps {
    imageSrc: StaticImageData;
    title: string;
    description: string;
    colSpan: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageSrc, title, description, colSpan }) => {
    return (
        <div className={`w-full ${colSpan} relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
            <div className="flex flex-row p-6">
                <Image src={imageSrc} alt={title} className="w-auto h-[130px]" />
                <div className="flex flex-col mt-4">
                    <h2 className="text-2xl font-bold text-white/80">{title}</h2>
                    <p className="text-lg text-white/70 mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
