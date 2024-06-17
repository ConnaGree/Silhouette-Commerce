const ArrivalCard = ({cardDetail}) => {

  return (
    <div className="bg-no-repeat relative w-full h-full border-[1px]">
      <img
        src={cardDetail.img}
        className="w-full h-full object-contain z-0 bg-black"
        alt=""
      />
      <div className="details absolute z-100 bottom-10 left-0 p-5">
        <h2 className="text-white font-[600] mb-2">{cardDetail.title}</h2>
        <p className="text-white text-[.8rem] mb-2">{cardDetail.desc}</p>
        <a href="#" className="text-[.9rem] border-b-[1px] text-white pb-1">
          {cardDetail.linkTitle}
        </a>
      </div>
    </div>
  );
}
export default ArrivalCard